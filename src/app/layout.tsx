import { getServerSession } from 'next-auth';

import { Header } from '@/components/header/Header';
import { ReactQueryProvider } from '@/utils/providers/ReacrQueryProvider';
import { AuthProvider } from '@/utils/providers/AuthProvider';

import './globals.css';

export default async function Layout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession();
    const user = session?.user?.email as string;
    const name = session?.user?.name as string;
    const img = session?.user?.image as string;
    return (
        <ReactQueryProvider>
            <html lang="en">
                <body>
                    <AuthProvider>
                        <Header name={name} user={user} img={img} />
                        <main>
                            <div className="container">{children}</div>
                        </main>
                    </AuthProvider>
                </body>
            </html>
        </ReactQueryProvider>
    );
}
