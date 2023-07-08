import React from 'react';

function PersonalData() {
  return (
    <div>
      <h2>Personal Data</h2>
      <form>
        <label>
          Desired Job Title
          <input type="text" />
        </label>
        <label>
          Picture
          <input type="file" />
        </label>
        <label>
          Name
          <input type="text" />
        </label>
        <label>
          Last Name
          <input type="text" />
        </label>
        <label>
          E-mail
          <input type="text" />
        </label>
        <label>
          Telefone
          <input type="text" />
        </label>
        <label>
          País
          <input type="text" />
        </label>
        <label>
          Cidade
          <input type="text" />
        </label>
      </form>
    </div>
  );
}

export default PersonalData;
