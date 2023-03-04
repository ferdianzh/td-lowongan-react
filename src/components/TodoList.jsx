import React, { Component } from 'react';

class TodoList extends Component {
   state = { 
      showDetail: false,
      editMode: false,
      inputTitle: this.props.todo.title,
      inputDescription: this.props.todo.description,
   } 

   handleShowDetail = () => {
      const showDetail = this.state.showDetail ? false : true;
      this.setState({ showDetail });
   }

   handleEditMode = () => {
      const editMode = this.state.editMode ? false : true;
      this.setState({ editMode });
   }

   updateInputTitle = (event) => {
      this.setState({ inputTitle : event.target.value })
   }
   
   updateInputDescription = (event) => {
      this.setState({ inputDescription : event.target.value })
   }

   render() { 
      const { id } = this.props.todo;

      return (
         <div className="text-gray-500 hover:bg-indigo-100 hover:text-gray-700 ease-out duration-300">
            <div
               onClick={this.handleShowDetail}
               className={this.state.showDetail ? 'cursor-pointer flex py-2 bg-indigo-200 hover:bg-indigo-300/75' : 'cursor-pointer flex py-2' }
            >
               <img src={require('../assets/images/collapse-arrow-20.png')} className={this.state.showDetail? 'rotate-180 ml-2' : 'rotate-90 ml-2'} alt="" />
               <p className="mx-2 text-lg">{this.state.inputTitle}</p>
            </div>
            {this.state.showDetail && (
               <div className='mx-9 pt-1 pb-3'>
                  {this.state.editMode ? (
                     <>
                        <div className='flex flex-row mb-1'>
                           <label htmlFor="" className='basis-1/6'>Judul</label>
                           <input type="text"
                              onChange={this.updateInputTitle}
                              className='grow border-2 border-indigo-300 rounded flex-auto px-1 focus:outline-none'
                           />
                        </div>
                        <div className='flex flex-row mb-1'>
                           <label htmlFor="" className='basis-1/6'>Deskripsi</label>
                           <input type="text"
                              onChange={this.updateInputDescription}
                              className='grow border-2 border-indigo-300 rounded flex-auto px-1 focus:outline-none'
                           />
                        </div>
                        <button
                           onClick={this.handleEditMode}
                           className='bg-indigo-600 hover:bg-indigo-700 rounded text-sm text-white px-2 py-0.5 ease-out duration-300 mr-1'
                        >
                           Batal
                        </button>
                        <button
                           // onClick={}
                           onClickCapture={this.handleEditMode}
                           className='bg-gray-600 hover:bg-gray-700 rounded text-sm text-white px-2 py-0.5 ease-out duration-300'
                        >
                           Simpan
                        </button>
                     </>
                  ):(
                     <>
                        <p className='text-gray-400 mb-1'>{this.state.inputDescription ? this.state.inputDescription: 'Tidak ada deskripsi'}</p>
                        <button 
                           onClick={this.handleEditMode}
                           className='bg-indigo-600 hover:bg-indigo-700 rounded text-sm text-white px-2 py-0.5 ease-out duration-300 mr-1'
                        >
                           Edit
                        </button>
                        <button 
                           onClick={() => this.props.handleDelete(id)}
                           className='bg-gray-500 hover:bg-gray-600 rounded text-sm text-white px-2 py-0.5 ease-out duration-300'
                        >
                           Hapus
                        </button>
                     </>
                  )}
               </div>
            )}
         </div>
      );
   }
}
 
export default TodoList;