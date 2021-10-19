import logo from './logo.svg';
import './App.css';
import Home from './Screens/Home/Home';
import { connect } from 'react-redux';
import { simpleAction } from '../src/Redux/Actions/Action';
import { Component } from 'react';
class App extends Component {
  
   
  simpleAction = (event) => {
    this.props.simpleAction();
   }
   render() {
  return (
    <div className="App">
      <button onClick={this.simpleAction}>Test redux action</button>
      <pre>
        {
          JSON.stringify(this.props)
        } </pre>
      <Home></Home>

    </div>
  );
  }

}
const mapStateToProps = state => ({
  ...state
 });

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
