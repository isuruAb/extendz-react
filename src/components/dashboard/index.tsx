import { Grid, makeStyles, Paper } from "@material-ui/core";
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
  url: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "#000",
  },
}));

const Dashboard: React.FC<IProps> = ({ models }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        {models.map((data, key) => {
          return (
            <Grid item xs={3} key={key}>
              <Paper className={classes?.paper}>
                <Link to={data?.url} className={classes?.url}>
                  {data?.displayName}
                </Link>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default Dashboard;
