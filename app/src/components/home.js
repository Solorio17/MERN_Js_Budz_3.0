import React from 'react';

$(() => {
  $('#follow').click(() =>{
    $('.modal').modal('show');
  })
});

const Home = () =>{
    return (
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

        <div className="banner">
          <p className="display-4">Welcome to our revolutionary dispensary!</p>
          <p className="lead">Our new dispensary has reinveted what it means to be a medical patient and a recreational participant</p>
          <p className="lead">You will regret not visiting our locale if you're a marijuana smoker</p>
        </div>

          <div className="jumbotron jumbotron-fluid jumbo" id="jumbo">
            <div id="jumboslides" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#jumboslides" data-slide-to="0"></li>
              <li data-target="#jumboslides" data-slide-to="1"></li>
              <li data-target="#jumboslides" data-slide-to="2"></li>
              <li data-target="#jumboslides" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner container">
              <div className="carousel-item active">
                <img className="w-100 img" src="http://freeaussiestock.com/free/Queensland/slides/alexandria_bay_beach.jpg"
 alt="First slide"></img>
              </div>

              <div className="carousel-item">
                <img className="w-100 img" src="http://freeaussiestock.com/free/Queensland/slides/alexandria_bay_beach.jpg"
 alt="Second slide"></img>
              </div>

              <div className="carousel-item">
                <img className="w-100 img" src="http://freeaussiestock.com/free/Queensland/slides/alexandria_bay_beach.jpg"
 alt="Third slide"></img>
              </div>

              <div className="carousel-item">
                <img className="w-100 img" src="http://freeaussiestock.com/free/Queensland/slides/alexandria_bay_beach.jpg"
 alt="Fourth slide"></img>
              </div>
            </div>

            <a className="carousel-control-prev" href="#jumboslides" role="button" data-slide="prev">
              <span className="fas fa-chevron-left fa-5x icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#jumboslides" role="button" data-slide="next">
              <span className="fas fa-chevron-right fa-5x icon" aria-hidden="true"></span>
            </a>
          </div>
        </div>

        <div className="brand">
          <h3 className="title">Trending News</h3>
        </div>

        <div className="row cards">
          <div className="card mb-3 col-5 cardd" id="imagen">
            <img className="card-img-top" src="http://freeaussiestock.com/free/Queensland/slides/alexandria_bay_beach.jpg" alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="lead">Cannabis History</h5>
              <p className="card-text img_definition">J's Budz, the first dispensary to sell out completely on opening day!</p>
              <p className="card-text"><small className="text-muted">Last updated 4 hours ago</small></p>
              <button className="btn btn-primary btn-sm read">Read More <span className="fas fa-angle-double-right"></span></button>
            </div>
          </div>
          <div className="card mb-3 col-5 cardd" id="imagen">
            <img className="card-img-top" src="http://freeaussiestock.com/free/Queensland/slides/alexandria_bay_beach.jpg" alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="lead">J's Budz closes?</h5>
              <p className="card-text img_definition">As J's Budz sells out completely, a mandatory close was enforced. CEO says re-stocking will happen over the weekend.</p>
              <p className="card-text"><small className="text-muted">Last updated 12 mins ago</small></p>
              <button className="btn btn-primary btn-sm read">Read More <span className="fas fa-angle-double-right"></span></button>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="fixed-bottom bg-light footer">
          <a className="lead">&#169; 2018 Copyright, J's Budz</a>
        </div>
      </div>
    )
}
export default Home;
