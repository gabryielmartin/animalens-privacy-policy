import { PrivacyFooter } from "@/components/privacy/privacy-footer";
import { PrivacyHeader } from "@/components/privacy/privacy-header";
import { PrivacySection } from "@/components/privacy/privacy-section";
import { PrivacySidebar } from "@/components/privacy/privacy-sidebar";

const effectiveDate = "September 27, 2026";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
  },
  {
    id: "photos-and-camera",
    title: "Photos and Camera",
  },
  {
    id: "location-information",
    title: "Location Information",
  },
  {
    id: "animal-observation-data",
    title: "Animal Observation Data",
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
  },
  {
    id: "data-storage",
    title: "Data Storage",
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
  },
  {
    id: "information-access",
    title: "Information Access",
  },
  {
    id: "data-security",
    title: "Data Security",
  },
  {
    id: "data-retention",
    title: "Data Retention",
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
  },
  {
    id: "changes",
    title: "Changes to This Privacy Policy",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f8faf9] text-zinc-900">
      <PrivacyHeader />

      <main>
        {/* Hero */}
        <section className="border-b border-zinc-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center rounded-full border border-[#d9ead5] bg-[#f0f8ee] px-3 py-1.5 text-xs font-semibold text-[#467a3d] sm:text-sm">
                Privacy Policy
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
                Your privacy matters to us.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                This Privacy Policy explains how AnimaLens collects, uses,
                stores, and protects information when you use our application.
              </p>

              <div className="mt-6 flex flex-col gap-2 text-sm text-zinc-500 sm:flex-row sm:items-center sm:gap-4">
                <span>
                  <strong className="font-semibold text-zinc-700">
                    Effective date:
                  </strong>{" "}
                  {effectiveDate}
                </span>

                <span className="hidden sm:block">•</span>

                <span>AnimaLens</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section>
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
              {/* Sidebar */}
              <PrivacySidebar sections={sections} />

              {/* Policy content */}
              <article className="min-w-0">
                <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
                  <PrivacySection id="introduction" title="1. Introduction">
                    <p>
                      AnimaLens is an application designed to help users
                      document, identify, and learn about animals and other
                      fauna. We respect your privacy and are committed to
                      protecting the information associated with your use of the
                      application.
                    </p>

                    <p>
                      This Privacy Policy describes what information we collect,
                      why we collect it, how it is used, and the services
                      involved in providing AnimaLens.
                    </p>
                  </PrivacySection>

                  <PrivacySection
                    id="information-we-collect"
                    title="2. Information We Collect"
                  >
                    <p>
                      Depending on how you use AnimaLens, we may collect the
                      following information:
                    </p>

                    <ul>
                      <li>Your name.</li>
                      <li>Your email address.</li>
                      <li>Profile information associated with your account.</li>
                      <li>
                        Photos that you capture or upload through the
                        application.
                      </li>
                      <li>
                        Location information associated with an animal
                        observation.
                      </li>
                      <li>
                        Animal observation information that you submit through
                        the application.
                      </li>
                    </ul>

                    <p>
                      AnimaLens does not intentionally collect device
                      information as part of the application's intended data
                      collection.
                    </p>
                  </PrivacySection>

                  <PrivacySection
                    id="how-we-use-information"
                    title="3. How We Use Information"
                  >
                    <p>
                      Information collected through AnimaLens may be used to:
                    </p>

                    <ul>
                      <li>Provide and operate the application.</li>
                      <li>Identify and manage user accounts.</li>
                      <li>Process animal observations.</li>
                      <li>Assist with animal identification.</li>
                      <li>Display observation locations.</li>
                      <li>Store and display uploaded photographs.</li>
                      <li>
                        Improve the functionality and reliability of the
                        application.
                      </li>
                    </ul>

                    <p>
                      We do not sell users' personal information to third
                      parties.
                    </p>
                  </PrivacySection>

                  <PrivacySection
                    id="photos-and-camera"
                    title="4. Photos and Camera"
                  >
                    <p>
                      AnimaLens allows users to capture photographs using their
                      device camera or upload photographs from their device.
                    </p>

                    <p>
                      Photos submitted through the application may be stored and
                      associated with the corresponding animal observation.
                      Authorized administrators may be able to view submitted
                      photographs for application management and observation
                      review purposes.
                    </p>

                    <p>
                      You should only upload photographs that you have the right
                      to submit and share through the application.
                    </p>
                  </PrivacySection>

                  <PrivacySection
                    id="location-information"
                    title="5. Location Information"
                  >
                    <p>
                      AnimaLens may request access to your device's location
                      when you create an animal observation.
                    </p>

                    <p>
                      Location information may be stored together with the
                      observation and may be displayed to users as part of the
                      observation's location information.
                    </p>

                    <p>
                      You can manage location permissions through your device
                      settings. If location access is disabled, some
                      location-based features may not work as intended.
                    </p>
                  </PrivacySection>

                  <PrivacySection
                    id="animal-observation-data"
                    title="6. Animal Observation Data"
                  >
                    <p>
                      When you submit an animal observation, the application may
                      store information associated with that observation,
                      including:
                    </p>

                    <ul>
                      <li>Animal name.</li>
                      <li>Scientific name.</li>
                      <li>Animal description.</li>
                      <li>Animal breed, when applicable.</li>
                      <li>Habitat information.</li>
                      <li>Photographs.</li>
                      <li>Observation location.</li>
                    </ul>

                    <p>
                      This information is used to provide the application's
                      animal information and observation features.
                    </p>
                  </PrivacySection>

                  <PrivacySection
                    id="artificial-intelligence"
                    title="7. Artificial Intelligence"
                  >
                    <p>
                      AnimaLens uses artificial intelligence technology to
                      assist with animal identification.
                    </p>

                    <p>
                      When you use the identification feature, an image may be
                      sent to the Gemini API for AI-assisted analysis. The
                      result is used to help identify the animal shown in the
                      submitted image.
                    </p>

                    <p>
                      AI-generated identification results may not always be
                      accurate. Users should treat AI identification as
                      assistance rather than a guaranteed scientific
                      identification.
                    </p>
                  </PrivacySection>

                  <PrivacySection id="data-storage" title="8. Data Storage">
                    <p>
                      AnimaLens uses Firebase services to store and manage
                      application data.
                    </p>

                    <ul>
                      <li>
                        <strong>Firebase Authentication</strong> is used to
                        manage user authentication and accounts.
                      </li>
                      <li>
                        <strong>Cloud Firestore</strong> is used to store
                        application and observation information.
                      </li>
                      <li>
                        <strong>Firebase Storage</strong> is used to store
                        uploaded photographs.
                      </li>
                    </ul>

                    <p>
                      Information stored through these services is subject to
                      the security and privacy practices of the respective
                      service providers.
                    </p>
                  </PrivacySection>

                  <PrivacySection
                    id="third-party-services"
                    title="9. Third-Party Services"
                  >
                    <p>
                      AnimaLens uses third-party services to provide certain
                      application features. These services may process
                      information as necessary to provide their respective
                      functionality.
                    </p>

                    <ul>
                      <li>Firebase</li>
                      <li>Google Maps API</li>
                      <li>Google Gemini API</li>
                      <li>iNaturalist</li>
                    </ul>

                    <p>
                      These services have their own privacy policies and terms
                      that govern their handling of information.
                    </p>
                  </PrivacySection>

                  <PrivacySection
                    id="information-access"
                    title="10. Information Access"
                  >
                    <p>
                      AnimaLens users can access information associated with
                      their own accounts and observations through the
                      application.
                    </p>

                    <p>
                      Authorized administrators may have access to submitted
                      observations, photographs, and related information for
                      application administration and review purposes.
                    </p>

                    <p>
                      Administrators do not use the application to modify the
                      information submitted by users.
                    </p>
                  </PrivacySection>

                  <PrivacySection id="data-security" title="11. Data Security">
                    <p>
                      We take reasonable measures to protect information handled
                      by AnimaLens and use established third-party services for
                      authentication, data storage, and other application
                      functions.
                    </p>

                    <p>
                      However, no method of electronic storage or transmission
                      can be guaranteed to be completely secure. Users should
                      also take reasonable steps to protect their account
                      credentials.
                    </p>
                  </PrivacySection>

                  <PrivacySection
                    id="data-retention"
                    title="12. Data Retention"
                  >
                    <p>
                      Information may be retained for as long as necessary to
                      provide AnimaLens services, maintain application records,
                      and support the functionality of the platform.
                    </p>

                    <p>
                      At this time, AnimaLens does not provide an in-app account
                      deletion feature. If you have questions about your
                      information or would like to request assistance regarding
                      your data, please contact us using the information
                      provided below.
                    </p>
                  </PrivacySection>

                  <PrivacySection
                    id="childrens-privacy"
                    title="13. Children's Privacy"
                  >
                    <p>
                      AnimaLens is not specifically designed to collect personal
                      information from children.
                    </p>

                    <p>
                      If you believe that a child has provided personal
                      information through the application without appropriate
                      permission, please contact us so that the matter can be
                      reviewed.
                    </p>
                  </PrivacySection>

                  <PrivacySection
                    id="changes"
                    title="14. Changes to This Privacy Policy"
                  >
                    <p>
                      We may update this Privacy Policy from time to time to
                      reflect changes to the AnimaLens application, its
                      services, or applicable requirements.
                    </p>

                    <p>
                      When changes are made, the updated policy will be posted
                      on this page and the effective date will be updated
                      accordingly.
                    </p>
                  </PrivacySection>

                  <PrivacySection id="contact" title="15. Contact Us" last>
                    <p>
                      If you have questions, concerns, or requests regarding
                      this Privacy Policy or your information, you may contact
                      the AnimaLens team using the information below.
                    </p>

                    {/* =====================================================
                        EDIT YOUR CONTACT INFORMATION HERE
                        ===================================================== */}

                    <div className="mt-6 rounded-xl border border-[#d9ead5] bg-[#f6fbf4] p-5 sm:p-6">
                      <div className="space-y-4 text-sm sm:text-base">
                        <div>
                          <p className="font-semibold text-zinc-900">
                            AnimaLens Team
                          </p>
                          <p className="mt-1 text-zinc-600">
                            AnimaLens Development Team
                          </p>
                        </div>

                        <div>
                          <p className="font-semibold text-zinc-900">Email</p>
                          <p className="mt-1 text-zinc-600">
                            kobysacen05@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </PrivacySection>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <PrivacyFooter effectiveDate={effectiveDate} />
    </div>
  );
}
