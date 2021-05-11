import React from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "../../Redux/reducers/userReducer/userAction";
const Home = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div>
      <h1>Welcome {currentUser ? currentUser.displayName : null}</h1>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
