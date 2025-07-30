import { useState } from "react";
import ChatContainer from "../conponents/ChatContainer";
import RightSideBar from "../conponents/RightSideBar";
import SideBar from "../conponents/SideBar";

const HomePage = () => {

    const [selectedUser, setSelectedUser] = useState(false)

    return <div className=" border w-full h-screen sm:px-[15%] sm:py-[5%]" >
            <div className= {`text-white backdrop-blur-xl rounded-2xl overflow-hidden h-[100%] relative border-2 border-gray-600 grid grid-cols-1 ${selectedUser ? " md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr] " : " md:grid-cols-2 "} `} >
                <SideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
                <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
                <RightSideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
            </div>
    </div>
}


export default HomePage;