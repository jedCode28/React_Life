import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function StepTracker() {
  const [steps, setSteps] = useState(0);

  function increment() {
    setSteps(prevState => prevState + 1);
  }

  return (
    <div>
      Today you've only walked {steps} steps, you lazy piece of garbage.
      <br />
      <button onClick={increment}>
        Fine, I walked a whole 'nuther step!
      </button>
    </div>
  );
}

ReactDOM.render(
  <StepTracker />,
  document.querySelector('#root')
);

export default StepTracker