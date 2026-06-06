import { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";

const COLORS = {
    darkBlue: "#0b1a30",
    lightBlue: "#1D3557",
    accent: "#F57A55",
    primaryText: "#FFFFFF",
    secondaryText: "#B0BEC5",
    border: "#37474F",
    lighterBlue: "#2C4A74",
    paleBlue: "#3E5C89",
    skyBlue: "#5B7BA8",
    mutedBlue: "#90A4AE",
    darkGray: "#263238",
};

const NAV_TABS = ["Privacy Policy", "Terms of Service"];

// ── Section components ──────────────────────────────────────────
function SectionHeading({ children }) {
    return (
        <h2
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            className="text-2xl font-bold mb-4 mt-10 first:mt-0"
            style={{
                color: COLORS.primaryText,
                fontFamily: "'Playfair Display', Georgia, serif",
                borderLeft: `3px solid ${COLORS.accent}`,
                paddingLeft: "16px",
                marginTop: "2.5rem",
                marginBottom: "1rem",
            }}
        >
            {children}
        </h2>
    );
}

function SubHeading({ children }) {
    return (
        <h3
            className="text-base font-semibold mt-6 mb-2"
            style={{ color: COLORS.accent, letterSpacing: "0.03em" }}
        >
            {children}
        </h3>
    );
}

function Paragraph({ children }) {
    return (
        <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: COLORS.secondaryText, lineHeight: "1.85" }}
        >
            {children}
        </p>
    );
}

function BulletList({ items }) {
    return (
        <ul className="mb-4 space-y-2 pl-1">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: COLORS.secondaryText }}>
                    <span
                        className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: COLORS.accent }}
                    />
                    <span style={{ lineHeight: "1.8" }}>{item}</span>
                </li>
            ))}
        </ul>
    );
}

function InfoBox({ children }) {
    return (
        <div
            className="rounded-lg p-4 mb-6 text-sm"
            style={{
                background: `rgba(245,122,85,0.07)`,
                border: `1px solid rgba(245,122,85,0.25)`,
                color: COLORS.secondaryText,
                lineHeight: "1.8",
            }}
        >
            {children}
        </div>
    );
}

function Divider() {
    return <div className="my-8" style={{ height: "1px", background: COLORS.border }} />;
}

