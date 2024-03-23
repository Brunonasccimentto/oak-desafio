import React from 'react';

export const Select = ({ register, label }) => {
  return (
    <div>
      <label>{label}</label>
      <select className="selectForm" {...register("available")}>
        <option value="true">sim</option>
        <option value="false">não</option>
      </select>
    </div>
  );
};