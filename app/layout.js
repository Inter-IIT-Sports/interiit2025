import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Inter IIT Sports Meet",
  description:
    "The Inter IIT Sports Meet is the premier annual sporting event of all Indian Institutes of Technology, uniting athletes across IITs in a celebration of competition, teamwork, and excellence.",
  keywords:
    "Inter IIT Sports Meet, IIT Sports, Inter IITM 2025, Indian Institute of Technology sports, IIT tournament, student athletics, sports championship",
  metadataBase: new URL("https://interiitsports.com"),
  openGraph: {
    title: "Inter IIT Sports Meet",
    description:
      "Annual Inter IIT Sports Meet – premier sporting championship uniting all IITs.",
    url: "https://interiitsports.com",
    siteName: "Inter IIT Sports Meet",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Inter IIT Sports Meet Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inter IIT Sports Meet",
    description:
      "The largest inter-collegiate sports event among IITs – fostering sportsmanship, excellence, and unity.",
    images: ["/android-chrome-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  icons: {
    icon: "/android-chrome-512x512.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsEvent",
              name: "Inter IIT Sports Meet",
              description:
                "The annual Inter IIT Sports Meet, premier sporting event uniting athletes across all Indian Institutes of Technology.",
              startDate: "2025-12-10", // example date – update when confirmed
              endDate: "2025-12-20",
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              location: {
                "@type": "Place",
                name: "IIT Madras",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Chennai",
                  addressRegion: "Tamil Nadu",
                  addressCountry: "IN",
                },
              },
              organizer: {
                "@type": "CollegeOrUniversity",
                name: "Indian Institute of Technology",
                url: "https://www.iitm.ac.in",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
