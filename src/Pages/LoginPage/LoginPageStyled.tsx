import { Box, styled, Button, TextField } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const BoxAuth = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  width: "100%",
}));

export const MyInput = styled(TextField)(({ theme }) => ({
  borderRadius: "8px",
  backgroundColor: theme.palette.secondary.main,

  margin: "0.5rem",
  width: "100%",
  border: "none",
  "& .MuiInputBase-input": {
    color: theme.palette.primary.main,
  },
  "& .MuiInputBase-root": {
    border: "none",
  },
  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
}));

export const ButtonSubmit = styled(Button)(({ theme }) => ({
  marginTop: "5rem",
  marginBottom: "1rem",
  width: "90%",
  height: "3rem",
  fontSize: "1.2rem",
  borderRadius: "50px",
}));

export const CheckCircleIconNew = styled(CheckCircleIcon)(({ theme }) => ({
  color: "primary",
  outline: 0,
}));
export const TopBox = styled(Box)(({ theme }) => ({
  position: "relative",
  margin: "2rem auto",
}));
export const BottomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));
