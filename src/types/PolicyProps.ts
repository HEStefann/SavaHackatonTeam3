export interface PolicyProps {
  policy_number?: string;
  insured_people: number;
  payment_deadline: string;
  price: number;
  payment_method: string;
  policy_type?: string;
  policy?: {
    policy_type?: string; // Include if 'policy_type' is nested under 'policy'
  };
  package?: {
    policy_package?: string; // Include if 'policy_package' is needed
  };
  user?: {
    username?: string;
  };
  policy_status?: {
    policy_status?: string;
  };
}
