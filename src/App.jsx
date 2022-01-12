import WelcomeScreen from "./screens/WelcomeScreen";
import ListScreen from "./screens/ListScreen";
import Footer from "./components/Footer";
import "./css/style.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
  // Local state
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

      {itemList.length === 0 ? (
        <WelcomeScreen itemList={itemList} setItemList={setItemList} />
      ) : (
        <ListScreen itemList={itemList} setItemList={setItemList} />
      )}
      <Footer />
    </div>
  );
}

export default App;
