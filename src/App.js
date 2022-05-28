import { useEffect } from "react";
import { Route } from "react-router-dom";
import categoryApi from "./api/categoryApi";
import "./App.css";
import ClockFeature from "./features/Clock";

function App() {
  useEffect(() => {
    const fetchCategoryApi = async () => {
      const categoriesList = await categoryApi.getAll();
      console.log(categoriesList);
    };
    fetchCategoryApi();
  }, []);
  return <div className="App">App</div>;
}

export default App;
