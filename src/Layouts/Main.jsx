import RPS_COIN from "../Components/RPS_COIN";
import pentagonPattern from "../images/bg-pentagon.svg";

export default function Main() {
  return (
    <main>
      <div id="main-content" className="w-full">
        <div
          id="main-content-wrapper"
          className="w-48 h-48 mx-auto my-24 bg-contain bg-no-repeat bg-center flex flex-col relative"
          style={{ backgroundImage: `url(${pentagonPattern})` }}
        >
          <span className="flex -top-14 absolute w-full">
            <RPS_COIN gacok="scissors" className="mx-auto" />
          </span>
          <span className="flex absolute w-full justify-between">
            <RPS_COIN gacok="spock" className="" />
            <RPS_COIN gacok="paper" />
          </span>
          <span className="flex absolute w-full gap-8 -bottom-10">
            <RPS_COIN gacok="lizard" className="-ml-5" />
            <RPS_COIN gacok="rock" />
          </span>
        </div>
      </div>
      <div id="rules" className="text-white tracking-wide">
        <div id="rules-wrapper" className="w-full flex my-5">
          <button
            name="open-rules"
            className="rounded-md mx-auto py-2 px-7 border-2 border-neutral-400"
            style={{ letterSpacing: "0.2rem" }}
          >
            RULES
          </button>
        </div>
      </div>
    </main>
  );
}
