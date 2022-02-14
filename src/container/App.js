import React from 'react'
import './App.css'
import { Homepage } from '../pages/Homepage/Homepage'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import ShopPage from '../pages/Shop-page/Shop-page'
import Header from '../components/Header-Nav/Header'
import SignInSignOut from '../components/Sign-in and Sign-out page/SignInSignOut'




export default class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignOut} />
        </Switch>
      </div>
    )
  }
}
// export default function App() {
//   const user = false;
//   return (
//     <Router>
//       <Topbar />
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/register">
//           {user ? <Home />: <Register/>}
//         </Route>
//         <Route path="/login">
//         {user ? <Home />: <Login/>}
//         </Route>
//         <Route path="/write">
//         {user ? <Write/>: <Register/>}
//         </Route>
//         <Route path="/settings">
//         {user ? <Settings />: <Login/>}
//         </Route>
//         <Route path="/post/:postID">
//           <Single />
//         </Route>

//       </Switch>
//     </Router>
//   )
// }
