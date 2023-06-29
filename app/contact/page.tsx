import { Layout } from "@/components";
import {
  AboutContainer,
  ContactContainer,
  SearchContainer,
} from "@/containers";

export default function CotactPage() {
  return (
    <Layout>
      <SearchContainer showTitle={false} />
      <ContactContainer />
    </Layout>
  );
}
