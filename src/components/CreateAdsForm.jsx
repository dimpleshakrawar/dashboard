import { PropTypes } from "prop-types";
import { useLocation } from "react-router-dom";
import { Box, Typography, TextField, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SelectButton from "./SelectButton";

const CreateAdsForm = ({ formSubmitHandler, setFormData, setErrors }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.type;
  let conditionalValidations = {};

  if (data === "mediaAd") {
    conditionalValidations.landscapeMarketing = true;
    conditionalValidations.portraitMarketing = true;
    conditionalValidations.squareMarketing = true;
    conditionalValidations.videoUrl = true;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
        p: 1,
      }}
      noValidate
      autoComplete="off"
      style={{
        backgroundColor: "white",
        border: "1px solid #808080",
        borderRadius: "0.5rem",
      }}
    >
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Create Text & Media
      </Typography>
      <Grid container sx={{ p: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              required
              id="outlined-required"
              name="heading01"
              label="Heading 01"
              placeholder="Add a Heading that would make users interested"
              size="small"
              onChange={handleChange}
              fullWidth
            />
            <TextField
              required
              id="outlined-required"
              name="heading02"
              label="Heading 02"
              placeholder="Add a Heading that would make users interested"
              size="small"
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              required
              id="outlined-required"
              name="description01"
              label="Description 01"
              placeholder="Add primary text to help users understand more about your products,services or offers"
              multiline
              rows={3}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
        {data === "mediaAd" ? (
          <>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={4} md={4}>
                <TextField
                  required
                  id="outlined-required"
                  name="landscapeMarketing"
                  label="Landscape Marketing Image(1.9:1)"
                  placeholder="Add URL of the image you want to use for the ad"
                  size="small"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <TextField
                  required
                  id="outlined-required"
                  name="portraitMarketing"
                  label="Portrait Marketing Image(4:5)"
                  placeholder="Add URL of the image you want to use for the ad"
                  size="small"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <TextField
                  required
                  id="outlined-required"
                  name="squareMarketing"
                  label="Square Marketing Image(1:1)"
                  placeholder="Add URL of the image you want to use for the ad"
                  size="small"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                required
                id="outlined-required"
                name="videoUrl"
                label="Video URL"
                placeholder="Add URL of the video you want to use for the ad"
                size="small"
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </>
        ) : (
          ""
        )}
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              required
              id="outlined-required"
              name="businessName"
              label="Business Name"
              placeholder="Add your business name"
              size="small"
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <SelectButton
              label={"Button Label"}
              handleChange={handleChange}
              fullWidth={true}
              defaultValue={"clicks"}
              menuData={[10, 20, 30]}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} sx={{ mb: 4 }}>
          <TextField
            required
            id="outlined-required"
            name="websiteUrl"
            label="Website URL"
            placeholder="Add the URL of the landing page you want to redirect users to"
            size="small"
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="flex-end"
          alignItems="flex-end"
          sx={{ mb: 1 }}
        >
          <Grid item>
            <Button variant="outlined" onClick={() => navigate(-1)}>
              Back
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => formSubmitHandler(conditionalValidations)}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateAdsForm;

CreateAdsForm.propTypes = {
  formSubmitHandler: PropTypes.func,
  setFormData: PropTypes.func,
  setErrors: PropTypes.func,
  errors: PropTypes.object,
};
