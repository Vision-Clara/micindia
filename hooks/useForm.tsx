import { useState } from "react";
import {
  TChangeEvent,
  TFormEvent,
  TUseFormReturn,
  IUseFormProps,
} from "@/types";

function useForm<T>({
  initialFormData,
  validator,
}: IUseFormProps<T>): TUseFormReturn<T> {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  //handle submit
  const handleSubmit = (f: () => any) => {
    return async function (event: TFormEvent) {
      event.preventDefault();
      setIsSubmitting(true);

      //validate form data
      const result = validator(formData.values);
      if (!result.success) {
        setFormData({
          ...formData,
          errors: {
            ...formData.errors,
            [result.field]: result.message,
          },
        });

        setIsSubmitting(false);
        return;
      }

      //execute f
      await f();

      //reinit formdata
      setFormData(initialFormData);
      setIsSubmitting(false);
    };
  };

  // handles input changes
  const onChangeHandler = (event: TChangeEvent) => {
    setFormData({
      values: {
        ...formData.values,
        [event.target.name]: event.target.value,
      },
      errors: {
        ...formData.errors,
        [event.target.name]: "",
      },
    });
  };

  return [formData, isSubmitting, onChangeHandler, handleSubmit];
}

export default useForm;
