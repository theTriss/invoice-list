import React from "react";
import { InvoiceForm, createDate } from "./InvoiceForm";
import PageTitle from "./PageTitle";
import styles from "./CreateInvoice.module.scss";

const CreateInvoice = ({ addInvoiceTC, history }) => {
  const submitForm = ({ number, dateCreate, dateSupplied, comment }) => {
    addInvoiceTC(
      {
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
      <PageTitle title="Create Invoice" />
      <div className={styles.invoice__form}>
        <InvoiceForm onSubmit={submitForm} />
      </div>
    </div>
  );
};

export default CreateInvoice;
