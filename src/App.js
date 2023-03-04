import Navbar from './components/Navbar';
import Counters from './components/counters'
import './App.css';
import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Layout from './components/Layout';
import Todo from './components/Todo';
import Weather from './components/Weather';

class App extends Component {
  state = { 
    // counters: [
    //   { id: 1, value: 2 },
    //   { id: 2, value: 0 },
    //   { id: 3, value: 0 },
    //   { id: 4, value: 0 },
    // ],
  };

  componentDidMount() {
    // For ajax call
    // set state based on data from server
  }

  handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({ counters });
  }

  handleReset = () => {
      const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
      });
      this.setState({ counters });
  }

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters });
  }
  
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='todo' element={<Todo />} />
            <Route path='weather' element={<Weather />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
