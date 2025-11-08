import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layouts/frontend/Header";
import Footer from "@/components/layouts/frontend/Footer";
import { Oswald, Rajdhani } from "next/font/google";
import LoadingOverlay from "@/components/loading-overlay";

// Explicitly declare the weights to avoid missing-weight errors and allow
// Next's font optimizer to generate the correct CSS assets.
const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-head",
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${oswald.variable} ${rajdhani.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        {/* Global loading overlay shown on initial page load */}
        <LoadingOverlay />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header /> {/* Public header */}
          <div className="frontend-wrapper">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
