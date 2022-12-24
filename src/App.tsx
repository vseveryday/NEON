import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/Main/MainPage";
import MainLayout from "./layouts/MainLayout";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

function App() {
  return (
    <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<div>Идет загрузка...</div>}>
                  <MainPage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
  );
}

export default App;
