
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps.jsx";
import Funds from "./Funds.jsx";
import Holdings from "./Holdings.jsx";
import Orders from "./Orders.jsx";
import Positions from "./Positions.jsx";
import Summary from "./Summary.jsx";

import WatchList from "../components/WatchList.jsx";
import  GeneralContextProvider  from "../context/GeneralContext.jsx";

export default function  Dashboard(){
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        
        <WatchList />
       </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route index element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
          <Route path="apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
   

  );
};

