import { useEffect, useState } from 'react';

export function useForm({ initialValues, onSubmit, validateSchema }) {
  const [values, setValues] = useState(initialValues);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [touched, setTouchedFields] = useState({});

  useEffect(() => {
    validateSchema(values)
      .then(() => {
        setIsFormDisabled(false);
        setErrors({});
      })
      .catch((err) => {
        const formattedErrors = err.inner.reduce((errorObjectAcc, currError) => {
          const fieldName = currError.path;
          const errorMessage = currError.message;
          return {
            ...errorObjectAcc,
            [fieldName]: errorMessage,
          };
        }, {});
        setErrors(formattedErrors);
        setIsFormDisabled(true);
      });

    if (values.usuario.length > 0) {
      setIsFormDisabled(false);
    }
  }, [values]);
  return {
    values,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values);
    },

    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;
      setValues((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
    handleBlur(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;
      setTouchedFields({
        ...touched,
        [fieldName]: value,
      });
    },
    isFormDisabled,
    setIsFormDisabled,
    errors,
    touched,
  };
}
