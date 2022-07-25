import React from 'react';
import Logo from './img/logo.png';
import Avatar from './img/avatar.png';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';

import { MdShoppingBasket } from 'react-icons/md';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/stateProvider';
import { actionType } from '../context/reducer';

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const login = async () => {
    const { 
      user: { refreshToken, providerData },
     } = await signInWithPopup(firebaseAuth, provider);
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0],
    });
    localStorage.setItem("user",JSON.stringify(providerData[0]));
  };

  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex item-center gap-2">
          <img src={Logo} className="w-6 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        <div className='flex items-center gap-8'>
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
            <div className='absolute -top-3 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img whileTap={{ scale: 0.6 }} src={user ? user.photoURL: Avatar} className="w-8 min-w-[30px] h-8 min-h-[30px] drop-shadow-xl rounded-full" alt="userProfile" onClick={login} />
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full">

      </div>
    </header>
  );
};

export default Header;