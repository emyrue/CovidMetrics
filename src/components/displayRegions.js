import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import spain from '../spain.svg';

export default function DisplayRegions() {
  const regions = useSelector((state) => state.covidData);
  return (
    <section>
      <h1 className="title">August 31, 2020 Spain Covid Stats</h1>
      <div className="main-headline">
        <img className="flag" src={spain} alt="spanish flag" />
        <div className="main-statistics">
          <div>
            All cases:
            {' '}
            {regions.confirmed}
          </div>
          <div>
            All deaths:
            {' '}
            {regions.deaths}
          </div>
          <div>
            All intensive care patients:
            {' '}
            {regions.intensive}
          </div>
        </div>
      </div>
      <div className="regions">
        {regions.regions.map((region) => (
          <div key={region.id}>
            <Link to={region.id} className="region">
              <h3>{region.name}</h3>
              <div>
                Cases:
                {' '}
                {region.confirmed}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
