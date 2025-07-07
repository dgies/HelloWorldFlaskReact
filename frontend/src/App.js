import React, { useState, useEffect } from 'react';

function App() {
  const [api_data, setApiData] = useState(null);
  const [time_data, setTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // Fetch from endpoint 1
        const data_response = await fetch('http://127.0.0.1:5000/api/data'); // Replace with your actual endpoint 1
        if (!data_response.ok) {
          throw new Error(`HTTP error! status: ${data_response.status}`);
        }
        setApiData(await data_response.json());

        // Fetch from endpoint 2
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

      <h1>Time Data:</h1>
      {/*<pre>{JSON.stringify(time_data, null, 2)}</pre>*/}
      <pre>{time_data['time']}</pre>
    </div>
  );
}

export default App;



// import React, { useState, useEffect } from 'react';
//
// function App() {
//   const [message, setMessage] = useState('');
//
//   useEffect(() => {
//     fetch('http://127.0.0.1:5000/api/data') // Flask API endpoint
//       .then(response => response.json())
//       .then(data => setMessage(data.message))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);
//
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{message}</p>
//       </header>
//     </div>
//   );
// }
//
// export default App;
