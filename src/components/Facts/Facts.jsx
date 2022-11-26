import React, { useCallback, useEffect, useState } from 'react';

const Facts = () => {
  const [fact, setFact] = useState('');
  const url = 'https://catfact.ninja/fact';
  const factEventApi = useCallback(() => {
    return fetch(url);
  }, [url]);

  useEffect(() => {
    factEventApi()
      .then((data) => data.json())
      .then((res) => setFact(`Fact Load in Creator: ${res.fact}`));
  }, [factEventApi]);

  const newFactHandler = () => {
    factEventApi()
      .then((data) => data.json())
      .then((res) => setFact(`Fact Load with Button: ${res.fact}`));
  };

  return (
    <>
      <h1>Facts</h1>
      <p>{fact}</p>
      <button onClick={newFactHandler}>New Fact</button>
    </>
  );
};

export default Facts;
