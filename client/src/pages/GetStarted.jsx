import logo from '../assets/LogoChatmin.svg';
import { Link } from 'react-router-dom';

export default function GetStarted() {
    return (
        <div className="flex min-h-screen justify-center items-center bg-[#FFEAEA] px-4">
            <div className="w-full max-w-md mx-auto flex min-h-screen py-4 px-5 font-sans text-[#6b6b8f]">
                <div className="flex flex-col justify-center items-center gap-4 mb-4 w-full">
                    <img 
                        src={logo} 
                        alt="logo" 
                        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain select-none" 
                    />
                    <Link 
                        to="/chat" 
                        className="px-6 py-2 sm:px-8 sm:py-2.5 bg-[#9ECAD6] border border-[#748DAE] rounded-md font-mono text-[#FFEAEA] text-sm sm:text-base mt-8 transition-all hover:scale-105"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
}
