'use client'
import * as React from 'react';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Checkbox,
    Input,
    ThemeProvider
} from '@mui/material';
import { TypographyStyled } from './ListItem.styled';
import { theme } from '@/utils/mui/theme';
import { Icons } from './icons/Icons';
import { Iitems } from '@/utils/api/items';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useItemsQuery, useMutateCompletedQuery } from '@/utils/hooks/reactQuery/useItemsQuery';
import { queryClient } from '@/app/layout';
// import { MutationCache } from 'react-query';

const ListItems = ({ filter }: { filter: string }) => {
    const { data, isLoading } = useItemsQuery(filter);
    const { mutate: toggleCompleted } = useMutateCompletedQuery();

    // const mutation = useMutateCompletedQuery();

    const [isEditable, setIsEditable] = React.useState<string>();
    const [editableText, setEditableText] = React.useState<Iitems>();

    const handleToggle = async (item: Iitems) => {
        await toggleCompleted({ item, filter });
    };
    // const test = queryClient.getQueryData(['items', 'viewAll']);
    // console.log(test);


    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.name === 'value') {
            setEditableText((prevText) => {
                if (prevText) {
                    return {
                        ...prevText,
                        value: e.target.value,
                    };
                }
                return prevText;
            });
        };
        if (e.target.name === 'quantity' && typeof (+e.target.value) === 'string') {

            return

        } else {
            setEditableText((prevText) => {
                if (prevText) {
                    return {
                        ...prevText,
                        quantity: +e.target.value,
                    };
                }
                return prevText;
            });

        }

    };
    const handleTextBlur = () => {
        setIsEditable('0');
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
                                <Icons id={e._id} />
                            }
                            sx={{ borderBottom: '1px solid #999' }}
                        >
                            <ListItemButton
                                onClick={() => handleToggle(e)}
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
                                <ListItemText
                                    sx={{ width: '100%', marginRight: '10px' }}
                                    id={`line-item-${e._id}`}
                                    primary={
                                        isEditable === e._id ? (
                                            <Input
                                                name='value'
                                                type="text"
                                                value={editableText?.value}
                                                onChange={e => handleTextChange(e)}
                                                // onBlur={handleTextBlur}
                                                autoFocus
                                                fullWidth={true}
                                                sx={{
                                                    width: '100%',
                                                    color: '#999',
                                                    overflow: 'hidden',
                                                    textOverflow: 'hidden',
                                                    whiteSpace: 'nowrap'
                                                }}
                                            />
                                        ) : (
                                            <TypographyStyled
                                                className={e.completed ? 'checked' : ''}
                                                noWrap
                                            >{e.value}</TypographyStyled>
                                        )}
                                />
                                <ListItemText
                                    id={`line-item-${e._id}`}
                                    sx={{ textAlign: 'end' }}
                                    primary={
                                        isEditable === e._id ? (
                                            <Input
                                                name='quantity'
                                                type="text"
                                                value={editableText?.quantity}
                                                onChange={e => handleTextChange(e)}
                                                onBlur={handleTextBlur}
                                                // autoFocus
                                                fullWidth={true}
                                                sx={{
                                                    width: '100%',
                                                    color: '#999',
                                                    overflow: 'hidden',
                                                    textOverflow: 'hidden',
                                                    whiteSpace: 'nowrap'
                                                }}
                                            />
                                        ) : (
                                            <TypographyStyled
                                                className={e.completed ? 'checked' : ''}
                                                noWrap
                                            >{e.quantity}</TypographyStyled>
                                        )}
                                />
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