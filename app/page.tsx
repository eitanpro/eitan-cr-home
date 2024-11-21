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

export default function Web() {
  const automationLink = "/automation"
  const consultingLink = "/consulting"
  const coursesLink = "/courses"

  const titleStyle = "mb-6 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl";
  const textStyle = "mb-6 max-w-2xl font-light text-black md:text-lg lg:mb-8 lg:text-xl";

  return (
    <>
      <section className="bg-white relative">
        <Image
          src="/tel_aviv.png"
          alt="Tel Aviv"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16 relative z-10">
          <div className="mx-auto place-self-center">
            <h1 className={titleStyle}>
              Eitan Research Consultant
            </h1>
            <p className={textStyle}>
              Eitan Research Consultant empowers businesses grow with three key services: <a href={automationLink} className="text-blue-700 font-bold hover:underline">Automation</a>, <a href={consultingLink} className="text-blue-700 font-bold hover:underline">Consulting</a> for startups and tech companies, and <a href={coursesLink} className="text-blue-700 font-bold hover:underline">Training</a>. We make your operations smarter, offer expert advice, and teach the skills needed to succeed in today’s tech world with AI.
            </p>
            <Button href="mailto:eitan.rc@outlook.com?subject=Business%20Inquiry&body=Hi%20Eitan%2C%0A%0AI%20would%20like%20to%20discuss%20working%20together."
              className="mr-3 bg-black text-white hover:bg-gray-800 border-black"
            >
              Work with us
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 font-bold lg:h-12 lg:w-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{singleItem.title}</h3>
                <p className="text-gray-500">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white relative">
        <Image
          src="/tel_aviv2.png"
          alt="Tel Aviv"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16 relative z-10">
          <div className="mx-auto place-self-center">
            <h2 className={titleStyle}>Contact Us</h2>
            <div className={`space-y-4 text-black ${textStyle}`}>
              <p><span className="font-semibold">Business Name:</span> Eitan Research Consultant</p>
              <p><span className="font-semibold">Location:</span> Tel Aviv, Israel</p>
              <p>
                <span className="font-semibold">Let&apos;s connect:</span>&nbsp;
                <a href="mailto:eitan.rc@outlook.com?subject=Let's%20Connect&body=Hi%20Eitan%2C%0A%0AI'd%20love%20to%20connect%20with%20you%20about..." className="text-blue-700 font-bold font-bold hover:underline cursor-pointer">
                  eitan.rc [at] outlook.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span>&nbsp;
                <a href="tel:+972557754025" className="text-blue-700 font-bold font-bold hover:underline cursor-pointer">
                  +972-55-775-4025
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
