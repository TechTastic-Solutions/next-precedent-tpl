"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import Popover from "../shared/popover";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const [openPopover, setOpenPopover] = useState(false);
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-gray-300 bg-white/50 backdrop-blur-xl"
            : "border-b border-gray-100 bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="TechTastic Solutions logo"
              width="30"
              height="30"
              className="mr-2 rounded-md"
            />
            <p>TechTastic Solutions</p>
          </Link>
          <div>
            <Link
              href="/"
              className="mr-1 items-center rounded border border-black bg-black p-1.5 px-4 font-display text-lg text-white transition-all hover:bg-white hover:text-black"
            >
              Home
            </Link>
            <Link
              href="/contact "
              className="mr-1 items-center rounded border border-black bg-black p-1.5 px-4 font-display text-lg text-white transition-all hover:bg-white hover:text-black"
            >
              Contact
            </Link>
            <Popover
              content={
                <div className="w-full rounded-md bg-white p-2 sm:w-40">
                  <button className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
                    Item 1
                  </button>
                  <button className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
                    Item 2
                  </button>
                  <button className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
                    Item 3
                  </button>
                </div>
              }
              openPopover={openPopover}
              setOpenPopover={setOpenPopover}
            >
              <button
                onClick={() => setOpenPopover(!openPopover)}
                className="text-md mr-1 rounded border border-black bg-black p-1 px-4 text-white transition-all hover:bg-white hover:text-black"
              >
                Popover
                <ChevronDown
                  className={`h-6 w-7 pl-2 transition-all ${
                    openPopover ? "rotate-180" : ""
                  }`}
                />
              </button>
            </Popover>

            <Link
              href="/about"
              className="mr-1 items-center rounded border border-black bg-black p-1.5 px-4 font-display text-lg text-white transition-all hover:bg-white hover:text-black"
            >
              About
            </Link>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="text-md ml-8 rounded-3xl border border-black bg-black p-1 px-4 text-white transition-all hover:bg-white hover:text-black"
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
