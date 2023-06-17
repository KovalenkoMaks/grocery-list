import { ReactQueryProvider } from '@/utils/providers/ReacrQueryProvider';
import './globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <ReactQueryProvider>
      <html lang="en">
        <body>
          <div className="container">
            {children}
          </div>
        </body>
      </html>
    </ReactQueryProvider>
  );
}