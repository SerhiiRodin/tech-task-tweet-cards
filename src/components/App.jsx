import css from './Container/Container.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { UserCard } from './UserCard/UserCard';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsAction, getUsersAction } from 'redux/operations';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(getContactsAction());
    dispatch(getUsersAction());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.h1}>User cards</h1>

      {isLoading && <h2 className={css.h2}>Loading...</h2>}
      {items.length === 0 && !error && !isLoading && <h2>No contacts.</h2>}
      {error && <h2>Server problems, try later</h2>}
      {items.length !== 0 && (
        <>
          <UserCard />
        </>
      )}
      <ToastContainer />
    </div>
  );
};
