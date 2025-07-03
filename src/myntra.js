import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";
import Card from './component/card';
import Footer from './component/footer';
import Header from './component/header';
import arr from './utils/dummy'
import { greet, meet} from "./utils/dummy";





function App() {


    let [A,setprice] = useState(arr)
    function sortArray()
    {
      A.sort((a,b)=>a.price-b.price)
      setprice([...A])
    }

    function filterabove499()
    {
        let filterdarray = arr.filter((value)=>value.price>499)
        setprice(filterdarray);
    }

    return (
        <>
            {/* Header */}
            <Header/>

            <div>
                <button className="btn" onClick={sortArray}>Price</button>
            </div>
            <div>
                <button className="btn" onClick={filterabove499}>Filter Above 499</button>
            </div>

            {/* Body */}
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",  // Adds perfect spacing like Myntra
                padding: "20px"
            }}>
                {
                    A.map((value, index) => (
                    <Card key={index} cloth={value.cloth} offer={value.offer} price={value.price}/>
                ))}
            </div>

              <Footer/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
