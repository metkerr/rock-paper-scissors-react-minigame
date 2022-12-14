import PropTypes from "prop-types";
import iconRock from "../images/icon-rock.svg";
import iconPaper from "../images/icon-paper.svg";
import iconScissors from "../images/icon-scissors.svg";
import iconLizard from "../images/icon-lizard.svg";
import iconSpock from "../images/icon-spock.svg";

function RPS_COIN({ gacok = "scissors", className }) {
  const list = {
    rock: {
      icon: iconRock,
      className: "from-rock-2 to-rock-1 border-red-700",
    },
    paper: {
      icon: iconPaper,
      className: "from-paper-2 to-paper-1 border-blue-700",
    },
    scissors: {
      icon: iconScissors,
      className: "from-scissors-2 to-scissors-1 border-yellow-600",
    },
    lizard: {
      icon: iconLizard,
      className: "from-lizard-2 to-lizard-1 border-violet-700",
    },
    spock: {
      icon: iconSpock,
      className: "from-cyan-2 to-cyan-1 border-cyan-600",
    },
  };

  console.log(list[gacok].className);
  return (
    <div id="RPC-COINS" className={className}>
      <div
        id="rpsc-container"
        className={`bg-gradient-to-b border-b-4 w-24 h-24 rounded-full flex ${list[gacok].className}`}
      >
        <div
          id="rpsc-wrapper"
          className="w-18 h-18 bg-white rounded-full border-t-4 border-gray-300 m-auto flex"
        >
          <img src={list[gacok].icon} alt="paper icon" className="w-8 m-auto" />
        </div>
      </div>
    </div>
  );
}

RPS_COIN.propTypes = {
  gacok: PropTypes.oneOf(["rock", "paper", "scissors", "lizard", "spock"]),
};

export default RPS_COIN;
