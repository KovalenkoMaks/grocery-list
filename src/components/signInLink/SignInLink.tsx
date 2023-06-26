'use client';
import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';

import { signIn } from 'next-auth/react';

import { ButtonStyled } from './SignInLink.styled';

export const SignInLink = ({ session }: { session: Session | null }) => {
    const isSession = session === null;
    const router = useRouter();

    const handleClick = () => {
        if (!isSession) {
            router.push('/list');
        } else {
            signIn('google', { callbackUrl: '/list' });
        }
    };
    return (
        <>
            {isSession ? (
                <ButtonStyled onClick={handleClick}>Create your list</ButtonStyled>
            ) : (
                <ButtonStyled onClick={handleClick}>Create your list</ButtonStyled>
            )}
        </>
    );
};
