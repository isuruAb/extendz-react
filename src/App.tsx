import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import masterModels from "./models/master-models.json";
import DataTable from "./components/dataTable/index";

function App() {
  const models: any = Object.values(masterModels);
  return (
    <Router>
      <Switch>
        {models.map((data: any, key: number) => {
          return (
            <Route exact key={key} path={"/" + data?.url}>
              <DataTable data={data} />
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
