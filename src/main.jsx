import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <Notifications position="top-center" />
      <App />
    </MantineProvider>
  </React.StrictMode>
);
