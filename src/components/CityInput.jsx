import React from "react";

export default function CityInput(props) {
  const { inputCity, onInputChange, onSubmit } = props;

  return (
    <form onSubmit={onSubmit}>
      {" "}
      {onSubmit}
      <input
        type="text"
        value={inputCity}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Enter city name"
      />
      <button type="submit">Get weather</button>
    </form>
  );
}
