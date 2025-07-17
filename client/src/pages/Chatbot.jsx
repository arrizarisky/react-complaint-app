import { useState } from 'react';
import API_BASE_URL from '../config/apiConfig';
import ChatInput from "../components/chat/ChatInput";
import BotBubble from "../components/chat/BotBubble";
import UserBubble from "../components/chat/UserBubble";
import logo from '../assets/LogoChatmin.svg';
import { marked } from 'marked';
import TypingEffect from '../components/common/TypingEffect';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Loading from '@/components/Loading';


export default function Chatbot() {
    const [message, setMessage] = useState('')
    const [response, setResponse] = useState('')
    const [lastMessage, setLastMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true);
        fetch(`${API_BASE_URL}/respond`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
        })
        .then(res => res.json())
        .then(data => {
            setResponse(data.ai_response)
            setLastMessage(message)
            setMessage('')
        })
        .catch(err => console.error(err))
        .finally(() => {
            setIsLoading(false);
        });
    }
    return (
        <div className="min-h-screen flex justify-center items-center bg-[#FFEAEA]">
            <div className="w-full max-w-xs flex flex-col justify-between min-h-screen py-4 px-5 font-sans text-[#6b6b8f]">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#9ECAD6]/30 p-2 rounded-lg shadow">
                    <Link to="/"><ArrowLeft className="text-[#748DAE]" size={20} /></Link>
                </div>
                </div>

                <div className="flex justify-center items-center gap-2 mb-4">
                <h1> <TypingEffect text="Hello, I'm Chatmin" /> </h1>
                <img src={logo} alt="logo" className="w-10 h-10" />
                </div>

                {/* Pesan user */}
                <UserBubble message={lastMessage} />
                
                {/* Pesan bot */}
                {isLoading ? (
                    <Loading/>
                ) : (response && <BotBubble response={marked(response)} />)
                }

                {/* Input */}
                <ChatInput
                    message={message}
                    setMessage={setMessage}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}