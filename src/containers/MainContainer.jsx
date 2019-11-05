import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Main from "../components/Main";
import {
  setInvoicesTC,
  removeInvoiceTC,
  getInvoiceTC
} from "../redux/reducers/app-reducer";
import { getInvoices } from "../redux/selectors/app-selector";

const MainContainer = props => {
  useEffect(() => {
    props.setInvoicesTC();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Main {...props} />;
};

const mapStateToProps = state => {
  return {
    invoices: getInvoices(state)
  };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { setInvoicesTC, removeInvoiceTC, getInvoiceTC }
  )
)(MainContainer);
