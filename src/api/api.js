import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/"
});

export const appAPI = {
  getInvoices() {
    return instance.get("invoices");
  },
  getInvoice(id) {
    return instance.get(`invoices/${id}`);
  },
  addInvoice(invoice) {
    return instance.post("invoices", invoice);
  },
  editeInvoice(data) {
    return instance.put(`invoices/${data._id}`, data);
  },
  removeInvoice(invoiceId) {
    return instance.delete(`invoices/${invoiceId}`);
  }
};
