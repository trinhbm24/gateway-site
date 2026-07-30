import "./globals.css";

export const metadata = {
  title: "Gateway Impact Lab",
  description:
    "Gateway matches high school students in the Bay Area with vetted community organizations for co-designed projects that produce real outcomes — for students, organizations, and college applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
