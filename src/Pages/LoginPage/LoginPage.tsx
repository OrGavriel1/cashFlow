import { FC, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  InputAdornment,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next";
// icons
import LockIcon from "@mui/icons-material/Lock";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
// style component
import {
  BottomBox,
  BoxAuth,
  ButtonSubmit,
  CheckCircleIconNew,
  MyInput,
  TopBox,
} from "./LoginPageStyled";

const LoginPage: FC = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const phoneInput = useRef<HTMLInputElement | null>(null);
  const passwordInput = useRef<HTMLInputElement | null>(null);
  const { t } = useTranslation();
  const phoneNumber = t("phoneNumber");
  const password = t("password");

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(phoneInput.current?.value);
    console.log(passwordInput.current?.value);
    console.log("GOING TO BACKEND....");

    setTimeout(() => {
      if (Math.random() > 0.5) {
        // success
      } else {
        // error
      }
    }, 1000);
  };

  return (
    <BoxAuth>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width={isDesktop ? "50%" : "100%"}
        onSubmit={onSubmitHandler}
      >
        <MyInput
          placeholder={phoneNumber}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIphoneIcon color="primary" />
              </InputAdornment>
            ),
          }}
          inputRef={phoneInput}
        />
        <MyInput
          placeholder={password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon color="primary" />
              </InputAdornment>
            ),
          }}
          inputRef={passwordInput}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel
            sx={{ margin: "0" }}
            control={
              <Checkbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIconNew />}
              />
            }
            label={t("rememberMe")}
          />
          <Link to="/forgetPassword">{t("forgetPassword")}</Link>
        </Box>
        <ButtonSubmit variant="contained" type="submit">
          {t("connect")}
        </ButtonSubmit>
      </Box>
      <BottomBox>
        <Typography margin="0 1rem" color="gray">
          {t("noUser")}
        </Typography>
        <Link to="/register">
          <Button color="primary">{t("signUp")}</Button>
        </Link>
      </BottomBox>
    </BoxAuth>
  );
};

export default LoginPage;
