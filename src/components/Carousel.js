import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {
    const [data, setdata] = useState("");
    const [data1, setdata1] = useState("");
    const [data3, setdata3] = useState("");


    useEffect(() => {
        axios.get("https://myjson.dit.upm.es/api/bins/bbm7")
        .then(res =>{
         setdata(res.data);
        })
     }, []);


     useEffect(() => {
      axios.get("http://myjson.dit.upm.es/api/bins/dohr")
      .then(ress =>{
          setdata1(ress.data)
      })
   }, []);

   
   useEffect(() => {
    axios.get("https://myjson.dit.upm.es/api/bins/i6j3")
    .then(ress =>{
        setdata3(ress.data)
    })
 }, []);



  return (
         <div className='container my-5'>
            <div className="swiffy-slider slider-item-show5 slider-nav-outside slider-nav-dark slider-nav-sm slider-nav-visible slider-nav-page slider-item-snapstart slider-nav-autoplay slider-nav-autopause slider-item-ratio slider-item-ratio-contain slider-item-ratio-32x4 bg-white  py-1 py-lg-2" data-slider-nav-autoplay-interval="2000">
            <div className="slider-container">
                {
                    (data.length>0) && data.map((item,index)=>{
                        return(
                            <div key={index}>
                                <img src={item.img_src}  loading="lazy" alt="" />
                            </div>
                        )
                    })
                }
            </div>
              <button type="button" className="slider-nav" aria-label="Go left"></button>
              <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>
            </div>


            <div className="swiffy-slider slider-item-reveal slider-nav-round slider-item-ratio slider-item-ratio-21x9 my-5" id="slider1">
                <ul className="slider-container">
                    {/* {
                        (data1.length>0) && data1.map((box ,index)=>{
                            return(
                                <li key={index}>
                                    <img src={box.img_src} loading="lazy" alt="" />
                                </li>
                            )
                        })
                    } */}
                    <li>
                        <img src="https://foto.carexpert.ru/img/foto1680/lamb/lambav029.jpg" alt="" />
                    </li>
                    <li>
                        <img src="https://sertificat-test.ru/wp-content/uploads/c/f/8/cf82b4671fd410cdf7581204b78e5f8e.jpeg" alt="" />
                    </li>
                </ul>

                <button type="button" className="slider-nav" aria-label="Go left"></button>
                <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>

                <div className="slider-indicators slider-indicators-square d-none d-md-flex">
                    <button className="active" aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                </div>

                <div className="slider-indicators slider-indicators-sm slider-indicators-dark slider-indicators-round d-md-none slider-indicators-highlight">
                    <button className="active" aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                </div>
            </div>

            <div className='row w-100 katigoriyalar'>
              <h1 className='fw-bold text-success mt-5'>Kategoriya</h1>
                {
                        (data3.length>0) && data3.map((box ,index)=>{
                            return(
                               <div className='col-4' key={index}>
                                 <div  className=' d-flex justify-content-between cardcha'>
                                    <img className='img-fluid kat_img' src={box.img_src} loading="lazy" alt="" />
                                    <p>{box.name}</p>
                                </div>
                               </div>
                            )
                        })
                    }
            </div>
        </div>
  );
}

export default App;