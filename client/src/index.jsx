import ReactDOM from 'react-dom';
import React from 'react';
import GroceryList from './GroceryList.jsx';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        groceries: [],
        quantity: '',
        item: ''
      };
      this.handleChange = this.handleChange.bind(this);
      // this.handleChangeItem = this.handleChangeItem.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDideMount() {
      
    }
    handleChange(event) {
      const target = event.target;
      const name = target.name;
      const value = target.value;
      this.setState({
        [name]: value
      });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      var newItem = {
        name: this.state.item,
        quantity: this.state.quantity
      };
      if (newItem.name && newItem.quantity) {
        this.setState({
          groceries: this.state.groceries.concat(newItem)
        });
      }
    }
  
    render() {
      return(
      <div>
      <h1>Grocery List!!</h1>
          <GroceryList groceries = {this.state.groceries} count={[3, 4]}/>
      <form  onSubmit={this.handleSubmit}>
        <label>Grocery
          <input type="text" name="item" value={this.state.item}
          onChange={this.handleChange}/>
        </label>
        <br></br>
        <label> Quantity
          <input name="quantity" type ="number" value={this.state.quantity} onChange={this.handleChange}/>
        </label>
        <br></br>
        <input type="submit" value="Add Grocery" />
      </form>
    </div>)
    }
  };
  

ReactDOM.render(<App />, document.getElementById("app"));