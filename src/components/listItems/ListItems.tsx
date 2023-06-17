'use client'
import * as React from 'react';
import { List, ThemeProvider } from '@mui/material';
import { theme } from '@/utils/mui/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useItemsQuery } from '@/utils/hooks/reactQuery/useItemsQuery';
import { ListItemTextEl } from './listItemText/ListItemText';
import { ListItemForm } from './listItemForm/ListItemForm';
import { Spiner } from '../spiner/Spiner';

const ListItems = ({ filter }: { filter: string }) => {
    const { data: items, isLoading } = useItemsQuery(filter);
    const [isEditable, setIsEditable] = React.useState<string>('');

    if (isLoading) return <Spiner />
    return (
        <ThemeProvider theme={theme}>
            <List
                sx={{ margin: '0 auto', maxWidth: '1000px' }}>
                {items?.map((e) => {
                    return (
                        isEditable === e._id
                            ?
                            <ListItemForm key={e._id}
                                item={e}
                                setIsEditable={setIsEditable}
                            />
                            :
                            <ListItemTextEl key={e._id}
                                item={e}
                                setIsEditable={setIsEditable}
                                isEditable={isEditable}
                                filter={filter}
                            />
                    )
                })}
            </List >
            <ToastContainer autoClose={1000} />
        </ThemeProvider >
    );
}

export default ListItems