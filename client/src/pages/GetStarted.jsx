import logo from '../assets/LogoChatmin.svg';
import { Link } from 'react-router-dom';

export default function GetStarted() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-[#FFEAEA]">
            <div className="w-full max-w-xs flex min-h-screen py-4 px-5 font-sans text-[#6b6b8f] ">
                <div className="flex flex-col justify-center items-center gap-2 mb-4">
                    <img src={logo} alt="logo" className="w-32 h-32 outline-none focus:outline-none focus-visible:outline-none border-none caret-transparent" /> 
                    <Link to="/chat" className=" px-8 py-2 bg-[#9ECAD6] border border-[#748DAE] rounded-md font-mono text-[#FFEAEA] mt-10">Get Started</Link>
                </div>
            </div>
        </div>
    );
}