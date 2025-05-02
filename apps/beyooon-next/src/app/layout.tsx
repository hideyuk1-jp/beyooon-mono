import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'beyooon', template: '%s | beyooon' },
  description: 'Web開発を中心に活動するデジタルなモノづくりが好きなエンジニア',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
