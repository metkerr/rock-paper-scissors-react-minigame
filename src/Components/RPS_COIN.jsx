import PropTypes from "prop-types";
import iconRock from "../images/icon-rock.svg";
import iconPaper from "../images/icon-paper.svg";
import iconScissors from "../images/icon-scissors.svg";
import iconLizard from "../images/icon-lizard.svg";
import iconSpock from "../images/icon-spock.svg";

function RPS_COIN({ gacok = "scissors", className, size = 6, onClick }) {
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
      className: "from-scissors-2 to-scissors-1 border-amber-600",
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

  return (
    <div
      id="RPC-COINS"
      className={`active:opacity-80 select-none sm:cursor-pointer ${className}`}
      onClick={onClick}
      title={gacok}
    >
      <div
        id="rpsc-container"
        className={`bg-gradient-to-b border-b-4 rounded-full flex ${list[gacok].className}`}
        style={{
          width: `${size}rem`,
          height: `${size}rem`,
          borderBottomWidth: `${size * 0.75}px`,
        }}
      >
        <div
          id="rpsc-wrapper"
          className="bg-white rounded-full border-t-4 border-gray-300 m-auto flex"
          style={{
            width: `${size * 0.75}rem`,
            height: `${size * 0.75}rem`,
            borderTopWidth: `${size * 0.7}px`,
          }}
        >
          <img
            src={list[gacok].icon}
            alt="paper icon"
            className="m-auto"
            style={{ width: `${size * 0.3333}rem` }}
          />
        </div>
      </div>
    </div>
  );
}

RPS_COIN.propTypes = {
  gacok: PropTypes.oneOf(["rock", "paper", "scissors", "lizard", "spock"]),
  size: PropTypes.number,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default RPS_COIN;
