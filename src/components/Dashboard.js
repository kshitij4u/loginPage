import React, { useState, useEffect } from "react";
import '../index.css'
import { Table } from './Table'

export default function Dashboard() {

  const [rows, setRows] = useState([])

  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setRows(json.data);
  };
  
  useEffect(() => {
    f();
  }, []);

  const columns = [
    { accessor: 'first_name', label: 'First Name' },
    { accessor: 'last_name', label: 'Last Name' },
    { accessor: 'email', label: 'email'}
  ]

  return (
    <div className="App">
      <h1>Table</h1>
      <h2>Sorting, Filtering, Pagination</h2>

      <Table rows={rows} columns={columns} />
    </div>
  )
}
