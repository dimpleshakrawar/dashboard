import { Route, Routes, Navigate } from "react-router-dom";
import CreateAdsRoute from "./CreateAdsRoute";
import AdsInsightsPage from "../pages/dashboard/AdsInsightsPage";

const IndexRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AdsInsightsPage />} />
      <Route path="/createAds/*" element={<CreateAdsRoute />} />
      <Route path="*" element={<Navigate replace to="" />} />
    </Routes>
  );
};

export default IndexRoute;
