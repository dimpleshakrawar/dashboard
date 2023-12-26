import { createSlice } from "@reduxjs/toolkit";
import adDummyData from "../../dummyData.json";
import incompleteDummyData from "../../incompleteData.json";

const dataWithCampaigns = adDummyData;
const dummyData = incompleteDummyData;
const adSlice = createSlice({
  name: "ads",
  initialState: {
    newAdData: [],
    adsData: dataWithCampaigns,
  },
  reducers: {
    addNewAd: (state, action) => {
      state.newAdData.push(action.payload);

      const randomIndex = Math.floor(
        Math.random() * incompleteDummyData.length
      );
      const randomObject = dummyData[randomIndex];

      if (randomObject !== undefined) {
        const adData = {
          ...randomObject,
          campaigns: action.payload.businessName,
        };

        state.adsData.push(adData);
      }
    },
  },
});

export const { addNewAd } = adSlice.actions;
export const selectAds = (state) => state.ads.adsData;
export default adSlice.reducer;
