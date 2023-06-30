import { Layout } from "@/components";
import { ContactContainer, SearchContainer } from "@/containers";

export default function ContactPage() {
  return (
    <Layout>
      <SearchContainer showTitle={false} />
      <ContactContainer />
    </Layout>
  );
}
