import { Layout } from "@/components";
import { ErrorContainer, SearchContainer } from "@/containers";

export default function NotFoundPage() {
  return (
    <Layout>
      <SearchContainer showTitle={false} />
      <ErrorContainer />
    </Layout>
  );
}
