// app/page.js (Server Component – can have metadata)
export const metadata = {
  title: "Inter IIT Sports Meet 2025",
  description:
    "The official website for Inter IIT Sports Meet 2025. Explore events, results, schedules, and more.",
  openGraph: {
    title: "Inter IIT Sports Meet 2025",
    description:
    "The official Inter IIT Sports Meet 2025 website with schedules, results, and announcements.",
    url: "https://interiitsports.com",
    siteName: "Inter IIT Sports Meet",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Inter IIT Sports Meet 2025 Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

import Home from "../Components/Home/HomePage";

export default function HomePage() {
  return <Home />;
}
