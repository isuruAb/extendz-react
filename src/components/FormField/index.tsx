import { TextField, Checkbox, FormControlLabel } from "@material-ui/core";
import { ChangeEventHandler } from "react";

interface IProps {
  name: string; //TODO: Types need to be defined
  type: string;
  required: boolean;
  width: any;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  values: any;
  error: string;
}

const FormField: React.FC<IProps> = ({
  name,
  type,
  required,
  width,
  handleChange,
  values,
  error,
}) => {
  if (type === "string") {
    return (
      <>
        <TextField
          error={error ? !!error : false}
          helperText={error}
          name={name}
          label={name}
          onChange={handleChange}
          value={values[name]}
        />
      </>
    );
  } else if (type === "checkbox") {
    return (
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            onChange={handleChange}
            checked={values[name] || false}
          />
        }
        label={name}
      />
    );
  }
  return <></>;
};
export default FormField;
