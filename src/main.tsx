import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CrystallizeProvider } from "@crystallize/reactjs-hooks";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CrystallizeProvider language="en" tenantIdentifier="pltn-stage">
            <App />
        </CrystallizeProvider>
    </StrictMode>
);
