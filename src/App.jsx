import Header from "./Layouts/Header";
import Main from "./Layouts/Main";
import { useState } from "react";

function App() {
  const [totalScore, setTotalScore] = useState(0);
  const handleTotalScore = (result) => {
    setTotalScore(totalScore + result);
  };
  return (
    <div id="App" className="w-full flex flex-col gap-14">
      <Header totalScore={totalScore} />
      <Main handleTotalScore={handleTotalScore} />
    </div>
  );
}

export default App;
