import React from 'react';

interface inputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const input = ({
  label,
  type,
  placeholder,
  id,
  name,
  value,
  onChange,
}: inputProps) => {
  return (
    <>
      <div className='flex flex-col'>
        <label className='mb-3'>{label}</label>
        <input
          className='focus:outline-none border-2 border-gray-400 focus:border-black px-2 py-1.5'
          type={type}
          placeholder={placeholder}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default input;
