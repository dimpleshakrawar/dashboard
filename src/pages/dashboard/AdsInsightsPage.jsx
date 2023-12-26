import { useState } from "react";
import { useSelector } from "react-redux";
import { Chart as ChartJS } from "chart.js/auto";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { Grid, Typography, Button } from "@mui/material";
import AdsTable from "../../components/AdsTable";
import { selectAds } from "../../store/adSlice";
import DoughnutChart from "../../components/DoughnutChart";
import SelectButton from "../../components/SelectButton";
import ToggleTable from "../../components/ToggleTable";

const AdsInsightsPage = () => {
  const adsData = useSelector(selectAds);
  const [doughnutData, setDoughnutData] = useState();
  const [toggleSwitch, setToggleSwitch] = useState("doughnut");
  const [toggleTableData, setToggleTableData] = useState();

  let matrixDropdown = Object.keys(adsData[0]).slice(2);

  let labels = [];
  let data = [];

  const toggleViewHandler = () => {
    if (toggleSwitch === "doughnut") setToggleSwitch("tabular");
    else {
      setToggleSwitch("doughnut");
    }
  };

  const handleChange = (e) => {
    adsData.forEach((element) => {
      data.push(element[e.target.value]);
      labels.push(element.campaigns);
      data[element.campaigns] = element[e.target.value];
      setToggleTableData((prev) => ({
        ...prev,
        [element.campaigns]: element[e.target.value],
      }));
    });
    setDoughnutData({
      labels: labels,
      datasets: [
        {
          label: "Ad Insights",
          data: data,
        },
      ],
      hoverOffset: 4,
    });
  };

  return (
    <Grid container columnGap={3}>
      <Grid item xs={12} sm={6} md={6}>
        <AdsTable rows={adsData} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={5}
        style={{
          backgroundColor: "white",
          padding: "0.5rem",
          height: "375px",
          borderRadius: "0.5rem",
        }}
      >
        <Grid container alignItems={"center"}>
          <Grid item xs={12} sm={6} md={5}>
            <Typography variant="h6">Ad Insight</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <SelectButton
              label={"Select"}
              fullWidth={true}
              handleChange={handleChange}
              menuData={matrixDropdown}
              defaultValue={"click"}
            />
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          style={{ height: "260px" }}
        >
          {toggleSwitch === "doughnut"
            ? doughnutData && <DoughnutChart data={doughnutData} />
            : toggleTableData && <ToggleTable rows={[toggleTableData]} />}
        </Grid>
        <Grid style={{ width: "100%", textAlign: "end" }}>
          <Button variant="contained" size="small" onClick={toggleViewHandler}>
            {toggleSwitch === "doughnut" ? "Table view" : "Pie Chart"}
            <ToggleOnIcon sx={{ fontSize: 40 }} />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdsInsightsPage;
