import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const BudQuery = gql`
{
  budList{
    strain
    type
    thc
    cbd
    image
    id
  }
}
`;

class Budz extends Component{

  heelo = () =>{
    return(
      <h1>Hello</h1>
    )
  }

  render(){
    const {data: {loading, budList}} = this.props;
    if(loading){
      return null;
    }

      const listOfBudz = budList.map(bud =>(
          <div className="row">
              <div className="card col-6" id="carta">
                <img className="card-img-top budImage" ></img>
                <div className="card-body">
                  <h5 className="card-title lead">Strain Name: <span className="budStrain">{bud.strain}</span></h5>
                  <p className="card-text lead">Type: <span className="budType">{bud.type}</span></p>
                  <p className="card-text lead">THC%: <span className="budTHC">{bud.thc}</span></p>
                  <p className="card-text lead">CBD%: <span className="budCBD">{bud.cbd}</span></p>
                </div>
              </div>
          </div>
      ))

    return(
      this.heelo,
      listOfBudz
    )
  }
}

export default graphql(BudQuery)(Budz);
