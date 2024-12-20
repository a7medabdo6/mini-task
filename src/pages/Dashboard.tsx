import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { useMedications } from "../apis/Medications";
import Loader from "../components/common/Loader";
import Error from "../components/common/Error";
import SidebarLayout from "../components/common/SidebarLayout";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const PharmacistDashboard: React.FC = () => {
  const { data, isLoading, isError } = useMedications();

  const inventoryData = {
    "Medication A": 10,
    "Medication B": 15,
    "Medication C": 5,
  };

  const barChartData = {
    labels: ["Odd IDs", "Even IDs"],
    datasets: [
      {
        label: "Medication Count",
        data: data
          ? [
              data.filter((post: any) => post.id % 2 !== 0).length,
              data.filter((post: any) => post.id % 2 === 0).length,
            ]
          : [0, 0],
        backgroundColor: ["#4CAF50", "#2196F3"],
      },
    ],
  };

  const donutChartData = {
    labels: Object.keys(inventoryData),
    datasets: [
      {
        data: Object.values(inventoryData),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <SidebarLayout>
      <h1 className="text-2xl font-bold text-center mb-8">
        Pharmacist Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="p-4 shadow-md rounded-md bg-white max-h-[450px]">
          <h2 className="text-lg font-semibold text-center mb-4">
            Medications by ID Status
          </h2>
          <Bar
            data={barChartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "top",
                },
              },
            }}
            height={300}
          />
        </div>

        {/* Donut Chart */}
        <div className="p-4 shadow-md rounded-md bg-white max-h-[450px]">
          <h2 className="text-lg font-semibold text-center mb-4">
            Inventory Distribution by Medication
          </h2>
          <Doughnut
            data={donutChartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
            }}
          />
        </div>
      </div>
    </SidebarLayout>
  );
};

export default PharmacistDashboard;
