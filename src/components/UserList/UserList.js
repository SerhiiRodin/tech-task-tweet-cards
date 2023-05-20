import { useSelector } from 'react-redux';

import { UserCard } from '../../components/UserCard/UserCard';

import css from './UserList.module.css';

export const UsersList = () => {
  const { users } = useSelector(state => state.users);

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {users.map(user => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};
