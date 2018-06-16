import React from 'react';
import ucFirst from 'uppercase-first';

const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <p key={i} style={{ color: 'red' }}>
            {ucFirst(fieldName)} {formErrors[fieldName]}
            {/* {fieldName} {formErrors[fieldName]} */}
          </p>
        );
      } else {
        return '';
      }
    })}
  </div>
);
export default FormErrors;
