
import './App.css';
import NavBar from './components/NabBar';
// import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Blog from './screens/Blog';
import Products from './screens/Products';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mls from './screens/Mls';
import { News } from './screens/News';
import NewsMore from './screens/NewsMore';
import Community from './screens/Communities';
import Communities from './screens/Communities';
import ViewCard from './components/ViewCard';
import {AddNew }from "./components/addNew/addNew";
import Admin from './screens/Admin';
import SmallCard from './layout/smallCard';
import { Route,Routes } from "react-router-dom";
import Board from './layout/board';
import {Chart} from './components/chart/chart';

  
function App() {
  return(
    <Routes>
        <Route path="/dashboard" element={<Admin/>}>
         <Route path="/dashboard/board" element={<Board/>}/> 
        <Route path="/dashboard/addNew" element={<AddNew/>}/>
        <Route path="/dashboard/listing" element={<SmallCard/>}/>
        <Route path="/dashboard/chart" element={<Chart/>}/>
        </Route>
  
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/mls" element={<Mls />} />
        <Route path="/readmore" element={<NewsMore />} />
        <Route path="/communities" element={<Communities/>} />
        {/*<Route path="/login" element={<LoginForm/>} />*/}
        <Route path="/view" element={<ViewCard/>} />
        {/* <Route path="/smallCard" element={<SmallCard/>} /> */}
        </Routes>
  );
  
  
  }



/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/smallCard",
    element: <SmallCard />,
  },
  {
    path: "/dashboard",
    element: <Admin />,
  },

  {
    path: "/mls",
    element: <Mls />,
  },
  // news
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/readmore",
    element: <NewsMore />
  },
 
  {
    path: "/communities",
    element: <Communities />
  },
  {
    path: "/view",
    element: <ViewCard/>
  },
  // {
  //   path: "/login",
  //   element: <CreatForm open={open} onClick={()=> setOpen(true)}/>
  // },

]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}*/
 


export default App
