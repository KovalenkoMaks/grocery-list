'use client'
// import { ReactQueryProvider } from '@/utils/providers/ReacrQueryProvider'
import './globals.css'
// import { QueryClient, QueryClientProvider } from 'react-query';
// // import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// // import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


export const queryClient = new QueryClient()
export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body>
          <div className="container">
            {children}
            <ReactQueryDevtools initialIsOpen={false} />

          </div>
        </body>
      </html>
    </QueryClientProvider>

  );
}