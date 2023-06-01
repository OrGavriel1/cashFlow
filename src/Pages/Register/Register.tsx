import { Box, Divider, InputAdornment, useMediaQuery } from "@mui/material";
//icons
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LockIcon from "@mui/icons-material/Lock";
//style component
import { BoxAuth, ButtonSubmit, MyInput } from "../LoginPage/LoginPageStyled";
import { useTranslation } from "react-i18next";

const NewUser = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const { t } = useTranslation();
  const fullName = t("fullName");
  const email = t("email");
  const phoneNumber = t("phoneNumber");
  const password = t("password");
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
          placeholder={fullName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <MyInput
          placeholder={email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <MyInput
          placeholder={phoneNumber}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIphoneIcon />
              </InputAdornment>
            ),
          }}
        />
        <MyInput
          placeholder={password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
        <ButtonSubmit variant="contained" type="submit">
          {t("signUp")}
        </ButtonSubmit>
      </Box>
      <Divider sx={{ width: "85%", marginTop: "3rem" }}>
        {t("connectWith")}
      </Divider>
    </BoxAuth>
  );
};

export default NewUser;
