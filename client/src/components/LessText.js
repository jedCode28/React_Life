import React, { useState } from 'react';
import ReactDOM from 'react-dom'

function LessText ({ text, maxLength }) {
  const [hidden, setHidden] = useState(true);
  if (text.length <= maxLength) { // <--- WTF ?!?!?!?! IT WORKS AFTER CODE EDITOR SAVE AND REFRESH
    return <span>{text}</span>; 
  }
  return(
    <span>
      {hidden ? `${text.substr(0, maxLength).trim()} ...`: text}
      {hidden ? (
        <a onClick={() => setHidden(false)}> read more</a>
      ) : ( 
        <a onClick={() => setHidden(true)}> read less</a>
      )}
    </span>
  );
}

ReactDOM.render(
  <LessText 
    text={`I will have you know that I am the expert on everything having to do with edible tree barks.
     I could make a damn salad out of various tree bark in the forrest.`}  
    maxLength={35}
  />,
  document.querySelector('#root')
);

export default LessText