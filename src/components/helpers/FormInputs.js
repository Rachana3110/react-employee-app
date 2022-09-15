import { useState } from "react";
import "../pages/css/Registration.css";

const FormInputs = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    label,
    value,
    options,
    type,
    errorMessage,
    onChange,
    id,
    ...inputProps
  } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="form-container">
      <label className="label">{label}</label>
      {options ? (
        <select
          {...inputProps}
          id={id}
          type={type}
          value={value}
          className="input"
          onBlur={handleFocus}
          onFocus={() => setFocused(true)}
          focused={focused.toString()}
          onChange={onChange}
        >
          <option value="">Select a value</option>
          {options.map((optionValue, optionId) => {
            return (
              <option value={optionValue[optionId]}>
                {optionValue[optionId]}
              </option>
            );
          })}
        </select>
      ) : (
        <input
          {...inputProps}
          id={id}
          type={type}
          value={value}
          className="input"
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() => setFocused(true)}
          focused={focused.toString()}
        />
      )}
      <span className="span">{errorMessage}</span>
    </div>
  );
};

export default FormInputs;
