import React from 'react';

const StadiumDetail = (props) => {
  const { stadium, country, region, tournament, start, match } = props.value;
  return (
    <li>
      <label>{stadium}</label>
      <label>{country}</label>
      <label>{region}</label>
      <label>{tournament}</label>
      <label>{start}</label>
      <label>{match}</label>
    </li>
  );
};

export default StadiumDetail;
