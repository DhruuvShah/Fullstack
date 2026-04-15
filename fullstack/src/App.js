/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Layout } from "./components/Layout";
import { Basics } from "./pages/Basics";
import { Tools } from "./pages/Tools";
import { Data } from "./pages/Data";
import { Backend } from "./pages/Backend";
function App() {
  return <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Basics />} />
            <Route path="tools" element={<Tools />} />
            <Route path="data" element={<Data />} />
            <Route path="backend" element={<Backend />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>;
}
export {
  App as default
};
