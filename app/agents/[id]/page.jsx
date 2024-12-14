"use client";
import React from "react";
import { useParams } from "next/navigation";
import { staffdata } from "../../data"; // Importing employee data from "data"
import Image from "next/image";

const Agents = () => {
  // const router = useRouter();
  const { id } = useParams();

  // Find the employee based on the ID from the route
  const employee = staffdata.filter((emp) => emp.id == id)[0] || {};

  // if (!employee) {
  //   return <p>Employee not found.</p>;
  // }

  const {
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
    bio,
  } = employee;
  return (
    <div className="emp-page">
      <div className="emp-profile">
        <div className="nameNpic">
          <Image
            id="profile-pic"
            src={`/avatars/${image}.png`}
            width={250}
            height={250}
            alt={`${name}'s Avatar`}
          />
          <h1 className="empname-profile">{name}</h1>
        </div>

        <div className="emp-mainData">
          <div className="title">
            <h2>Bio</h2>
          </div>
          <div className="emp-bio">
            <div className="coldata-1">
              <p className="agent-brief">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                voluptatibus consequuntur magni totam tenetur laudantium
                eligendi beatae sit sint laboriosam maiores dicta distinctio, id
                asperiores! Fuga sit cupiditate commodi doloremque? Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Natus, quas
                pariatur architecto repellendus numquam nemo. Quidem sapiente
                similique, eaque nulla amet, iure reprehenderit corrupti
                eligendi facere distinctio ratione accusantium! Quam.
              </p>
            </div>
            <div className="coldata-2">
              <p>Display Name: {name}</p>
              <p>Hiring Date: {hire}</p>
              <p>Staff ID: {salary}</p>
              <p>Mobile Number: {rpm}</p>
              <p>Birth Of date: {anl}</p>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* Figuers section  */}
      <div className="emp-figures">
        <div className="title">
          <h2>{name} Insight</h2>
        </div>
        <div className="emp-insight">
          <div className="coldata">
            <h3>Target</h3>
            <p>Points: {bio}</p>
            <p>GAs: {hire}</p>
            <p>EP: {salary}</p>
            <p>Terminal: {rpm}</p>
            <p>ADSL: {anl}</p>
          </div>
          <div className="coldata">
            <h3>Ach</h3>
            <p>Points: {bio}</p>
            <p>GAs: {hire}</p>
            <p>EP: {salary}</p>
            <p>Terminal: {rpm}</p>
            <p>ADSL: {anl}</p>
          </div>
          <div className="coldata">
            <h3>%</h3>
            <p>Points: {bio}</p>
            <p>GAs: {hire}</p>
            <p>EP: {salary}</p>
            <p>Terminal: {rpm}</p>
            <p>ADSL: {anl}</p>
          </div>
          <div className="coldata">
            <h3>Projection</h3>
            <p>Points: {bio}</p>
            <p>GAs: {hire}</p>
            <p>EP: {salary}</p>
            <p>Terminal: {rpm}</p>
            <p>ADSL: {anl}</p>
          </div>
          <div className="coldata">
            <h3>Required /Day</h3>
            <p>Points: {bio}</p>
            <p>GAs: {hire}</p>
            <p>EP: {salary}</p>
            <p>Terminal: {rpm}</p>
            <p>ADSL: {anl}</p>
          </div>

          <div className="coldata">
            <h3>Ach Overall</h3>
            <p>Points: {bio}</p>
            <p>GAs: {hire}</p>
            <p>EP: {salary}</p>
            <p>Terminal: {rpm}</p>
            <p>ADSL: {anl}</p>
          </div>
        </div>
      </div>

      {/* KPIs  */}
      <div className="emp-figures">
        <div className="title">
          <h2>{name} KPIs</h2>
        </div>
        <div className="emp-insight" id="lineSeparator">
          <div className="coldata">
            <h3>Category</h3>
            <p className="oneFigureInCloumn">Sales KPIs</p>
          </div>
          <div className="coldata">
            <h3>Weight</h3>
            <p className="oneFigureInCloumn"> {rpm}</p>
          </div>
          <div className="coldata">
            <h3>Criteria</h3>
            <p>Consumer Voice</p>
            <p>EP</p>
            <p>Points</p>
            <p> Revenue</p>
            <p>No. Of month achieved</p>
            <p>Content</p>
            <p>ADSL</p>
            <p>VF Cash</p>
          </div>
          <div className="coldata">
            <h3>Weight</h3>
            <p>100%</p>
            <p>100%</p>
            <p>100%</p>
            <p>100%</p>
            <p>100%</p>
            <p>100%</p>
            <p>100%</p>
            <p>100%</p>
          </div>
          <div className="coldata">
            <h3>{name} Score</h3>
            <p>100%</p>
            <p>100%</p>
            <p>100%</p>
            <p>100%</p>
            <p>100%</p>
            <p>100%</p>
            <p>100%</p>
            <p>100%</p>
          </div>

          <div className="coldata">
            <h3>Score/Sub</h3>
            <p className="oneFigureInCloumn"> {rpm}</p>
          </div>
        </div>

        {/* KPI customer experiace  */}
        <div className="emp-insight" id="lineSeparator">
          <div className="coldata">
            <h3>Category</h3>
            <p className="oneFigureInCloumn">
              Cst
              <br />
              Experience
            </p>
          </div>
          <div className="coldata">
            <h3>Weight</h3>
            <p className="oneFigureInCloumn">15%</p>
          </div>
          <div className="coldata">
            <h3>Criteria</h3>
            <p>TNPS</p>
            <p>Agent Performance</p>
            <p>AHT</p>
            <p>AWT</p>
          </div>
          <div className="coldata">
            <h3>Weight</h3>
            <p>5%</p>
            <p>4%</p>
            <p>3%</p>
            <p>3%</p>
          </div>
          <div className="coldata">
            <h3>{name} Score</h3>
            <p>6%</p>
            <p>5%</p>
            <p>3%</p>
            <p>3%</p>
          </div>

          <div className="coldata">
            <h3>Score/Sub</h3>
            <p className="oneFigureInCloumn">17%</p>
          </div>
        </div>

        {/* KPI strategic  */}
        <div className="emp-insight" id="lineSeparator">
          <div className="coldata">
            <h3>Category</h3>
            <p className="oneFigureInCloumn">Strategics</p>
          </div>
          <div className="coldata">
            <h3>Weight</h3>
            <p className="oneFigureInCloumn"> 5%</p>
          </div>
          <div className="coldata">
            <h3>Criteria</h3>
            <p>4G Conversion</p>
            <p>Digital Training</p>
          </div>
          <div className="coldata">
            <h3>Weight</h3>
            <p>2%</p>
            <p>3%</p>
          </div>
          <div className="coldata">
            <h3>{name} Score</h3>
            <p>2%</p>
            <p>3%</p>
          </div>

          <div className="coldata">
            <h3>Score/Sub</h3>
            <p className="oneFigureInCloumn"> 5%</p>
          </div>
        </div>

        <div className="emp-insight" id="lineSeparator">
          <div className="coldata">
            <h3 className="oneFigureInCloumn">Overall Score</h3>
            <p className="oneFigureInCloumn"> 103%</p>
          </div>
        </div>
      </div>

      {/* TNPS , Cst Experieance  */}
      <div className="emp-figures">
        <div className="title">
          <h2>{name} Customer Experience</h2>
        </div>
        <div className="emp-insight">
          <div className="coldata">
            <h3>TNPS</h3>
            <p>TNPS: {bio}</p>
            <p>Agent Performance: {hire}</p>
            <p>FVR: {salary}</p>
          </div>

          <div className="coldata">
            <h3>BM</h3>
            <p>55%: {bio}</p>
            <p>80%: {hire}</p>
            <p>FVR: {salary}</p>
          </div>
        </div>
      </div>

      {/* sales portal  */}
      <div className="emp-figures">
        <div className="title">
          <h2>{name} Sales Portal</h2>
        </div>
        <div className="emp-insight">
          <div className="coldata">
            <h3>ِAHT </h3>
            <p> {rpm}</p>
          </div>
          <div className="coldata">
            <h3>AWT</h3>
            <p> {rpm}</p>
          </div>
          <div className="coldata">
            <h3>No.# of Served Customers</h3>
            <p> {rpm}</p>
          </div>
          <div className="coldata">
            <h3>Abused Tickets</h3>
            <p> {rpm}</p>
          </div>
          <div className="lineSeparator"></div>
          <div className="lineSeparator"></div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
