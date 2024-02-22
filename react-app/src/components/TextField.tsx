import React from 'react';

type TextFieldProps = {
  label: string;
  placeholder: string;
  filterText: string;
  setFilterText: (value: string) => void;
};

function TextField({
  label,
  placeholder,
  filterText,
  setFilterText,
}: TextFieldProps) {
  const id = `input-${label}`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div>
      <label
        htmlFor={id}
        style={{
          paddingRight: '1rem',
        }}
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextField;
