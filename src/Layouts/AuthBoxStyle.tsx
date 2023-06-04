import { Box, styled } from "@mui/material";

export const ImgBox = styled(Box)(({ theme }) => ({
  width: "60px",
  height: "60px",
  position: "relative",
  left: "7rem",
  top: "5rem",
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
