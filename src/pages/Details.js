import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import back from '../back.ico';
import spain from '../spain.svg';

export default function Details(props) {
  const { region } = props;
  return (
    <section>
      <header className="title">
        <Link to="/">
          <img className="back" src={back} alt="" />
        </Link>
        <h3>Statistics by region</h3>
      </header>
      <div className="details-headline">
        <img className="flag" src={spain} alt="divish-flag" />
        <h2 className="region-name">
          Cases in
          {' '}
          {region.name}
          {' '}
          on August 31, 2020
        </h2>
      </div>
      <ul>
        <li>
          <div>All confirmed cases:</div>
          <div>{region.confirmed}</div>
        </li>
        <li>
          <div>Deaths:</div>
          <div>{region.deaths}</div>
        </li>
        <li>
          <div>Intensive care patients:</div>
          <div>{region.today_intensive_care}</div>
        </li>
        <li>
          <div>Today&apos;s new confirmed cases:</div>
          <div>{region.today_new_confirmed}</div>
        </li>
        <li>
          <div>Today&apos;s deaths:</div>
          <div>{region.today_new_deaths}</div>
        </li>
        <li>
          <div>Today&apos;s total hospitalised patients:</div>
          <div>{region.today_total_hospitalised_patients}</div>
        </li>
      </ul>
    </section>
  );
}

Details.propTypes = {
  region: PropTypes.shape({
    name: PropTypes.string.isRequired,
    confirmed: PropTypes.number.isRequired,
    deaths: PropTypes.number.isRequired,
    today_total_hospitalised_patients: PropTypes.number.isRequired,
    today_new_confirmed: PropTypes.number.isRequired,
    today_intensive_care: PropTypes.number.isRequired,
    today_new_deaths: PropTypes.number.isRequired,
  }).isRequired,
};
