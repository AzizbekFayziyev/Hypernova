import { Typography } from "@mui/material";
import { FC } from "react";

// Main title component
const Title: FC<{ content: string }> = ({ content }) => {
  return (
    <Typography data-aos="fade-up" data-aos-duration="1000" sx={{ my: 6 }} variant="h4" fontWeight={600} textAlign="center">
      {content}
    </Typography>
  );
};

export default Title;
