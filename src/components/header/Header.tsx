'use client'
import { Tooltip } from '@mui/material'

import LogoutIcon from '@mui/icons-material/Logout';
import { HeaderStyled } from './Header.styled';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
export const Header = ({ name, user, img }: { user: string, name: string, img: string }) => {
    console.log(name);

    return (
        <HeaderStyled style={{ textAlign: 'right' }}>
            {user ?
                <>

                    <Image src={img} alt='user image' width={50} height={50} />
                    <p>Welcome {name}!</p>
                    <Tooltip title="LogOut">
                        <LogoutIcon
                            fontSize='large'
                            onClick={() => signOut({ callbackUrl: '/' })}
                            sx={{ cursor: 'pointer', ":hover": { fill: 'white' } }} />
                    </Tooltip>
                </>
                : ''}
        </HeaderStyled>
    )
}