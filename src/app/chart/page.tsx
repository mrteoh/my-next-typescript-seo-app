import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chart Page | MyApp",
  description: "View detailed financial charts and analytics on this page.",
  keywords: ["chart", "financial", "analytics", "dashboard"],
  openGraph: {
    title: "Chart Page | MyApp",
    description: "View detailed financial charts and analytics on this page.",
    url: "https://myapp.com/chart",
    siteName: "MyApp",
    images: [
      {
        url: "https://myapp.com/og-chart.png",
        width: 1200,
        height: 630,
        alt: "Chart Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ChartPage() {
  return (
    <main>
      <h1>Chart Page</h1>
      <p>This is the chart route with SEO metadata.</p>
    </main>
  );
}
