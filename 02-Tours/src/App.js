import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [loading, setLoding] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchdata = async () => {
    setLoding(!loading);
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Tours tours={tours} />;
}

export default App;
