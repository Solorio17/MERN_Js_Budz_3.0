import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const DabQuery = gql`
{
  dabList{
    dabStrain
    dabType
    dabTHC
    dabCBD
    dabImage
    id
  }
}
`;

class Dabz extends Component{
  render(){
    const {data: {loading, dabList}} = this.props;
    if(loading){
      return null;
    }

      const listOfDabz = dabList.map(dab =>(
          <div className="container">
            <div className="card" id="carta">
              <div className="row">
                <div className="col-md-4">
                    <img src={dab.dabImage} className="budImage"></img>
                  </div>
                  <div className="col-md-8" id="cardInfo">
                    <div className="card-block">
                      <h5 className="card-title lead">Strain Name: <span className="budStrain">{dab.dabStrain}</span></h5>
                      <p className="card-text lead">Type: <span className="budType">{dab.dabType}</span></p>
                      <p className="card-text lead">THC%: <span className="budTHC">{dab.dabTHC}</span></p>
                      <p className="card-text lead">CBD%: <span className="budCBD">{dab.dabCBD}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      ))

    return(
      listOfDabz
    )
  }
}

export default graphql(DabQuery)(Dabz);
