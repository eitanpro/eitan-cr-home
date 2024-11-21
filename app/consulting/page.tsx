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

export default function Consulting() {
  const automationLink = "/automation"
  const consultingLink = "/consulting"
  const teachingLink = "/teaching"

  const titleStyle = "mb-6 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl";
  const textStyle = "mb-6 max-w-2xl font-light text-black md:text-lg lg:mb-8 lg:text-xl";

  return (
    <>
      <section className="bg-white relative">
        <Image
          src="/tel_aviv3.png"
          alt="Tel Aviv"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16 relative z-10">
          <div className="mx-auto place-self-center">
            <h1 className={titleStyle}>
              Consulting
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16 relative z-10">
          <div className="mx-auto place-self-center">
            <p className={textStyle}>
              We provide consulting services for businesses and startups looking to design and implement AI systems tailored to their needs. Our expert team works closely with you to develop custom solutions that enhance operational efficiency and drive innovation. We offer flexible pricing based on the number of working hours, with options available for projects requiring anywhere from 1-10 hours, 11-20 hours, or up to 50 hours per month. Whether you're starting small or scaling your AI capabilities, we provide the right support to ensure your success.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
