"use client"

import React, { useState } from "react";
import { useRouter } from "next/router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "דף הבית", href: "/" },
  { name: "בלוג", href: "/blog" },
  // { name: "התחברות", href: "/login" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-24 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" passHref>
              <img
                src="/images/logo3.png"
                alt="Cognita Business Bots Logo"
                className="h-20 mx-auto rounded-full object-cover border border-[#0f0065] shadow-sm bg-[#f3e9ff]"
              />
            </Link>
          </div>
          <div className="flex justify-center items-center pl-10">
              <img
                src="/images/4_2.png"
                className="md:h-16 h-10 rounded-lg mb-4"
                alt="#BringThemHome Photo"
              />
            </div>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:ml-4 sm:flex sm:space-x-4 items-center justify-start">
            <div className="flex justify-center items-center space-x-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={
                    router.pathname === item.href ? "page" : undefined
                  }
                  className={classNames(
                    router.pathname === item.href
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "flex-grow text-center rounded-md px-3 py-2 text-sm font-medium w-32" // w-32 applies a fixed width; flex-grow ensures equal widths
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  router.pathname === item.href
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                aria-current={
                  router.pathname === item.href ? "page" : undefined
                }
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
