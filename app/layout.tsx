import "styles/tailwind.css"
import TopNav from "components/TopNav/TopNav"
import FooterNav from "components/FooterNav/Nav"

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
