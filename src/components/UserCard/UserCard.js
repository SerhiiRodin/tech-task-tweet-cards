import { useState } from 'react';
import css from './UserCard.module.css';
import { useDispatch, useSelector } from 'react-redux';

const formatFollowers = number => {
  return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export function UserCard() {
  const [isFollow, setIsFollow] = useState(false);

  const { users } = useSelector(state => state.users);

  console.log(users);

  const dispatch = useDispatch();

  const isFollowed = true;

  // "user": "Kirk Harvey",
  // "avatar": "avatar 1",
  // "followers": 50,
  // "tweets": 76,
  // "id": "1"

  return (
    <ul className={css['list-wraper']}>
      {users.map(({ id, user, avatar, followers, tweets }) => {
        return (
          <div className={css.card}>
            <div className={css.top}></div>
            <div className={css.divider}>
              <div className={css.userImageWrapper}>
                <img src={avatar} alt={user} />
              </div>
            </div>
            <div className={css.info}>
              <p className={css.tweets}>{tweets} tweets</p>
              <p className={css.followers}>
                {formatFollowers(followers)} followers
              </p>
              {!isFollowed ? (
                <button
                  type="button"
                  className={`button ${css.followBtn}`}
                  // onClick={() => dispatch(addFollowing(id))}
                >
                  Follow
                </button>
              ) : (
                <button
                  type="button"
                  className={`button ${css.followBtn} active`}
                  // onClick={() => dispatch(removeFollowing(id))}
                >
                  Following
                </button>
              )}
            </div>
          </div>
        );
      })}
    </ul>
  );
}
