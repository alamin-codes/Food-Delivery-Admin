


import { assets } from "../../assets/assets"
import { NavLink } from "react-router"
const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-[#a9a9a9] border-[1.5px] flex items-end flex-col ">
        <NavLink to="/add" className={({isActive}) => `flex border rounded-tl-md rounded-bl-md mt-10 w-[80%]  gap-3 -mr-0.5 border-r-0 p-2 ${isActive ? "bg-[#e0aca3]" : "bg-white"}`}>
            <img className="border-2 rounded-full w-7 h-7" src={assets.add_icon_white} alt="" />
            <p className="hidden md:flex">Add Items</p>
        </NavLink>
        <NavLink to="/list" className={({isActive}) => `flex border rounded-tl-md rounded-bl-md mt-10 w-[80%]  gap-3 -mr-0.5 border-r-0 p-2 ${isActive ? "bg-[#e0aca3]" : "bg-white"}`}>
            <img className="border-2 rounded-full w-7 h-7" src={assets.add_icon_white} alt="" />
            <p className="hidden md:flex">List Items</p>
        </NavLink>
        <NavLink to="/order" className={({isActive}) => `flex border rounded-tl-md rounded-bl-md mt-10 w-[80%]  gap-3 -mr-0.5 border-r-0 p-2 ${isActive ? "bg-[#e0aca3]" : "bg-white"}`}>
            <img className="border-2 rounded-full w-7 h-7" src={assets.add_icon_white} alt="" />
            <p className="hidden md:flex">Order Items</p>
        </NavLink>
    </div>
  )
}

export default Sidebar