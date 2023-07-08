import React from 'react';
import { BiUserCircle } from 'react-icons/bi';

function PersonalData() {
  return (
    <div>
      <h2>Personal Data</h2>
      <form>
        <label>
          Desired Job Title
          <input type="text" />
        </label>
        <label className="label-file">
          <BiUserCircle />
          upload foto
          <div>
            <input type="file" name="sss" />
          </div>
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
