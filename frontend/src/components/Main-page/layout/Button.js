import VanillaTilt from 'vanilla-tilt';
import React, { useEffect, useRef } from 'react';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}
export default function Button(props) {
  const options = {
    scale: 1.2,
    speed: 1000,
    max: 30,
  };
  return (
    <Tilt
      className={
        'PA'.includes(props.character) ? 'character special' : 'character'
      }
      options={options}
    >
      <span>{props.character}</span>
    </Tilt>
  );
}
