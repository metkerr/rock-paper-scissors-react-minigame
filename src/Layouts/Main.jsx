import { useState, useEffect } from "react";
import RPS_COIN from "../Components/RPS_COIN";
import pentagonPattern from "../images/bg-pentagon.svg";
import rulesImage from "../images/image-rules-bonus.svg";
import iconClose from "../images/icon-close.svg";

export default function Main() {
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [playerPicked, setPlayerPicked] = useState(); //player gacok
  const [houseGacok, setHouseGacok] = useState();
  const [showHouseGacok, setShowHouseGacok] = useState(false);
  const [isPlayerWin, setIsPlayerWin] = useState();

  useEffect(() => {
    const randomNumPick = (Math.random() * (4 - 0 + 1)) << 0;
    const gacokList = ["scissors", "paper", "rock", "lizard", "spock"];
    const gacok = gacokList[randomNumPick];
    setHouseGacok(gacok);
    setTimeout(() => (setShowHouseGacok(true), setIsPlayerWin(true)), 2055);
  }, [playerPicked]);

  const MainContentHome = () => {
    return (
      <div
        id="main-content-wrapper-1"
        className="w-54 h-54 mx-auto my-24 bg-contain bg-no-repeat bg-center flex flex-col relative"
        style={{ backgroundImage: `url(${pentagonPattern})` }}
      >
        <span className="flex -top-12 absolute w-full">
          <RPS_COIN
            gacok="scissors"
            className="mx-auto"
            onClick={() => setPlayerPicked("scissors")}
          />
        </span>
        <span className="flex absolute gap-28 top-8">
          <RPS_COIN
            gacok="spock"
            className="-ml-12"
            onClick={() => setPlayerPicked("spock")}
          />
          <RPS_COIN gacok="paper" onClick={() => setPlayerPicked("paper")} />
        </span>
        <span className="flex absolute gap-12 -bottom-10">
          <RPS_COIN
            gacok="lizard"
            className="-ml-5"
            onClick={() => setPlayerPicked("lizard")}
          />
          <RPS_COIN gacok="rock" onClick={() => setPlayerPicked("rock")} />
        </span>
      </div>
    );
  };

  const UserPlay = () => {
    return (
      <div
        id="user-play"
        className="text-white tracking-widest flex mb-48 mt-12"
      >
        <div id="play-wrapper" className="flex mx-auto gap-12">
          <div id="player-picked" className="flex flex-col gap-4">
            <RPS_COIN gacok={playerPicked} size={8.2} />
            <span className="text-center">YOU PICKED</span>
          </div>
          <div id="house-picked" className="flex flex-col gap-4">
            {showHouseGacok ? (
              <RPS_COIN gacok={houseGacok} size={8.2} className="mx-auto" />
            ) : (
              <div
                id="house-gacok-placeholder"
                className="rounded-full flex mx-auto"
                style={{ width: "8.2rem", height: "8.2rem" }}
              >
                <div className="w-28 h-28 rounded-full bg-dark-blue m-auto opacity-60 animate-bounce"></div>
              </div>
            )}
            <span className="text-center">THE HOUSE PICKED</span>
          </div>
        </div>
      </div>
    );
  };

  const RulesComponent = () => {
    return (
      <div
        id="rules-modal"
        className="hidden w-full min-h-full absolute bg-white top-0 pb-10"
        style={{ display: isRulesOpen && "block" }}
      >
        <div id="rules-modal-wrapper" className="flex flex-col pt-20">
          <h1 className="mx-auto text-3xl font-bold text-dark basis-24 shrink-0">
            RULES
          </h1>
          <div className="basis-80 mt-10">
            <img src={rulesImage} alt="rules" className="mx-auto w-78" />
          </div>
          <div className="mx-auto">
            <button
              name="exit rules modal button"
              className="mt-24 p-6"
              onClick={() => setIsRulesOpen(false)}
            >
              <img src={iconClose} alt="icon close" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-nam mb-10">
      <div id="main-content" className="w-full relative">
        {playerPicked ? <UserPlay /> : <MainContentHome />}
      </div>
      <div id="rules" className="text-white tracking-wide w-full relative">
        <div id="rules-wrapper" className="w-full flex">
          <button
            name="open-rules"
            className="rounded-lg mx-auto py-2 px-9 border-2 mt-14 border-gray-500"
            style={{ letterSpacing: "0.2rem" }}
            onClick={() => setIsRulesOpen(true)}
          >
            RULES
          </button>
        </div>
      </div>
      <RulesComponent />
    </main>
  );
}
