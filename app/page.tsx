'use client'

import { Layout } from "@/layout/Layout";
import { HeroContainer, AdvantagesContainer, OfferContainer, TrandingContainer, SpecialOfferContainer, OurProductContainer } from "@/containers";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <HeroContainer/>
        <AdvantagesContainer/>
        <OfferContainer/>
        <TrandingContainer/>
        <SpecialOfferContainer/>
        <OurProductContainer/>
      </Layout> 
    </QueryClientProvider>
  )
}
