import React from 'react';
import './Input.css';

const Input = ({
  value,
  name,
  placeholder,
  error,
  inputType,
  type,
  label,
  onChange,
  options
}) => {
  const hasError = error !== null;
  let formGroup = null

  switch (inputType) {
    case 'text':
      formGroup = (<div className={`form-group ${hasError && 'hasError'}`}>
        <label className='label'>
          {
            hasError ? error : label
          }
        </label>
        <input
          className="form-control"
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={(e) =>
            onChange(e.target.value)}
        />
      </div>)
      break;
    case 'select':
      formGroup = (<div className={`form-group ${hasError && 'hasError'}`}>
        <label className='label'>
          {
            hasError ? error : label
          }
        </label>
        <select className="form-control"
          id="exampleFormControlSelect1"
          name={name}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        >
          {console.log('select', value)}
          {
            options.map(option => {
              return <option
                style={{ textTransform: "capitalize" }}
                key={option}
                value={option}
              >{option}</option>
            })
          }
        </select>
      </div>)
      break;
    default:
      break;
  }
  return (formGroup)
};

export default Input;
