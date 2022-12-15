import gameLogo from "../images/logo-bonus.svg";

export default function Header({ totalScore }) {
  return (
    <header className="flex">
      <div
        id="header-wrapper"
        className="w-80 h-24 rounded-lg border-3 border-header-outline mx-auto mt-8 flex px-2.5 justify-between min-w-max"
      >
        <div id="game-logo-header" className="my-auto pl-2.5 shrink-0 mr-4">
          <img
            src={gameLogo}
            alt="rock paper scissors game logo"
            className="object-scale-down w-13"
          />
        </div>
        <div
          id="score"
          className="w-20 h-18 bg-white rounded my-auto flex shrink-0"
        >
          <div id="score-wrapper" className="flex flex-col m-auto">
            <p
              className="text-score tracking-widest text-xs"
              style={{ fontSize: "0.65rem", lineHeight: "0.8rem" }}
            >
              SCORE
            </p>
            <span
              className="text-neutral-600 text-4xl font-bold text-center"
              style={{ fontSize: "2.5rem" }}
            >
              {totalScore}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
