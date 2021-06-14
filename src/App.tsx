import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import masterModels from "./models/master-models.json";
import DataTable from "./components/dataTable/index";
import Dashboard from "./components/dashboard";
import CreateUpdateForm from "./components/form";
import { Fragment } from "react";

function App() {
  const models: any = Object.values(masterModels);
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Dashboard models={models} />
        </Route>
        {models.map((data: any, key: number) => {
          return (
            <Fragment key={key}>
              <Route exact path={"/" + data?.url}>
                <DataTable data={data} />
              </Route>
              <Route exact path={"/" + data?.url + "/add"}>
                <CreateUpdateForm data={data} />
              </Route>
              <Route exact path={"/" + data?.url + "/update"}>
                <CreateUpdateForm data={data} />
              </Route>
            </Fragment>
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
