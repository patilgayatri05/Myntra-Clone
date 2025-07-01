import React from "react";
import ReactDOM from "react-dom/client";
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";
import Card from './component/card';
import Footer from './component/footer';
import Header from './component/header';
import arr from './utils/dummy'
import { greet, meet} from "./utils/dummy";


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
                    <Card key={index} cloth={value.cloth} offer={value.offer} price={value.price}/>
                ))}
            </div>

              <Footer/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
