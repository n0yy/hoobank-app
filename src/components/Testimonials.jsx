import { styles } from "../style";
import { feedback } from "../constants";
import { quotes } from "../assets";
import Clients from "./Clients";

export default function Testimonials() {
  return (
    <section className="mt-40">
      <div className="flex flex-col ss:flex-row items-center justify-around">
        <h1 className={`${styles.title} w-full ss:w-4/12`}>
          What people are saying about us
        </h1>
        <p
          className={`${styles.paragraph} w-full ss:w-[380px] text-sm mt-3 ss:mt-0`}
        >
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className="flex items-center flex-wrap justify-evenly mt-20 gap-5">
        {feedback.map((feed) => (
          <div
            key={feed.id}
            className="bg-black-gradient px-7 py-10 w-[340px] h-[360px] rounded-lg flex flex-col justify-between"
          >
            <div className="space-y-10">
              <img src={quotes} alt="" />
              <p className="text-white">{feed.content}</p>
            </div>
            <div className="flex items-center space-x-3">
              <img
                src={feed.img}
                alt={feed.name}
                className="w-[48px] h-[48px]"
              />
              <div>
                <h5 className="font-semibold text-white">{feed.name}</h5>
                <h6 className="text-dimWhite text-xs">{feed.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Clients />
    </section>
  );
}
