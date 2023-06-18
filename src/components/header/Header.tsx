'use client'
import { Avatar, Tooltip } from '@mui/material'

import LogoutIcon from '@mui/icons-material/Logout';
import { HeaderStyled } from './Header.styled';
import { signOut } from 'next-auth/react';
export const Header = ({ name, user, img }: { user: string, name: string, img: string }) => {

    return (
        <HeaderStyled style={{ textAlign: 'right' }}>
            {user ?
                <>
                    <Avatar alt={name} src={img} />
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