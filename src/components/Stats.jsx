import { stats } from "../constants";

export default function Stats() {
  return (
    <section className="mt-28 flex flex-1 flex-wrap items-center justify-start ss:justify-evenly space-y-3 ss:space-y-0">
      {stats.map((stat) => (
        <div key={stat.id} className="text-white flex items-center">
          <h1 className="font-bold text-3xl mr-3">{stat.value}</h1>
          <p className="text-gradient uppercase">{stat.title}</p>
        </div>
      ))}
    </section>
  );
}
