import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-regular-svg-icons";
import styles from "./Main.module.scss";

const InvoiceItem = ({
  invoice: { _id, date_created, number, date_supplied, comment },
  removeInvoiceTC,
  getInvoiceTC,
  history
}) => {
  return (
    <div className={styles.table__row} key={_id}>
      <div
        className={`${styles.table__column} ${styles.table__column_dateCreated}`}
      >
        {date_created}
      </div>
      <div className={`${styles.table__column} ${styles.table__column_number}`}>
        {number}
      </div>
      <div
        className={`${styles.table__column} ${styles.table__column_dateSupplied}`}
      >
        {date_supplied}
      </div>
      <div
        className={`${styles.table__column} ${styles.table__column_comment}`}
      >
        {comment}
      </div>
      <div className={`${styles.table__column} ${styles.table__column_icon}`}>
        <div
          className={styles.table__iconWraper}
          onClick={() => getInvoiceTC(_id, history)}
        >
          <FontAwesomeIcon icon={faEdit} className={styles.table__icon} />
        </div>
        <div
          className={styles.table__iconWraper}
          onClick={() => removeInvoiceTC(_id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} className={styles.table__icon} />
        </div>
      </div>
    </div>
  );
};

export default InvoiceItem;
