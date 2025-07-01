import React from "react";
import ReactDOM from "react-dom/client";
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";
import Card from './component/card';
import Footer from './component/footer';
import Header from './component/header';


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
