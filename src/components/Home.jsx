import React, { Component } from 'react';
import HomeTodayCard from './HomeTodayCard';

class Home extends Component {
   // state = { 
   //    error: null,
   //    isLoaded: false,
   //    items: [],
   //    today: 'datetime',
   //    weather: {
   //       type: 'Sunny',
   //       temprature: 31,
   //    },
   //    location: 'Sememi, Surabaya',
   //    todos: [
   //       {id: 1, name: 'An activity', time: '13.00'},
   //       {id: 2, name: 'Another activity', time: '14.30'},
   //       {id: 3, name: 'Many activity', time: '16.00'},
   //       {id: 4, name: 'Too many activity', time: '19.30'},
   //       {id: 5, name: 'Help!', time: '21.00'},
   //    ]
   // } 

   // componentDidMount() {
   //    fetch("https://jsonplaceholder.typicode.com/users/")
   //    .then(res => res.json())
   //    .then(
   //      (result) => {
   //        this.setState({
   //          isLoaded: true,
   //          items: result.items
   //        });
   //      },
   //      (error) => {
   //        this.setState({
   //          isLoaded: true,
   //          error
   //        });
   //      }
   //    )
   // }
   
   render() { 
      return (
         // <div className='row mt-5'>
         //    <div className='col'>
         //       <h1>Home</h1>
         //       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dicta sapiente recusandae quisquam blanditiis explicabo placeat cumque, reiciendis nobis dolor.</p>
         //    </div>
         //    <div className='col'>
         //       <HomeTodayCard 
         //          weather={this.state.weather}
         //          location={this.state.location}
         //          todos={this.state.todos}
         //       />
         //    </div>
         // </div>

         <h1 className="text-3xl font-bold underline">
            Hello world!
         </h1>
      );
   }
}
 
export default Home;