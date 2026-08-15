import './globals.css';

export const metadata = {
  title: 'Aleckxis Kate | Front-End Engineer',
  description:
    'Computer Engineering student specializing in Software Development. Front-End Engineer portfolio.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
