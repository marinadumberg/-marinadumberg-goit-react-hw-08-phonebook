import { lazy, Suspense } from "react";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Switch } from "react-router-dom";
import { authOperations } from "./redux/auth";
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';
const HomeView = lazy(() =>
  import("./views/HomeViews" /*webpackChunkName: "home-view"*/)
);
const RegisterView = lazy(() =>
  import("./views/RegisterViews" /*webpackChunkName: "register-view"*/)
);
const LoginView = lazy(() =>
  import("./views/LoginViews" /*webpackChunkName: "login-view"*/)
);
const PhonebookView = lazy(() =>
  import("./views/PhonebookView" /*webpackChunkName: "phonebook-view"*/)
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
            <PhonebookView />
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
