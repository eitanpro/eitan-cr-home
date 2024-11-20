import Link from "next/link";

const FooterNav = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">
                <Link href="/">Home</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">
                <Link href="https://cognitabusinessbots.com/">Cognita Business Bots</Link>
              </li>
              <li className="hover:text-white cursor-pointer">
                <Link href="https://kaliber.vercel.app/">Kaliber</Link>
              </li>
              {/* <li className="hover:text-white cursor-pointer">
                HeartCode
              </li>
              <li className="hover:text-white cursor-pointer">
                Kaliber
              </li> */}
            </ul>
          </div>
          {/* <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Guides</li>
              <li className="hover:text-white cursor-pointer">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="hover:text-white cursor-pointer">Support Center</li>
            </ul>
          </div> */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="hover:text-white cursor-pointer">
                <Link href="/terms-of-service">Terms &amp; Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 flex justify-center items-center">
          <a href="/" className="flex items-center">
            <img
              src="/Logo2.png"
              className="h-48 me-3 mb-4 rounded-lg"
              alt="Eitan Research Consultant Logo"
            />
          </a>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} Eitan Research Consultant. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;
