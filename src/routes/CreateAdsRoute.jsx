import { Route, Routes } from "react-router-dom";
import CreateAdsHomePage from "../pages/createAds/CreateAdsHomePage";
import CreateNewAdsPage from "../pages/createAds/CreateNewAdsPage";

const CreateAdsRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateAdsHomePage />} />
      <Route path="/textAd" element={<CreateNewAdsPage />} />
      <Route path="/mediaAd" element={<CreateNewAdsPage />} />
    </Routes>
  );
};

export default CreateAdsRoute;