// ── PRIVACY POLICY CONTENT ──────────────────────────────────────
function PrivacyPolicy() {
    return (
        <div>
            <InfoBox>
                <strong style={{ color: COLORS.accent }}>Last updated: 6 June 2026.</strong> This Privacy
                Policy applies to all products and services operated by{" "}
                <strong style={{ color: COLORS.primaryText }}>Eureka Technologies Limited</strong>,
                including EurekaNetwork and EurekaNow. By using our services, you agree to the collection
                and use of information as described here.
            </InfoBox>

            <SectionHeading>1. Who We Are</SectionHeading>
            <Paragraph>
                Eureka Technologies Limited ("Eureka", "we", "us", or "our") is the company behind
                EurekaNetwork and EurekaNow. We are committed to protecting your personal data and
                respecting your privacy in accordance with applicable data protection laws, including the UK
                GDPR and the Data Protection Act 2018.
            </Paragraph>
            <Paragraph>
                If you have any questions about this policy or how we handle your data, you can contact us
                at{" "}
                <a href="mailto:privacy@eureka-technologies.co.uk" style={{ color: COLORS.accent }}>
                    privacy@eureka-technologies.co.uk
                </a>
                .
            </Paragraph>

            <Divider />

            <SectionHeading>2. Information We Collect</SectionHeading>
            <SubHeading>2.1 Information You Provide</SubHeading>
            <BulletList
                items={[
                    "Name, email address, and contact details when you register interest or create an account.",
                    "Profile information you choose to add to your EurekaNetwork account.",
                    "Communications you send to us, including support requests and feedback.",
                    "Payment information processed securely via our third-party payment providers.",
                ]}
            />
            <SubHeading>2.2 Information We Collect Automatically</SubHeading>
            <BulletList
                items={[
                    "Device information including browser type, operating system, and IP address.",
                    "Usage data such as pages visited, features used, and time spent on our platforms.",
                    "Cookies and similar tracking technologies (see our Cookie Policy for more detail).",
                    "Log data generated when you interact with EurekaNow or EurekaNetwork.",
                ]}
            />
            <SubHeading>2.3 Information from Third Parties</SubHeading>
            <BulletList
                items={[
                    "If you connect a third-party account (e.g. Google), we may receive basic profile information.",
                    "Analytics providers may share aggregated demographic data with us.",
                    "Business partners may share referral information when you sign up via their platforms.",
                ]}
            />

            <Divider />

            <SectionHeading>3. How We Use Your Information</SectionHeading>
            <Paragraph>We use the information we collect to:</Paragraph>
            <BulletList
                items={[
                    "Provide, operate, and improve EurekaNetwork, EurekaNow, and related services.",
                    "Send you product updates, early-access invitations, and service announcements.",
                    "Respond to your enquiries and provide customer support.",
                    "Analyse usage patterns to improve performance and user experience.",
                    "Prevent fraud, abuse, and security incidents.",
                    "Comply with legal obligations and enforce our Terms of Service.",
                    "With your consent, send you marketing communications about Eureka products.",
                ]}
            />

            <Divider />

            <SectionHeading>4. Legal Basis for Processing</SectionHeading>
            <Paragraph>
                We process your personal data under the following legal bases:
            </Paragraph>
            <BulletList
                items={[
                    "Contract — to fulfil our obligations to you as a user of our services.",
                    "Legitimate interests — to improve our products, prevent fraud, and communicate with you.",
                    "Legal obligation — to comply with applicable laws and regulations.",
                    "Consent — for marketing communications and non-essential cookies, which you may withdraw at any time.",
                ]}
            />

            <Divider />

            <SectionHeading>5. Sharing Your Information</SectionHeading>
            <Paragraph>
                We do not sell your personal data. We may share it with:
            </Paragraph>
            <BulletList
                items={[
                    "Service providers who help us operate our platforms (e.g. cloud hosting, email delivery, analytics).",
                    "Payment processors for handling transactions securely.",
                    "Law enforcement or regulators when required by law.",
                    "Successor entities in the event of a merger, acquisition, or sale of assets.",
                ]}
            />
            <Paragraph>
                All third parties we work with are contractually required to handle your data securely and
                only for the purposes we specify.
            </Paragraph>

            <Divider />

            <SectionHeading>6. Data Retention</SectionHeading>
            <Paragraph>
                We retain your personal data for as long as your account is active or as needed to provide
                services to you. We will delete or anonymise your data upon request, unless we are required
                to retain it for legal or regulatory reasons.
            </Paragraph>

            <Divider />

            <SectionHeading>7. Your Rights</SectionHeading>
            <Paragraph>
                Under UK GDPR, you have the right to:
            </Paragraph>
            <BulletList
                items={[
                    "Access the personal data we hold about you.",
                    "Correct inaccurate or incomplete data.",
                    "Request deletion of your data ('right to be forgotten').",
                    "Restrict or object to certain types of processing.",
                    "Data portability — receive your data in a structured, machine-readable format.",
                    "Withdraw consent at any time where processing is based on consent.",
                    "Lodge a complaint with the Information Commissioner's Office (ICO).",
                ]}
            />
            <Paragraph>
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:privacy@eureka-technologies.co.uk" style={{ color: COLORS.accent }}>
                    privacy@eureka-technologies.co.uk
                </a>
                . We will respond within 30 days.
            </Paragraph>

            <Divider />

            <SectionHeading>8. Cookies</SectionHeading>
            <Paragraph>
                We use essential cookies to operate our services, and optional analytics and preference
                cookies to improve your experience. You can manage cookie preferences via the banner shown
                on your first visit, or through your browser settings at any time.
            </Paragraph>

            <Divider />

            <SectionHeading>9. International Transfers</SectionHeading>
            <Paragraph>
                Your data is primarily stored and processed in the United Kingdom. Where we transfer data
                outside the UK, we ensure appropriate safeguards are in place, such as Standard Contractual
                Clauses approved by the ICO.
            </Paragraph>

            <Divider />

            <SectionHeading>10. Changes to This Policy</SectionHeading>
            <Paragraph>
                We may update this Privacy Policy from time to time. We will notify you of significant
                changes by email or via a prominent notice on our website. Continued use of our services
                after the effective date of changes constitutes acceptance.
            </Paragraph>
        </div>
    );
}

