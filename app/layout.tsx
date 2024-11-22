import "styles/tailwind.css"
import { Metadata } from "next"
import FooterNav from "components/FooterNav/Nav"
import TopNav from "components/TopNav/TopNav"

export const metadata: Metadata = {
  title: "Eitan Research Consultant",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://eitan-research-consultant.pages.dev/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://eitan-research-consultant.pages.dev/Logo2.png",
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
        <FooterNav />
      </body>
    </html>
  )
}
