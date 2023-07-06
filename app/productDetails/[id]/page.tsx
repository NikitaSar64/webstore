import { Layout } from "@/components";
import { DetailContainer, SearchContainer } from "@/containers";

export default function Detail() {
  return (
    <Layout>
      <SearchContainer showTitle={false} />
      <DetailContainer />
    </Layout>
  );
}
