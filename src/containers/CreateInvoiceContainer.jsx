import React from "react";
import CreateInvoice from "../components/CreateInvoice";
import { compose } from "redux";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { addInvoiceTC } from "../redux/reducers/app-reducer";

const CreateInvoiceContainer = props => {
  return <CreateInvoice {...props} />;
};

const mapStateToProps = state => {
  return {};
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { addInvoiceTC }
  )
)(CreateInvoiceContainer);
