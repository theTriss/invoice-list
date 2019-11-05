import React from "react";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./InvoiceForm.module.scss";

const Error = ({ error, touched }) => {
  return (
    <>
      {error && touched && (
        <div className={styles.error}>
          <div
            className={`${styles.formItem__iconWraper} ${styles.formItem__iconWraper_error}`}
          >
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className={`${styles.formItem__icon} ${styles.formItem__icon_error}`}
            />
          </div>
          {error}
        </div>
      )}
    </>
  );
};

const InputDate = ({
  input: { onChange, value },
  meta: { error, touched },
  className,
  placeholder
}) => {
  return (
    <>
      <DatePicker
        dateFormat="dd-MM-yyyy"
        selected={value}
        onChange={date => onChange(date)}
        className={className}
        withPortal
        placeholderText={placeholder}
      />
      {error && touched && <Error error={error} touched={touched} />}
    </>
  );
};

const InputNumber = ({
  input,
  meta: { error, touched },
  className,
  placeholder
}) => {
  return (
    <>
      <input
        {...input}
        type="text"
        className={className}
        placeholder={placeholder}
        value={input.value}
      />
      {error && touched && <Error error={error} touched={touched} />}
    </>
  );
};

const InputComment = ({
  input,
  meta: { error, touched },
  className,
  placeholder
}) => {
  return (
    <>
      <textarea {...input} className={className} placeholder={placeholder} />
      {error && touched && <Error error={error} touched={touched} />}
    </>
  );
};

export { InputDate, InputNumber, InputComment };
