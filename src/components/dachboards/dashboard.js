import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {CategoryScale,LineController,LineElement,PointElement,LinearScale,Title} from 'chart.js';
import { Line } from "react-chartjs-2";
import { data } from "./data";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

function Dashboard() {
const info={
  xInfo:[],
  yInfo:[]
}
data.data.result[0].values.forEach(element => {
  info.xInfo.push(`${(new Date(element[0]*1000)).getHours()}`+':'+`${(new Date(element[0]*1000)).getMinutes()}`)
  info.yInfo.push(Math.round(element[1]*100))
});
console.log(info);
  return (
   
      <Line
        datasetIdKey="id"
        data={{
          labels: info.xInfo,
          datasets: [
            {
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
