import { FaUser, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";
import arr from "../utils/dummy";
function Header() {

    return (

    <div className="Header">

        <img src="https://brandlogos.net/wp-content/uploads/2022/03/myntra-logo-brandlogos.net_-768x768.png"
        width="70px" height="70px"
        />

        <div className="option">
            <button>Men</button>
            <button>Women</button>
            <button>Kids</button>
            <button>Home and living</button>
            <button>Beauty</button>
            <button>Studio</button>
            <button></button>
        </div>

        {/* Search Bar */}
            <div className="searchBar">
                <FaSearch className="searchIcon" />
                <input placeholder="Search for products, brands and more" />
            </div>

        {/* Profile, Wishlist, Bag with Icons */}
            <div className="profile">
                <div className="iconOption">
                    <FaUser size={20} />
                    <span>Profile</span>
                </div>
                <div className="iconOption">
                    <FaHeart size={20} />
                    <span>Wishlist</span>
                </div>
                <div className="iconOption">
                    <FaShoppingBag size={20} />
                    <span>Bag</span>
                </div>
            </div>
    </div>
    )

}
export default Header;