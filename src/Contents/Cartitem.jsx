
import React from 'react'
import { useSelector } from 'react-redux'
import "./Cartitem.css"

function Cartitem() {
const {cart,totalQuantity,totalprice} = useSelector((state)=>state.cart)




  return (
    <div>
     
      <section className="h-100 gradient-custom">
  <div className="container py-5">
  <h3 style={{color:"#f6872d"}}>cart items</h3>
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
       
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart - {cart.length} items</h5>
          </div>
          <div className="card-body">
            {
              cart&&cart.map((item)=>{
                return(
                  <>
                  <div className="row">
                  <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                      <img src={item.src}
                        className="w-100" alt="Blue Jeans Jacket" />
                      <a href="#!">
                        <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2"}}></div>
                      </a>
                    </div>
                  </div>
    
                  <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    <p><strong>{item.productName}</strong></p>
      
                    <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                      title="Remove item" >
                       <i className="bi bi-x-lg"></i></button>
                  
                  </div>
    
                  <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div className="d-flex mb-4" style={{maxWidth: "300px"}}>
                      <button className="btn btn-primary px-3 me-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                       <i className="bi bi-dash-lg"></i>
                      </button>
    
                      <div className="form-outline">
                        <input id="form1" min="0" name="quantity" value={totalQuantity} type="number" className="form-control" />
                        <label className="form-label" for="form1">Quantity</label>
                      </div>
    
                      <button className="btn btn-primary px-3 ms-2"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                 <i className="bi bi-plus-lg"></i>
                      </button>
                    </div>
    
                    <p className="text-start text-md-center">
                      <strong> ₹{item.Disprice}</strong>
                    </p>
                  </div>
                </div>
                 <hr className="my-4" />
                </>
                )
              })
            }
           


           

      
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <p><strong>Expected shipping delivery</strong></p>
            <p className="mb-0">12.10.2020 - 14.10.2020</p>
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
          <div className="card-body">
            <p><strong>We accept</strong></p>
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
              alt="PayPal acceptance mark" />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>{cart.length}</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
           //cart.length       <strong></strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong>$53.98</strong></span>
              </li>
            </ul>

            <button type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Cartitem;
