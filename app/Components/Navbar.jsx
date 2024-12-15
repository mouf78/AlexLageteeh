'use client';
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';

function Navbar() {
  const { user, error, isLoading } = useUser();

  return (
    <nav className="navbar">
      <Link href="/">
        <Image src={`/avatars/logo.png`} width={100} height={100} />
      </Link>
      {!!user && <>
        <Link href="/Info">Info</Link>
        <Link href="/Sch">Sch</Link>
        <Link href="/Tasks">Tasks</Link>
        <Link href="/RPM">RPM</Link>
        <Link href="/TNPS">TNPS</Link>
        <Link href="/KPIs">KPIs</Link>
        <Link href="/Attendance">ATT</Link>
      </>}
      {!user && !isLoading && !error && <Link href="/api/auth/login">Login</Link>}
      {!!user && !isLoading && !error && <>
        <Link href="/profile">{user.name} </Link>
        <Link href="/api/auth/logout">Logout</Link>
      </>}
    </nav>
  )
}

export default Navbar