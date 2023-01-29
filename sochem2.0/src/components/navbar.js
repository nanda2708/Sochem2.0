import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/"> Home </Link>
        </li>
        <li>
          <Link href="/events"> Events </Link>
        </li>
        <li>
          <Link href="/funds"> Funds </Link>
        </li>
        <li>
          <Link href="/forum"> Forum </Link>
        </li>
        <li>
          <Link href="/cloud"> Cloud </Link>
        </li>
        <li>
          <Link href="/family"> Family </Link>
        </li>
        <li>
          <Link href="/login"> Login </Link>
        </li>
      </ul>
    </div>
  )
}