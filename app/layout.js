import "./globals.css";

export const metadata = {
  title: "Gateway Impact Lab",
  description:
    "Gateway matches high school students in the Bay Area with vetted community organizations for co-designed projects that build genuine skills and create real value for students and organizations alike.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
