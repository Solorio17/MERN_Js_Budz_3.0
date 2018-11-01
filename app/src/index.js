import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import About from './components/about';
import Home from './components/home';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  uri: "http://localhost:4000"
})

 class App extends Component {
   render(){
     return (
       <div>
         <Home/>
       </div>
     );
   }
 }
 ReactDOM.render(
   <ApolloProvider client={client}>
     <App/>
   </ApolloProvider>,
  document.querySelector('.app')
);
