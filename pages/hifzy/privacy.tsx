import Head from "next/head";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const canonicalUrl = siteUrl
  ? `${siteUrl}/hifzy/privacy`
  : "/hifzy/privacy";

export default function HifzyPrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Hifzy</title>
        <meta
          name="description"
          content="Learn how Hifzy handles Quran memorization progress, recordings, reminders, and other app data."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacy Policy | Hifzy" />
        <meta
          property="og:description"
          content="Privacy information for the Hifzy Quran memorization and revision app."
        />
        <meta property="og:url" content={canonicalUrl} />
      </Head>

      <main
        className={`${roboto.className} min-h-screen bg-gray-900 text-zinc-100`}
      >
        <header className="border-b border-white/10 bg-gray-950">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 sm:px-8">
            <Link
              href="/"
              className="text-lg font-semibold transition-colors hover:text-amber-300"
            >
              <span className="text-amber-400">{"{"}</span>
              ANAS HAMDI
              <span className="text-amber-400">{"}"}</span>
            </Link>
            <span className="text-sm text-zinc-400">Hifzy</span>
          </div>
        </header>

        <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Hifzy · com.hifzy.tracker
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              Effective August 3, 2026
            </p>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Hifzy helps people track Quran memorization and revision. The app
              is designed to keep your personal app data on your device. It does
              not require an account, show advertisements, sell personal
              information, or use analytics or behavioral tracking.
            </p>
          </div>

          <PolicySection title="Data stored on your device">
            <p>
              Your memorization progress, revision history, preferences, and
              recitation recordings are stored locally on your device. Hifzy
              does not upload this information to the app developer.
            </p>
          </PolicySection>

          <PolicySection title="Microphone and recitation recordings">
            <p>
              Hifzy asks for microphone access only when you choose to record
              your recitation. Recordings are for your private playback and
              self-review. They remain on your device and are not uploaded or
              shared by Hifzy.
            </p>
          </PolicySection>

          <PolicySection title="Notifications">
            <p>
              If you allow notifications, Hifzy uses that permission to show
              local practice reminders. You can change notification permission
              in your device settings.
            </p>
          </PolicySection>

          <PolicySection title="External Quran content services">
            <p>
              Hifzy connects to external Quran content providers to download
              Quran text, Quran page images, and recitation audio. These
              downloads require an internet connection. The downloaded content
              is provided by those independent services, whose own terms and
              privacy practices may apply when your device connects to them.
            </p>
          </PolicySection>

          <PolicySection title="Children’s privacy">
            <p>
              Hifzy may be used by children and adults. It does not require an
              account and does not include advertising, analytics, or behavioral
              tracking. A parent or guardian can remove a child’s locally stored
              Hifzy data using the deletion choices described below.
            </p>
          </PolicySection>

          <PolicySection title="Deleting your data">
            <p>
              You can delete information stored by Hifzy using the reset or
              delete-data option inside the app. Uninstalling Hifzy also removes
              the app and its locally stored data from your device, subject to
              your device’s normal backup and restore behavior.
            </p>
          </PolicySection>

          <PolicySection title="Security">
            <p>
              Keeping Hifzy data on your device limits its transfer through the
              app. You are responsible for protecting access to your device.
              No storage method can be guaranteed to be completely secure.
            </p>
          </PolicySection>

          <PolicySection title="Changes to this policy">
            <p>
              This policy may be updated if Hifzy’s features or privacy
              practices change. The updated policy will be posted on this page
              with a new effective date.
            </p>
          </PolicySection>

          <PolicySection title="Contact">
            <p>
              Questions about Hifzy or this policy can be sent to{" "}
              <a
                href="mailto:anas-el-tom@live.com"
                className="break-all text-amber-300 underline decoration-amber-300/40 underline-offset-4 hover:text-amber-200"
              >
                anas-el-tom@live.com
              </a>
              .
            </p>
          </PolicySection>
        </article>

        <footer className="border-t border-white/10 bg-gray-950">
          <div className="mx-auto max-w-3xl px-5 py-8 text-sm text-zinc-500 sm:px-8">
            © {new Date().getFullYear()} Hifzy. Privacy information for the
            Android app com.hifzy.tracker.
          </div>
        </footer>
      </main>
    </>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/10 py-8">
      <h2 className="mb-4 text-xl font-semibold text-white sm:text-2xl">
        {title}
      </h2>
      <div className="text-base leading-8 text-zinc-300">{children}</div>
    </section>
  );
}
