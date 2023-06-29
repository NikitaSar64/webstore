import { Layout } from "@/components";
import { AboutContainer, SearchContainer } from "@/containers";

export default function AboutPage() {
  return (
    <Layout>
      <SearchContainer showTitle={false} />
      <AboutContainer />
    </Layout>
  );
}
