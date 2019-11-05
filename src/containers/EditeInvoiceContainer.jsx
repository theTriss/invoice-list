import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { getInvoices } from "../redux/selectors/app-selector";
import { editeInvoiceTC } from "../redux/reducers/app-reducer";
import EditeInvoice from "../components/EditeInvoice";

const EditeInvoiceContainer = props => {
  return (
    <>
      {props.invoice.length === 1 ? (
        <EditeInvoice {...props} />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    invoice: getInvoices(state)
  };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { editeInvoiceTC }
  )
)(EditeInvoiceContainer);
