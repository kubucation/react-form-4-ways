import React from 'react';

const Summary = () => (
  <div>
    <h2>Redux Form - Conclusions</h2>
    <h3 className="advantages">Advantages</h3>
    <ul>
      <li>much less repition</li>
      <li>easy way to manage validators</li>
      <li>a lot of interesting "state" by default (valid, touched, etc.)</li>
      <li>good API</li>
    </ul>
    <h3 className="disadvantages">Disadvantages</h3>
    <ul>
      <li>unnecessary dependency on redux</li>
      <li>
        redux (i.e. app-wide centralized state) is actually the wrong place to
        store local state
      </li>
    </ul>
    <h3>When should you use this</h3>
    <ul>
      <li>if possible, use FinalForm instead</li>
      <li>
        if for whatever reason you can't don't want to use FinalForm, complex
        forms requiring plenty of validation is a good use-case
      </li>
    </ul>
  </div>
);

export default Summary;
