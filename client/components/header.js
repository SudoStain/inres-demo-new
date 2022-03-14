import { useState, useEffect, useContext } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

import { Context } from '../context';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const TopNav = () => {
  const [current, setCurrent] = useState('');

  const { state, dispatch } = useContext(Context);
  const { user } = state;
  const router = useRouter();

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    dispatch({ type: 'LOGOUT' });
    window.localStorage.removeItem('user');
    await axios.get('/api/users/signout');
  };

  return (
    <>
      <div>Hello {user?.email}</div>
      <div onClick={logout}>Logout</div>
    </>
  );
};

export default TopNav;
