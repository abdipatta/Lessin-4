import PropTypes from "prop-types"
import css from "./FormInput.module.css"

export const FormInput = ({id,label,inputType,placeholder}) => {
  return (
    <div>
      <label className={css.formLabel} htmlFor={id}>{label} </label>
      <input className={css.formInput} id={id} type={inputType} placeholder={placeholder || "..."} />
    </div>
  );
};

FormInput.propTypes={
    id:PropTypes.string,
    label:PropTypes.string,
    inputType:PropTypes.string,
    placeholder:PropTypes.string,
}
