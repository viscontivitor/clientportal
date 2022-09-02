const {StrictMode } = require ("react");
const { createRoot } = require("react-dom/client");
import App from "./views/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)

