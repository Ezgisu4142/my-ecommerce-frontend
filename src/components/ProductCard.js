import React from "react";
import "./ProductCard.css"; // css dosyasını unutma
import Rating from "./Rating";

function ProductCard({ name, price, image }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "white",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3>{name}</h3>
      <p style={{ color: "#f21aa3ff", fontWeight: "bold" }}>{price} ₺</p>
      <Rating value={4} count={7} />

      {/* Burada dikkat: Sadece pink-btn var, btn yok */}
      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
        <button className="pink-btn">Sepete Ekle</button>
      </div>
    </div>
  );
}

export default ProductCard;
