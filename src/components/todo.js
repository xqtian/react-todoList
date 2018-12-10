import React from 'react';
import List from './list';
import Input from './Input'
class Todo extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            list: ['thing1', 'thing2', 'thing3'],
            newToDo: 'test'
        }
    }
    componentDidMount(){
        
    }
    onInputChange = (event) => {
        this.setState({ newToDo: event.target.value}); 
    };
    onInputSubmit = (event) => {
        event.preventDefault();
        this.setState((previousState)=>({
            list: [...previousState.list, {item: previousState.newToDo, done: false} ],
            newToDo: ''
        }));
    }
    onListClick = (i) => {
        this.setState((previousState) => ({
            list: [
                ...previousState.list.slice(0, i),
                Object.assign({}, previousState.list[i], {done: !previousState.list[i].done}),
                ...previousState.list.slice(i+1)
            ]
        }))
    }
    deleteListItem = (i) => {
        this.setState((previousState) => ({
            list: [
                ...previousState.list.slice(0, i),
                ...previousState.list.slice(i+1)
            ]
        }))
    }
    render() {
        return(
            <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="panel panel-default">
                <div className="panel-body">
                  <h1>My To Do App</h1>
                  <hr/>
                  <Input  
                    value={this.state.newToDo}
                    onChange={this.onInputChange}
                    onSubmit={this.onInputSubmit}
                    />
                  <List 
                    listItems={this.state.list} 
                    onClick={this.onListClick}
                    deleteListItem={this.deleteListItem}/>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Todo;