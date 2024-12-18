import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "What happened this year?",
	description: "Reflect on the past year and think about next year with a series of prompts.",
	openGraph: {
		title: "What happened this year?",
		description: "Reflect on the past year and think about next year with a series of prompts.",
		type: "website",
		locale: "en_US",
		url: "https://sabaimran.github.io/this-year/",
		siteName: "This Year",
		images: [
			{
				url: "https://sabaimran.github.io/this-year/cover.png",
				width: 800,
				height: 600,
				alt: "This Year",
			},
		]
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link href="https://fonts.googleapis.com/css2?family=Corben:wght@400;700&family=Uchen&display=swap" rel="stylesheet"></link>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
