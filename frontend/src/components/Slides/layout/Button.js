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

export default function (props) {
  const options = {
    scale: 1.2,
    speed: 1000,
    max: 30,
  };
  return <Tilt options={options}>{props.children}</Tilt>;
  //   props.children get the inner component inside a tag
}
