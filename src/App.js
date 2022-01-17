import React from 'react';
import Todo from './Todo';
import AddTodo from "./AddTodo";
import {Container, List, Paper} from '@material-ui/core';
import './App.css';
import {call} from "./service/ApiService";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [ ],
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("http://localhost:8082/todo", requestOptions)
      .then((response) => response.json())
      .then(
        (response) => {
          this.setState({
            items: response.data,
          });
        },
        (error) => {
          this.setState({
            error,
          })
        }
      )
    // call("/todo", "GET", null).then((response) =>
    //   this.setState({items: response.data})
    // );
  }

  add = (item) => {
    // const thisItems = this.state.items;
    // item.id = "ID-" + thisItems.length;
    // item.done = false;
    // thisItems.push(item);
    // this.setState({item: thisItems});
    // console.log(this.state.items);
    call("/todo", "POST", item).then((response) =>
      this.setState({items: response.data})
    )
  };

  delete = (item) => {
    // const thisItems = this.state.items;
    // console.log("Before Update Items: ", this.state.items);
    // const newItems = thisItems.filter(e => e.id !== item.id);
    // this.setState({ items: newItems }, () => {
    //   console.log("Update Items: ", this.state.items);
    // })
    call("/todo", "DELETE", item).then((response) =>
      this.setState({items: response.data})
    )
  };

  render() {
    let todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin:16 }}>
        <List>
          {this.state.items.map((item, index) => (
            <Todo item={item} key={index} delete={this.delete} />
          ))}
        </List>
      </Paper>
    );

    return (
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add}/>
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    )
  }
}

export default App;
