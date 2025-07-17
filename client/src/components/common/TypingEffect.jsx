import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function TypingEffect({ text }) {
    
    return (
        <div className="text-xl font-bold justify-center font-mono text-[#748DAE] bg-[#F5CBCB]">
            <Typewriter
                words={[text]}
                loop={true}
                cursor  
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={0}
                delaySpeed={1000}
            />
        
        </div>
    )
}