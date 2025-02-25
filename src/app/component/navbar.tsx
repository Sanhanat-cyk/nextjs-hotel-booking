import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white w-full flex items-center justify-center flex-col py-3">
      <div className="py-4 flex items-center justify-between w-full px-10">
        <div className="flex items-center">
        <Link className="font-bold" href="/">Booking</Link>
          <ul className="flex space-x-10 ml-10">
            <li>
              <Link href="/properties">Properties</Link>
            </li>
            <li>
              <Link href="/attractions">Attractions</Link>
            </li>
            <li>
              <Link href="/popular">Popular</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-2">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/signup"
                className="border-blue-500 text-blue-500 border py-2 px-7 rounded-full"
              >
                Sign up
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="bg-blue-600 border-blue-800 text-white border py-2 px-7 rounded-full"
              >
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}