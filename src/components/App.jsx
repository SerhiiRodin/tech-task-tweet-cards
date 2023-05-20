import css from './Container/Container.module.css';


import { UserCard } from './UserCard/UserCard';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction } from 'redux/operations';
import { ToastContainer } from 'react-toastify';

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

      {isLoading && <h2 className={css.h2}>Loading...</h2>}
      {users.length === 0 && !error && !isLoading && <h2>No contacts.</h2>}
      {error && <h2>Server problems, try later</h2>}
      {users.length !== 0 && (
        <>
          <UserCard />
        </>
      )}
      <ToastContainer />
    </div>
  );
};
