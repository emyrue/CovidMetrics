import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisplayRegions from '../components/displayRegions';
import Details from './Details';

function Home() {
  const regions = useSelector((state) => state.covidData);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayRegions />} />
        {regions.regions.map((region) => (
          <Route key={region.id} path={region.id} element={<Details region={region} />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
