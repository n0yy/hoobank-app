import React from "react";
import { clients } from "../constants";

export default function Clients() {
  return (
    <div className="flex items-center justify-center ss:justify-evenly mt-10 flex-wrap gap-5">
      {clients.map((client) => (
        <div key={client.id} className="scale-50 ss:scale-75">
          <img src={client.logo} alt={client.id} />
        </div>
      ))}
    </div>
  );
}
