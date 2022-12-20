import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import MainPage from "./Pages/Main/MainPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<Loader />}>
                  <MainPage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
  );
}

export default App;
