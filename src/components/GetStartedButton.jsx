import { arrowUp } from "../assets";

export default function GetStartedButton() {
  return (
    <span className="cursor-pointer">
      <div className="bg-blue-gradient w-[100px] h-[100px] rounded-full p-[1px] hover:shadow hover:shadow-sky-300">
        <div className="bg-primary w-[100%] h-[100%] rounded-full flex items-center justify-center text-xs flex-col">
          <div className="flex items-center text-gradient space-x-[2px]">
            <p>Get</p>
            <img src={arrowUp} alt="Arrow Up" />
          </div>
          <p className="text-gradient">Started</p>
        </div>
      </div>
    </span>
  );
}
