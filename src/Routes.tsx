import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const PhotographyWebsite = React.lazy(() => import("pages/PhotographyWebsite"));
const Components = React.lazy(() => import("pages/Components"));
const Typography = React.lazy(() => import("pages/Typography"));
const PhotographyWebsiteOne = React.lazy(
  () => import("pages/PhotographyWebsiteOne")
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/photographywebsiteone"
            element={<PhotographyWebsiteOne />}
          />
          <Route path="/typography" element={<Typography />} />
          <Route path="/components" element={<Components />} />
          <Route path="/photographywebsite" element={<PhotographyWebsite />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
