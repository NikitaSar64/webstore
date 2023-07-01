export interface Withdraws {
  date: string;
  email: string;
  price: string;
  status: "Pending" | "Paid";
}

export interface WithdrawsItemProps {
  data: Withdraws;
}
