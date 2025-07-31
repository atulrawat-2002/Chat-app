import assets from "../assets/assets";


const RightSideBar = ({ selectedUser }) => {
    return selectedUser && <div>
        <div className="pt-16 flex flex-col items-center gap-2 font-light mx-auto text-xs" >
            <img src={selectedUser?.profliPc || assets.avatar_icon} alt="" className="w-20 rounded-full aspect-[1/1]"/>
            <h1 className="text-xl flex items-center px-10 font-medium  mx-auto gap-2" >
                <p className="w-2 h-2 rounded-full bg-green-500" ></p>
                {selectedUser.fullName}
            </h1>
            <p className="px-20 mx-auto" >{selectedUser.bio}</p>
        </div>
    </div>
}

export default RightSideBar;