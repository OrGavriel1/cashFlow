import { FC } from "react";
import { Box, Typography, IconButton } from "@mui/material";
// icons
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { BoxAuth, TopBox } from "../Pages/LoginPage/LoginPageStyled";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { CoverImg, ImgBox } from "./AuthBoxStyle";
import { useTranslation } from "react-i18next";

interface AuthBoxProps {}

const AuthBox: FC<AuthBoxProps> = () => {
  const { t } = useTranslation();

  const title = {
    "/": t("welcome"),
    "/register": t("newUser"),
    "/forgetPassword": t("resetPassword"),
  };

  const secondeTitle = {
    "/": t("loginToUser"),
    "/register": t("createNewUser"),
    "/forgetPassword": t("linkToReset"),
  };

  const navigate = useNavigate();
  const currentPage = useLocation();
  const showImg = currentPage.pathname === "/";

  return (
    <Box display="flex" sx={{ flexDirection: { xs: "column", sm: "row" } }}>
      <CoverImg
        showimg={showImg.toString()}
        component="img"
        src="https://i0.wp.com/realmumreview.com/wp-content/uploads/2018/06/money.jpg?resize=1080%2C675&ssl=1"
      />

      <BoxAuth>
        <TopBox>
          <ImgBox
            component="img"
            src="https://img.freepik.com/free-vector/piggy-bank_53876-25494.jpg?w=740&t=st=1682325255~exp=1682325855~hmac=96f769a6f7fc9c4bb38bd54dbba590b32e15ea19b94516adf481dad3b873c410"
          />
          {!(currentPage.pathname === "/") && (
            <IconButton
              sx={{
                position: "absolute",
                right: "20rem",
                backgroundColor: "#dae5dd",
              }}
              onClick={() => navigate(-1)}
            >
              <NavigateBeforeIcon />
            </IconButton>
          )}
          <Typography variant="h3" color="primary">
            {title[currentPage.pathname as keyof typeof title]}
          </Typography>
          <Typography
            variant="h6"
            color="#d9d9d9"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {secondeTitle[currentPage.pathname as keyof typeof title]}
          </Typography>
        </TopBox>
        <Outlet />
      </BoxAuth>
    </Box>
  );
};

export default AuthBox;
