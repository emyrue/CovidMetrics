import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import back from '../back.ico';

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
      <h2 className="region-name">
        Cases in
        {' '}
        {region.name}
        {' '}
        on August 31, 2020
      </h2>
      <ul>
        <li>
          All confirmed cases:
          {' '}
          {region.confirmed}
        </li>
        <li>
          Deaths:
          {' '}
          {region.deaths}
        </li>
        <li>
          Intensive care patients:
          {' '}
          {region.today_intensive_care}
        </li>
        <li>
          Today&apos;s new confirmed cases:
          {' '}
          {region.today_new_confirmed}
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
    today_hospitalised_patients_with_symptoms: PropTypes.number.isRequired,
    today_new_confirmed: PropTypes.number.isRequired,
    today_intensive_care: PropTypes.number.isRequired,
  }).isRequired,
};
