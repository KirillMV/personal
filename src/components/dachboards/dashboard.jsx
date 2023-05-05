import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { data } from "./data";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title, 
  CategoryScale
);

function Dashboard() {
  const info = {
    xInfo: [],
    yInfo: [],
     
  };
  data.data.result[0].values.forEach((element) => {
    info.xInfo.push(
      `${new Date(element[0] * 1000).getHours()}` +
        ":" +
        `${new Date(element[0] * 1000).getMinutes()}`
    );
    info.yInfo.push(Math.round(element[1] * 1000));
  });
  console.log(info);
  return (
    <Line
      type="line"
      width={"1000px"}
      height={"300px"}
      datasetIdKey="id"
      options={{ title: { display: true } }}
      data={{
        labels: info.xInfo,
        datasets: [
          {
            backgroundColor: "green",
            id: 1,
            label: "22",
            data: info.yInfo,
          },
        ],
      }}
    />
  );
}

export default Dashboard;
