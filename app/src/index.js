import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import About from './components/about';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  uri: "http://localhost:4000"
})

 class App extends Component {
   render(){
     return (
       <div>
         <About/>
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
