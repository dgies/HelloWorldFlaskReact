import React, { useEffect, useState } from 'react';
import { useParams } from "react-router"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function Agify() {
  const { name } = useParams();
  const [userData, setUserData] = useState(null);
  const [agify_data, setAgify] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // Fetch from agify
        const agify_response = await fetch('http://127.0.0.1:5000/agify/'+name); // Replace with your actual endpoint 2
        if (!agify_response.ok) {
          throw new Error(`HTTP error! status: ${agify_response.status}`);
        }
        setAgify(await agify_response.json());
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) {
    return <div>Loading data...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h1>Agify:</h1>
      <pre>Based on {agify_data['count']} samples, the expected age of someone named {agify_data['name']} is {agify_data['age']} years.</pre>
    </div>
  );
}


function HelloWorld() {
  const [api_data, setApiData] = useState(null);
  const [time_data, setTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const data_response = await fetch('http://127.0.0.1:5000/api/data'); // Replace with your actual endpoint 1
        if (!data_response.ok) {
          throw new Error(`HTTP error! status: ${data_response.status}`);
        }
        setApiData(await data_response.json());

        const time_response = await fetch('http://127.0.0.1:5000/time'); // Replace with your actual endpoint 2
        if (!time_response.ok) {
          throw new Error(`HTTP error! status: ${time_response.status}`);
        }
        setTime(await time_response.json());

      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) {
    return <div>Loading data...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
      <div>
        <h1>API Data:</h1>
        <pre>{JSON.stringify(api_data, null, 2)}</pre>
        <h1>The current time is :</h1>
        <pre>{time_data['time']}</pre>
      </div>
  );
}

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HelloWorld/>} />
          <Route exact path="/agify/:name" element={<Agify/>} />
        </Routes>
      </Router>
  );
}

export default App;