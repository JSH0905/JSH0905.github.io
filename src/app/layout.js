import "./globals.css";

export const metadata = {
  title: "정성훈 - Backend Developer",
  description: "백엔드 개발자 포트폴리오",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
