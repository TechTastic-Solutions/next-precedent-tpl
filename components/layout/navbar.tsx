"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="TechTastic Solutions logo"
              width="33"
              height="33"
              className="mr-2 rounded-md"
            ></Image>
            <p>TechTastic Solutions</p>
          </Link>
          <div>
            <Link
              href="/"
              className="square border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
            >
              Home
            </Link>
            &nbsp;
            <Link
              href="/contact "
              className="square border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
            >
              Contact
            </Link>
            &nbsp;
            <Link
              href="/about"
              className="round items-center border border-black bg-black p-1.5 px-4 font-display text-xl text-white transition-all hover:bg-white hover:text-black"
            >
              About
            </Link>
            &nbsp; &nbsp; &nbsp;
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="rounded-min border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
