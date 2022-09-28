import Button from "./Button";
import { features } from "../constants";
import { styles } from "../style";

export default function Features() {
  return (
    <section className="mt-40 flex flex-col ss:flex-row items-center justify-evenly">
      <div className="font-poppins w-full ss:w-6/12 space-y-5">
        <h1 className={styles.title}>
          You do the business, we’ll handle the money.
        </h1>
        <p className={styles.paragraph}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <div>
          <Button text="Get Started" />
        </div>
      </div>

      <div className="w-full ss:w-5/12 space-y-5 mt-10 ss:mt-0">
        {features.map((feature) => (
          <div
            className="flex items-center space-x-3 cursor-pointer hover:scale-105 bg-black-gradient p-3 rounded-lg"
            key={feature.id}
          >
            <span className="bg-gray-gradient rounded-full px-2 py-1 ss:px-4 ss:py-3">
              <img src={feature.icon} alt={feature.title} className="w-4 h-4" />
            </span>
            <div className="flex flex-col">
              <h3 className="font-semibold text-white">{feature.title}</h3>
              <p className="text-dimWhite text-xs">{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
