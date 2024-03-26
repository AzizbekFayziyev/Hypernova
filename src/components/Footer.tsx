import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Telegram,
} from "@mui/icons-material";
import { Container, Divider, Typography, useMediaQuery } from "@mui/material";

const Footer = () => {
  const media = useMediaQuery("(max-width: 580px)");

  return (
    <footer>
      <Container className="container" maxWidth="lg">
        <div
          className={`flex items-center ${media && "flex-col"} justify-between`}
        >
          <div>
            <img src="./logo.png" alt="hypernova logo" />
            <Typography>
              Aloqa uchun : <span className="text-gray-700">+998 99</span> 449
              01 00
            </Typography>
          </div>

          {!media && (
            <>
              <div>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                  Xizmatlar
                </Typography>

                <Typography gutterBottom>Portfolio</Typography>
                <Typography gutterBottom>Jamoa</Typography>
                <Typography gutterBottom>Aloqa</Typography>
              </div>

              <div>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                  Xizmatlar
                </Typography>

                <Typography gutterBottom>Telegram bot yaratish</Typography>
                <Typography gutterBottom>CRM</Typography>
                <Typography gutterBottom>Web site yaratish</Typography>
                <Typography gutterBottom>Online do‘kon</Typography>
                <Typography gutterBottom>Mobil ilova</Typography>
              </div>
            </>
          )}
        </div>

        <Divider sx={{ borderWidth: "1px", mt: 2, borderColor: "#fff" }} />

        <div className="flex mt-6 mb-10 justify-center">
          <div className="social">
            <Telegram />
          </div>

          <div className="social">
            <Instagram />
          </div>

          <div className="social">
            <Facebook />
          </div>
          <div className="social">
            <LinkedIn />
          </div>
          <div className="social">
            <Email />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
