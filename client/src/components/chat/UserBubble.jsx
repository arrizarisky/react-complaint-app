export default function UserBubble({ message}) {
    if (!message) return null; // Return null if Message is empty or undefined
    return (
        <>  
            <div className="flex justify-end mb-4">
                <div className="bg-[#9ECAD6] text-[#807575] text-[8px] font-semibold px-3 py-2  rounded-full text-right">
                    { message }
                </div>
            </div>
        </>
    )
}