import WelcomeScreen from "./screens/WelcomeScreen";
import ListScreen from "./screens/ListScreen";
import "./css/style.css";
import { useState, useEffect } from "react";
import logo from "./img/mainlogo.jpg";

function App() {
  // Local state
  const [itemList, setItemList] = useState([]);

  // Methods
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
      <header>
        <img src={logo} className="logo" alt="company logo" />
      </header>
      {itemList.length === 0 ? (
        <WelcomeScreen itemList={itemList} setItemList={setItemList} />
      ) : (
        <ListScreen itemList={itemList} setItemList={setItemList} />
      )}
    </div>
  );
}

export default App;
