import { useEffect, useState } from "react";
import './App.css';
import LandingPage from './pages/Landingpage/LandingPage';
import ViewPage from './pages/viewpage/ViewPage';

function App() {
  const [existingUser, setExistingUser] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("name");
    setExistingUser(user);
  }, [existingUser]);
  return (<>
    {existingUser ? <ViewPage /> : <LandingPage />}
  </>);
}

export default App;
