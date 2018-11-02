import React from 'react';

const NavBar = () =>{
  return(
    <div>
    <div className="row brand">
      <h4 className="subtitle about">About Us</h4>
      <h3 className="title">J's Budz</h3>
      <h4 className="subtitle follow" id="follow">Follow us</h4>
        <div className="modal" tabIndex="-1" role="dialog">
           <div className="modal-dialog" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Follow us on our social media handles!</h5>
                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                 </button>
               </div>
               <div className="modal-body">
                 <button className="btn btn-primary btn-sm">Facebook</button>
                 <button className="btn btn-primary btn-sm">Twitter</button>
                 <button className="btn btn-primary btn-sm">LinkedIn</button>
                 <button className="btn btn-primary btn-sm">Instagram</button>
                 <button className="btn btn-primary btn-sm">Youtube</button>
               </div>
             </div>
           </div>
       </div>
    </div>

    <nav className="navbar navbar-expand bg-none">
      <div className="collapse navbar-collapse justify-content-md-center">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link text" href="/budz">Beautiful Budz</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text" href="/dabz">Delicious Dabz</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text" href="/ediblez">Exquisite Ediblez</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text" href="/drinkz">Delightful Drinkz</a>
          </li>
        </ul>
      </div>
    </nav>
    <hr></hr>
    </div>
    
  )
}

export default NavBar;
