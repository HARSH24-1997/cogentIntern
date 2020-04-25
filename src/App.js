import React from 'react';
import './App.css';
import Intro from './component/Intro';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Layout from './component/Layout';
import { Link, Redirect } from 'react-router-dom';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Page404 from './component/Page404';
import Homepage from './component/Homepage';
import Profile from './component/Profile';
function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Intro}/>
    <Route exact path="/Login" component={Login} />
    <Route exact path="/SignUp" component={SignUp} />
    <Route exact path="/Layout" component={Layout} />
    <Route component={Page404}/>
    <Redirect to ="/notFound"/> 
       </Switch>
    </BrowserRouter>
    {/* <Profile/> */}
    </>
  );
}

export default App;


 {/* <Login/> */}
    {/* <SignUp/> */}
    {/* <Layout/> */}
    {/* <Dashboard/> */}
    {/* <Activity/> */}
    {/* <Profile/> */}
    {/* <Filter/> */}
    {/* <Homepage/> */}