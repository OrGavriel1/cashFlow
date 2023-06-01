import {
  BoxAuth,
  TopBox,
  MyInput,
  ButtonSubmit,
} from "../LoginPage/LoginPageStyled";
import {
  Box,
  Typography,
  InputAdornment,
  Divider,
  useMediaQuery,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { useTranslation } from "react-i18next";

const ForgetPassword = () => {
  const { t } = useTranslation();
  const email = t("email");
  const phoneNumber = t("phoneNumber");
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
          placeholder={email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <Divider sx={{ width: "85%", margin: "3rem 0" }}>{t("or")}</Divider>
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
        <ButtonSubmit variant="contained" type="submit">
          {t("send")}
        </ButtonSubmit>
      </Box>
    </BoxAuth>
  );
};

export default ForgetPassword;
