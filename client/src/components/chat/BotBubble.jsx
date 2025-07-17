import logo from '../../assets/LogoChatmin.svg';
import { useState, useEffect } from "react";

export default function BotBubble({ response }) {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
        const now = new Date();
        const formatted = now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false, // ubah ke true kalau ingin format 12 jam
        });
        setTime(formatted);
        };

        updateTime(); // panggil sekali saat pertama
        const interval = setInterval(updateTime, 1000); // update tiap detik

        return () => clearInterval(interval); // bersihkan interval saat komponen unmount
    }, []);
    return (
        <div class="flex items-start gap-2.5 mb-4">
            <img src={logo} alt="logo" className="w-8 h-8"/>
            <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-2 border-gray-200 bg-[#F5CBCB] rounded-e-xl rounded-es-xl">
                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                    <span class="text-xs font-semibold text-[#807575] dark:text-white">Admin</span>
                    <span class="text-xs font-normal text-[#807575] dark:text-gray-400">{time}</span>
                </div>
                <p class="text-[8px] py-2.5 text-[#807575] leading-2 text-justify font-semibold" dangerouslySetInnerHTML={{ __html: response }}></p>
            </div>
        </div>
    );
}

