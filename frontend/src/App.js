import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ProfileComponent from "./components/SongListComponent";
import SingleSongPage from "./components/SingleSongPage";
import Footer from "./components/FooterComponent";
import LikeComponent from "./components/LikeComponent";
import Player from "./components/PlayerComponent";
import OneSong from "./components/OneSong/OneSong";
import UploadFormPage from "./components/UploadFormPage";
import Loading from './components/Loading'
import { fetchSongComments } from "./store/comment";
import { fetchSongsLikes } from "./store/like";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(fetchSongComments())
    dispatch(fetchSongsLikes())
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <>
        <Navigation isLoaded={isLoaded} />
        <Switch>
          <Route exact path="/">
            <ProfileComponent isLoaded={isLoaded}  />
            {/* move this to splash page <Footer />  */}
          </Route>
          <Route exact path="/users/:userId">
            <SingleSongPage />       
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
