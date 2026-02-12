import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,            // ✅ ADD THIS
} from "chart.js";

/* ✅ REGISTER FILLER PLUGIN */
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler             // ✅ REGISTER HERE
);

const Charts = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Appointments",
        data: [12, 19, 10, 22, 17, 25],
        borderColor: "#0f9d58",
        backgroundColor: "rgba(15, 157, 88, 0.15)",
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: "#0f9d58",
        fill: true, // ✅ NOW WORKS
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0f9d58",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "#eee" },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h5>Appointments Trend</h5>
      </div>

      <div style={{ height: "280px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Charts;
