import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StoreList = () => {
  const [stores, setStores] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get('/api/stores');
        setStores(response.data);
      } catch (error) {
        console.error('Error fetching stores', error);
      }
    };

    fetchStores();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h2>Stores</h2>
      <input
        type="text"
        placeholder="Search by name or address"
        value={search}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {stores
            .filter(
              (store) =>
                store.name.toLowerCase().includes(search.toLowerCase()) ||
                store.address.toLowerCase().includes(search.toLowerCase())
            )
            .map((store) => (
              <tr key={store.id}>
                <td>{store.name}</td>
                <td>{store.address}</td>
                <td>{store.rating}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default StoreList;
