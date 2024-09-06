// components/LineChart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const data = {
  labels: ["January", "February", "March", "April"],
  datasets: [
    {
      label: "Sales",
      data: [100, 200, 150, 300],
      borderColor: "#3498db",
      backgroundColor: "rgba(52, 152, 219, 0.5)",
      fill: true,
    },
  ],
};

export default function LineChart({ stats }) {
  const data = {
    labels: ["Leads", "Conversions", "Bounced"],
    datasets: [
      {
        label: "Statistics Over Time",
        data: [stats.leads, stats.conversions, stats.bounced], // Use the passed stats data
        borderColor: "#3498db",
        backgroundColor: "rgba(52, 152, 219, 0.5)",
        fill: true,
      },
    ],
  };

  return <Line data={data} />;
}
