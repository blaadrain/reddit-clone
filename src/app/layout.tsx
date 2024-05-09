import Navbar from "@/components/Navbar";
import ReactQueryProvider from "@/components/providers/QueryClientProvider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Breadit",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "light bg-white text-slate-900 antialiased",
        font.className,
      )}
    >
      <body className="min-h-screen bg-slate-50 pt-12">
        <ReactQueryProvider>
          {/* @ts-expect-error server component */}
          <Navbar />

          {authModal}

          <main className="container mx-auto h-full max-w-7xl pt-12">
            {children}
          </main>

          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
