import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function DisplayRegions() {
  const regions = useSelector((state) => state.covidData);
  return (
    <section className="regions">
      {regions.regions.map((region) => (
        <div key={region.id}>
          <Link to={region.id} className="region">
            <h3>{region.name}</h3>
            <ul className="region-list">
              <li>{region.confirmed}</li>
              <li>{region.deaths}</li>
            </ul>
          </Link>
        </div>
      ))}
    </section>
  );
}
