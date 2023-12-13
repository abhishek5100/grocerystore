
import "./Content.css"
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../Stores/slices/slice";



const Content = () => {
  const myproduct = useSelector((state)=>state.cart.items);

const dispatch=useDispatch();
  const additems =(value)=>{
    dispatch(addtocart(value))
  
  }

  return (
    <>
    <div className="container-fluid mt-3" style={{backgroundColor:"#fff"}}>
      <div className="container">
        <div className="row justify-content-evenly">
            <div className="row text-center">
              <div className="col-12 text-center border" >
                <h4>ASSURED QUALITY NEW DEALS EVERYDAY</h4>
              </div>
            </div>

          <div className="col-4 .col-sm-3 col-md-2  justify-content-center text-center p-2"><img src="https://www.worldofmart.com/img/home.svg" alt="" className='offerimg'/>
          <div className='text-center'>
          Free Home Delivery*
          <p style={{color:"#fd7e14"}}>*Min Order Rs.500/ & above-</p>
          </div>
          </div>
          <div className="col-4 col-md-2  .col-sm-3   justify-content-center text-center"><img src="https://www.worldofmart.com/img/price.svg" alt="" className='offerimg'/>
          <div className='text-center'>
          Free Home Delivery*
          <p style={{color:"#fd7e14"}}>*Min Order Rs.500/ & above-</p>
          </div>
          </div>
          <div className="col-4 col-md-2 .col-sm-3   justify-content-center text-center"><img src="https://www.worldofmart.com/img/wallet.svg" alt="" className='offerimg'/>
          <div className='text-center'>
          Free Home Delivery*
          <p style={{color:"#fd7e14"}}>*Min Order Rs.500/ & above-</p>
          </div></div>
          <div className="col-4 col-md-2 .col-sm-3  justify-content-center text-center"><img src="https://www.worldofmart.com/img/return.svg" alt="" className='offerimg'/>
          <div className='text-center'>
          Free Home Delivery*
          <p style={{color:"#fd7e14"}}>*Min Order Rs.500/ & above-</p>
          </div></div>
          <div className="col-4 col-md-2 .col-sm-3  justify-content-center text-center"><img src="https://www.worldofmart.com/img/delivery.svg" alt="" className='offerimg'/>
          <div className='text-center'>
          Free Home Delivery*
          <p style={{color:"#fd7e14"}}>*Min Order Rs.500/ & above-</p>
          </div></div>
        </div>
      </div>
    </div>
    
 {/* second content */}
<div className="container-fluid" style={{backgroundColor:"#f9f9f9"}}>
 <div className="container ">
  <div className="row  justify-content-center justify-content-evenly">
    <div className="row ">
      <div className="col-12 text-center mb-3">
        <h2><span style={{color:"#f6872d"}}>Live</span><span>sale</span></h2>
      </div>
    </div>
    <div className="col-md-5 col-12 mb-5 text-center"style={{ border: "10px solid white",boxShadow:"2px 1px 17px #d5d3d3"}}><img src="https://www.worldofmart.com/master/Banner/1645266949.jpg" alt="" style={{width:"54rem",border: "3px solid orange"}} className='img-fluid'/></div>
    <div className="col-6 col-md-3 text-center" ><img src="https://www.worldofmart.com/master/Banner/1645266937.jpg" alt="" style={{width:"15rem" ,border: "3px solid orange"}} className='img-fluid'/>
    
    <img src="https://www.worldofmart.com/master/Banner/1645266937.jpg" alt="" style={{width:"15rem" , marginTop:"2rem" ,border: "3px solid orange"}} className='img-fluid'/>
    </div>
    <div className="col-6 col-sm-3 text-center" ><img src="https://www.worldofmart.com/master/Banner/1645266898.jpg" alt="" style={{width:"15rem"  ,border: "3px solid orange"  }} className='img-fluid'/>
    
    <img src="https://www.worldofmart.com/master/Banner/1645266937.jpg" alt="" style={{width:"15rem" , marginTop:"2rem" ,border: "3px solid orange"}} className='img-fluid'/>
    </div>
  </div>
 </div>

 {/* Third content */}

 <div className="container">
  <div className="row justify-content-evenly " >
  {myproduct.map((value)=>{
    return(
      <div className="col-md-5 col-sm-6 col-lg-3 mx-4 mt-3 border"  style={{backgroundColor:"white",boxShadow:"3px 3px 10px lightgray",borderRadius:"10px"}}>

   {/* rading and heart */}
        <button  className='btn rate-btn'>{value.percentage}</button><button className='btn heartbtn'><i class="bi bi-heart"></i></button>

            
          <div className='product-img border' style={{width:"fit-content"}}>
        <img src={value.src} alt="" className='img-fluid pro-img' />
        </div>

      <div style={{width:"fit-content"}}>
        <h5>{value.productName}</h5>
        <span>&#8377;<span style={{color:"#f6872d"}} className='mx-1'>{value.Disprice}</span></span><span style={{fontSize:".7rem",textDecoration:"line-through",color:"red"}}>{value.orginalprice}</span>
        <span style={{fontSize:".7rem"}} className='mx-1'>Incl.Tax</span>

        <p style={{fontSize:".7rem"}} ><span style={{color:"green"}}>your save</span><span>: &#8377;{value.yourSave}</span>
        <button className='btn addtocart' onClick={()=>additems(value)} >Add to card</button></p>
      </div>

      </div>
    )
  })}
    
  </div>
 </div>

 </div>
    </>
  )
}

export default Content;

