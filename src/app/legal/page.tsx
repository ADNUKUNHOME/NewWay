"use client";

import { useState } from "react";

const sections = [
    { key: "privacy", label: "Privacy Policy" },
    { key: "terms", label: "Terms of Service" },
    { key: "cookies", label: "Cookie Policy" },
];

export default function LegalPage() {
    const [active, setActive] = useState("privacy");

    return (
        <div className="min-h-screen bg-black/55 text-white py-12 px-6 mt-20">
            <div className="max-w-4xl mx-auto bg-black/70 shadow-lg rounded-2xl p-6">
                {/* Header */}
                <h1 className="text-3xl font-bold text-center mb-8 text-yellow-600">
                    Legal Information
                </h1>

                {/* Tabs */}
                <div className="flex justify-center space-x-6 border-b pb-4 mb-6">
                    {sections.map((section) => (
                        <button
                            key={section.key}
                            onClick={() => setActive(section.key)}
                            className={`text-lg font-medium transition px-3 py-1 rounded-md ${active === section.key
                                ? "text-yellow-600 border-b-2 border-yellow-600"
                                : "text-white hover:text-yellow-600"
                                }`}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="prose max-w-none">
                    {active === "privacy" && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
                            <p>
                                At <strong>NewWay</strong>, your privacy is very important to us.
                                We only collect necessary information such as your email and
                                profile details to provide our services. We do not sell or share
                                your data with third parties. You can request deletion of your
                                data anytime by contacting us.
                            </p>
                            <p>
                                By using NewWay, you consent to our Privacy Policy and agree to
                                the collection and use of information in accordance with this
                                policy.
                            </p>
                        </div>
                    )}

                    {active === "terms" && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
                            <p>
                                Welcome to <strong>NewWay</strong>. By accessing or using our
                                platform, you agree to comply with the following terms:
                            </p>
                            <ul className="list-disc pl-6">
                                <li>You must use the site for lawful purposes only.</li>
                                <li>
                                    You may not misuse, hack, or exploit vulnerabilities in our
                                    services.
                                </li>
                                <li>
                                    We reserve the right to suspend or terminate accounts that
                                    violate these terms.
                                </li>
                            </ul>
                            <p>
                                These terms are subject to change, and your continued use of
                                NewWay means you agree to the updated terms.
                            </p>
                        </div>
                    )}

                    {active === "cookies" && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
                            <p>
                                <strong>NewWay</strong> uses cookies to enhance user experience
                                and ensure secure login sessions.
                            </p>
                            <ul className="list-disc pl-6">
                                <li>
                                    <strong>Essential Cookies:</strong> Required for login and
                                    navigation.
                                </li>
                                <li>
                                    <strong>Analytics Cookies:</strong> Help us improve services by
                                    understanding user behavior.
                                </li>
                            </ul>
                            <p>
                                You can disable cookies in your browser settings, but some
                                features of NewWay may not function properly.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
