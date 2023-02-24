import {Button, ButtonProps, styled} from "@mui/material";
import {purple} from "@mui/material/colors";

export const ColorButtonPMB = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    width: "200px",
    height: "50px",
    marginTop: "100px",
    marginLeft: "100px",
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));
