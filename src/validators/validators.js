export const required = value => (value ? undefined : `Field is required`);
export const minLength = minLength => value =>
  value && value.length >= minLength ? undefined : `Min length is ${minLength}`;
export const maxLength = maxLength => value =>
  value && value.length <= maxLength ? undefined : `Max length is ${maxLength}`;
