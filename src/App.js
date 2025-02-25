import { Suspense } from "react";
import { SnackbarProvider } from "notistack";
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Welcome } from "./pages/welcome";
import { ThemeConfig } from "./theme/ThemeConfig";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Router basename={"/"}>
          <ThemeConfig>
            <Routes>
              <Route path="/">
                <Route index element={<Navigate to="welcome" />} />
                <Route
                  path="welcome"
                  element={<Welcome />}
                />
              </Route>
            </Routes>
          </ThemeConfig>
        </Router>
      </SnackbarProvider>
    </Suspense>
  );
}

export default App;
