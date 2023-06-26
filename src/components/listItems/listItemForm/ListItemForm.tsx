import React from 'react';

import { ListItem, ListItemButton } from '@mui/material';

import { EditForm } from '@/components/editForm/EditForm';
import { ListItemForm } from '@/utils/types/types';

export const ListItemform = ({ item, setIsEditable }: ListItemForm) => {
    const listItemRef = React.useRef<HTMLLIElement>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (listItemRef.current && !listItemRef.current.contains(e.target as Node)) {
            setIsEditable('');
            document.removeEventListener('click', handleClickOutside);
        }
    };
    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ListItem
            ref={listItemRef}
            key={item._id}
            sx={{
                borderBottom: '1px solid #999',
            }}
        >
            <ListItemButton
                focusVisibleClassName={'edit'}
                disableGutters
                sx={{
                    '&.edit': {
                        backgroundColor: '#222222',
                    },
                }}
            >
                {/* <CheckBox item={item } /> */}

                <EditForm item={item} setIsEditable={setIsEditable} />
            </ListItemButton>
        </ListItem>
    );
};
