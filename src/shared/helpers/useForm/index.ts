import {useState} from 'react';

const useForm = (initialValue: string[]) => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (formType: string, formValue: string) => {
      if (formType === 'reset') {
        return setValues(initialValue);
      }
      return setValues({...values, [formType]: formValue});
    },
  ];
};

export default useForm;
