import { useState, useEffect } from "react";
import Table from "./components/Table.jsx";

export default function App() {
  const [o, setO] = useState([
    { id: "1", name: "Palak", amount: "500", status: "completed" },
    { id: "2", name: "Jensi", amount: "300", status: "pending" }
  ]);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders"));
    if (data) setO(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(o));
  }, [o]);

  const del = (i) => {
    setO(o.filter((_, index) => index !== i));
  };

  const data = filter
    ? o.filter((x) => x.status.toLowerCase() === filter.toLowerCase())
    : o;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Order Management</h1>

      <input placeholder="completed / pending" value={filter} onChange={(e) => setFilter(e.target.value)}/>

      <br /><br />

      <h1>tabel</h1>

      <Table data={data} del={del} />
    </div>
  );
}