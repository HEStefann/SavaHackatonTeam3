import { Link } from "react-router-dom";
import { PolicyProps } from "../../../types/PolicyProps";

const PolicyItem: React.FC<PolicyProps> = (props) => {
  return (
    <><tr className="border-b-2 border-[#01a180]">
      <td className="items-center p-2 flex justify-center">
        {<img src={`../../images/${props.policy_type}.png`} alt="" />}
      </td>
      <td>{props.policy_number}</td>
      <td>{props.package?.policy_package}</td>
      <td>{props.insured_people}</td>
      <td>{props.user?.username}</td>
      <td>{props.payment_deadline}</td>
      <td>{props.price}</td>
      <td>{props.payment_method}</td>
      <td>
        <Link to="">PDF</Link>
      </td>
    </tr>
    </>


  );
};

export default PolicyItem;
