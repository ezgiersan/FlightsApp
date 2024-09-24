import React, { useState } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FlightSelect({ inputType, options, onValueChange, definitionIcon }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    onValueChange(selectedOption.value); // Seçilen IATA değerini dışarıya aktar
  };

  const op = options.map((airport) => ({
    label: `${airport.city} - ${airport.name} (${airport.iata})`,
    value: airport.iata
  }));

  return (
    <div className='select-container w-100'>
    {
        definitionIcon ? 
        <FontAwesomeIcon icon={definitionIcon} className="purple font-size-12 input-icon "
      />
        : ""
    }
    <Select
      className={inputType}
      value={selectedOption} 
      onChange={handleSelectChange} 
      options={op}
      placeholder=""
      components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => null,
        }}
        styles={{
            control: (provided) => ({
                ...provided,
                borderRadius: `${inputType === 'left-input' ? '1rem 0 0 1rem' : '0 1rem 1rem 0'}`,
                marginInlineEnd: '5px',
                borderWidth: '1.5px',
                width: "100%"
            }),
            menu: (provided) => ({
              ...provided,
            zIndex: 10
            }),
        }}
        />
        </div>
  );
}
