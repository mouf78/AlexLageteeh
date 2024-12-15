'use client';
import Link from "next/link";
import Image from "next/image";
import { useUser } from '@auth0/nextjs-auth0/client';
import { redirect } from 'next/navigation'
export default function Info() {
  const { user, error, isLoading } = useUser();
  if (!user) redirect('/')
  return (
    <div className="info-titles">
      <ul className="info-list">
        <li className="info-item">
          <a href="#flex">Flex</a>
        </li>

        <li className="info-item">
          <a href="#red">Red</a>
        </li>

        <li className="info-item">
          <a href="#fb">Flex Business</a>
        </li>

        <li className="info-item">
          <a href="#rb">Red Business</a>
        </li>

        <li className="info-item">
          <a href="#dsl">ADSL</a>
        </li>

        <li className="info-item">
          <a href="#hw">Home Wireless</a>
        </li>

        <li className="info-item">
          <a href="#plus">Plus Bundle</a>
        </li>
      </ul>
      {/* add images  */}
      <div className="section-title">
        <h2 id="flex">Flex Rate Plans</h2>
        <img src={`/Info/flex.png`}></img>
      </div>

      <div className="section-title">
        <h2 id="red">Red Rate Plans</h2>
        <img src={`/Info/Red.png`}></img>
      </div>

      <div className="section-title">
        <h2 id="fb">Flex Business</h2>
        <img src={`/Info/FB.png`}></img>
      </div>

      <div className="section-title">
        <h2 id="rb">Red Business</h2>
        <img src={`/Info/RB.png`}></img>
      </div>

      <div className="section-title">
        <h2 id="dsl">ADSL</h2>
        <img src={`/Info/dsl.png`}></img>
      </div>

      <div className="section-title">
        <h2 id="hw">Home Wireless</h2>
        <img src={`/Info/hw.png`}></img>
      </div>

      <div className="section-title">
        <h2 id="plus">Plus Bundles</h2>
        <img src={`/Info/plus.png`}></img>
        <img src={`/Info/Plus compo .png`}></img>
        <img src={`/Info/miussd.png`}></img>
      </div>
    </div>
  );
}
