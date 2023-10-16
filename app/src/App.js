import React, { useState } from "react";
import "./App.css";
import InvoiceList from "./components/InvoiceList";
import InvoiceForm from "./components/InvoiceForm";

function App() {
  const [invoices, setInvoices] = useState([]);

  const handleAddInvoice = (newInvoice) => {
    setInvoices([...invoices, newInvoice]);
  };

  return (
    <div className="App">
      <h1>Invoice Management App</h1>
      <InvoiceForm onAdd={handleAddInvoice} />
      <InvoiceList invoices={invoices} />
    </div>
  );
}

export default App;
