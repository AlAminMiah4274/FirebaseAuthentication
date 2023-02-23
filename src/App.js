import './App.css';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, GithubAuthProvider } from 'firebase/auth';
import app from './Firebase/Firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error(error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error(error);
      })
  }

  return (
    <div className="App">

      {user.uid ?
        <button onClick={handleSignOut}>Sign Out</button> :
        <>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleGithubSignIn}>Github Sign In</button>
        </>
      }
      {user.uid && <div>
        <h3>User Name: {user.displayName}</h3>
        <p>Email Address: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>}
    </div>
  );
}

export default App;
