import React, { useCallback, useEffect, useState } from 'react';
import StadiumDetail from './StadiumDetail';

const dummyData = [
  {
    stadium: 'Hamilton Academical Fc',
    country: 'United Kingdom',
    region: '',
    tournament: 'Scottish Cup',
    start: '2022-11-26 14:30',
    match: 'Hamilton Academical vs East Kilbride',
  },
  {
    stadium: 'Accrington Stanley',
    country: 'United Kingdom',
    region: '',
    tournament: 'The FA Cup',
    start: '2022-11-26 15:00',
    match: 'Accrington Stanley vs Barnet',
  },
  {
    stadium: 'Barnsley Fc',
    country: 'United Kingdom',
    region: '',
    tournament: 'The FA Cup',
    start: '2022-11-26 15:00',
    match: 'Barnsley vs Crewe Alexandra',
  },
];

const Stadiums = () => {
  const [location, setLocation] = useState('');
  const [stadiums, setStadiums] = useState(dummyData);

  const searchStadium = useCallback(() => {
    let locInternal = location.trim();
    if (locInternal.length === 0) locInternal = 'London';
    return fetch(
      `http://api.weatherapi.com/v1/sports.json?key=898147f83a734b7dbaa95705211612&q=${locInternal}`
    );
  }, [location]);

  useEffect(() => {
    searchStadium()
      .then((data) => data.json())
      .then((res) => {
        if (!res.error) {
          setStadiums(res.football);
        }
      });
  }, [searchStadium]);

  const onChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const onSearchHandler = () => {
    searchStadium();
  };

  return (
    <>
      <div>
        <h1>Stadiums</h1>
        <p>Stadiums in {location}</p>
        <label htmlFor="location">Search Stadium</label>
        <input
          name="location"
          id="location"
          placeholder="location"
          onChange={onChangeLocation}
        ></input>
        <button onClick={onSearchHandler}>Search</button>
        {stadiums.map((st) => (
          <ul>
            <StadiumDetail value={st} />
          </ul>
        ))}
      </div>
    </>
  );
};

export default Stadiums;
