import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Где дешевле жить в Казахстане",
  description: "Сравнение цен, топлива, кредитов и расчет — хватит ли зарплаты",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
