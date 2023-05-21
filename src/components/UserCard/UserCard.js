import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import css from './UserCard.module.css';
import { addFollowing, removeFollowing } from 'redux/usersSlice';

const formatFollowers = number => {
  return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export function UserCard({ user: { id, user, tweets, followers, avatar } }) {
  const dispatch = useDispatch();
  const followings = useSelector(state => state.users.followings);

  console.log(followings);

  const isFollowed = () => followings.includes(id);

  if (isFollowed()) {
    followers = Number(followers) + 1;
  }

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
        <p className={css.followers}>{formatFollowers(followers)} followers</p>
        {!isFollowed() ? (
          <button
            type="button"
            className={`button ${css.followBtn}`}
            onClick={() => dispatch(addFollowing(id))}
          >
            Follow
          </button>
        ) : (
          <button
            type="button"
            className={`button ${css.followBtnActive} active`}
            onClick={() => dispatch(removeFollowing(id))}
          >
            Following
          </button>
        )}
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};
