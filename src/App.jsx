import Header from "./Layouts/Header";
import Main from "./Layouts/Main";
import { useState, useEffect } from "react";

function App() {
  const [totalScore, setTotalScore] = useState();

  useEffect(() => {
    const getLocalStorageScore = JSON.parse(localStorage.getItem("totalScore"));
    if (getLocalStorageScore) {
      setTotalScore(getLocalStorageScore);
    } else {
      setTotalScore(0);
    }
    return;
  }, []);

  const handleTotalScore = (result) => {
    setTotalScore(totalScore + result);
    localStorage.setItem("totalScore", JSON.stringify(totalScore + result));
  };

  return (
    <div id="App" className="w-full flex min-w-min flex-col gap-14">
      <Header totalScore={totalScore} />
      <Main handleTotalScore={handleTotalScore} />
    </div>
  );
}

export default App;
