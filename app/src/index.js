import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import Home from './components/home';
import Budz from './components/budz';
import Dabz from './components/dabz';
import Ediblez from './components/ediblez';
import Drinkz from './components/drinkz';


const client = new ApolloClient({
  uri: "http://localhost:4000"
})

 class App extends Component {
   render(){
     return (
       <Router>
         <Switch>
           <Route path="/" exact render={
               ()=>{
                 return (<Home /> );
               }
             }/>
           <Route path="/budz" exact render={
               ()=>{
                 return (<Budz /> );
               }
             }/>
           <Route path="/dabz" exact render={
               ()=>{
                 return (<Dabz /> );
               }
             }/>
             <Route path="/ediblez" exact render={
                 ()=>{
                   return (<Ediblez /> );
                 }
               }/>
           <Route path="/drinkz" exact render={
               ()=>{
                 return (<Drinkz /> );
               }
             }/>

           <Route render={() => { return (<h3>Route not found!</h3>)}}/>
         </Switch>
       </Router>
     );
   }
 }

 ReactDOM.render(
   <ApolloProvider client={client}>
     <App/>
   </ApolloProvider>,
  document.querySelector('.app')
);
