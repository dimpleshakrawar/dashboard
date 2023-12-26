import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import {
  CardMedia,
  Divider,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdsCard = ({ text, image }) => {
  const navigate = useNavigate();
  const formNavigateHandler = () => {
    if (text === "Text")
      navigate("/createAds/textAd", { state: { type: "textAd" } });
    else if (text === "Media")
      navigate("/createAds/mediaAd", { state: { type: "mediaAd" } });
  };

  return (
    <Card sx={{ width: 250 }}>
      <CardActionArea>
        <input
          type="checkbox"
          style={{ zoom: "1.5" }}
          onClick={formNavigateHandler}
        />
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
        />
        <Divider />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Create
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {text} Ad
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AdsCard;

AdsCard.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
};
