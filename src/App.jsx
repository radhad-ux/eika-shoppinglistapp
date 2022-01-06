import Header from "./components/Header";
import WelcomeScreen from "./screens/WelcomeScreen";
import ListScreen from "./screens/ListScreen";
import Footer from "./components/Footer";
import "./styles/layout.css";
import { useState, useEffect } from "react";

function App() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("itemList");
    if (data) {
      setItemList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("itemList", JSON.stringify(itemList));
  }, [itemList]);

  return (
    <div className="App">
      <Header />
      {itemList.length === 0 ? <WelcomeScreen /> : <ListScreen />}
      <Footer />
    </div>
  );
}

export default App;
