import { Layout } from "@/components";
import { SearchContainer, UploadContainer } from "@/containers";

export default function AboutPage() {
  return (
    <Layout>
      <SearchContainer showTitle={false} />
      <UploadContainer />
    </Layout>
  );
}
