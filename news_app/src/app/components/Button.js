'use client'
import Router from 'next/navigation';
const Button = (props) => {

      const handleClick = () => {
            console.log(props.data);
      }

      return (
            <div>
                  <button onClick={handleClick} className='m-2 p-3 bg-blue-500 text-white cursor-pointer rounded-lg hover:bg-blue-800'>
                        Read More
                  </button>
            </div>
      );
};

export default Button;
