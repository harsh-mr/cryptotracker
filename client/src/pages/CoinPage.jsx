import React, { useEffect, useState } from 'react'
import { Pie,Line } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { numberWithCommas } from '../components/carousel';
// import ReactHtmlParser from "react-html-parser";
// Chartjs.register(CategoryScale, LinearScale, BarElement);

import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)





const PieChart = () => {
  var data = {
    labels: ["Not Placed", "Placed"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19],
        backgroundColor: [
          // 'rgba(255, 99, 132, 0.2)',
          // 'rgba(54, 162, 235, 0.2)',
          // 'rgba(255, 206, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          // 'rgba(255, 99, 132, 1)',
          // 'rgba(54, 162, 235, 1)',
          // 'rgba(255, 206, 86, 1)',
          // 'rgba(75, 192, 192, 1)',
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  return (
    <div>
      <Pie data={data} height={300} options={options} />
    </div>
  );
};

const CoinPage = () => {


  const {id}  = useParams();
  const [coin, setcoin] = useState();
  const [days, setdays] = useState();
  const [historiccoins, sethistoriccoins] = useState();

  const fectchcoins  = async() => {
     const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
     setcoin(data);
    //  console.log(coin);
     console.log(data);
  }
  
  const fetchhistoriccoins  = async ()=>{
    const { data }= await axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=INR&days=100`);
    sethistoriccoins(data.prices);
    setdays(30);
    //  console.log(data[0]);
    //  console.log(data.prices);
    //  console.log(historiccoins);
    }
  
  useEffect(() => {
  fectchcoins();
  


}, [])

useEffect(() => {
  fetchhistoriccoins();
  
  console.log(historiccoins);


},[coin] )

  
  
  
  
  return (
    <div style={{height:"100vh"}} className='bg-black'>

    <div className="grid grid-cols-10 gap-4">
      <div className="bg-black xl:col-span-3 col-span-10 p-4 " id='border-div' >
        <div className="m-7 flex justify-center align-middle">
        <img src={coin?.image.large} alt="" />
        </div>



          <div className='m-3 text-slate-300 flex justify-center align-middle'>
             <div className=' text-6xl font-extrabold text-white' >{coin?.name}</div>
            
          </div>



          <div className='text-slate-300'style={{fontFamily:'montserrat'}}>
            {!coin ? (<div>no data</div>):(<div className='p-2'>{(coin?.description.en.split(". ")[0])}</div>)}
            
          </div>
          



          <div className='text-slate-300 flex text-2xl m-2'>
            <div className="font-extrabold">Rank :&nbsp;&nbsp; </div>
             <div className='font-bold'>{coin?.market_cap_rank}</div>
            
          </div>
          <div className='text-slate-300 flex text-2xl m-2'>
            <div className="font-extrabold">Currrent Price :&nbsp;&nbsp; </div>
             <div className='font-bold'>{
               !coin ? (coin?.market_data.current_price.inr):(
              numberWithCommas( coin?.market_data.current_price.inr))}</div>
            
          </div>
          <div className='text-slate-300 flex text-2xl m-2'>
            <div className="font-extrabold">Market Cap : &nbsp;</div>
             <div className='font-bold'>{
               !coin ? (coin?.market_data.market_cap.inr):(
              numberWithCommas( coin?.market_data.market_cap.inr))}</div>
            
          </div>

      </div>



      <div className="bg-black xl:col-span-7 col-span-10  p-6">
        { !historiccoins ? (<div>hello</div>):(

          
          
          <>
          <Line
              data={{
                labels: historiccoins.map((coin,i) => {
                  
                  return i;
                }),

                datasets: [
                  {
                    data: historiccoins.map((coin) => coin[1]),
                    label: `Price`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
              />
            </>
              )
            }

      </div>

      
    </div>

    

    

    
    
            {/* <PieChart/> */}




    </div>
  )
}

export default CoinPage