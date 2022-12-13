import React, { Suspense } from "react";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Users from "./User/Pages/Users";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainNavigation from "./Shared/Components/Navigation/MainNavigation";
// import NewPlace from "./Places/Pages/NewPlace";
// import UserPlaces from "./Places/Pages/UserPlaces";
// import UpdatePlace from "./Places/Pages/UpdatePlace";
// import Auth from "./User/Pages/Auth";
import { AuthContext } from "./Shared/Context/Auth-Context";
import { useAuth } from "./Shared/Hooks/auth-hook";
import LoadingSpinner from "./Shared/Components/UIELements/LoadingSpinner/LoadingSpinner";

// const Users = React.lazy(() => import("./User/Pages/Users"));
const NewPlace = React.lazy(() => import("./Places/Pages/NewPlace"));
const UserPlaces = React.lazy(() => import("./Places/Pages/UserPlaces"));
const UpdatePlace = React.lazy(() => import("./Places/Pages/UpdatePlace"));
const Auth = React.lazy(() => import("./User/Pages/Auth"));

function App() {
  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    );
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <div>
          <MainNavigation />
          <main>
            <Suspense
              fallback={
                <div className="center">
                  <LoadingSpinner />
                </div>
              }
            >
              {routes}
            </Suspense>
          </main>
        </div>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
