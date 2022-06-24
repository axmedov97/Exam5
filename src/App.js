import './App.css';
import Carousel from './components/Carousel'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  const [krasovka, setKrasovka] = useState("");
  const [koylak, setKoylak] = useState("");
  const [aksess, setaksess] = useState("");
  const [allmass, setAllmass] = useState(true);
  const [allData, setAllData] = useState([]);
  const [qidiruv , setQidiruv] = useState([])
  const [dan , setDan] = useState(0)
  const [gacha, setGacha] = useState(9999999)



  let oddiym = []

useEffect(() => {
  setAllData([])
  axios.get("https://myjson.dit.upm.es/api/bins/7htd")
  .then(res =>{
    setKrasovka(res.data)
  
  })
  axios.get(" http://myjson.dit.upm.es/api/bins/5kdd")
  .then(res =>{
    setKoylak(res.data);

  })
  axios.get("http://myjson.dit.upm.es/api/bins/in1t")
  .then(res =>{
    setaksess(res.data);
  })
}, []);



function ushla() {
    krasovka.map(item => {
      oddiym.push(item)
    })
    
    koylak.map(item => {
      oddiym.push(item)
    })
    
    aksess.map(item => {
      oddiym.push(item)
    })
    setAllData(oddiym)
  }
  
  
  
  // setAllmass(false)
  function qidir(e) {
    let natija =[]
    
    if (e.length==0) {
      setQidiruv([])
      setAllmass(true)
    }
    else{
      setAllmass(false)
      natija = allData.filter(item => {
        return item.name.toLowerCase().includes(e.toLowerCase()) 
      })
    setQidiruv(natija)
    }
}


function KatChange(e) {
  let natija =[]
  if (e != "Kategory") {
    allData.map(item => {
      if (item.category.toLowerCase() === e.toLowerCase()) {
        natija.push(item)
      }
    })
    setAllmass(false)
    setQidiruv(natija)
  }else {
    setQidiruv([])
    setAllmass(true)
  }
}


function inp_value(min) {
  setDan(min)
  console.log(dan);
  checkNum()
}

function inp_value2(max) {
  setGacha(max)
  console.log(gacha);
  checkNum()
}


function checkNum() {
  setAllmass(false)
  let natija = []
  allData.map(item => {
    if (item.cost >= dan && item.cost <= gacha) {
      natija.push(item)
      console.log(natija);
      setAllmass(false)
      setQidiruv(natija)
    }else{
      setQidiruv([])
      setAllmass(true)
    }
  })
}


return (
    <div className="App">
      <div className='container-fluid'>
        <select onClick={e => {ushla()}}  onChange={e => {KatChange(e.target.value)}}  className="select">
          <option selected value={"Kategory"}>Kategory</option>
          <option value={"krasovka"}>krasovka</option>
          <option value={"Aксессуары"}>Aксессуары</option>
          <option value={"Одежды"}>Одежды</option>
        </select>

        <div className='input_card'>
          <input onClick={e => {ushla()}}  onInput={e => {inp_value(e.target.value)}} className='inputs' type="number" placeholder='dan' />
          <input onClick={e => {ushla()}}  onInput={e => {inp_value2(e.target.value)}} className='inputs' type="number" placeholder='gacha'/>
        </div>

        <div>
          <input onInput={e =>{qidir(e.target.value); ushla() }}   type="search" className="form-control" placeholder='search' />
          {/* <button  onClick={e => ushla(e.target.value)} >BOSS</button> */}
        </div>
      </div>  
      {
        (allmass) && <Carousel/>
      }
{

  (qidiruv.length===0)?
  <>
      <div className='container-fluid'>
        <div className='row krasovkala d-flex justify-content-between px-4'>
              <h3 className='fw-bold text-success mt-5 text-start'>Oyoq kiyim</h3>
                {
                        (krasovka.length>0 ) && krasovka.map((box ,index)=>{
                            return(
                               <div className='cardlari'>
                                 <div key={index} className=''>
                                    <img className='img-fluid' src={box.img_src} loading="lazy" alt="" />
                                    <p>{box.name}</p>
                                    <h6>${box.cost}</h6>
                                </div>
                                <button className='btn btn-success'>sotib olish</button>
                               </div>
                            )
                        })
                    }
            </div>
      </div>

      <div className='container-fluid'>
        <div className='row krasovkala d-flex justify-content-between px-4'>
              <h3 className='fw-bold text-success mt-5 text-start'>Kiyimlar</h3>
                {
                        (koylak.length>0) && koylak.map((box ,index)=>{
                            return(
                               <div className='cardlari'>
                                 <div key={index} className=''>
                                    <img className='img-fluid' src={box.img_src} loading="lazy" alt="" />
                                    <p>{box.name}</p>
                                    <h6>${box.cost}</h6>
                                </div>
                                <button className='btn btn-success'>sotib olish</button>
                               </div>
                            )
                        })
                    }
            </div>
      </div>

      <div className='container-fluid'>
        <div className='row krasovkala d-flex justify-content-between px-4'>
              <h3 className='fw-bold text-success mt-5 text-start'>Aksessuar</h3>
                {
                        (aksess.length>0) && aksess.map((box ,index)=>{
                            return(
                               <div className='cardlari'>
                                 <div key={index} className=''>
                                    <img className='img-fluid' src={box.img_src} loading="lazy" alt="" />
                                    <p>{box.name}</p>
                                    <h6>${box.cost}</h6>
                                </div>
                                <button className='btn btn-success'>sotib olish</button>
                               </div>
                            )
                        })
                    }
            </div>
      </div>
  </>
  :
  <>
  <h1>Qidiruv natijasi</h1>
  <div className='container-fluid'>
        <div className='row krasovkala d-flex justify-content-between px-4'>
                {
                        qidiruv.map((box ,index)=>{
                            return(
                               <div className='cardlari'>
                                 <div key={index} className=''>
                                    <img className='img-fluid' src={box.img_src} loading="lazy" alt="" />
                                    <p>{box.name}</p>
                                    <h6>${box.cost}</h6>
                                </div>
                                <button className='btn btn-success'>sotib olish</button>
                               </div>
                            )
                        })
                    }
            </div>
      </div>
  </>
}

    </div>
  );
}

export default App;
