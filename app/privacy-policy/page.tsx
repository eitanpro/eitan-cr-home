import Image from "next/image";

export default function Web() {
    const titleStyle = "mb-6 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl";
    // const textStyle = "mb-6 max-w-2xl font-light text-black md:text-lg lg:mb-8 lg:text-xl";
    const titleStyle2 = "text-2xl font-semibold mb-4";
    const textStyle2 = "text-lg leading-relaxed";

    return (
        <>
            <section className="bg-white relative">
                <Image
                    src="/tel_aviv3.png"
                    alt="Tel Aviv"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16 relative z-10">
                    <div className="mx-auto place-self-center">
                        <h1 className={titleStyle}>
                            Privacy Policy
                        </h1>
                    </div>
                </div>
            </section>

            <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:py-16 relative z-10">
                <div className="mx-auto place-self-le"></div>
                <section className="mb-8">
                    <h2 className={titleStyle2}>Introduction</h2>
                    <p className={textStyle2}>
                        Eitan Research Consultant (<b>ERC</b> for short) is a technology provider that facilitates communication between businesses and their customers.
                        Our platform helps businesses manage appointments and interactions with customers while we handle the storage and protection of all communication data.
                        We are responsible for ensuring the privacy, security, and proper handling of this data.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={titleStyle2}>1. Data Collection</h2>
                    <p className={textStyle2}>
                        We collect only the essential information for business purposes, which includes phone numbers and names. No other personal information, such as email addresses, location, or payment details, is collected.
                    </p>
                    <p className={textStyle2}>
                        The information is collected solely to facilitate communication between businesses and their customers for appointment scheduling and general business purposes.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={titleStyle2}>2. Data Storage</h2>
                    <p className={textStyle2}>
                        All collected data is securely stored on AWS servers. Data is retained for as long as necessary to fulfill business purposes, but we respect users&apos; right to delete their data upon request.
                    </p>
                </section>

                {/* <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">3. User Control</h2>
                    <p className="text-lg leading-relaxed">
                        Users can request data deletion by visiting <a href="https://cognitabusinessbots.com/delete-data" className="text-pink-600">this link</a> and submitting their phone number, or by sending an email to support@cognitabusinessbots.com with the subject line "Delete Data."
                    </p>
                    <p className="text-lg leading-relaxed">
                        Users may also request access to, or corrections of, their personal data using the same channels.
                    </p>
                </section> */}

                <section className="mb-8">
                    <h2 className={titleStyle2}>3. Data Security</h2>
                    <p className={textStyle2}>
                        We implement strong security protocols, including encryption and restricted access, to ensure that your data is protected. Only authorized personnel can access this data, and any access is closely monitored and logged.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={titleStyle2}>4. No Third-Party Sharing</h2>
                    <p className={textStyle2}>
                        We do not share personal data (phone numbers or names) with any third parties. All data remains within our system and is used exclusively to support business operations for communication.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={titleStyle2}>5. No Tracking Mechanisms</h2>
                    <p className={textStyle2}>
                        We do not use cookies or tracking mechanisms on our website or platform. We respect user privacy and do not monitor user behavior for any advertising or analytics purposes.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={titleStyle2}>6. WhatsApp Business Provider Compliance</h2>
                    <p className={textStyle2}>
                        In alignment with WhatsApp's policies for Business Service Providers, ERC ensures the following:
                    </p>
                    <ul className={`list-disc ml-5 ${textStyle2}`}>
                        <li>All communication data, including WhatsApp messages, is stored securely on AWS servers and encrypted to protect user privacy.</li>
                        <li>Communication data is stored for up to 30 days if the appointment does not occur. After a successful interaction, data is stored for up to 1 year unless otherwise requested by the user.</li>
                        <li>We do not use customer data for training AI models or any other purpose beyond enabling communication between businesses and their customers.</li>
                        <li>Customer data is never shared with third-party organizations without consent.</li>
                        <li>In case of a data breach, both businesses and customers will be notified promptly in compliance with applicable regulations.</li>
                        <li>All communication through WhatsApp follows WhatsApp&apos;s branding and messaging guidelines to ensure a consistent and professional user experience.</li>
                        <li>Businesses and their customers can reach out to us at eitan.rc [at] outlook.com for any queries or concerns regarding data handling or communication management.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className={titleStyle2}>7. Policy Changes</h2>
                    <p className={textStyle2}>
                        We reserve the right to change this privacy policy at any time. Any updates will be reflected on this page, and it is the user’s responsibility to review the policy regularly.
                    </p>
                </section>

                <p className={textStyle2}>Last update: October 2024</p>

                <footer className="mt-12 text-center">
                    <p className={textStyle2}>
                        © {new Date().getFullYear()} Eitan Research Consultant. All Rights Reserved.
                    </p>
                </footer>
            </div>
        </>
    )
}