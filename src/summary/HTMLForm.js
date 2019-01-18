import React from 'react';

const Summary = () => (
  <div>
    <h2>Native Form - Conclusions</h2>
    <h3 className="advantages">Advantages</h3>
    <ul>
      <li>
        very easy to use, pure javascript, no react-specific knowledge required
      </li>
    </ul>
    <h3 className="disadvantages">Disadvantages</h3>
    <ul>
      <li>no immediate feedback for validation, etc.</li>
      <li>possibly bad UX: doesn't feel like a modern frontend app</li>
    </ul>
    <h3>When should you use this</h3>
    <ul>
      <li>ideally never</li>
      <li>
        when you want to make minimal changes to a react app without the time to
        learn about React
      </li>
    </ul>
  </div>
);

export default Summary;
