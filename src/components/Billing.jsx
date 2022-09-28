import { apple, bill, google } from "../assets";
import { styles } from "../style";

export default function Billing() {
  return (
    <section className="mt-48 flex flex-col ss:flex-row items-center jutify-evenly gap-10">
      <div className="w-full ss:w-6/12 relative">
        <div className="absolute -left-1/3 blur-3xl bg-white/30 w-72 h-72 rounded-full"></div>
        <img src={bill} alt="" />
      </div>

      <div className="font-poppins w-full ss:w-5/12 space-y-5">
        <h1 className={styles.title}>
          Easily control your billing & invoicing.
        </h1>
        <p className={styles.paragraph}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex items-center space-x-3">
          <a href="">
            <img src={apple} alt="#" />
          </a>
          <a href="">
            <img src={google} alt="#" />
          </a>
        </div>
      </div>
    </section>
  );
}
