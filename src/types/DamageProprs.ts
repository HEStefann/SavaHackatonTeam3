export interface DamageProps {
  damage_status: string;
  policy: PolicyProps;
}

export interface PolicyProps {
  policy_number: string;
  insured_people: number;
  payment_deadline: string;
  price: number;
  payment_method: string;
}
