import { card } from "../assets";
import { styles } from "../style";
import Button from "./Button";

export default function CardDeal() {
  return (
    <section className="mt-40 flex flex-col ss:flex-row items-start justify-evenly">
      <div className="space-y-5 font-poppins w-full ss:w-5/12">
        <h1 className={styles.title}>
          Find a better card deal in few easy steps.
        </h1>
        <p className={styles.paragraph}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <div>
          <Button text="Get Started" />
        </div>
      </div>

      <div className="w-full ss:w-5/12 mt-10 ss:mt-0">
        <img src={card} alt="Card" />
      </div>
    </section>
  );
}
