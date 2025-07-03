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
            <h4 style={{ margin: "10px 0 5px 0", fontSize: "16px" }}>Price : {props.price} Rs</h4>
        </div>
    );
}

export default Card;