import React, { useRef, useState } from 'react';
import {MdShoppingBasket} from 'react-icons/md';
import {motion} from 'framer-motion';
import { useEffect } from 'react';
import NotFound from '../img/NotFound.svg';
import {useStateValue } from '../context/stateProvider';
import { actionType } from '../context/reducer';

export const RowContainer = ({flag , data , scrollValue }) => {
  const rowContainer = useRef();

  const [items, setItems] = useState([]);
  
  const [{cartItems},dispatch] = useStateValue();

  const addToCart = (item) => {
     dispatch({
      type:actionType.SET_CARTITEMS,
      cartItems : [...cartItems,item],
     });
     localStorage.setItem("cartItems",JSON.stringify(cartItems));
  };
  
  useEffect(() => {
       
      rowContainer.current.scrollLeft += scrollValue;
        
      }, [scrollValue]);
      
  return (
    <div ref={rowContainer} className={`w-full my-12 flex items-center gap-3 scroll-smooth ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center'}`}>
      {data && data.length > 0 ? (data.map((item) => (
        <div key={item?.id} className='w-275 min-w-[275px] md:w-300 md:min-w-[300px] bg-gray-100 rounded-lg p-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
        <div className='w-full flex items-center justify-between'>
          <motion.div whileHover={{scale: 1.2}} className="w-40 h-40 -mt-8 drop-shadow-2xl">
          <img  src={item?.imageURL} alt=""  className='w-full h-full object-contain'/>
          </motion.div>
          

          <motion.div whileTap={{scale : 0.75}} className='w-10 h-10 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md' onClick={() => addToCart(item)}>
            <MdShoppingBasket className='text-white' /> 
          </motion.div>
        </div>

        <div className='w-full flex flex-col items-end justify-end'>
          <p className='text-textColor font-semibold capitalize text-base md:text-lg'>{item?.title}</p>
          <p className='mt-1 text-sm text-gray-500'>{item?.calories} Calories</p>
          <div className='flex items-center gap-8'>
            <p className='text-lg text-headingColor font-semibold'><span className='text-sm text-red-500'>$</span> {item?.price}</p>
          </div>
        </div>
      </div>
      ))) : (
        <div className='w-350 flex flex-col items-center justify-center'>
        <img src={NotFound} className="h-350"/>
          <p className='text-xl text-headingColor font-semibold my-2'>Items Not Available</p>
      </div>
      )
      }
        
    </div>
  );
};

export default RowContainer;
