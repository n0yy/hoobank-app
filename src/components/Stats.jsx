import { stats } from "../constants";

export default function Stats() {
  return (
    <section className="mt-28 flex flex-wrap items-center sm:items-start justify-start sm:justify-evenly space-y-3 sm:space-y-0 gap-0 sm:gap-3">
      {stats.map((stat) => (
        <div key={stat.id} className="text-white flex items-center">
          <h1 className="font-bold text-3xl mr-3">{stat.value}</h1>
          <p className="text-gradient uppercase">{stat.title}</p>
        </div>
      ))}
    </section>
  );
}
