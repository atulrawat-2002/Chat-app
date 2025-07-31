import { useEffect, useRef } from "react";
import assets, { messagesDummyData } from "../assets/assets";
import { formateMessageTime } from "../lib/utils";


const ChatContainer = ({selectedUser, setSelectedUser}) => {

    const scrollEnd = useRef();

    useEffect(() => {
        if(scrollEnd.current){
            scrollEnd.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [])

    return selectedUser ? ( <div className=" h-full relative overflow-scroll backdrop-blur-lg " >
        {/* ------------ header ---------- */}
    <div className=" flex items-center gap-3 py-3 border-b border-stone-500 mx-4 " >
        <img  src={assets.profile_martin} alt="" className=" w-8 rounded-full  " />
        <p className=" flex-1 text-lg text-white flex items-center gap-2 " >Martin Johnson
            <span className=" w-2 h-2 bg-green-500 rounded-full " > </span>
        </p>
        <img onClick={() => setSelectedUser(null)} src={assets.arrow_icon} alt="" className=" md:hidden max-w-7 cursor-pointer" />
        <img src={assets.help_icon} alt="help_icon" className=" max-md:hidden max-w-5  " />
    </div>
    {/* ------------- chat area -------------- */}
    <div className="border-r border-l flex flex-col h-[calc(100%-120px)] overflow-y-scroll py-3 pb-6 " >
        { messagesDummyData.map((msg, index) => (<div key={index} className={` flex items-end gap-2 justify-end  ${msg.senderId !== '680f50e4f10f3cd28382ecf9' && 'flex-row-reverse' } `}  >
            { msg.image ? (
                <img src={msg?.image} alt="" className=" max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8 " />
            ) : <p className={` p-2 max-w-[200px] md:text-sm font-light bg-violet-500/30 text-white break-all mb-8 ${msg.senderId === '680f50e4f10f3cd28382ecf9' ? 'rounded-br-none' : 'rounded-bl-none' }  `} >
                {msg.text}
            </p> }
            <div className=" text-center text-xs " >
                <img src={msg.senderId === '680f50e4f10f3cd28382ecf9' ? assets.avatar_icon : assets.profile_martin} className="w-7 rounded-full" alt="" />
                <p className="text-gray-300" >
                    {formateMessageTime(msg.createdAt)}
                </p>
            </div>
        </div>)) }
        <div ref={scrollEnd} >
            
        </div>
    </div>
    {/* --------------- bottom area ------------------ */}
    <div className=" absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3" >
        <div className="flex-1 flex items-center bg-gray-100/12 px-3 rounded-full" >
            <input className="flex-1 text-sm p-3 border-none outline-none rounded-lg text-white placeholder-gray-400" type="text"  id="" placeholder="send a message" /> 
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
        <label htmlFor="image">
            <img src={assets.gallery_icon}  alt=""  className="w-5 mr-2 cursor-pointer" />
        </label>
        </div>
        <img src={assets.send_button} className="cursor-pointer w-7" alt="" />
    </div>
    </div> ) : (
        <div className=" flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden " >
            <img src={assets.logo_icon} alt="icon" className=" max-w-16 " />
            <p className="text-lg font-medium text-white" >Chat anytime, anywhere</p>
        </div>
    )
}
 


export default ChatContainer;