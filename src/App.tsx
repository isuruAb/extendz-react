import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import masterModels from "./models/master-models.json";
import DataTable from "./components/dataTable/index";
import Dashboard from "./components/dashboard";
import CreateUpdateForm from "./components/form";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const models: any = Object.values(masterModels);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <Dashboard models={models} />
          </Route>
          {models.map((data: any, key: number) => {
            return (
              <Route key={key} exact path={"/" + data?.url}>
                <DataTable data={data} />
              </Route>
            );
          })}

          {models.map((data: any, key: number) => {
            return (
              <Route exact path={"/" + data?.url + "/add"}>
                <CreateUpdateForm data={data} />
              </Route>
            );
          })}

          {models.map((data: any, key: number) => {
            return (
              <Route exact path={"/" + data?.url + "/update"}>
                <CreateUpdateForm data={data} />
              </Route>
            );
          })}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
