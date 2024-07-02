import { PolicyProps } from "./PolicyProps";

export interface InvoiceProps {
  invoice_number: string;
  deadline: string;
  price: number;
  policy: PolicyProps;
  invoice_status: { status: string };
  user: {
    username: string;
    phone: string;
    email: string;
  };
}
