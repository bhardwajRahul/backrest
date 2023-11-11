import * as React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./views/App";
import { RecoilRoot } from "recoil";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { AlertContextProvider } from "./components/Alerts";

const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <AlertContextProvider>{children}</AlertContextProvider>
    </RecoilRoot>
  );
};

const el = document.querySelector("#app");
el &&
  createRoot(el).render(
    <Root>
      <App />
    </Root>
  );
