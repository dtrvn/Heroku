import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
import Alert from "../../components/layout/Alert";
import Dashboard from "../../components/dashboard/Dashboard";
// import CreateProfile from "../../components/profile-forms/CreateProfile";
import Users from "../../components/users/Users";
import ShiftRegisters from "../../components/shiftRegisters/ShiftRegisters";
import AddUserForm from "../../components/user-forms/AddUserForm";
import EditUserForm from "../../components/user-forms/EditUserForm";
import EditPassWordForm from "../../components/user-forms/EditPassWordForm";
// import AddEducation from "../../components/profile-forms/AddEducation";
import PersonInShiftList from "../../components/shiftRegisters/personInShifts/PersonInShiftList";
import SalaryPersonal from "../../components/salary/SalaryPersonal";
import SalaryAllMember from "../../components/salary/SalaryAllMember";
import Shift from "../dashboard/Shift";
// import Profiles from "../../components/profiles/Profiles";
// import Profile from "../../components/profile/Profile";
// import Posts from "../../components/posts/Posts";
// import Post from "../../components/post/Post";
import NotFound from "../../components/layout/NotFound";
import PrivateRoute from "../../components/routing/PrivateRoute";
import Navbar from "../layout/Navbar";

const Routes = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="container">
        <Alert />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/users" component={Users} />
          <PrivateRoute exact path="/shiftRegisters" component={ShiftRegisters} />
          <PrivateRoute exact path="/create-user" component={AddUserForm} />
          <PrivateRoute exact path="/edit-user/:id" component={EditUserForm} />
          <PrivateRoute exact path="/edit-pass" component={EditPassWordForm} />
          <PrivateRoute exact path="/modifer-personInShift/:startDate/:endDate/:branchId" component={PersonInShiftList} />
          <PrivateRoute exact path="/modifer-shift" component={Shift} />
          <PrivateRoute exact path="/salarys" component={SalaryAllMember} />
          <PrivateRoute exact path="/salarys/:id/:firstDayOfFirstWeekInMonth/:lastDayOfLastWeekInMonth/:currentDay" component={SalaryPersonal} />
          <Route component={NotFound} />
        </Switch>
      </section>
    </Fragment>
  );
};

export default Routes;
