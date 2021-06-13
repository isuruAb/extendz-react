import { Card, Grid, makeStyles, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

interface IProps {
  models: Array<any>; //TODO: Types need to be defined
}
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Dashboard: React.FC<IProps> = ({ models }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        {models.map((data, key) => {
          return (
            <Grid item xs={3}>
              <Paper className={classes?.paper}>
                <Link to={data?.url}>{data?.displayName}</Link>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default Dashboard;
