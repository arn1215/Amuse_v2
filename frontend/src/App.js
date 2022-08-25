import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
<<<<<<< HEAD
import Navigation from "./Components/Navigation";
import ProfileComponent from "./components/SongListComponent";
import SingleSongPage from "./components/SingleSongPage";

import LikeComponent from "./components/LikeComponent";
import Player from "./components/PlayerComponent";
import OneSong from "./components/OneSong/OneSong";
import UploadFormPage from "./components/UploadFormPage";
import Loading from './components/Loading'
import { fetchSongComments } from "./store/comment";
import { fetchSongsLikes } from "./store/like";
import ProfilePage from "./components/ProfilePage";
import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage"
import Footer from "./Components/Footer"
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(fetchSongComments())

=======
import Navigation from "./components/Navigation";
import ProfileComponent from "./components/SongListComponent";
import OneSong from "./components/OneSong/OneSong";
import UploadFormPage from "./components/UploadFormPage";
import { fetchSongComments } from "./store/comment";
import ProfilePage from "./components/ProfilePage";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(fetchSongComments())
  
>>>>>>> merge
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <>
<<<<<<< HEAD
          <Switch>
            <Route exact path="/">
              <Navigation />
              <MainPage />
              <Footer />
              {/* move this to splash page <Footer />  */}
            </Route>
            <Route exact path="/users/:userId" className="yo">
              {/* <SingleSongPage /> */}
              <ProfilePage />
            </Route>
            <Route exact path="/songs/:songId">
              <OneSong />
            </Route>
            <Route exact path="/upload">
              <UploadFormPage />
            </Route>
            <Route>
              Page Not Found
            </Route>
          </Switch>
        </>
      )}
    </>
=======
        <Navigation isLoaded={isLoaded} />
        <Switch>
          <Route exact path="/">
            <ProfileComponent isLoaded={isLoaded}  />
            {/* move this to splash page <Footer />  */}
          </Route>
          <Route exact path="/users/:userId" className="yo">
            {/* <SingleSongPage /> */}
            <ProfilePage />
          </Route>
          <Route exact path="/songs/:songId">
            <OneSong />
          </Route>
          <Route exact path="/upload">
            <UploadFormPage />
          </Route>
          <Route>
            Page Not Found
          </Route>
        </Switch>
        </>
      )}
   </>
>>>>>>> merge
  );
}

export default App;














































// import SignUpFormPage from './components/SignUpFormPage';
// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormModal";
// import * as sessionActions from "./store/session";
// import Navigation from "./components/Navigation";
// import SongComponent from './components/SongComponent';
// import UploadFormPage from './components/UploadFormPage';

// function App() {
//   const dispatch = useDispatch();
//   const [isLoaded, setIsLoaded] = useState(false);
//   useEffect(() => {
//     dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
//   }, [dispatch]);

//   return (
//     <>
//       <Navigation isLoaded={isLoaded} />
//       {isLoaded && (
//         <Switch>
//           <Route path="/signup">
//             <SignUpFormPage />
//           </Route>
//           <Route exact path ='/upload'>
//             <UploadFormPage />
//           </Route>
//           <Route>
//             Page Not Found
//           </Route>
//         </Switch>
//       )}
//     </>
//   );
// }

// export default App;
