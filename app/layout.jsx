import "./globals.css";

export const metadata = {
  title: "Arthur Novara · Développeur Salesforce & Fullstack",
  description:
    "Portfolio d'Arthur Novara, développeur Salesforce et Fullstack Java/React basé à Montpellier.",
  openGraph: {
    title: "Arthur Novara · Portfolio",
    description: "Développeur Salesforce & Fullstack Java/React",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
