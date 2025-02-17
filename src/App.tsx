import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropertyDetail from './components/PropertyDetail';
import PropertyListings from './components/PropertyListings';
import Navbar from './components/Navbar';
import { useApi } from "./context/ApiContext";
function App() {
  const { data, loading, error } = useApi();
  if (loading) return <div>Loading...</div>;
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<PropertyDetail />} />
        <Route path="/listings" element={<PropertyListings />} />
      </Routes>
    </div>
  );
}

export default App;