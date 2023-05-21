import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import FadeLoader from 'react-spinners/PulseLoader';

import { getUsersAction } from 'redux/operations';
import { UsersList } from './UserList/UserList';

import css from './Container/Container.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector(state => state.users);

  useEffect(() => {
    // dispatch(getContactsAction());
    dispatch(getUsersAction());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.h1}>User cards</h1>

      {isLoading && (
        <>
          <h2 className={css.h2}>Loading...</h2>
          <FadeLoader color="#471ca9" size={20} speedMultiplier={2} />
        </>
      )}
      {users.length === 0 && !error && !isLoading && <h2>No contacts.</h2>}
      {error && <h2>Server problems, try later</h2>}
      {users.length !== 0 && (
        <>
          <UsersList />
        </>
      )}
      <ToastContainer />
    </div>
  );
};
