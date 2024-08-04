import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingOverlay from "./components/Common/LoadingOverlay";
import DefaultLayout from "./layouts/defaultLayout";

// LAZY COMPONENTS
const HomePage = lazy(() => import("./pages/home/index"));
const PhotoPage = lazy(() => import("./pages/photos/index"));
const LoginPage = lazy(() => import("./pages/login"));
const UserPage = lazy(() => import("./pages/user"));
const ImagePage = lazy(() => import("./pages/image/index"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={LoadingOverlay}>
        <Routes>
          <Route path="/" element={<DefaultLayout />} >
            <Route index element={<HomePage />} />
            <Route path="/image/:name" element={<ImagePage />} />
          </Route>
          <Route path="/photos" element={<PhotoPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/:userId" element={<UserPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
