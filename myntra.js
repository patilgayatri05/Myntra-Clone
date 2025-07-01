import React from "react";
import ReactDOM from "react-dom/client";
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";



function Card(props) {
    return (
        <div style={{
            backgroundColor: "rgb(5, 152, 10)",
            width: "120px",
            padding: "5px",
            margin: "1px",
            textAlign: "center",
            borderRadius: "1px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            color: "white"
        }}>
            <img
                src="https://d1ejm5im4bv2vf.cloudfront.net/pub/media/mf_webp/jpg/media/catalog/product/cache/718154c3aff62b1ad64160986aa81112/m/a/maa-caligraphy-black-front.webp"
                height="100px"
                width="120px"
                style={{ display: "block", margin: "auto" }}
                alt="cloth"
            />
            <h4 style={{ margin: "10px 0 5px 0", fontSize: "16px" }}>{props.cloth}</h4>
            <h2 style={{ margin: "5px 0", fontSize: "18px" }}>{props.offer}</h2>
            <h4 style={{ margin: "5px 0", fontSize: "14px", fontWeight: "normal" }}>Shop Now!</h4>
        </div>
    );
}

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


function Footer()
{
    return(

        <img src="https://www.webfx.com/wp-content/uploads/2023/11/cartier-footer-2048x1152.png"
         width="1000px"
        
        />

    )
}

const arr = [
    { cloth: "T-shirt", offer: "20-80% OFF" },
    { cloth: "Jeans", offer: "30-70% OFF" },
    { cloth: "Jackets", offer: "40-60% OFF" },
    { cloth: "Kurtas", offer: "25-75% OFF" },
    { cloth: "Sarees", offer: "30-80% OFF" },
    { cloth: "Shoes", offer: "20-60% OFF" },
    { cloth: "Bags", offer: "35-85% OFF" },
    { cloth: "Sweaters", offer: "30-70% OFF" },
    { cloth: "Dresses", offer: "40-80% OFF" },
    { cloth: "Skirts", offer: "20-50% OFF" },
    { cloth: "Shorts", offer: "25-65% OFF" },
    { cloth: "Activewear", offer: "30-90% OFF" },
    { cloth: "Blazers", offer: "35-70% OFF" },
    { cloth: "Trousers", offer: "30-80% OFF" },
    { cloth: "Loungewear", offer: "40-85% OFF" }
];

function App() {
    return (
        <>
            {/* Header */}
            <Header/>

          

            {/* Body */}
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",  // Adds perfect spacing like Myntra
                padding: "20px"
            }}>
                {arr.map((value, index) => (
                    <Card key={index} cloth={value.cloth} offer={value.offer} />
                ))}
            </div>

              <Footer/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
