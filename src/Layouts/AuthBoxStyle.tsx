import { Box, styled } from "@mui/material";

export const ImgBox = styled(Box)(({ theme }) => ({
  width: "80px",
  height: "80px",
  position: "absolute",
  left: "20rem",
}));

type CoverImgProps = {
  showimg: string;
};

export const CoverImg = styled(Box)<CoverImgProps>(({ theme, showimg }) => ({
  height: "100%",
  width: "100%",
  display: showimg === "true" ? "flex" : "none",

  [theme.breakpoints.up("md")]: {
    height: "800px",
    width: "50%",
    display: "flex",
  },
}));
