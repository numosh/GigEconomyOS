import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Layout
import Layout from '@shared/components/Layout'

// Module Pages
import Dashboard from '@modules/marketplace/pages/Dashboard'
import MarketplacePage from '@modules/marketplace/pages/MarketplacePage'
import SupportPage from '@modules/support/pages/SupportPage'
import CollectivePage from '@modules/collective/pages/CollectivePage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />

            {/* LAYER 1: Marketplace */}
            <Route path="/marketplace" element={<MarketplacePage />} />

            {/* LAYER 2: Support */}
            <Route path="/support" element={<SupportPage />} />

            {/* LAYER 3: Collective */}
            <Route path="/collective" element={<CollectivePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
