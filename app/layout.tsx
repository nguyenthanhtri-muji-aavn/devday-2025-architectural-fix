import { Suspense } from "react";
import "./global.scss";
import { Orbitron, Outfit, Quicksand} from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Labubu NFT",
  description:
    "A sample Next.js app showing dynamic routing and intercepting routing with modals as a route.",
};

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose the weights you need
  variable: '--font-orbitron',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose the weights you need
  variable: '--font-quicksand',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose the weights you need
  variable: '--font-outfit',
});

export default function RootLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`${orbitron.variable} ${outfit.variable} ${quicksand.variable}`}>
	  
        <div className="body">
		<Analytics />
          <Suspense>
            {props.children}
          </Suspense>
        </div>
        <div id="modal-root" />      
      </body>
    </html>
  );
}

