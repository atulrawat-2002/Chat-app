import { useNavigate } from "react-router-dom";
import assets, { userDummyData } from "../assets/assets";



const SideBar = ({ selectedUser, setSelectedUser }) => {

    const navigate = useNavigate()

    return (
    <div className={`bg-[#8185B2]/10 h-[500px] p-5 rounded-r-xl overflow-y-scroll text-white ${selectedUser ? "max-md:hidden" : "" } `} >
        <div className="pb-5  " >
            <div className="  flex justify-between items-center " >
                <img src={assets.logo} alt="logo" className=" max-w-40 " />
                <div className=" py-2 group relative " > 
                    <img src={assets.menu_icon} alt="logo" className=" max-h-5 cursor-pointer " />
                    <div className=" w-32  border border-gray-600 hidden absolute bg-[#282142] top-full z-20 p-5 rounded-md text-gray-100 right-0 group-hover:block" >
                        <p onClick={() => navigate('/profile')} className=" cursor-pointer text-sm " >Edit profile</p>
                        <hr className=" my-2 border-t border-gray-500 " />
                        <p onClick={() => navigate('/login')} className=" cursor-pointer text-sm " >LogOut</p>
                    </div>
                </div>
            </div>
            {/* Search bar starts here */}
            <div className="rounded-full bg-[#282142] flex items-center gap-2 py-3 px-4 mt-5" >
                <img src={assets.search_icon} alt="search" className="w-3 " />
                <input type="text" placeholder="Search User..." className=" bg-transparent border-none outline-none text-white text-xs flex-1 placeholder-[#c8c8c8] " />
            </div>
        </div>
        
        <div className="flex flex-col" >
            { userDummyData.map((user, index) => (
                <div onClick={() => setSelectedUser(user)} key={index} className={` relative flex flex-center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm ${selectedUser?._id === user._id && 'bg-[282142]/50' } `} >
                    <img src={user?.profilePic || assets.avatar_icon} alt="" className=" w-[35px] aspect-[1/1] rounded-full " />
                    <div className="flex flex-col" >
                        <p> {user.fullName} </p>
                        {
                            index < 3 ? <span className="text-green-400 text-xs" >Online</span> : <span className="text-neutral-400 text-xs" >Offline</span>
                        }
                    </div>
                    { index > 2 && <p className="absolute top-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-violet-500/50 " > {index} </p> }
                </div>
            )) }
        </div>

    </div>
    )
}


export default SideBar;