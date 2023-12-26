import { PropTypes } from "prop-types";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart({ data }) {
  return (
    <div
      style={{
        width: "260px",
        height: "260px",
      }}
    >
      <Doughnut data={data} />
    </div>
  );
}

DoughnutChart.propTypes = {
  data: PropTypes.object,
};
