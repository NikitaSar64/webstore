'use client'

import { QueryClientProvider, QueryClient } from "react-query";
import { Layout } from "@/layout/Layout";
import { DetailPageContainer } from "@/containers";

const queryClient = new QueryClient()

export default function DetailPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <DetailPageContainer/>
      </Layout> 
    </QueryClientProvider>
  )
}