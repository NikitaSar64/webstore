import { Layout } from "@/components";
import { SearchContainer, WithdrawalsContainer } from "@/containers";

export default function WithdrawalsPage() {
  return (
    <Layout>
      <SearchContainer showTitle={false} />
      <WithdrawalsContainer />
    </Layout>
  );
}
