import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainContainer from "../containers/MainContainer";
import CreateInvoiceContainer from "../containers/CreateInvoiceContainer";
import EditeInvoiceContainer from "../containers/EditeInvoiceContainer";
import styles from "./App.module.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.main}>
        <Route exact path="/" render={() => <MainContainer />} />
        <Route
          path="/create-invoice"
          render={() => <CreateInvoiceContainer />}
        />
        <Route path="/edite-invoice" render={() => <EditeInvoiceContainer />} />
      </div>
    </BrowserRouter>
  );
};

export default App;