// ── TERMS OF SERVICE CONTENT ────────────────────────────────────
function TermsOfService() {
    return (
        <div>
            <InfoBox>
                <strong style={{ color: COLORS.accent }}>Last updated: 6 June 2026.</strong> These Terms of
                Service govern your use of all products and services operated by{" "}
                <strong style={{ color: COLORS.primaryText }}>Eureka Technologies Limited</strong>,
                including EurekaNetwork and EurekaNow. Please read them carefully before using our
                services.
            </InfoBox>

            <SectionHeading>1. Acceptance of Terms</SectionHeading>
            <Paragraph>
                By accessing or using any product or service provided by Eureka Technologies Limited
                ("Eureka", "we", "us", or "our") — including EurekaNetwork and EurekaNow — you agree to be
                bound by these Terms of Service and our Privacy Policy. If you do not agree, you must not
                use our services.
            </Paragraph>

            <Divider />

            <SectionHeading>2. About Our Services</SectionHeading>
            <Paragraph>
                Eureka Technologies Limited operates EurekaNetwork, a connected platform ecosystem, and
                EurekaNow, a real-time productivity and innovation tool. Our services are subject to change,
                and we may add, modify, or discontinue features at any time with reasonable notice.
            </Paragraph>

            <Divider />

            <SectionHeading>3. Eligibility</SectionHeading>
            <BulletList
                items={[
                    "You must be at least 16 years old to use our services.",
                    "You must have the legal capacity to enter into a binding agreement.",
                    "If you are registering on behalf of a business, you represent that you have authority to bind that entity.",
                    "Our services are not available to persons previously banned from using them.",
                ]}
            />

            <Divider />

            <SectionHeading>4. Account Registration</SectionHeading>
            <Paragraph>
                To access certain features, you must create an account. You agree to:
            </Paragraph>
            <BulletList
                items={[
                    "Provide accurate, current, and complete information during registration.",
                    "Keep your account credentials confidential and not share them with others.",
                    "Notify us immediately if you suspect unauthorised access to your account.",
                    "Take responsibility for all activity that occurs under your account.",
                ]}
            />
            <Paragraph>
                We reserve the right to suspend or terminate accounts that violate these Terms or are
                inactive for an extended period.
            </Paragraph>

            <Divider />

            <SectionHeading>5. Acceptable Use</SectionHeading>
            <Paragraph>You agree not to use our services to:</Paragraph>
            <BulletList
                items={[
                    "Violate any applicable laws or regulations.",
                    "Infringe the intellectual property rights of others.",
                    "Transmit harmful, offensive, or unlawful content.",
                    "Attempt to gain unauthorised access to our systems or other users' accounts.",
                    "Reverse engineer, decompile, or disassemble any part of our software.",
                    "Use automated tools (bots, scrapers) to access our services without written permission.",
                    "Interfere with the integrity or performance of our services.",
                    "Engage in any activity that could harm Eureka Technologies Limited or its users.",
                ]}
            />

            <Divider />

            <SectionHeading>6. Intellectual Property</SectionHeading>
            <Paragraph>
                All content, software, trademarks, and materials associated with EurekaNetwork, EurekaNow,
                and Eureka Technologies Limited are owned by or licensed to us. You are granted a limited,
                non-exclusive, non-transferable licence to access and use our services for your personal or
                internal business purposes.
            </Paragraph>
            <Paragraph>
                You retain ownership of any content you create or upload to our platforms. By submitting
                content, you grant us a non-exclusive, royalty-free licence to use, display, and distribute
                it solely for the purposes of operating our services.
            </Paragraph>

            <Divider />

            <SectionHeading>7. Payments & Subscriptions</SectionHeading>
            <SubHeading>7.1 Fees</SubHeading>
            <Paragraph>
                Certain features of EurekaNow and EurekaNetwork may require payment. All fees are stated in
                GBP unless otherwise specified and are inclusive of VAT where applicable.
            </Paragraph>
            <SubHeading>7.2 Billing</SubHeading>
            <BulletList
                items={[
                    "Subscriptions are billed in advance on a monthly or annual basis.",
                    "You authorise us to charge your selected payment method on each renewal date.",
                    "Prices may change with 30 days' written notice.",
                ]}
            />
            <SubHeading>7.3 Refunds</SubHeading>
            <Paragraph>
                We offer a 14-day refund period on new subscriptions. Refunds are not available for partial
                billing periods or after the 14-day window unless required by law.
            </Paragraph>

            <Divider />

            <SectionHeading>8. Termination</SectionHeading>
            <Paragraph>
                You may cancel your account at any time via your account settings. We may suspend or
                terminate your access immediately if you breach these Terms, engage in fraudulent activity,
                or for any other reason with reasonable notice. Upon termination, your right to use our
                services ceases immediately.
            </Paragraph>

            <Divider />

            <SectionHeading>9. Disclaimers & Limitation of Liability</SectionHeading>
            <Paragraph>
                Our services are provided "as is" without warranties of any kind. To the fullest extent
                permitted by law, Eureka Technologies Limited is not liable for:
            </Paragraph>
            <BulletList
                items={[
                    "Indirect, incidental, or consequential damages arising from your use of our services.",
                    "Loss of data, profits, or business opportunities.",
                    "Service interruptions, errors, or inaccuracies.",
                    "Third-party actions or content accessible through our platforms.",
                ]}
            />
            <Paragraph>
                Our total aggregate liability to you shall not exceed the amount you paid to us in the 12
                months preceding the claim.
            </Paragraph>

            <Divider />

            <SectionHeading>10. Governing Law</SectionHeading>
            <Paragraph>
                These Terms are governed by and construed in accordance with the laws of England and Wales.
                Any disputes shall be subject to the exclusive jurisdiction of the courts of England and
                Wales.
            </Paragraph>

            <Divider />

            <SectionHeading>11. Changes to These Terms</SectionHeading>
            <Paragraph>
                We may update these Terms from time to time. We will provide at least 14 days' notice of
                material changes via email or in-app notification. Continued use of our services after the
                effective date constitutes acceptance of the updated Terms.
            </Paragraph>

            <Divider />

            <SectionHeading>12. Contact Us</SectionHeading>
            <Paragraph>
                For questions about these Terms, please contact us at{" "}
                <a href="mailto:legal@eureka-technologies.co.uk" style={{ color: COLORS.accent }}>
                    legal@eureka-technologies.co.uk
                </a>{" "}
                or write to:
            </Paragraph>
            <div
                className="rounded-lg p-4 text-sm"
                style={{
                    background: COLORS.lightBlue,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.secondaryText,
                    lineHeight: "1.9",
                }}
            >
                <strong style={{ color: COLORS.primaryText }}>Eureka Technologies Limited</strong>
                <br />
                Legal Department
                <br />
                United Kingdom
                <br />
                <a href="mailto:legal@eureka-technologies.co.uk" style={{ color: COLORS.accent }}>
                    legal@eureka-technologies.co.uk
                </a>
            </div>
        </div>
    );
}

