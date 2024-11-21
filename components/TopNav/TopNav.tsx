"use client"

import React, { useState } from "react";
import { usePathname, useSearchParams } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Automation", href: "/automation" },
  { name: "Consulting", href: "/consulting" },
  { name: "Teaching", href: "/teaching" },
  // { name: "Login", href: "/login" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get('search');

  return (
    <nav dir="ltr" className="bg-gray-800">
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
                src="/lion.png"
                alt="Eitan Research Consultant Logo"
                className="h-20 mx-auto rounded-full object-cover border border-black shadow-sm bg-[#f3e9ff]"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:ml-4 sm:flex sm:space-x-4 items-center justify-center flex-grow">
            <div className="flex justify-center items-center space-x-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={
                    pathname === item.href ? "page" : undefined
                  }
                  className={classNames(
                    pathname === item.href
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "text-center rounded-md px-3 py-2 text-sm font-medium w-32"
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
          <div dir="ltr" className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  pathname === item.href
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                aria-current={
                  pathname === item.href ? "page" : undefined
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
