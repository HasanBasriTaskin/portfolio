import SkillCard from '../SkillCard';

export default function SkillsSection() {
  const skills = [
    { title: "ASP.NET Core", level: "İleri Seviye" },
    { title: "Next.js", level: "İleri Seviye" },
    { title: "React", level: "İleri Seviye" },
    { title: "Java", level: "İleri Seviye" },
    { title: "JavaScript", level: "İleri Seviye" },
    { title: "C#", level: "İleri Seviye" },
    { title: "C/C++", level: "Orta Seviye" },
    { title: "SQL", level: "Orta Seviye" },
    { title: "TypeScript", level: "Orta Seviye" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Yeteneklerim</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
} 