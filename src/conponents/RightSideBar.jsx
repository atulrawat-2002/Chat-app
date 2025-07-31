import assets, { imagesDummyData } from "../assets/assets";


const RightSideBar = ({ selectedUser }) => {
    return selectedUser && (
    <div className={` bg-[#8185B2]/10 text-white w-full relative overflow-y-scroll ${selectedUser ? "max-md:hidden" : ""} `} >
        <div className="pt-16 flex flex-col items-center gap-2 font-light mx-auto text-xs" >
            <img src={selectedUser?.profliPc || assets.avatar_icon} alt="" className="w-20 rounded-full aspect-[1/1]"/>
            <h1 className="text-xl flex items-center px-10 font-medium  mx-auto gap-2" >
                <p className="w-2 h-2 rounded-full bg-green-500" ></p>
                {selectedUser.fullName}
            </h1>
            <p className="px-20 mx-auto" >{selectedUser.bio}</p>
        </div>
        <hr className="my-4 border-[#ffffff50] " />
        {/* Optional padding at bottom for media container */}
        <div className="px-5 text-xs" >
            <p>Media</p>
            <div className="mt-2 pb-24 max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-4 opacity-80 " >
                {imagesDummyData.map((url, index) => {
                    return <div key={index} onClick={() => window.open(url)} className="cursor-pointer rounded" >
                        <img src={url} alt="" className="h-full rounded"/>
                    </div>
                })}
                {imagesDummyData.map((url, index) => {
                    return <div key={index} onClick={() => window.open(url)} className="cursor-pointer rounded" >
                        <img src={url} alt="" className="h-full rounded"/>
                    </div>
                })}
            </div>
            {/* Recived media in different conteiner optional */}
            {/* <div className="mt-2 py-10 max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-4 opacity-80 " >
                {imagesDummyData.map((url, index) => {
                    return <div key={index} onClick={() => window.open(url)} className="cursor-pointer rounded" >
                        <img src={url} alt="" className="h-full rounded"/>
                    </div>
                })}
            </div> */}
        </div>
        <button className=" absolute bottom-5 left-1/2  transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none font-light py-2 px-16 rounded-full cursor-pointer" >Logout</button>
    </div>)
}

export default RightSideBar;