import React, { useState, useEffect } from "react";
import "./InvoiceList.css"; // Import the CSS for this component
import axios from "axios";

function InvoiceList() {
  const [invoices, setInvoices] = useState([]);
  const [editInvoice, setEditInvoice] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/invoices") // Replace with the actual API URL
      .then((response) => {
        setInvoices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching invoices:", error);
      });
  }, []);

  const handleEdit = (invoice) => {
    setEditInvoice(invoice);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/invoices/${id}`) // Replace with the actual API URL
      .then(() => {
        setInvoices(invoices.filter((invoice) => invoice.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting invoice:", error);
      });
  };

  return (
    <div className="invoice-list">
      <h2>Invoices</h2>
      <ul>
        {invoices.map((invoice) => (
          <li
            key={invoice.id}
            className={`invoice-item ${
              editInvoice?.id === invoice.id ? "editing" : ""
            }`}
          >
            <div className="item-details">
              <div className="item-name">{invoice.itemName}</div>
              <div className="total">Total: ${invoice.total}</div>
            </div>
            <div className="actions">
              <button onClick={() => handleEdit(invoice)}>Edit</button>
              <button onClick={() => handleDelete(invoice.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvoiceList;
