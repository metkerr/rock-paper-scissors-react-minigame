import { useState, useEffect } from "react";
import RPS_COIN from "../Components/RPS_COIN";
import pentagonPattern from "../images/bg-pentagon.svg";
import rulesImage from "../images/image-rules-bonus.svg";
import iconClose from "../images/icon-close.svg";

export default function Main({ handleTotalScore }) {
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [playerPick, setPlayerPick] = useState(); //player gacok
  const [houseGacok, setHouseGacok] = useState();
  const [showHouseGacok, setShowHouseGacok] = useState(false);
  const [gameResult, setGameResult] = useState();

  useEffect(() => {
    if (gameResult === "YOU LOSE") {
      handleTotalScore(-1);
      return;
    } else if (gameResult === "YOU WIN") {
      handleTotalScore(1);
      return;
    } else {
      return;
    }
  }, [gameResult]);

  const handleGameOn = (playerGacok) => {
    const randomNumPick = (Math.random() * (4 - 0 + 1)) << 0; //random index pick 0-4
    const gacokList = ["scissors", "paper", "rock", "lizard", "spock"];
    const gacok = gacokList[randomNumPick];
    setHouseGacok(gacok);
    setPlayerPick(playerGacok);
    let result;

    if (gacok === playerGacok) {
      result = "Tie!";
    } else if (
      (gacok === "rock" && playerGacok === "scissors") ||
      (gacok === "rock" && playerGacok === "lizard") ||
      (gacok === "scissors" && playerGacok === "paper") ||
      (gacok === "scissors" && playerGacok === "lizard") ||
      (gacok === "paper" && playerGacok === "rock") ||
      (gacok === "paper" && playerGacok === "spock") ||
      (gacok === "lizard" && playerGacok === "paper") ||
      (gacok === "lizard" && playerGacok === "spock") ||
      (gacok === "spock" && playerGacok === "scissors") ||
      (gacok === "spock" && playerGacok === "rock")
    ) {
      result = "YOU LOSE";
    } else {
      result = "YOU WIN";
    }

    setTimeout(() => {
      setShowHouseGacok(true);
      setGameResult(result);
    }, 1600);
  };

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
            onClick={() => handleGameOn("scissors")}
          />
        </span>
        <span className="flex absolute gap-28 top-8">
          <RPS_COIN
            gacok="spock"
            className="-ml-12"
            onClick={() => handleGameOn("spock")}
          />
          <RPS_COIN gacok="paper" onClick={() => handleGameOn("paper")} />
        </span>
        <span className="flex absolute gap-12 -bottom-10">
          <RPS_COIN
            gacok="lizard"
            className="-ml-5"
            onClick={() => handleGameOn("lizard")}
          />
          <RPS_COIN gacok="rock" onClick={() => handleGameOn("rock")} />
        </span>
      </div>
    );
  };

  const UserPlay = () => {
    return (
      <div
        id="user-play"
        className={`text-white tracking-widest flex flex-col mt-12 ${
          gameResult ? "-mb-1" : "mb-48"
        }`}
      >
        <div id="play-wrapper" className="flex mx-auto gap-12">
          <div id="player-picked" className="flex flex-col gap-4">
            <div className="relative">
              {gameResult === "YOU WIN" && (
                <div className="w-32 h-32 rounded-full bg-dark-blue absolute z-0 animate-ping" />
              )}
              <RPS_COIN
                gacok={playerPick}
                size={8.2}
                className="z-10 relative"
              />
            </div>
            <span className="text-center">YOU PICKED</span>
          </div>
          <div id="house-picked" className="flex flex-col gap-4">
            {showHouseGacok ? (
              <div className="relative flex">
                {gameResult === "YOU LOSE" && (
                  <div className="w-32 h-32 rounded-full bg-dark-blue absolute z-0 animate-ping left-2.5 top-0.5" />
                )}
                <RPS_COIN
                  gacok={houseGacok}
                  size={8.2}
                  className="mx-auto relative z-10"
                />
              </div>
            ) : (
              <div
                id="house-gacok-placeholder"
                className="rounded-full flex mx-auto"
                style={{ width: "8.2rem", height: "8.2rem" }}
              >
                <div className="w-28 h-28 rounded-full bg-dark-blue m-auto opacity-60 animate-bounce" />
              </div>
            )}
            <span className="text-center">THE HOUSE PICKED</span>
          </div>
        </div>
        {gameResult && (
          <div id="game-result-container" className="w-full flex mt-2">
            <div
              id="game-result-wrapper"
              className="mx-auto mt-16 flex gap-5 flex-col text-center"
            >
              <p className="text-5xl font-bold" style={{ fontSize: "3.5rem" }}>
                {gameResult && gameResult}
              </p>
              <button
                name="Play again"
                className="py-2.5 px-14 bg-white rounded-md text-radial-1 mx-auto text-lg"
                style={{ letterSpacing: "0.2rem" }}
                onClick={() => (
                  setPlayerPick(undefined),
                  setGameResult(undefined),
                  setShowHouseGacok(false)
                )}
              >
                PLAY AGAIN
              </button>
            </div>
          </div>
        )}
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
        {playerPick ? <UserPlay /> : <MainContentHome />}
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