// -- Cookie Policy content component could be added here if needed --
function CookiePolicy() {
// Placeholder for Cookie Policy content
}

// ── TABLE OF CONTENTS ───────────────────────────────────────────
const TOC = {
    "Privacy Policy": [
        "Who We Are",
        "Information We Collect",
        "How We Use Your Information",
        "Legal Basis for Processing",
        "Sharing Your Information",
        "Data Retention",
        "Your Rights",
        "Cookies",
        "International Transfers",
        "Changes to This Policy",
    ],
    "Terms of Service": [
        "Acceptance of Terms",
        "About Our Services",
        "Eligibility",
        "Account Registration",
        "Acceptable Use",
        "Intellectual Property",
        "Payments & Subscriptions",
        "Termination",
        "Disclaimers & Limitation of Liability",
        "Governing Law",
        "Changes to These Terms",
        "Contact Us",
    ],
};

// ── MAIN PAGE ───────────────────────────────────────────────────
export default function EurekaLegalPage() {
    const [activeTab, setActiveTab] = useState("Privacy Policy");
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        setTimeout(() => setVisible(true), 80);
    }, []);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            style={{
                background: COLORS.darkBlue,
                minHeight: "100vh",
                fontFamily: "'DM Sans', Arial, sans-serif",
            }}
        >
            {/* Google Fonts */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${COLORS.darkBlue}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.border}; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: ${COLORS.skyBlue}; }
        a { transition: color 0.2s; }
        a:hover { color: #ffaa88 !important; }
      `}</style>

            {/* ── STICKY NAVBAR ── */}
            <nav
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 50,
                    background: scrolled
                        ? `rgba(11,26,48,0.97)`
                        : "transparent",
                    borderBottom: scrolled ? `1px solid ${COLORS.border}` : "1px solid transparent",
                    transition: "background 0.3s, border-color 0.3s",
                    backdropFilter: scrolled ? "blur(12px)" : "none",
                }}
            >
                <div
                    style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}
                    className="flex items-center justify-between h-16"
                >
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div
                            className="flex items-center justify-center rounded-lg font-bold text-lg"
                            style={{
                                width: 36,
                                height: 36,
                                background: COLORS.accent,
                                color: COLORS.darkBlue,
                                fontFamily: "'Playfair Display', Georgia, serif",
                            }}
                        >
                            E
                        </div>
                        <div>
                            <span
                                style={{
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                    fontSize: "17px",
                                    fontWeight: 700,
                                    color: COLORS.primaryText,
                                }}
                            >
                                Eureka<span style={{ color: COLORS.accent }}>Network</span>
                            </span>
                            <div
                                style={{
                                    fontSize: "10px",
                                    color: COLORS.mutedBlue,
                                    letterSpacing: "0.08em",
                                    marginTop: "-2px",
                                }}
                            >
                                by Eureka Technologies Limited
                            </div>
                        </div>
                    </div>

                    {/* Tab switcher */}
                    <div
                        className="flex items-center gap-1 rounded-lg p-1"
                        style={{ background: COLORS.lightBlue, border: `1px solid ${COLORS.border}` }}
                    >
                        {NAV_TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabSwitch(tab)}
                                className="text-sm font-medium rounded-md px-4 py-1.5 transition-all duration-200"
                                style={{
                                    background: activeTab === tab ? COLORS.accent : "transparent",
                                    color: activeTab === tab ? "#fff" : COLORS.mutedBlue,
                                    border: "none",
                                    cursor: "pointer",
                                    fontFamily: "'DM Sans', Arial, sans-serif",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* ── HERO ── */}
            <div
                style={{
                    background: `linear-gradient(160deg, ${COLORS.lightBlue} 0%, ${COLORS.darkBlue} 60%)`,
                    borderBottom: `1px solid ${COLORS.border}`,
                }}
            >
                <div
                    style={{ maxWidth: "1100px", margin: "0 auto", padding: "64px 32px 52px" }}
                    className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                    <div
                        className="inline-block mb-4 text-xs font-semibold rounded-full px-3 py-1"
                        style={{
                            background: `rgba(245,122,85,0.12)`,
                            color: COLORS.accent,
                            border: `1px solid rgba(245,122,85,0.3)`,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                        }}
                    >
                        Legal Documents
                    </div>
                    <h1
                        style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: "clamp(32px, 5vw, 52px)",
                            fontWeight: 700,
                            color: COLORS.primaryText,
                            lineHeight: 1.15,
                            marginBottom: "16px",
                        }}
                    >
                        {activeTab === "Privacy Policy"
                            ? <>Privacy <em style={{ color: COLORS.accent, fontStyle: "italic" }}>Policy</em></>
                            : <>Terms of <em style={{ color: COLORS.accent, fontStyle: "italic" }}>Service</em></>}
                    </h1>
                    <p style={{ color: COLORS.secondaryText, fontSize: "15px", maxWidth: "540px", lineHeight: 1.7 }}>
                        {activeTab === "Privacy Policy"
                            ? "How Eureka Technologies Limited collects, uses, and protects your personal data across EurekaNetwork and EurekaNow."
                            : "The rules and responsibilities that govern your use of EurekaNetwork, EurekaNow, and all Eureka Technologies Limited services."}
                    </p>
                </div>
            </div>

            {/* ── MAIN LAYOUT ── */}
            <div
                style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 32px 80px" }}
                className="flex gap-10 items-start"
            >

                {/* ── SIDEBAR TOC ── */}
                <aside
                    className="hidden lg:block flex-shrink-0"
                    style={{ width: "220px", position: "sticky", top: "88px" }}
                >
                    <p
                        className="text-xs font-semibold mb-4"
                        style={{
                            color: COLORS.mutedBlue,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                        }}
                    >
                        On this page
                    </p>
                    <nav className="flex flex-col gap-1">
                        {TOC[activeTab].map((item, i) => (
                            <a
                                key={item}
                                href={`#section-${i + 1}`}
                                className="text-xs py-1.5 px-3 rounded-md transition-all duration-150"
                                style={{
                                    color: COLORS.mutedBlue,
                                    textDecoration: "none",
                                    borderLeft: `2px solid transparent`,
                                    display: "block",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = COLORS.accent;
                                    e.currentTarget.style.borderLeftColor = COLORS.accent;
                                    e.currentTarget.style.background = `rgba(245,122,85,0.06)`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = COLORS.mutedBlue;
                                    e.currentTarget.style.borderLeftColor = "transparent";
                                    e.currentTarget.style.background = "transparent";
                                }}
                            >
                                <span style={{ marginRight: "6px", opacity: 0.45 }}>{i + 1}.</span>
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Switch doc link */}
                    <div
                        className="mt-8 p-3 rounded-lg text-xs"
                        style={{
                            background: COLORS.lightBlue,
                            border: `1px solid ${COLORS.border}`,
                            color: COLORS.mutedBlue,
                        }}
                    >
                        Also read our{" "}
                        <button
                            onClick={() =>
                                handleTabSwitch(activeTab === "Privacy Policy" ? "Terms of Service" : "Privacy Policy")
                            }
                            style={{
                                background: "none",
                                border: "none",
                                color: COLORS.accent,
                                cursor: "pointer",
                                padding: 0,
                                font: "inherit",
                                fontSize: "12px",
                            }}
                        >
                            {activeTab === "Privacy Policy" ? "Terms of Service →" : "Privacy Policy →"}
                        </button>
                    </div>
                </aside>

                {/* ── CONTENT ── */}
                <main
                    ref={contentRef}
                    className="flex-1 min-w-0"
                    style={{
                        background: COLORS.lightBlue,
                        border: `1px solid ${COLORS.border}`,
                        borderRadius: "16px",
                        padding: "clamp(24px, 5vw, 52px)",
                    }}
                >
                    {/* Tab header row */}
                    <div
                        className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-6"
                        style={{ borderBottom: `1px solid ${COLORS.border}` }}
                    >
                        <div>
                            <p
                                className="text-xs font-semibold mb-1"
                                style={{ color: COLORS.accent, letterSpacing: "0.12em", textTransform: "uppercase" }}
                            >
                                Eureka Technologies Limited
                            </p>
                            <h2
                                style={{
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                    fontSize: "22px",
                                    fontWeight: 700,
                                    color: COLORS.primaryText,
                                    margin: 0,
                                }}
                            >
                                {activeTab}
                            </h2>
                        </div>
                        <div className="flex gap-2">
                            <div
                                className="text-xs px-3 py-1 rounded-full"
                                style={{
                                    background: `rgba(76,175,80,0.1)`,
                                    color: "#4CAF50",
                                    border: "1px solid rgba(76,175,80,0.25)",
                                }}
                            >
                                ✓ Current version
                            </div>
                            <div
                                className="text-xs px-3 py-1 rounded-full"
                                style={{
                                    background: COLORS.darkGray,
                                    color: COLORS.mutedBlue,
                                    border: `1px solid ${COLORS.border}`,
                                }}
                            >
                                Updated Jun 2025
                            </div>
                        </div>
                    </div>

                    {/* Animated content swap */}
                    <div
                        key={activeTab}
                        style={{
                            animation: "fadeIn 0.3s ease",
                        }}
                    >
                        <style>{`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(8px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
                        {activeTab === "Privacy Policy" ? <PrivacyPolicy /> : <TermsOfService />}
                    </div>

                    {/* Bottom CTA */}
                    <div
                        className="mt-10 p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                        style={{
                            background: `rgba(245,122,85,0.07)`,
                            border: `1px solid rgba(245,122,85,0.2)`,
                        }}
                    >
                        <div>
                            <p className="font-semibold text-sm mb-1" style={{ color: COLORS.primaryText }}>
                                Questions about this document?
                            </p>
                            <p className="text-xs" style={{ color: COLORS.mutedBlue }}>
                                Our team is happy to clarify anything.
                            </p>
                        </div>
                        <a
                            href="mailto:legal@eurekatech.com"
                            className="text-sm font-semibold px-5 py-2.5 rounded-lg flex-shrink-0"
                            style={{
                                background: COLORS.accent,
                                color: "#fff",
                                textDecoration: "none",
                                display: "inline-block",
                            }}
                        >
                            Contact Legal Team →
                        </a>
                    </div>
                </main>
            </div>

            {/* ── FOOTER ── */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
}