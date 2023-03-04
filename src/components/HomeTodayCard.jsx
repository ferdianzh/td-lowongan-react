import React from 'react';
import { Link } from 'react-router-dom';

const HomeTodayCard = (props) => {
   const cardBackground = {
      backgroundColor: '#364349',
   };

   let countTodo = props.todos.filter(todo => todo.id !== '').length;

   return ( 
      <div className="card bg-gray-6 text-white" style={cardBackground}>
         <div className="card-img-top d-flex justify-content-between align-items-center bg-primary bg-opacity-75 p-2">
            <div className='ms-4'>
               <h2 className='mb-0'>{props.weather.temprature} &deg;C</h2>
               <h3 className='fs-3'>{props.weather.type}</h3>
               <span>{props.location}</span>
            </div>
            <img src={require('../assets/images/'+props.weather.type.toLowerCase()+'.png')} height={200}/>
         </div>
         <div className="card-body">
            <h5 className="card-title">Today To Do List</h5>
         </div>
         <ul className="list-group list-group-flush border-secondary mx-2">
            {props.todos.slice(0, 3).map(todo => (
               <li key={todo.id} className='list-group-item d-flex justify-content-between text-white border-secondary' style={cardBackground}>
                  <span>{todo.name}</span><span>{todo.time}</span>
               </li>
            ))}
            {!countTodo ?
               <li className='list-group-item d-flex justify-content-between text-white border-secondary' style={cardBackground}>Tidak ada aktifitas</li> : ''
            }
         </ul>
         <div className="card-body text-end">
            <Link to="/todo">
            <button type="button" className="btn btn-outline-light">
               <span className="badge bg-light me-1 text-dark">
                  {countTodo > 3 ? countTodo-3 : ''}
               </span>More...
            </button>
            </Link>
         </div>
      </div>
   );
}
 
export default HomeTodayCard;