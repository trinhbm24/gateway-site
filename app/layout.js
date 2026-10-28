import "./globals.css";

export const metadata = {
  title: "Gateway Impact Lab · Long Trinh",
  description:
    "Research on how high school service projects can be co-designed with community organizations so that students learn something real and organizations get real work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
