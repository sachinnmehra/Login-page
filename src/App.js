import React, { Component } from "react";

import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import SignInSignUpPage from "./Pages/sign-in-sign-up/sign-in-sign-up";
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";
import { setCurrentUser } from "./Redux/reducers/userReducer/userAction";
class App extends Component {
  unsubscribeFromAuth = null; //for closing the subscription
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //method render when theres an change in auth state
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); //return user data which stored in firestore
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(), //give all userData which stored at firestore,
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        {/* <Route exact path="/home" component={Home} /> */}
        {/* <Route exact path="/" component={SignInSignUpPage} /> */}
        <Route
          path="/"
          render={() =>
            this.props.currentUser ? (
              <Redirect to="/home" />
            ) : (
              <SignInSignUpPage />
            )
          }
        />
        <Route
          exact
          path="/home"
          render={() =>
            !this.props.currentUser ? <Redirect to="/" /> : <Home />
          }
        />
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
