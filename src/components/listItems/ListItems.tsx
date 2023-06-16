'use client'
import * as React from 'react';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Checkbox,
    ThemeProvider,
} from '@mui/material';
import { TypographyStyled } from './ListItem.styled';
import { theme } from '@/utils/mui/theme';
import { Icons } from './icons/Icons';
import { Iitems } from '@/utils/api/items';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useItemsQuery, useMutateCompletedQuery } from '@/utils/hooks/reactQuery/useItemsQuery';
import { EditForm } from '../editForm/EditForm';

const ListItems = ({ filter }: { filter: string }) => {
    const { data, isLoading } = useItemsQuery(filter);
    const { mutate: toggleCompleted } = useMutateCompletedQuery();
    const [isEditable, setIsEditable] = React.useState<string>('');

    const handleToggle = (item: Iitems) => {
        if (isEditable !== '') return;
        toggleCompleted({ item, filter });
    };

    if (isLoading) return <div>Loading...</div>
    return (
        <ThemeProvider theme={theme}>
            <List
                sx={{ margin: '0 auto', maxWidth: '1000px' }}>
                {data?.map((e) => {
                    const labelId = `checkbox-list-label-${e.value}`;
                    return (
                        <ListItem
                            key={e._id}
                            secondaryAction={
                                <Icons
                                    item={e}
                                    id={e._id}
                                    isEditable={isEditable}
                                    setIsEditable={setIsEditable}
                                />
                            }
                            sx={{
                                borderBottom: '1px solid #999',

                            }}
                        >
                            <ListItemButton
                                focusVisibleClassName={'edit'}
                                disableGutters
                                onClick={() => handleToggle(e)}
                                sx={{
                                    '&.edit': {
                                        backgroundColor: '#222222',
                                    },
                                }}
                            >
                                <ListItemIcon>
                                    <Checkbox
                                        checked={e.completed}
                                        inputProps={{ 'aria-labelledby': labelId }}
                                        sx={{
                                            color: '#999',
                                            '&.Mui-checked': {
                                                color: '#454545',
                                            }
                                        }}
                                    />
                                </ListItemIcon>

                                {isEditable === e._id
                                    ?
                                    <EditForm
                                        setIsEditable={setIsEditable}
                                        item={e}
                                    />
                                    :
                                    <>
                                        <ListItemText
                                            sx={{ width: '100%', marginRight: '10px' }}
                                            id={`line-item-${e._id}`}
                                            primary={
                                                <TypographyStyled
                                                    className={e.completed ? 'checked' : ''}
                                                    noWrap
                                                >{e.value}</TypographyStyled>
                                            }
                                        />
                                        <ListItemText
                                            id={`line-item-${e._id}`}
                                            sx={{ textAlign: 'end' }}
                                            primary={
                                                <TypographyStyled
                                                    className={e.completed ? 'checked' : ''}
                                                    noWrap
                                                >{e.quantity}</TypographyStyled>
                                            }
                                        />
                                    </>
                                }
                            </ListItemButton>
                        </ListItem >
                    );
                })}
            </List >
            <ToastContainer autoClose={1000} />
        </ThemeProvider >
    );
}

export default ListItems