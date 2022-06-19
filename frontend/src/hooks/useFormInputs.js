import { useState } from "react";
// useFormInputs hook
// This hook is used to add the form inputs to the form (e.g. name, email, etc.)

const useFormInputs = (initialState = {}) => {
  const [inputs, setInputs] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  return [inputs, handleInputChange];
};

export default useFormInputs;
