import React from "react";
import { InvoiceForm, createDate } from "./InvoiceForm";
import PageTitle from "./PageTitle";
import styles from "./CreateInvoice.module.scss";

const EditeInvoice = ({ invoice, history, editeInvoiceTC }) => {
  let { _id, date_created, number, date_supplied, comment } = invoice[0];
  date_supplied = date_supplied.split("-").reverse();
  date_created = date_created.split("-").reverse();
  const submitForm = ({ number, dateCreate, dateSupplied, comment }) => {
    editeInvoiceTC(
      {
        _id,
        number: +number,
        date_created: createDate(dateCreate),
        date_supplied: createDate(dateSupplied),
        comment
      },
      history
    );
  };
  return (
    <div className={styles.invoice}>
      <PageTitle title="Edite Invoice" />
      <div className={styles.invoice__form}>
        <InvoiceForm
          onSubmit={submitForm}
          initialValues={{
            number: String(number),
            dateCreate: new Date(...date_created),
            dateSupplied: new Date(...date_supplied),
            comment
          }}
        />
      </div>
    </div>
  );
};

export default EditeInvoice;
