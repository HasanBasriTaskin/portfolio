import ProjectCard from '../ProjectCard';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Sitesi",
      description: "Next.js ve Tailwind CSS kullanarak geliştirdiğim kişisel portfolio sitesi. Modern tasarım ve dark mode desteği ile birlikte responsive yapıda geliştirildi.",
      technologies: ["Next.js", "Tailwind CSS", "React"],
      imageUrl: "/portfolio-site2.png",
      projectUrl: "#"
    },
    {
      title: "Yakında",
      description: "Yeni projeler üzerinde çalışıyorum, yakında burada olacaklar!",
      technologies: ["Coming Soon"],
      imageUrl: "/comingsoon.png",
      projectUrl: "#"
    },
    {
      title: "Yakında",
      description: "Yeni projeler üzerinde çalışıyorum, yakında burada olacaklar!",
      technologies: ["Coming Soon"],
      imageUrl: "/comingsoon.png",
      projectUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projelerim</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
} 