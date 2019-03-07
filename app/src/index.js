import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import NavBar from './components/navbar';
import Home from './components/home';
import Budz from './components/budz/budz';
import Dabz from './components/dabz/dabz';
import Ediblez from './components/ediblez/ediblez';
import Drinkz from './components/drinkz/drinkz';

const client = new ApolloClient({
  uri: "http://localhost:4000"
})

 class App extends Component {
   render(){
     return (
       <Router>
         <div>
           <NavBar/>
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
        </div>
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
