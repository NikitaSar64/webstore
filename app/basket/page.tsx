'use client'

import { QueryClientProvider, QueryClient } from "react-query";
import { Layout } from "@/layout/Layout";
import { BasketContainer } from "@/containers";

const queryClient = new QueryClient()

export default  function Basket () : JSX.Element {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <BasketContainer/>
            </Layout>
        </QueryClientProvider>
    )
}