import React, { useState } from "react";
import "./InvoiceForm.css"; // Import the CSS for this component
import axios from "axios";

function InvoiceForm({ onAdd }) {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemName || !itemPrice || !quantity) return;

    const newInvoice = {
      itemName,
      itemPrice: parseFloat(itemPrice),
      quantity: parseInt(quantity),
    };

    axios
      .post("http://localhost:8080/invoices", newInvoice) // Replace with your API URL
      .then((response) => {
        onAdd(response.data);
        setItemName("");
        setItemPrice("");
        setQuantity("");
      })
      .catch((error) => {
        console.error("Error adding invoice:", error);
      });
  };

  return (
    <div className="invoice-form">
      <h2>Add Invoice</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Item Price"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Add Invoice</button>
      </form>
    </div>
  );
}

export default InvoiceForm;
