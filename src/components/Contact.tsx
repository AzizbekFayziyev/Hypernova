import { Facebook, Instagram, Send, Telegram } from "@mui/icons-material";
import { Button, Container, TextField, Typography, useMediaQuery } from "@mui/material";

// Contact form section
const Contact = () => {
  const media = useMediaQuery("(max-width: 880px)");

  return (
    <>
      <img
      data-aos="fade-in" data-aos-duration="1000"
        className="my-28 min-h-[50px]"
        width="100%"
        src="./partners.png"
        alt="partners image"
      />

      <Container maxWidth="xl">
        <div className="contact">
          <div data-aos="fade-right" data-aos-duration="1000" className="contact__info">
            <Typography variant="h5" sx={{ mb: 4 }}>
              Bog‘lanish
            </Typography>

            <Typography variant="body2" gutterBottom>
              E-mail
            </Typography>
            <Typography color="text.secondary" variant="body2">
              @umidtillayev88.mail.com
            </Typography>

            <div className="my-8">
              <Typography variant="body2" gutterBottom>
                Telefon raqam:
              </Typography>
              <Typography variant="body2">
                +998{" "}
                <Typography
                  variant="body2"
                  display="inline-block"
                  color="text.secondary"
                >
                  99 999 99 99
                </Typography>
              </Typography>
            </div>

            <Typography variant="body2">Ijtimoiy tarmoqlar</Typography>
            <div className="flex mt-4">
              <div className="social">
                <Telegram />
              </div>

              <div className="social">
                <Instagram />
              </div>

              <div className="social">
                <Facebook />
              </div>
            </div>
          </div>

          <form data-aos="fade-left" data-aos-duration="1000">
            <TextField sx={{width: media ? "280px" : "600px", my: 3}} variant="standard" label="Ismingiz..." />
            <TextField sx={{width: media ? "280px" : "600px", my: 3}}
              variant="standard"
              label="E-mail yoki telefon raqamingiz..."
            />
            <TextField sx={{width: media ? "280px" : "600px", my: 3}} variant="standard" label="Ma’lumot..." />
            <Button variant="contained" size="large" className="gradient">
              Yuborish <Send sx={{ ml: 1 }} />
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
