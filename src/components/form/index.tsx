import FormField from "../FormField";
import Fab from "@material-ui/core/Fab";
import SaveIcon from "@material-ui/icons/Save";
import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

interface IProps {
  data: any; //TODO: Types need to be defined
}

const CreateUpdateForm: React.FC<IProps> = ({ data }) => {
  const [values, setValues] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
  const fields: any = Object.values(data?.properties);
  const location = useLocation();
  const rowData = useSelector((state: any) => state?.data);

  useEffect(() => {
    if (rowData) {
      setValues(rowData);
    }
  }, [rowData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, value, checked } = e.target;
    setValues({ ...values, [name]: checked ? checked : value });
  };

  const handleValidation = (values: any) => {
    let fieldErrors = {};

    for (const field of fields) {
      if (field?.required) {
        if (!values[field?.name]) {
          fieldErrors = {
            ...fieldErrors,
            [field?.name]: "This field is required",
          };
        }
      }
    }
    setErrors(fieldErrors);
  };

  const handleSave = () => {
    const method = location.pathname.split("/").pop();
    //Validation goes here
    handleValidation(values);
    if (method === "add") {
      //Create record
    } else {
      //Update record
    }
  };

  return (
    <div>
      <form>
        <Grid container spacing={3}>
          {fields?.map((field: any, index: number) => {
            return (
              <Grid item xs={4}>
                <FormField
                  name={field?.name}
                  type={field?.type}
                  required={field?.required}
                  handleChange={handleChange}
                  width={{}}
                  values={values || ""}
                  error={errors[field?.name]}
                />
              </Grid>
            );
          })}
          <Fab
            color="primary"
            aria-label="add"
            className="fabButton"
            onClick={handleSave}
          >
            <SaveIcon />
          </Fab>
        </Grid>
      </form>
    </div>
  );
};
export default CreateUpdateForm;
