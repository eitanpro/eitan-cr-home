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
                    src="/tel_aviv4.png"
                    alt="Tel Aviv"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16 relative z-10">
                    <div className="mx-auto place-self-center">
                        <h1 className={titleStyle}>
                            Terms of Service
                        </h1>
                    </div>
                </div>
            </section>

            <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:py-16 relative z-10">
                <div className="mx-auto place-self-left">
                    <section className="mb-8">
                        <h2 className={titleStyle2}>Introduction</h2>
                        <p className={textStyle2}>
                            Eitan Research Consultant (<b>ERC</b> for short) is a technology provider that facilitates communication between businesses and their customers.
                            Our platform helps businesses manage appointments and interactions with customers while we handle the storage and protection of all communication data.
                            We are responsible for ensuring the privacy, security, and proper handling of this data.
                        </p>
                    </section>

                    {/* Free Trial & Payment Structure */}
                    <section className="mb-8">
                        <h2 className={titleStyle2}>Free Trial & Payment Structure</h2>
                        <p className={textStyle2}>
                            We do not offer a free trial. All consultations meetings are paid in advance.
                            The courses are paid in advance as well.
                            The automation projects may offer a free trial of up to 1 month, depending on the project complexity.
                        </p>
                    </section>

                    {/* Account Responsibility & Recovery */}
                    <section className="mb-8">
                        <h2 className={titleStyle2}>Account Responsibility & Recovery</h2>
                        <p className={textStyle2}>
                            Businesses are responsible for maintaining the security of their account login credentials.
                            <br />
                            If the account is compromised, daily backups are available, and a new account will be created with the previous backup data restored to the new account.
                        </p>
                    </section>

                    {/* Data & Privacy */}
                    <section className="mb-8">
                        <h2 className={titleStyle2}>Data & Privacy</h2>
                        <p className={textStyle2}>
                            All communication data between businesses and clients is securely stored by ERC, the technology provider. Businesses are required to comply with ERC’s privacy policy.
                        </p>
                    </section>

                    {/* Liability Disclaimer */}
                    <section className="mb-8">
                        <h2 className={titleStyle2}>Liability Disclaimer</h2>
                        <p className={textStyle2}>
                            The ERC platform is provided "as-is". Businesses should be aware that the platform relies on the stability of the underlying software and may experience occasional instability or temporary issues.
                            <br />
                            ERC is not liable for any losses due to missed appointments caused by system failures, message delivery issues, or technical downtime.
                        </p>
                    </section>

                    {/* WhatsApp Business Provider Compliance */}
                    <section className="mb-8">
                        <h2 className={titleStyle2}>WhatsApp Business Provider Compliance</h2>
                        <p className={textStyle2}>
                            ERC operates in compliance with WhatsApp's Business Policy. As a WhatsApp Business Provider, ERC ensures that businesses using our platform follow WhatsApp’s guidelines, which include:
                        </p>
                        <ul className={`list-disc ml-5 ${textStyle2}`}>
                            <li>Businesses are restricted from sending unsolicited messages to clients.</li>
                            <li>Messages can only be initiated by customers, and businesses can respond accordingly.</li>
                            <li>Businesses must provide clear and accurate information to customers regarding their services.</li>
                            <li>Data collected through WhatsApp messaging is stored securely, and ERC does not share this data with any third parties.</li>
                        </ul>
                        <p className={textStyle2}>
                            Any misuse of WhatsApp’s platform, such as sending unsolicited messages or engaging in prohibited activities, will result in immediate account suspension or termination in accordance with WhatsApp’s terms and conditions.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className={titleStyle2}>Policy Changes</h2>
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
            </div>
        </>
    )
}   