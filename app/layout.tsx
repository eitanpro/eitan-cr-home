import "styles/tailwind.css"
import FooterNav from "components/FooterNav/Nav"
import TopNav from "components/TopNav/TopNav"

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
