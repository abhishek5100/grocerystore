import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {

  const {cart} = useSelector((state)=>state.cart)
     
  return (
 <>
   <nav className="navbar navbar-expand-lg navbar-dark" id='top-nav'>
  <div className="container">
    <a className="navbar-brand" href="/"><img src="https://www.worldofmart.com/img/logo.png" alt="logo" style={{width:"8rem"}}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item myacount">
          <a className="nav-link active" aria-current="page" href="/"><i className="bi bi-person-lines-fill"></i><h2 className='text-dark' style={{fontFamily:"sans-serif",fontSize:"1.3rem"}}>my acount</h2></a>
        </li>
        <li className="nav-item">
          <Link className="nav-link"to="/cart" ><i className="bi bi-cart4"></i>
          <sup >{cart.length}</sup></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><i className="bi bi-heart"></i></a>
        </li>
      
      </ul>
      <form className="d-flex" id="searchform">
        <input className="form-control me-2"  type="search" placeholder="Search..." aria-label="Search" id="searchbox"/>
        <button className="btn " type="submit" id="searchbtn"><i className="bi bi-search"></i></button>
      </form>
      <ul className="navbar-nav mb-2 mb-lg-0">
      <li className="nav-item">
          <button className="btn loginbtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightlogin" aria-controls="offcanvasRight">login</button>
        </li>
        <li className="nav-item">
         <button type="button" className="btn signbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
 sign up
</button>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

{/* offcan1 */}
<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRightlogin" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel" className='logpage'>login your Page</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  {/*Login forms section */}
  <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary1">Submit</button>
</form>
    {/* offcan1 */}
  </div>
 {/*Sign up forms section */}
  
 


</div>




<div className="modal fade"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel"> Sign up</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className="row g-3 needs-validation" novalidate>
  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01"  required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" required/>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn submitbtn" type="submit">Submit</button>
  </div>
</form>
      </div>
    
    </div>
  </div>
</div>
 </>
  )
}

export default Navbar
