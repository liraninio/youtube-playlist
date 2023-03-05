import  Box  from '@mui/material/Box';;
import {CustomBoxProps} from '../models/types';



const CustomBox = ({ children }: CustomBoxProps) => {
    return (
        <Box
            sx={{
                border: 1,
                p: 2,
                borderColor: "grey.300",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "normal",
                height: "470px",
                overflowY: "auto",
            }}

        >
            {children}
        </Box>
    );
};

export default CustomBox;
