import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import { UseCustomDialog } from "./UseCustomDialog";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <UseCustomDialog />
    </StyledEngineProvider>
  </React.StrictMode>
);
