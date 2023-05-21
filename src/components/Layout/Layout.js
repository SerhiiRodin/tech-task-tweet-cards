// import { Loader } from 'components/Loader/Loader';
// import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.container}>
      <nav>
        <NavLink to="/" className={css.NavLink}>
          Home
        </NavLink>
        <NavLink to="/tweets" className={css.NavLink}>
          TweetCards
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
