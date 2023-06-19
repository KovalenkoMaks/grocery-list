'use client'
import { signIn } from "next-auth/react"
import { LinkStyled } from "./SignInLink.styled"

export const SignInLink = () => {
    return (
        <LinkStyled onClick={() => signIn('google', { callbackUrl: '/list' })}>Create your list</LinkStyled>
    )
}