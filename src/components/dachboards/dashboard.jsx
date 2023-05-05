import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {CategoryScale,LineController,LineElement,PointElement,LinearScale,Title} from 'chart.js';
import { Line } from "react-chartjs-2";

import { useEffect,useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

function Dashboard() {
const [info,setInfo] = useState({
  xInfo : [],
  yInfo : [],
})

  useEffect(()=>{
    setInterval(()=>{
      const timeEnd = (new Date()).getTime()/1000
      const timeStart =((new Date()).getTime()/1000) - 3600
      fetch(`https://demo.ideco.ru/prometheus/api/v1/query_range?start=${timeStart}&query=avg%28sum%28irate%28node_cpu_seconds_total%7Bmode%21%7E%22idle%7Cuser%7Csteal%22%7D%5B30s%5D%29%29+by+%28cpu%29%29&end=${timeEnd}&step=1`)
        .then((response) => response.json())
        .then((posts) => {
         let x = []
         let y = []
          posts.data.result[0].values.forEach(el=>{
            x.push(`${(new Date(el[0]*1000)).getHours()}:${(new Date(el[0]*1000)).getMinutes()}`)
            y.push(Math.round(el[1]*100))
          })
  
          setInfo({
            xInfo : x,
            yInfo : y,
          }) 
          
        });
    },5000)
  },[])




  return (
   <div>
    <div>{info.xInfo[1]}___{info.xInfo[info.xInfo.length-1]}</div>
  

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
      </div>
  );
}

export default Dashboard;
