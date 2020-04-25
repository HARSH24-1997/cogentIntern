import React from 'react';
import "../css/Layout.css";
import Dashboard from './Dashboard';
import Activity from './Activity';
import Profile from './Profile';
import Filter from './Filter';
import Page404 from './Page404';
import Homepage from './Homepage';
import { BrowserRouter, Switch, Route ,Redirect} from 'react-router-dom'
import "../css/Layout.css"
import { useRef, useEffect, useState } from 'react';
import Routes from './Routes'
import Card from './Card';


function Layout() {
    // const [token,setToken]=useState(localStorage.getItem("token"));
    // const [log,setLog]=useState(1);
    // if(token == null ){
    //     setLog(0);
    // }
    // if(log===0){
    //   return(<><Redirect to="/Login"/></>)
    // }                   
    return (
        <>
        <BrowserRouter>
        <Dashboard/>
        <Switch>
           <Route exact path="/" component={Homepage} />
           <Route exact path="/Home" component={Homepage} />
           <Route path="/Profile" component={Profile} />
           <Route path="/Filter" component={Filter} />
           <Route path="/Activity" component={Activity} />
           <Route path="/LogOut" component={Page404} />
           <Route path="/ResetPassword" component={Page404} />
           <Route path="/Share" component={Page404} />
           <Route path="/TotalEarning" component={Page404} />
           <Route path="/user1/Application1" render={(props)=><Card {...props} title={'Application 1'} />}/>
           <Route path="/user1/Website1" render={(props)=><Card {...props} title={'Website 1'} />}/>
           <Route path="/user1/Website2" render={(props)=><Card {...props} title={'Website 2'}  />}/>
           <Route path="/user1/Application3" render={(props)=><Card {...props} title={'Application 3'}  />}/>
           <Route path="/user1/Website3" render={(props)=><Card {...props} title={'Website 3'}  />}/>
            <Route path="/user1/Application2" render={(props)=><Card {...props} title={'Application 2'}  />}/>
           <Route path="/user1/Application4"render={(props)=><Card {...props} title={'Application 4'}  />}/>
         </Switch>
         <Route exact path="/Layout" component={Homepage} />
      </BrowserRouter> 
      </>
    )
}

export default Layout
