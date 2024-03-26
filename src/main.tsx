import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

// MUI theme config
const siteTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8230B2",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={siteTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
