import { useState, useEffect, useRef } from "react";

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
function SectionHeading({ children, id }) {
    return (
        <h2
            id={id}
            style={{
                color: COLORS.primaryText,
                fontFamily: "'Playfair Display', Georgia, serif",
                borderLeft: `3px solid ${COLORS.accent}`,
                paddingLeft: "16px",
                marginTop: "2.5rem",
                marginBottom: "1rem",
                fontSize: "clamp(18px, 4vw, 24px)",
                fontWeight: 700,
                // offset for sticky nav so the heading isn't hidden behind it
                scrollMarginTop: "80px",
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

            <SectionHeading id="section-1">1. Who We Are</SectionHeading>
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

            <SectionHeading id="section-2">2. Information We Collect</SectionHeading>
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

            <SectionHeading id="section-3">3. How We Use Your Information</SectionHeading>
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

            <SectionHeading id="section-4">4. Legal Basis for Processing</SectionHeading>
            <Paragraph>We process your personal data under the following legal bases:</Paragraph>
            <BulletList
                items={[
                    "Contract — to fulfil our obligations to you as a user of our services.",
                    "Legitimate interests — to improve our products, prevent fraud, and communicate with you.",
                    "Legal obligation — to comply with applicable laws and regulations.",
                    "Consent — for marketing communications and non-essential cookies, which you may withdraw at any time.",
                ]}
            />

            <Divider />

            <SectionHeading id="section-5">5. Sharing Your Information</SectionHeading>
            <Paragraph>We do not sell your personal data. We may share it with:</Paragraph>
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

            <SectionHeading id="section-6">6. Data Retention</SectionHeading>
            <Paragraph>
                We retain your personal data for as long as your account is active or as needed to provide
                services to you. We will delete or anonymise your data upon request, unless we are required
                to retain it for legal or regulatory reasons.
            </Paragraph>

            <Divider />

            <SectionHeading id="section-7">7. Your Rights</SectionHeading>
            <Paragraph>Under UK GDPR, you have the right to:</Paragraph>
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

            <SectionHeading id="section-8">8. Cookies</SectionHeading>
            <Paragraph>
                We use essential cookies to operate our services, and optional analytics and preference
                cookies to improve your experience. You can manage cookie preferences via the banner shown
                on your first visit, or through your browser settings at any time.
            </Paragraph>

            <Divider />

            <SectionHeading id="section-9">9. International Transfers</SectionHeading>
            <Paragraph>
                Your data is primarily stored and processed in the United Kingdom. Where we transfer data
                outside the UK, we ensure appropriate safeguards are in place, such as Standard Contractual
                Clauses approved by the ICO.
            </Paragraph>

            <Divider />

            <SectionHeading id="section-10">10. Changes to This Policy</SectionHeading>
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

            <SectionHeading id="section-1">1. Acceptance of Terms</SectionHeading>
            <Paragraph>
                By accessing or using any product or service provided by Eureka Technologies Limited
                ("Eureka", "we", "us", or "our") — including EurekaNetwork and EurekaNow — you agree to be
                bound by these Terms of Service and our Privacy Policy. If you do not agree, you must not
                use our services.
            </Paragraph>

            <Divider />

            <SectionHeading id="section-2">2. About Our Services</SectionHeading>
            <Paragraph>
                Eureka Technologies Limited operates EurekaNetwork, a connected platform ecosystem, and
                EurekaNow, a real-time productivity and innovation tool. Our services are subject to change,
                and we may add, modify, or discontinue features at any time with reasonable notice.
            </Paragraph>

            <Divider />

            <SectionHeading id="section-3">3. Eligibility</SectionHeading>
            <BulletList
                items={[
                    "You must be at least 16 years old to use our services.",
                    "You must have the legal capacity to enter into a binding agreement.",
                    "If you are registering on behalf of a business, you represent that you have authority to bind that entity.",
                    "Our services are not available to persons previously banned from using them.",
                ]}
            />

            <Divider />

            <SectionHeading id="section-4">4. Account Registration</SectionHeading>
            <Paragraph>To access certain features, you must create an account. You agree to:</Paragraph>
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

            <SectionHeading id="section-5">5. Acceptable Use</SectionHeading>
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

            <SectionHeading id="section-6">6. Intellectual Property</SectionHeading>
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

            <SectionHeading id="section-7">7. Payments & Subscriptions</SectionHeading>
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

            <SectionHeading id="section-8">8. Termination</SectionHeading>
            <Paragraph>
                You may cancel your account at any time via your account settings. We may suspend or
                terminate your access immediately if you breach these Terms, engage in fraudulent activity,
                or for any other reason with reasonable notice. Upon termination, your right to use our
                services ceases immediately.
            </Paragraph>

            <Divider />

            <SectionHeading id="section-9">9. Disclaimers & Limitation of Liability</SectionHeading>
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

            <SectionHeading id="section-10">10. Governing Law</SectionHeading>
            <Paragraph>
                These Terms are governed by and construed in accordance with the laws of England and Wales.
                Any disputes shall be subject to the exclusive jurisdiction of the courts of England and
                Wales.
            </Paragraph>

            <Divider />

            <SectionHeading id="section-11">11. Changes to These Terms</SectionHeading>
            <Paragraph>
                We may update these Terms from time to time. We will provide at least 14 days' notice of
                material changes via email or in-app notification. Continued use of our services after the
                effective date constitutes acceptance of the updated Terms.
            </Paragraph>

            <Divider />

            <SectionHeading id="section-12">12. Contact Us</SectionHeading>
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

// ── MOBILE TOC DRAWER ───────────────────────────────────────────
function MobileTOC({ activeTab, onClose, handleTabSwitch }) {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 200,
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(4px)",
                }}
            />
            {/* Drawer slides up from bottom */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: COLORS.darkBlue,
                    border: `1px solid ${COLORS.border}`,
                    borderBottom: "none",
                    borderRadius: "20px 20px 0 0",
                    padding: "24px 24px 40px",
                    maxHeight: "75vh",
                    overflowY: "auto",
                    animation: "slideUp 0.25s ease",
                }}
            >
                <style>{`
                    @keyframes slideUp {
                        from { transform: translateY(100%); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                    }
                `}</style>
                {/* Handle */}
                <div
                    style={{
                        width: 36,
                        height: 4,
                        borderRadius: 2,
                        background: COLORS.border,
                        margin: "0 auto 20px",
                    }}
                />
                <p
                    style={{
                        color: COLORS.mutedBlue,
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: "16px",
                    }}
                >
                    On this page
                </p>
                <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    {TOC[activeTab].map((item, i) => (
                        <a
                            key={item}
                            href={`#section-${i + 1}`}
                            onClick={(e) => {
                                e.preventDefault();
                                onClose();
                                // Small delay so drawer closes before scroll fires
                                setTimeout(() => {
                                    const el = document.getElementById(`section-${i + 1}`);
                                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                                }, 120);
                            }}
                            style={{
                                color: COLORS.secondaryText,
                                textDecoration: "none",
                                fontSize: "14px",
                                padding: "10px 12px",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                borderLeft: `2px solid ${COLORS.border}`,
                            }}
                        >
                            <span style={{ color: COLORS.accent, fontSize: "12px", fontWeight: 700, minWidth: "20px" }}>
                                {i + 1}.
                            </span>
                            {item}
                        </a>
                    ))}
                </nav>
                {/* Switch doc */}
                <div
                    style={{
                        marginTop: "20px",
                        padding: "14px 16px",
                        borderRadius: "10px",
                        background: COLORS.lightBlue,
                        border: `1px solid ${COLORS.border}`,
                        fontSize: "13px",
                        color: COLORS.mutedBlue,
                    }}
                >
                    Also read our{" "}
                    <button
                        onClick={() => {
                            handleTabSwitch(activeTab === "Privacy Policy" ? "Terms of Service" : "Privacy Policy");
                            onClose();
                        }}
                        style={{
                            background: "none",
                            border: "none",
                            color: COLORS.accent,
                            cursor: "pointer",
                            padding: 0,
                            fontSize: "13px",
                            fontFamily: "inherit",
                        }}
                    >
                        {activeTab === "Privacy Policy" ? "Terms of Service →" : "Privacy Policy →"}
                    </button>
                </div>
            </div>
        </div>
    );
}

