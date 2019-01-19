import React from 'react';

const Summary = () => (
  <div>
    <h2>Final Form - Conclusions</h2>
    <h3 className="advantages">Advantages</h3>
    <ul>
      <li>no need to install redux or any "central" component in your app</li>
      <li>works without previous setup</li>
      <li>API as good as Redux Form</li>
      <li>very powerful: validation, dynamic rendering, etc</li>
      <li>will feel very familiar when you've used Redux Form before</li>
      <li>very optimizable using subscriptions</li>
      <li>lightweight</li>
    </ul>
    <h3 className="disadvantages">Disadvantages</h3>
    <ul>
      <li>some migration effort required if migrating from Redux Form</li>
    </ul>
    <h3>When should you use this</h3>
    <ul>
      <li>when a controlled component becomes too verbose or too cumbersome</li>
      <li>when you need good validation support</li>
      <li>when optimizing for speed is critical (use subscriptions)</li>
    </ul>
  </div>
);

export default Summary;
