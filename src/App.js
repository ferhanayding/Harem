import { Bed } from "@mui/icons-material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import About from "./pages/about/About";
import Accessory from "./pages/categoriesPages/accessory/Accessory";
import Bedspread from "./pages/categoriesPages/bedspread/Bedspread";
import Curtain from "./pages/categoriesPages/curtain/Curtain";
import Jalousie from "./pages/categoriesPages/jalousie/Jalousie";
import Tulle from "./pages/categoriesPages/tulle/Tulle";
import { Category } from "./pages/category/Category";
import Extras from "./pages/extralar/Extras";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Layout from "./utils/layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {/* <div className="main__wrapper"> */}
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path={"/hakkımızda"}>
            <About />
          </Route>
          <Route path="/kategori">
            <Category />
          </Route>
          <Route path={"/hizmetler"}>
            <Services />
          </Route>
          <Route path={"/perdeler"}>
            <Curtain />
          </Route>
          <Route path={"/yatagortuleri"}>
            <Bedspread />
          </Route>
          <Route path={"/tüller"}>
            <Tulle />
          </Route>
          <Route path={"/jaluzler"}>
            <Jalousie />
          </Route>
          <Route path={"/aksesuarlar"}>
            <Accessory />
          </Route>
          <Route path={"/ekstralar"}>
            <Extras />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
