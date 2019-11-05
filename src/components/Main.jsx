import React from "react";
import PageTitle from "./PageTitle";
import InvoiceItem from "./InvoiceItem";
import { Link } from "react-router-dom";
import styles from "./Main.module.scss";

const Main = ({ invoices, history, removeInvoiceTC, getInvoiceTC }) => {
  return (
    <div className={styles.main}>
      <PageTitle title="Invoices" />
      <div className={styles.main__item}>
        <div className={styles.main__title}>Actions</div>
        <div className={styles.main__btnWrap}>
          <Link to="/create-invoice" className={styles.main__btn}>
            Add new
          </Link>
        </div>
      </div>
      <div className={styles.main__item}>
        <div className={styles.main__title}>Invoices</div>
        <div className={`${styles.main__table} ${styles.table}`}>
          <div className={`${styles.table__row} ${styles.table__row_title}`}>
            <div
              className={`${styles.table__column} ${styles.table__column_dateCreated}`}
            >
              Create
            </div>
            <div
              className={`${styles.table__column} ${styles.table__column_number} ${styles.table__column_number_title}`}
            >
              No
            </div>
            <div
              className={`${styles.table__column} ${styles.table__column_dateSupplied}`}
            >
              Supply
            </div>
            <div
              className={`${styles.table__column} ${styles.table__column_comment} ${styles.table__column_comment_large}`}
            >
              Comment
            </div>
          </div>
          {invoices.map(invoice => (
            <InvoiceItem
              invoice={invoice}
              key={invoice._id}
              removeInvoiceTC={removeInvoiceTC}
              getInvoiceTC={getInvoiceTC}
              history={history}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
