import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./home.css";
function Home() {
  const [post, setPost] = useState([])
  useEffect(() => {
    axios.get('https://98b389d9-3f2c-431e-92a6-4fd9a942a8ef.mock.pstmn.io/quote').then(res => {
      console.log(res.data.data.quotes.product_quotes)
      setPost(res.data.data.quotes.product_quotes)


    })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (<div className='contain'>
    <div>

      <NavLink to={"/"}></NavLink>

      <NavLink to={"/Login"}></NavLink>

      <NavLink to={"/Home"}></NavLink>
    </div>
    <div className='item'>
      {
        post.map((item, k) =>

          <div key={k} className='jadu'>
            <div className='heading'>
              <div className='headingName'> <h3>{item.name}</h3>
                <h3>{item.fuel_type_usage_rate}</h3>
              </div>
            </div>
            <div className='detail'>
              <img src='https://d3vfc40r4nq6xo.cloudfront.net/partner_assets/hpwh/products-images/Pro-Prestige-ProTerra-65-gal.-30A-w--LeakGuard-PROPH65-T2-RH375-SO.png' alt='images' />

              <ul className='a'>
                {/* <li>{item.detail_highlight}</li> */}
                <li>"Increased Energy Efficiency"</li>
                <li>"Electronic User Interface"</li>
                <li>"Backup Electric Elements"</li>
                <li>"Heat Pump Technology"</li>
              </ul>

            </div>
            <div className='estimate'>

            </div>

            <div className='Price'>
              <div className='negociableprice'>
                <p id='k'><strong>Price</strong></p>
                <p>-----------------------------------------------------------------</p>
                <p id='k'>{item.base_price}</p>
               
                {/*
                <p id='k'><strong>Est_annual_kwh_usag</strong>:{item.est_annual_kwh_usage} </p>
                <p id='k'><strong>fuel_type_usage_rate---</strong>{item.fuel_type_usage_rate} </p>
                <p id='k'><strong>NetCost-----------------</strong>{item.netCost} </p> */}

              </div>
            </div>
            <div className='price'>
            <div className='negociableprice'>
            <p id='k'><strong>DeliveryCharge</strong></p>
            <p>-------------------------------------------------------</p>
            <p id='k'>{item.delivery_charge}</p>
            </div>
            </div>

            <div className='price'>
            <div className='negociableprice'>
            <p id='k'><strong>Est_annual_kwh_usag</strong></p>
            <p>-------------------------------------------------------</p>
            <p id='k'>{item.est_annual_kwh_usage}</p>
            </div>
            </div>

            <div className='price'>
            <div className='negociableprice'>
            <p id='k'><strong>fuel_type_usage_rate</strong></p>
            <p>-------------------------------------------------------</p>
            <p id='k'>{item.fuel_type_usage_rate}</p>
            </div>
            </div>

            <div className='price'>
            <div className='negociableprice'>
            <p id='k'><strong>NetCost</strong></p>
            <p>-------------------------------------------------------</p>
            <p id='k'>{item.netCost}</p>
            </div>
            </div>

            <div className='anualsaving'>
              <h3><strong>Your annual savings:</strong>{item.est_annual_savings_cal}</h3>
            </div>

            <div>
              <button id='button'>Get Install Quote</button>
            </div>

            <div className='footer'>
              <div className='moredetails'>View More Details</div>
            </div>





            {/* <div className='details'>
              <p> Price:{item.base_price} </p>
              <p> DeliveryCharge:{item.delivery_charge} </p>
              <p> EstHighlight:{item.est_highlight} </p>
              <p>  </p>

            </div> */}
            {/* <button>Get Install Quote</button> */}




          </div>



        )
      }


    </div>





  </div>
  )
}

export default Home