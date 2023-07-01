import { Layout } from "@/components";
import { FilterContainer, SearchContainer } from "@/containers";

export default function ProductsPage() {
  return (
    <Layout>
      <SearchContainer showTitle={false} />
      <FilterContainer />
    </Layout>
  );
}
