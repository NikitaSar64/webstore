import { Auth, Button, Layout } from "@/components";
import {
  AdvantagesContainer,
  AuthorContainer,
  ProductContainer,
  SearchContainer,
  TrandingContainer,
  TutorialContainer,
} from "@/containers";

export default function Home() {
  return (
    <Layout>
      <SearchContainer />
      <ProductContainer />
      <TrandingContainer />
      <AdvantagesContainer />
      <AuthorContainer />
      <TutorialContainer />
    </Layout>
  );
}
