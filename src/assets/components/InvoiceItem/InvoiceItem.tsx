import { InvoiceProps } from "../../../types/InvoiceProps";

const InvoiceItem: React.FC<InvoiceProps> = (invoices) => {
  return (
    <tr>
      <td>{invoices.invoice_number}</td>
      <td>
        {
          <div>
            <select className="px-[2rem] py-1 border-2 rounded-[8px] border-[#01A180] bg-white mr-6">
              <option value="all">-- Иберете фактура --</option>

              <option>{invoices.policy.policy_number}</option>
            </select>
          </div>
        }
      </td>
      <td>{invoices.user.username}</td>
      <td>{invoices.deadline}</td>
      <td>
        {invoices.price}
        {"ден."}
      </td>
      <td></td>
      <td></td>
      <td>{invoices.invoice_status.status}</td>
    </tr>
  );
};

export default InvoiceItem;
