import React from 'react';

export default function Details(props) {
  const { region } = props;
  return (
    <section>
      <div>{region.name}</div>
    </section>
  );
}
