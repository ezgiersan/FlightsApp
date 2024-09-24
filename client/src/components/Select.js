import React from "react";
import Select from "react-select";

export default function FlightSelect({ options, onSelectChange }) {
  return (
    <Select
      options={options}
      defaultValue={options[0]} // İlk değer default olarak seçilir
      components={{
        IndicatorSeparator: () => null,
      }}
      styles={{
        control: (provided) => ({
          ...provided,
          borderRadius: ".5rem",
          borderWidth: "1.5px",
          width: "100%",
          border: "1.5px solid #f6f4f8",
          cursor: "pointer"
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          color: "#4b0097", // Select okun css ini değiştirir
        }),
        menu: (provided) => ({
          ...provided,
        //   border: "1px solid #d1d1d1", 
        borderColor: "#d1d1d1",
          borderRadius: ".5rem", 
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? "#e6e0eb" : "white", 
          color: state.isSelected ? "black" : "inherit", 
          "&:hover": {
            backgroundColor: "none", 
          },
        }),
      }}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
}
