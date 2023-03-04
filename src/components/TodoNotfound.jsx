import NotFoundImage from '../assets/images/undraw_loading_re.svg';

const TodoNotfound = () => {
   return ( 
      <div className="text-center">
         <h4 className='mb-20'>Tidak ada catatan, ayo buat sekarang.</h4>
         <img src={NotFoundImage} alt="" className='mx-auto w-40' />
      </div>
   );
}
 
export default TodoNotfound;