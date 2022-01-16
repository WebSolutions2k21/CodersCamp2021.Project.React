import app from 'config/firebase';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => app.auth().signOut()}></button>
    </>
  );
};

export default Home;
