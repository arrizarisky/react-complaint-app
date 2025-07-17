import { Send, Camera } from 'lucide-react';

export default function ChatInput({ message, setMessage, onSubmit }) { 
    return (
        <form onSubmit={onSubmit} className="mt-auto">
          <div className="flex items-end bg-[#9ECAD6] p-4 rounded-t-4xl w-full">
            <div className="flex justify-between bg-[#748DAE] text-white px-2 py-1 rounded-full w-full">
               <button className="p-2 rounded-full bg-[#748DAE]">
                <Camera size={20} className="text-white" />
              </button>

              <div className="px-2 py-2 rounded-full bg-[#9ECAD6]/75">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  className="w-full bg-transparent placeholder-white text-white outline-none"
                />
              </div>

               <button type="submit" className='p-2'>
                <Send size={20} className="text-white" />
              </button>
            </div>
          </div>
        </form>
    );
}