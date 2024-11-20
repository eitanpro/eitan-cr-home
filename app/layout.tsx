import "styles/tailwind.css"
import TopNav from "components/TopNav/TopNav"
import FooterNav from "components/FooterNav/Nav"
import { Providers } from './providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TopNav />
          {children}
          <FooterNav />
        </Providers>
      </body>
    </html>
  )
}
