import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

// HEADER
const Header = () => {
  const media = useMediaQuery("(max-width: 980px)");
  const mediaSm = useMediaQuery("(max-width: 820px)")

  return (
    <>
      <div className="header">
        <Container className="header__container" maxWidth="xl">
          <div className={`flex items-center justify-between ${mediaSm && "flex-wrap-reverse"}`}>
            <Box maxWidth={800}>
              <Typography data-aos="fade-in" data-aos-duration="2000" variant={!media ? "h2" : "h3"} fontWeight={800}>
                Manage your <span className="text-primary">business</span> with
                our help
              </Typography>

              <Typography data-aos="fade-in" data-aos-duration="3000" maxWidth={600} sx={{ my: 4 }} variant={!media ? "h6" : "body1"} color="text.secondary">
                Professionallardan iborat jamoa biznesingizni yangi bosqichga
                olib chiqadi.
              </Typography>

              <Button data-aos="zoom-in" data-aos-duration="800" className="gradient" variant="contained" size="large">
                Bog‘lanish
              </Button>
            </Box>

            <img data-aos="fade-up" data-aos-duration="1000" width={!mediaSm ? !media ? 540 : 440 : 280} src="./hero.png" alt="hero image" />
          </div>
        </Container>
      </div>

      <div className="scrollToDown">
        <div></div>
      </div>
    </>
  );
};

export default Header;
