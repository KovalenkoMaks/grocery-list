import { Button, Tooltip } from "@mui/material"
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

type SetIsEditable = {
    setIsEditable: (value: string) => void;
}

export const IconsBtn = ({ setIsEditable }: SetIsEditable) => {
    return (<>
        <Tooltip title="done">
            <Button
                type="submit"
                name="done"
                sx={{
                    minWidth: '10px',
                    textAlign: 'center',
                    padding: '0',
                    ":hover": { backgroundColor: '#222222' }
                }}
            >
                <DoneIcon sx={{
                    zIndex: 99,
                    fill: '#0080006e', marginRight: '10px',
                    ":hover": { fill: '#00ff00' }
                }} />
            </Button>
        </Tooltip>
        <Tooltip title="Cancel">
            <Button
                onClick={() => setIsEditable('')}
                name="cancel"
                sx={{
                    minWidth: '10px',
                    textAlign: 'center',
                    padding: '0',
                    ":hover": { backgroundColor: '#222222' }
                }}
            >
                <CloseIcon
                    sx={{ fill: '#ff00006e', ":hover": { fill: '#ff0000' } }} />
            </Button>
        </Tooltip>
    </>
    )
}