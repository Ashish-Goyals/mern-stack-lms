import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { appStore } from "./app/store.js";
import { Provider } from "react-redux";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./components/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={appStore}>
        <App />
        <Toaster />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
