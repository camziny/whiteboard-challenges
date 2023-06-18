import React, { useState } from "react";
import ReactJsonToCsv from "react-json-to-csv";

const App = () => {
  const [data, setData] = useState(JSON.parse(JSON.stringify(data)));

  const handleDownload = () => {
    const csv = ReactJsonToCsv.generate({
      data,
      header: true,
    });

    const blob = new Blob([csv], { type: "text/csv" });

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "data.csv";
    link.click();
  };

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleDownload}>Download CSV</button>
    </div>
  );
};

export default App;
