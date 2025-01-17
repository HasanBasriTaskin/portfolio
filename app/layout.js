import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata = {
  title: "Hasan Basri Taşkın - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${geist.variable} font-sans antialiased`}>
        <ThemeProvider>
          <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-end h-16">
                <div className="flex items-center space-x-8">
                  <a href="#" className="hover:text-blue-600 transition">
                    Ana Sayfa
                  </a>
                  <a href="#skills" className="hover:text-blue-600 transition">
                    Yetenekler
                  </a>
                  <a href="#projects" className="hover:text-blue-600 transition">
                    Projeler
                  </a>
                  <a href="#contact" className="hover:text-blue-600 transition">
                    İletişim
                  </a>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>
          {children}
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 text-center">
              <div className="flex justify-center space-x-6 mb-8">
                <a 
                  href="https://www.linkedin.com/in/hasan-basri-ta%C5%9Fk%C4%B1n/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/HasanBasriTaskin" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  GitHub
                </a>
              </div>
              <p className="mb-2">&copy; {new Date().getFullYear()} Hasan Basri Taşkın. Tüm hakları saklıdır.</p>
              <p className="text-sm text-gray-400 italic">❤️ Doğan sevgisiyle hazırlandı</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
