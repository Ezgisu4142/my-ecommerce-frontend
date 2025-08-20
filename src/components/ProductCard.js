import React from "react";

function ProductCard({ name, price, image }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "10px",
      textAlign: "center",
      backgroundColor: "white"
    }}>
      <img src={image} alt={name} style={{ width: "100%", borderRadius: "10px" }} />
      <h3>{name}</h3>
      <p style={{ color: "#f27a1a", fontWeight: "bold" }}>{price} ₺</p>
      <button style={{
        backgroundColor: "#f27a1a",
        color: "white",
        border: "none",
        padding: "8px 12px",
        borderRadius: "5px",
        cursor: "pointer"
      }}>Sepete Ekle</button>
    </div>
  );
}

export default ProductCard;
