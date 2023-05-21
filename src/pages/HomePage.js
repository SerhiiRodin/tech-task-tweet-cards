import css from '../components/Container/Container.module.css';

export const HomePage = () => {
  return (
    <div className="container">
      <div className="about">
        <h1 className={css["welcome-titel"]}>
          Welcome to the Tweetcards database!!!
        </h1>
      </div>
    </div>
  );
};
