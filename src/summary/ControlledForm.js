import React from 'react';

const Summary = () => (
  <div>
    <h2>Controlled Form - Conclusions</h2>
    <h3 className="advantages">Advantages</h3>
    <ul>
      <li>no dependencies (other than React itself)</li>
      <li>idiomatic react</li>
      <li>full control, extend it with any state you want</li>
      <li>"live access", not just on submit</li>
    </ul>
    <h3 className="disadvantages">Disadvantages</h3>
    <ul>
      <li>quite verbose</li>
      <li>do we really have to reinvent the wheel</li>
      <li>what if our forms grow more complex?</li>
    </ul>
    <h3>When should you use this</h3>
    <ul>
      <li>simple forms with only basic validation</li>
      <li>if you don't want to introduce 3rd party dependencies</li>
    </ul>
  </div>
);

export default Summary;
