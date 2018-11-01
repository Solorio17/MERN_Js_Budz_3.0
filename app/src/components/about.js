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

class About extends Component{
  render(){
    const {data: {loading, budList}} = this.props;
    if(loading){
      return null;
    }
    const listOfBudz = budList.map(bud =>(
    <div className="container">
      <div className="card" >
        <img className="card-img-top" src={bud.image} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">Strain Name: {bud.strain}</h5>
          <p className="card-text">Type: {bud.type}</p>
          <p className="card-text">THC%: {bud.thc}</p>
          <p className="card-text">CBD%: {bud.cbd}</p>
        </div>
      </div>
    </div>
  ))

    return(
      listOfBudz
    )

    // return <div>{budList.map(bud =>(<h2>{bud.strain}</h2>))}</div>
  }
}

export default graphql(BudQuery)(About);
