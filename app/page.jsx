'use client';

import { staffdata } from "./data.js";
import Card from "./Components/card";
import "../app/styles/globals.css";
import "../app/styles/navbar.css";
import { useUser } from '@auth0/nextjs-auth0/client';

// import "../app/avatars";
export default function Page() {
  const { user, error, isLoading } = useUser();
  const data = staffdata || [];
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      <div className="highlights">
        <h1 className="reponsive-text">Alex Lageteeh Highlights ..</h1>
        {!!user && <h2>hello {user.name}</h2>}
      </div>
    {!user && <h1 className="highlights">please login</h1>}
    {!!user &&
      <div className="cards-wraper">
        {data.map((emp) => {
          return <Card data={emp} key={emp.id} />;
        })}
      </div>
    }
    </>
  );
}
