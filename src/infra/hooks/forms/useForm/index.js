import React, { useState } from 'react';

export function useForm({ initialValues, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  return {
    values,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values);
    },

    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;
      console.log('fieldName', fieldName, value);
      setValues((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
  };
}