// ── MAIN PAGE ───────────────────────────────────────────────────
export default function EurekaLegalPage() {
    const [activeTab, setActiveTab] = useState("Privacy Policy");
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(false);
    const [tocOpen, setTocOpen] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        setTimeout(() => setVisible(true), 80);
    }, []);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    // Lock body scroll when TOC drawer is open
    useEffect(() => {
        document.body.style.overflow = tocOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [tocOpen]);

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

                /* Responsive utilities */
                .sidebar-desktop { display: none; }
                @media (min-width: 1024px) {
                    .sidebar-desktop { display: block; }
                    .toc-fab { display: none !important; }
                    .nav-tabs-mobile { display: none; }
                    .nav-tabs-desktop { display: flex !important; }
                }
                @media (max-width: 1023px) {
                    .nav-tabs-desktop { display: none !important; }
                }
                @media (max-width: 480px) {
                    .hero-badges { flex-direction: column; align-items: flex-start; gap: 8px; }
                }
            `}</style>

            {/* ── STICKY NAVBAR ── */}
            <nav
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 100,
                    background: scrolled ? `rgba(11,26,48,0.97)` : "transparent",
                    borderBottom: scrolled ? `1px solid ${COLORS.border}` : "1px solid transparent",
                    transition: "background 0.3s, border-color 0.3s",
                    backdropFilter: scrolled ? "blur(12px)" : "none",
                }}
            >
                <div
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto",
                        padding: "0 16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: "60px",
                        gap: "12px",
                    }}
                >
                    {/* Logo */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                        <div
                            style={{
                                width: 34,
                                height: 34,
                                background: COLORS.accent,
                                color: COLORS.darkBlue,
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontFamily: "'Playfair Display', Georgia, serif",
                                fontWeight: 700,
                                fontSize: "17px",
                                flexShrink: 0,
                            }}
                        >
                            E
                        </div>
                        <div>
                            <span
                                style={{
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                    fontSize: "16px",
                                    fontWeight: 700,
                                    color: COLORS.primaryText,
                                }}
                            >
                                Eureka<span style={{ color: COLORS.accent }}>Network</span>
                            </span>
                            <div
                                style={{
                                    fontSize: "9px",
                                    color: COLORS.mutedBlue,
                                    letterSpacing: "0.08em",
                                    marginTop: "-2px",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                by Eureka Technologies Limited
                            </div>
                        </div>
                    </div>

                    {/* Desktop tab switcher */}
                    <div
                        className="nav-tabs-desktop"
                        style={{
                            alignItems: "center",
                            gap: "4px",
                            borderRadius: "10px",
                            padding: "4px",
                            background: COLORS.lightBlue,
                            border: `1px solid ${COLORS.border}`,
                        }}
                    >
                        {NAV_TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabSwitch(tab)}
                                style={{
                                    background: activeTab === tab ? COLORS.accent : "transparent",
                                    color: activeTab === tab ? "#fff" : COLORS.mutedBlue,
                                    border: "none",
                                    cursor: "pointer",
                                    fontFamily: "'DM Sans', Arial, sans-serif",
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    borderRadius: "7px",
                                    padding: "6px 16px",
                                    whiteSpace: "nowrap",
                                    transition: "all 0.2s",
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Mobile tab switcher — compact pill */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "3px",
                            borderRadius: "8px",
                            padding: "3px",
                            background: COLORS.lightBlue,
                            border: `1px solid ${COLORS.border}`,
                        }}
                        className="nav-tabs-mobile"
                    >
                        {NAV_TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabSwitch(tab)}
                                style={{
                                    background: activeTab === tab ? COLORS.accent : "transparent",
                                    color: activeTab === tab ? "#fff" : COLORS.mutedBlue,
                                    border: "none",
                                    cursor: "pointer",
                                    fontFamily: "'DM Sans', Arial, sans-serif",
                                    fontSize: "11px",
                                    fontWeight: 500,
                                    borderRadius: "5px",
                                    padding: "5px 10px",
                                    whiteSpace: "nowrap",
                                    transition: "all 0.2s",
                                }}
                                title={tab}
                            >
                                {tab === "Privacy Policy" ? "Privacy" : "Terms"}
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
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto",
                        padding: "clamp(36px, 6vw, 64px) clamp(16px, 4vw, 32px) clamp(32px, 5vw, 52px)",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(12px)",
                        transition: "opacity 0.7s ease, transform 0.7s ease",
                    }}
                >
                    <div
                        style={{
                            display: "inline-block",
                            marginBottom: "14px",
                            fontSize: "11px",
                            fontWeight: 600,
                            borderRadius: "100px",
                            padding: "4px 12px",
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
                            fontSize: "clamp(28px, 6vw, 52px)",
                            fontWeight: 700,
                            color: COLORS.primaryText,
                            lineHeight: 1.15,
                            marginBottom: "14px",
                        }}
                    >
                        {activeTab === "Privacy Policy" ? (
                            <>Privacy <em style={{ color: COLORS.accent, fontStyle: "italic" }}>Policy</em></>
                        ) : (
                            <>Terms of <em style={{ color: COLORS.accent, fontStyle: "italic" }}>Service</em></>
                        )}
                    </h1>
                    <p
                        style={{
                            color: COLORS.secondaryText,
                            fontSize: "clamp(13px, 2.5vw, 15px)",
                            maxWidth: "540px",
                            lineHeight: 1.7,
                        }}
                    >
                        {activeTab === "Privacy Policy"
                            ? "How Eureka Technologies Limited collects, uses, and protects your personal data across EurekaNetwork and EurekaNow."
                            : "The rules and responsibilities that govern your use of EurekaNetwork, EurekaNow, and all Eureka Technologies Limited services."}
                    </p>
                </div>
            </div>

            {/* ── MAIN LAYOUT ── */}
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "clamp(24px, 4vw, 48px) clamp(16px, 4vw, 32px) 80px",
                    display: "flex",
                    gap: "40px",
                    alignItems: "flex-start",
                }}
            >
                {/* ── SIDEBAR TOC (desktop only) ── */}
                <aside
                    className="sidebar-desktop"
                    style={{ width: "220px", flexShrink: 0, position: "sticky", top: "76px" }}
                >
                    <p
                        style={{
                            color: COLORS.mutedBlue,
                            fontSize: "11px",
                            fontWeight: 600,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            marginBottom: "14px",
                        }}
                    >
                        On this page
                    </p>
                    <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        {TOC[activeTab].map((item, i) => (
                            <a
                                key={item}
                                href={`#section-${i + 1}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const el = document.getElementById(`section-${i + 1}`);
                                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                                }}
                                style={{
                                    color: COLORS.mutedBlue,
                                    textDecoration: "none",
                                    fontSize: "12px",
                                    padding: "6px 12px",
                                    borderRadius: "6px",
                                    borderLeft: `2px solid transparent`,
                                    display: "block",
                                    transition: "all 0.15s",
                                    cursor: "pointer",
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

                    <div
                        style={{
                            marginTop: "28px",
                            padding: "12px",
                            borderRadius: "10px",
                            background: COLORS.lightBlue,
                            border: `1px solid ${COLORS.border}`,
                            color: COLORS.mutedBlue,
                            fontSize: "12px",
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
                    style={{
                        flex: 1,
                        minWidth: 0,
                        background: COLORS.lightBlue,
                        border: `1px solid ${COLORS.border}`,
                        borderRadius: "16px",
                        padding: "clamp(20px, 5vw, 52px)",
                    }}
                >
                    {/* Tab header row */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: "12px",
                            marginBottom: "28px",
                            paddingBottom: "20px",
                            borderBottom: `1px solid ${COLORS.border}`,
                        }}
                    >
                        <div>
                            <p
                                style={{
                                    fontSize: "11px",
                                    fontWeight: 600,
                                    color: COLORS.accent,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    marginBottom: "4px",
                                }}
                            >
                                Eureka Technologies Limited
                            </p>
                            <h2
                                style={{
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                    fontSize: "clamp(18px, 4vw, 22px)",
                                    fontWeight: 700,
                                    color: COLORS.primaryText,
                                    margin: 0,
                                }}
                            >
                                {activeTab}
                            </h2>
                        </div>
                        <div className="hero-badges" style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                            <div
                                style={{
                                    fontSize: "11px",
                                    padding: "4px 10px",
                                    borderRadius: "100px",
                                    background: `rgba(76,175,80,0.1)`,
                                    color: "#4CAF50",
                                    border: "1px solid rgba(76,175,80,0.25)",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                ✓ Current version
                            </div>
                            <div
                                style={{
                                    fontSize: "11px",
                                    padding: "4px 10px",
                                    borderRadius: "100px",
                                    background: COLORS.darkGray,
                                    color: COLORS.mutedBlue,
                                    border: `1px solid ${COLORS.border}`,
                                    whiteSpace: "nowrap",
                                }}
                            >
                                Updated Jun 2026
                            </div>
                        </div>
                    </div>

                    {/* Animated content swap */}
                    <div
                        key={activeTab}
                        style={{ animation: "fadeIn 0.3s ease" }}
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
                        style={{
                            marginTop: "40px",
                            padding: "clamp(16px, 4vw, 24px)",
                            borderRadius: "12px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            background: `rgba(245,122,85,0.07)`,
                            border: `1px solid rgba(245,122,85,0.2)`,
                        }}
                    >
                        <div>
                            <p style={{ fontWeight: 600, fontSize: "14px", color: COLORS.primaryText, marginBottom: "4px" }}>
                                Questions about this document?
                            </p>
                            <p style={{ fontSize: "12px", color: COLORS.mutedBlue }}>
                                Our team is happy to clarify anything.
                            </p>
                        </div>
                        <a
                            href="mailto:legal@eureka-technologies.co.uk"
                            style={{
                                background: COLORS.accent,
                                color: "#fff",
                                textDecoration: "none",
                                display: "inline-block",
                                fontSize: "13px",
                                fontWeight: 600,
                                padding: "10px 20px",
                                borderRadius: "8px",
                                alignSelf: "flex-start",
                            }}
                        >
                            Contact Legal Team →
                        </a>
                    </div>
                </main>
            </div>

            {/* ── MOBILE TOC FAB ── */}
            <button
                className="toc-fab"
                onClick={() => setTocOpen(true)}
                style={{
                    position: "fixed",
                    bottom: "24px",
                    right: "20px",
                    zIndex: 150,
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: COLORS.accent,
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 20px rgba(245,122,85,0.45)",
                    flexDirection: "column",
                    gap: "4px",
                    padding: 0,
                }}
                aria-label="Open table of contents"
            >
                {/* Hamburger lines */}
                <span style={{ display: "block", width: "18px", height: "2px", background: "#fff", borderRadius: 2 }} />
                <span style={{ display: "block", width: "14px", height: "2px", background: "#fff", borderRadius: 2 }} />
                <span style={{ display: "block", width: "18px", height: "2px", background: "#fff", borderRadius: 2 }} />
            </button>

            {/* ── MOBILE TOC DRAWER ── */}
            {tocOpen && (
                <MobileTOC
                    activeTab={activeTab}
                    onClose={() => setTocOpen(false)}
                    handleTabSwitch={handleTabSwitch}
                />
            )}
        </div>
    );
}