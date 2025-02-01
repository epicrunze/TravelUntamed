import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const queryAPI = async () => {
    try {
      const res = await fetch("https://travel-untamed-server.vercel.app/api/test");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await res.json();
      setData(json);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    }
  };

  return (
    <div style={{ margin: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Next.js API Query</h1>
      <button
        onClick={queryAPI}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          marginBottom: '1rem'
        }}
      >
        Query API
      </button>
      <pre style={{
          background: '#f4f4f4',
          padding: '1rem',
          border: '1px solid #ddd',
          overflow: 'auto'
        }}>
        {error 
          ? `Error: ${error}` 
          : data 
            ? JSON.stringify(data, null, 2) 
            : "Click the button to query the API."}
      </pre>
    </div>
  );
}
