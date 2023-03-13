'use client'

import { Layout } from "@/layout/Layout";
import { HeroContainer, AdvantagesContainer, OfferContainer } from "@/containers";

export default function Home() {
  return (
    <>
      <Layout>
        <HeroContainer/>
        <AdvantagesContainer/>
        <OfferContainer/>
      </Layout>
    </>
  )
}
