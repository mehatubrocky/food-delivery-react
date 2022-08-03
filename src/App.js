import React from "react";
import { Route , Routes} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header , CreateContainer , MainContainer } from "./Components";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { useEffect } from "react";
import { useStateValue } from "./context/stateProvider";
import { actionType } from "./context/reducer";

function App() {
  const [{foodItems},dispatch] = useStateValue();
  const fetchData = async () => {
   await getAllFoodItems().then((data) => {
    dispatch({
      type : actionType.SET_FOOD_ITEMS,
      foodItems : data,
    });
   }); 
  };
  useEffect(() => {
    fetchData();
  },[]);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-gray-100">
      <Header />
      <main className="mt-14 md:mt-18 px-4 md:px-16 py-4 w-full">
        <Routes>
          <Route path="/*" element={<MainContainer/>} />
          <Route path="/createItem" element={<CreateContainer />} />
        </Routes>
      </main>

    </div>
    </AnimatePresence>
  );
};

export default App;
