import css from './UserCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsAction } from 'redux/operations';

export function UserCard() {
  const { users } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  // const filterByName = () => {
  //   const arr = users.filter(el =>
  //     el.name.toLowerCase().includes(filter.trim().toLowerCase())
  //   );
  //   return arr;
  // };

  // let currentContacts = [];

  // if (filter === '') {
  //   currentContacts = users;
  // } else currentContacts = filterByName();

  const handleDeleteContact = contactId => {
    dispatch(deleteContactsAction(contactId));
  };

  // "user": "Kirk Harvey",
  // "avatar": "avatar 1",
  // "followers": 50,
  // "tweets": 76,
  // "id": "1"

  return (
    <ul className={css['list-wraper']}>
      {users.map(({ id, user, avatar, followers, tweets }) => {
        return (
          <li key={id} className={css['list-item']}>
            <p>Name: {user}</p>
            <p> {tweets} TWEETS</p>
            <p> {followers} Followers</p>

            <button
              type="button"
              className={css['list-button']}
              onClick={() => handleDeleteContact(id)}
            >
              Follow
            </button>
          </li>
        );
      })}
    </ul>
  );
}
