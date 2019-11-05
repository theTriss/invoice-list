import { appAPI } from "../../api/api";

// Actions
const SET_INVOICES = "test-app/redux/reducers/SET_INVOICES";
const REMOVE_INVOICE = "test-app/redux/reducers/REMOVE_INVOICE";

// Reducer
const initialState = {
  invoices: []
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INVOICES:
      return {
        ...state,
        invoices: action.invoices
      };
    case REMOVE_INVOICE:
      return {
        ...state,
        invoices: state.invoices.filter(({ _id }) => _id !== action.invoiceId)
      };
    default:
      return {
        ...state
      };
  }
}

// Action Creators
export const setInvoices = invoices => ({ type: SET_INVOICES, invoices });
export const removeInvoice = invoiceId => ({ type: REMOVE_INVOICE, invoiceId });

// Thunk Creators
export const setInvoicesTC = () => async dispatch => {
  const result = await appAPI.getInvoices();
  const { data, status } = result;
  status === 200 && dispatch(setInvoices(data));
};

export const addInvoiceTC = (invoice, history) => async dispatch => {
  const result = await appAPI.addInvoice(invoice);
  result.status === 201 && history.push("/");
};

export const removeInvoiceTC = invoiceId => async dispatch => {
  const result = await appAPI.removeInvoice(invoiceId);
  result.status === 200 && dispatch(removeInvoice(invoiceId));
};

export const editeInvoiceTC = (data, history) => async dispatch => {
  const result = await appAPI.editeInvoice(data);
  result.status === 200 && history.push("/");
};

export const getInvoiceTC = (id, history) => async dispatch => {
  const result = await appAPI.getInvoice(id);
  const { data, status } = result;
  status === 200 && (await dispatch(setInvoices(Array(data))));
  history.push("/edite-invoice");
};
