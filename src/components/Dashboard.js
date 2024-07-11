import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState({ users: 0, stores: 0, ratings: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/dashboard');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Users: {data.users}</p>
      <p>Total Stores: {data.stores}</p>
      <p>Total Ratings Submitted: {data.ratings}</p>
    </div>
  );
};

export default Dashboard;
