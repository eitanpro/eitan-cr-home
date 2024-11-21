import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "lp-items"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Eitan Research Consultant",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Automation() {
  const automationLink = "/automation"
  const consultingLink = "/consulting"
  const coursesLink = "/courses"

  const titleStyle = "mb-6 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl";
  const textStyle = "mb-6 max-w-2xl font-light text-black md:text-lg lg:mb-8 lg:text-xl";

  return (
    <>
      <section className="bg-white relative">
        <Image
          src="/tel_aviv2.png"
          alt="Tel Aviv"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16 relative z-10">
          <div className="mx-auto place-self-center">
            <h1 className={titleStyle}>
              Automation
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16 relative z-10">
          <div className="mx-auto place-self-center">
            <p className={textStyle}>
            We offer two powerful automation services designed specifically for small to medium-sized businesses looking to streamline operations and accelerate growth. Utilizing the latest development practices and cutting-edge technologies, we deliver high-quality solutions that enhance efficiency and drive scalability. Our automation services help businesses optimize workflows, reduce manual tasks, and improve overall productivity, ensuring that your business can grow rapidly while maintaining top-notch performance and quality.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
