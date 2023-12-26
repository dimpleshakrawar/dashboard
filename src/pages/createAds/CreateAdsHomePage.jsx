import AdsCard from "../../components/AdsCard";
import TextAdImage from "../../assets/textAd.png";
import MediaAdImage from "../../assets/videoAd.png";

const CreateAdsHomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "3rem",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        flexWrap: "wrap",
      }}
    >
      <AdsCard text={"Text"} image={TextAdImage} />
      <AdsCard text={"Media"} image={MediaAdImage} />
    </div>
  );
};

export default CreateAdsHomePage;
