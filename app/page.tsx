import { Layout } from "@/components";
import {
  ProductContainer,
  SearchContainer,
  TrandingContainer,
} from "@/containers";

export default function Home() {
  return (
    <>
      <Layout />
      <SearchContainer />
      <ProductContainer />
      <TrandingContainer />
    </>
  );
}
