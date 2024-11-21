import { Metadata } from "next"
import { Button } from "components/Button/Button"
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

export default function Courses() {
    const titleStyle = "mb-6 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl";
    const textStyle = "mb-3 max-w-2xl font-light text-black md:text-lg lg:mb-4 lg:text-xl";
    const titleStyle2 = "text-2xl font-semibold mb-4";

    const courses = [
        {
            name: "Secured Programming Development",
            topics: [
                "The C++ Language and Its Memory Model",
                "Vulnerabilities in the Memory Model",
                "Python Language and Dynamic Code",
                "Communication Protocols",
                "Network Applications",
                "Handling Code Injection",
            ],
            image: "/secured_programming.png",
            email_content: `I am interested in the Secured Programming Development course.%0D%0A%0D%0A
My name is [Your Name]. I am from [Your Country].%0D%0A
I am looking for a course that is taught in English/Hebrew.%0D%0A
I am looking for online/hybrid/in-person courses.%0D%0A
If in-person, I am looking for a course that will be taught in [Tel Aviv, Israel].%0D%0A
%0D%0A
Please contact me at [Your Email] or [Your Phone Number].`,
        },
        {
            name: "Introduction to Artificial Intelligence",
            topics: [
                "Search Algorithms in State Spaces",
                "Heuristics",
                "Local Search – Local Optimization to Find Solutions",
                "Adversarial Games",
                "Constraint Satisfaction Problems",
                "Bayesian Networks",
                "Markov Decision Processes (MDP)",
                "Machine Learning – Learning from Examples",
                "Decision Trees",
            ],
            image: "/ai.png",
            email_content: `I am interested in the Introduction to Artificial Intelligence course.%0D%0A
My name is [Your Name]. I am from [Your Country].%0D%0A
I am looking for a course that is taught in English/Hebrew.%0D%0A
I am looking for online/hybrid/in-person courses.%0D%0A
If in-person, I am looking for a course that will be taught in [Tel Aviv, Israel].%0D%0A
%0D%0A
Please contact me at [Your Email] or [Your Phone Number].`,
        },
    ];

    return (
        <>
            <section className="bg-white relative">
                <Image
                    src="/tel_aviv4.png"
                    alt="Tel Aviv"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16 relative z-10">
                    <div className="mx-auto place-self-center">
                        <h1 className={titleStyle}>
                            Courses
                        </h1>
                    </div>
                </div>
            </section>
            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
                    <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-2">
                        {courses.map((course) => (
                            <div key={course.name} className="mb-8">
                                <h2 className={titleStyle2}>
                                    {course.name}
                                </h2>
                                <p className={textStyle}>Topics covered:</p>
                                <ul className="list-disc pl-6 mb-4">
                                    {course.topics.map((topic, index) => (
                                        <li key={index} className={`${textStyle}`}>
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                                <Image
                                    className="mb-4 rounded-3xl"
                                    src={course.image}
                                    alt={course.name}
                                    width={500}
                                    height={500}
                                />
                                <div className="flex">
                                    <Button
                                        href={`mailto:eitan.rc@outlook.com?subject=Course%20Request&body=${course.email_content}`}
                                        className="mt-4 mr-3 bg-black text-white hover:bg-gray-800 border-black py-2 px-4 text-sm"
                                    >
                                        Request Course
                                    </Button>
                                </div>
                                {/* <Button href={`mailto:eitan.rc@outlook.com?subject=Course%20Request&body=${course.email_content}`}
                                    className="mr-3 bg-black text-white hover:bg-gray-800 border-black"
                                >
                                    Contact us
                                </Button> */}
                                {/* <button
                                    className={buttonStyle}
                                    onClick={() => handleInterest(course.name)}
                                >
                                    Express Interest in {course.name}
                                </button> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
