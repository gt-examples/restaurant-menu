import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GTProvider } from "gt-next";
import { getLocale } from "gt-next/server";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const titles: Record<string, string> = {
  en: "Restaurant Menu | GT",
  es: "Menú del Restaurante | GT",
  fr: "Menu du Restaurant | GT",
  ja: "レストランメニュー | GT",
  zh: "餐厅菜单 | GT",
};

const descriptions: Record<string, string> = {
  en: "A multilingual restaurant menu built with gt-next, demonstrating Currency, Num, Branch, and T components",
  es: "Un menú de restaurante multilingüe creado con gt-next, que demuestra los componentes Currency, Num, Branch y T",
  fr: "Un menu de restaurant multilingue créé avec gt-next, démontrant les composants Currency, Num, Branch et T",
  ja: "gt-nextで構築された多言語レストランメニュー。Currency、Num、Branch、Tコンポーネントのデモ",
  zh: "使用gt-next构建的多语言餐厅菜单，展示Currency、Num、Branch和T组件",
};

const locales = ["en", "es", "fr", "ja", "zh"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const url = `https://restaurant-menu.generaltranslation.dev/${locale}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Restaurant Menu",
      locale,
      type: "website",
    },
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://restaurant-menu.generaltranslation.dev/${l}`])
      ),
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} antialiased`}>
        <GTProvider>{children}</GTProvider>
      </body>
    </html>
  );
}
