import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <Image
        src="/profile-photo.jpg"
        alt="Profile Photo"
        width={150}
        height={150}
        className="rounded-full mb-8"
        priority
      />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Merhaba, Ben <span className="text-blue-600">Hasan Basri Taşkın</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
        Full Stack Developer
      </p>
      <div className="flex gap-4">
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          İletişime Geç
        </a>
        <a
          href="#projects"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
        >
          Projelerimi Gör
        </a>
      </div>
    </section>
  );
} 