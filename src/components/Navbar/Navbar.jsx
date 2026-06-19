import { assets } from "./../../assets/assets.js";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-[2.5%]">
      <div>
        <img src={assets.logo} alt="app-logo" />
      </div>
      <div>
        <img src={assets.profile_image} alt="admin-logo" />
      </div>
    </div>
  );
};

export default Navbar;
