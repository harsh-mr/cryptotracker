import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Coinstable = () => {
    const [coin, setcoin] = useState([]);
    const [loading, setloading] = useState(false);

    const fetchcoins  = async()=>{
        setloading(true);
        let {data} = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false");
        // console.log(data);
        setcoin(data);
        setloading(false);
        
        
    }
    console.log(coin);
    
    useEffect(()=>{
        fetchcoins();
        
    },[]);




    
    

  return (
    <div className='overflow-auto rounded-lg shadow'>
        <table class="table-auto w-10/12 m-auto">
  <thead className='bg-yellow-400 '>
    <tr >
      <th className=' text-3xl font-bold' style={{padding:"1.2rem"}}><div>coin</div></th>
      <th className=' text-3xl font-bold' style={{padding:"1.2rem"}}>Price</th>
      <th className=' text-3xl font-bold' style={{padding:"1.2rem"}}>24hChange</th>
      <th className=' text-3xl font-bold' style={{padding:"1.2rem"}}>Market Cup</th>
    </tr>
  </thead>
  <tbody>
    {coin.map((row)=>{
        const profit = row.price_change_percentage_24h > 0;

        return(
            <tr >

            <td className='p-9 text-3xl text-white'> <div className='flex' > <img src={row.image} alt="Girl in a jacket" width="60" height="60"/> <span className='pl-6 pt-3'> {row.name} </span></div></td>
            <td className='p-9 pt-8 text-2xl text-white'>{row.current_price}</td>
            <td className='p-9 pt-8 text-2xl text-white' style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                          }}>{profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%</td>
            <td className='p-9 pt-8 text-2xl text-white'>{row.market_cap}</td>
            
            </tr>

        );
    })
    }



  
   
  </tbody>
</table>











    </div>
  )
}

export default Coinstable