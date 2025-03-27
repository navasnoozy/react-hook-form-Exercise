import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router";


const qeuryClient = new QueryClient();

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto"].join(","),
    fontSize: 20,
  },
 
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={qeuryClient}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
     <App />
      </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
