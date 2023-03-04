import React, { Component } from 'react';
import TodoDataServices from '../services/todo.service'
import TodoList from './TodoList';
import TodoNotfound from './TodoNotfound';

class Todo extends Component {
   state = { 
      isLoaded: false,
      isActive: true,
      inputValue: '',
      message: '',
      todos: [],
   } 

   componentDidMount() {
      if(!this.state.isLoaded) this.retrieveTodos();
   }

   retrieveTodos() {
      TodoDataServices.getAll()
         .then(response => this.setState({ todos: response.data }))
         .catch(e => console.log(e))
         .then(this.setState({ isLoaded: true }));
   }

   createTodo = () => {
      const todos = this.state.todos;
      const data = {
         title: this.state.inputValue
      };
      const inputValue = '';
      TodoDataServices.create(data)
         .then(response => {
            todos.push(data);
            this.setState({ todos, inputValue });
         }).catch(e => console.log(e));
   }

   updateTodo(id, data) {
      TodoDataServices.update(id, data)
         .then(() => {
            const index = this.state.todos.findIndex((todo) => todo.id === id);
            let todos = this.state.todos;
            todos[index] = { ...todos[index], ...data };
            this.setState({ todos });
         })
         .catch(e => console.log(e));
   }

   deleteTodo(id) {
      let todos = this.state.todos;

      TodoDataServices.delete(id)
         .then(response => {
            todos.filter(todo => todo.id !== id);
            this.setState({ todos });
         })
         .catch(e => console.log(e));
   }

   updateInput = (event) => {
      this.setState({ inputValue : event.target.value })
   }

   render() {
      return (
         <div>
            <div className='flex w-3/5 gap-3 mx-auto mb-8'>
               <input type="text"
                  onChange={this.updateInput}
                  value={this.state.inputValue}
                  className='border-2 border-indigo-300 rounded flex-auto px-1 focus:outline-none focus:ring focus:ring-violet-300'
               />
               <button 
                  onClick={this.createTodo}
                  className='bg-indigo-500 hover:bg-indigo-600 rounded text-white px-3 py-1 ease-out duration-300'
               >
                  Tambah
               </button>
            </div>
            <div className='divide-y divide-indigo-300 w-3/4 mx-auto'>
            {this.state.isLoaded && this.state.todos.length ? 
               (this.state.todos.map(todo => (
                  <TodoList
                     key={todo.id}
                     todo={todo}
                     handleUpdate={this.updateTodo}
                     handleDelete={this.deleteTodo}
                  />
               ))) : (
                  <TodoNotfound />
               )
            }
            </div>
         </div>
      );
   }
}
 
export default Todo;