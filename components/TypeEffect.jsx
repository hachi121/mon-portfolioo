
import React from 'react';
import Typed from 'react-typed';

const TypedText = ({ strings, typeSpeed = 50, backSpeed = 30, loop = true }) => {
  return (
    <Typed
      strings={strings}
      typeSpeed={typeSpeed}
      backSpeed={backSpeed}
      loop={loop}
    />
  );
};

export default TypedText;
