import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card({ data }) {
  const {
    id,
    name,
    hire,
    salary,
    rpm,
    anl,
    tnps,
    aht,
    awt,
    pps,
    rank,
    image,
    url,
    kpi,
    points,
    gas,
    ep,
    terminal,
    adsl,
  } = data;
  return (
    <div className="card">
      <Image
        className="avatar"
        src={`/avatars/${image}.png`}
        width={150}
        height={150}
        alt="Avatar"
      />
      {/* <!-- <p>Name Here</p> --> */}
      <h3 className="title-name">{name}</h3>
      <div className="data">
        <div className="pb">
          <p>
            RPM: <span>{rpm}</span>
          </p>
          <p>
            AHT: <span>{aht}</span>{" "}
          </p>
          <p>
            KPI: <span>{kpi}</span>
          </p>
        </div>
        <div className="pb">
          <p>
            TNPS: <span>{tnps}</span>
          </p>
          <p>
            AWT: <span>{awt}</span>{" "}
          </p>
          <p>
            Rank: <span>{rank}</span>
          </p>
        </div>
      </div>

      <Link className="holebtn" href={`/agents/${id}`}>
        <button className="btn">
          More About <br />
          <span>{name}</span>
        </button>
      </Link>
    </div>
  );
}

export default Card;
