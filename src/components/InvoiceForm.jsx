import React from "react";
import { reduxForm, Field } from "redux-form";
import { InputDate, InputNumber, InputComment } from "./FormElements";
import { required, minLength, maxLength } from "../validators/validators";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import styles from "./InvoiceForm.module.scss";

const minNumberLength = minLength(3);
const maxNumberLength = maxLength(5);
const maxLengthCommentLength = maxLength(160);

export const createDate = date => {
  const addZero = value => {
    return value >= 10 ? value : `0${value}`;
  };
  return `${addZero(date.getDate())}-${addZero(
    date.getMonth() + 1
  )}-${date.getFullYear()}`;
};

let InvoiceForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fieldsBlock}>
        <div className={styles.formItem}>
          <div className={styles.formItem__title}>Number:</div>
          <div className={styles.formItem__inputWraper}>
            <div
              className={`${styles.formItem__iconWraper} ${styles.formItem__iconWraper_number}`}
            >
              <FontAwesomeIcon icon={faCog} className={styles.formItem__icon} />
            </div>
            <Field
              component={InputNumber}
              name="number"
              className={styles.formItem__input}
              validate={[required, minNumberLength, maxNumberLength]}
            />
          </div>
        </div>
        <div className={styles.formItem}>
          <div className={styles.formItem__title}>Invoice Date:</div>
          <div className={styles.formItem__inputWraper}>
            <div className={styles.formItem__iconWraper}>
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className={styles.formItem__icon}
              />
            </div>
            <Field
              component={InputDate}
              name="dateCreate"
              className={styles.formItem__input}
              placeholder="Select date"
              validate={[required]}
            />
          </div>
        </div>
        <div className={styles.formItem}>
          <div className={styles.formItem__title}>Supply Date:</div>
          <div className={styles.formItem__inputWraper}>
            <div className={styles.formItem__iconWraper}>
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className={styles.formItem__icon}
              />
            </div>
            <Field
              component={InputDate}
              name="dateSupplied"
              className={styles.formItem__input}
              placeholder="Select date"
              validate={[required]}
            />
          </div>
        </div>
        <div className={`${styles.formItem} ${styles.formItem_comment}`}>
          <div className={styles.formItem__title}>Comment:</div>
          <div className={styles.formItem__inputWraper}>
            <Field
              component={InputComment}
              name="comment"
              className={`${styles.formItem__input} ${styles.formItem__input_comment}`}
              validate={[required, maxLengthCommentLength]}
            />
          </div>
        </div>
      </div>
      <div className={styles.btnBLock}>
        <button className={styles.btn}>Save</button>
      </div>
    </form>
  );
};

InvoiceForm = reduxForm({
  form: "invoice"
})(InvoiceForm);

export { InvoiceForm };
