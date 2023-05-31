import { Box, Divider, InputAdornment, useMediaQuery } from "@mui/material";
//icons
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LockIcon from "@mui/icons-material/Lock";
//style component
import { BoxAuth, ButtonSubmit, MyInput } from "../LoginPage/LoginPageStyled";

const NewUser = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  return (
    <BoxAuth>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width={isDesktop ? "50%" : "100%"}
      >
        <MyInput
          placeholder="שם מלא"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <MyInput
          placeholder="אימייל"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <MyInput
          placeholder="מס' פלאפון"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIphoneIcon />
              </InputAdornment>
            ),
          }}
        />
        <MyInput
          placeholder="סיסמא"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
        <ButtonSubmit variant="contained" type="submit">
          הירשם
        </ButtonSubmit>
      </Box>
      <Divider sx={{ width: "85%", marginTop: "3rem" }}>או התחבר עם</Divider>
    </BoxAuth>
  );
};

export default NewUser;
