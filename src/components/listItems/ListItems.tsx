'use client';
import React from 'react';

import { List, ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import { theme } from '@/utils/mui/theme';
import { useItemsQuery } from '@/utils/hooks/reactQuery/useItemsQuery';
import { ListItemTextEl } from './listItemText/ListItemText';
import { ListItemform } from './listItemForm/ListItemForm';
import { Spiner } from '../spiner/Spiner';
import { IsEmpty } from '../isEmpty/IsEmpty';
import { IListItems } from '@/utils/types/types';

import 'react-toastify/dist/ReactToastify.css';

const ListItems = ({ filter, user }: IListItems) => {
    const [isEditable, setIsEditable] = React.useState<string>('');
    const { data: items, isLoading: dataIsLoading } = useItemsQuery(filter, user);

    if (dataIsLoading) return <Spiner />;
    if (items?.length === 0) return <IsEmpty />;
    return (
        <ThemeProvider theme={theme}>
            <List sx={{ margin: '0 auto', maxWidth: '1000px' }}>
                {items?.map((e) => {
                    return isEditable === e._id ? (
                        <ListItemform key={e._id} item={e} setIsEditable={setIsEditable} />
                    ) : (
                        <ListItemTextEl
                            key={e._id}
                            item={e}
                            setIsEditable={setIsEditable}
                            isEditable={isEditable}
                            filter={filter}
                        />
                    );
                })}
            </List>
            <ToastContainer autoClose={1000} />
        </ThemeProvider>
    );
};

export default ListItems;
