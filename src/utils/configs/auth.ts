import type { AuthOptions, User } from 'next-auth'
import GoggleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'

export const authConfig: AuthOptions = {
    providers: [
        GoggleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],
    // pages: {
    //     signIn: '/signin'
    // }
}