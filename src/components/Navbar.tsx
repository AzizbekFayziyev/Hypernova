import { Language } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Toolbar,
  Box,
  Link,
  Button,
  IconButton,
  Container,
  List,
  Menu,
  ListItemButton,
  useMediaQuery,
  Divider,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

// NAVIGATION APPBAR
const Navbar = () => {
  const links: string[] = ["Xizmatlar", "Portfolio", "Jamoa"];
  const [lang, setLang] = useState(false);
  const [menu, setMenu] = useState(false);
  const [anchor, setAnchor] = useState<HTMLElement | null>();
  const media = useMediaQuery("(max-width: 720px)");

  const openLang = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLang(true);
    setAnchor(e.currentTarget);
  };

  const openMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMenu(true);
    setAnchor(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchor(null);
    setLang(false);
    setMenu(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: media
            ? "#0000003d"
            : "linear-gradient(to right,#000, #0000003d, #00000000)",
          boxShadow: 0,
          backdropFilter: `blur(8px)`,
        }}
        color="transparent"
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <img src="./logo.png" width={84} alt="hypernova logo" />

            <Box sx={{ display: "flex", alignItems: "center" }}>
              {!media && (
                <ul>
                  {links.map((text, id) => (
                    <Link
                      sx={{ mr: 5 }}
                      key={id}
                      color="text.primary"
                      href="#"
                      underline="none"
                    >
                      {text}
                    </Link>
                  ))}
                </ul>
              )}

              <Box sx={{ ml: 3, display: "flex" }}>
                <IconButton onClick={openLang} edge="start">
                  <Language />
                </IconButton>

                {media ? (
                  <>
                    <Divider
                      sx={{ borderColor: "#dadada" }}
                      flexItem
                      orientation="vertical"
                    />
                    <IconButton onClick={openMenu} edge="end">
                      <MenuIcon fontSize="large" />
                    </IconButton>
                  </>
                ) : (
                  <Button
                    className="gradient"
                    sx={{ ml: 2 }}
                    variant="contained"
                  >
                    Bog‘lanish
                  </Button>
                )}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Language Select Menu */}
      <Menu anchorEl={anchor} open={lang} onClose={closeMenu}>
        <List disablePadding>
          <ListItemButton>
            <img width={30} src="./flags/uz.svg" alt="UZ" />
          </ListItemButton>
          <ListItemButton>
            <img width={30} src="./flags/uk.svg" alt="UK" />
          </ListItemButton>
          <ListItemButton>
            <img width={30} src="./flags/ru.svg" alt="RU" />
          </ListItemButton>
        </List>
      </Menu>
      {/* Navigation MenuF */}
      <Menu anchorEl={anchor} open={menu} onClose={closeMenu}>
        <List disablePadding>
          {links.map((e, id) => (
            <ListItemButton key={id}>
              <ListItemText primary={e} />
            </ListItemButton>
          ))}
        </List>
      </Menu>
    </>
  );
};

export default Navbar;
