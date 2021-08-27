import { lazy, Suspense } from "react";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Switch } from "react-router-dom";
import { authOperations } from "../redux/auth";
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';
const HomeView = lazy(() =>
  import("./views/HomeView" /*webpackChunkName: "home-view"*/)
);
const RegisterView = lazy(() =>
  import("./views/RegisterView" /*webpackChunkName: "register-view"*/)
);
const LoginView = lazy(() =>
  import("./views/LoginView" /*webpackChunkName: "login-view"*/)
);
const PhoneBookView = lazy(() =>
  import("./views/PhoneBookView" /*webpackChunkName: "phonebook-view"*/)
);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <AppBar />
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            {/* <PublicRoute exact path="/"> */}
            <HomeView />
            {/* </PublicRoute> */}

            {/* <PublicRoute exact path="/register" restricted> */}
            <RegisterView />
            {/* </PublicRoute> */}

            {/* <PublicRoute exact path="/login" redirectTo="/phonebook" restricted> */}
            <LoginView />
            {/* </PublicRoute> */}

            {/* <PrivateRoute path="/phonebook"> */}
            <PhoneBookView />
            {/* </PrivateRoute> */}
          </Suspense>
        </Switch>
      </Container>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
