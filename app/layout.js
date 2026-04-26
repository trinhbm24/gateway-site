import "./globals.css";

export const metadata = {
  title: "Gateway Impact Lab",
  description:
    "International school service learning is broken. We rebuilt it. Gateway matches students in Ho Chi Minh City with vetted community partners for eight-week, co-designed projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
