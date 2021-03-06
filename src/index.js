import React from 'react';
import ReactDOM from 'react-dom';
// import react router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import ProductList.js
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Context from './context';

class App extends React.Component {
  state = {
    language: 'en'
  }
  changeLanguage = language => {
    this.setState({
      language
    })
  }
  render() {
    return(

      <Context.Provider value={{
        state: this.state,
        changeLanguage: this.changeLanguage
      }}>
        <Router>
          <div>
            {/* Set route  */}
            <Route exact path="/" component={ProductList}/>
            <Route path="/product/:slug" component={ProductDetail}/>
          </div>
        </Router>
      </Context.Provider>
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));