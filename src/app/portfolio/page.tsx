import projectsData from '../data/projects.json';
import Image from 'next/image';

export default function Portfolio() {
  const projects = projectsData.projects;

  return (
    <div className="min-h-screen bg-zinc-950 py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-white mb-8">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden flex flex-col"
            >
              {project.header_img_url && (
                <Image
                  src={project.header_img_url}
                  alt={project.name}
                  width={600}
                  height={300}
                  className="h-40 w-full object-cover"
                />
              )}
              <div className="p-4 space-y-2 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold text-white">
                  {project.name}
                </h2>
                <p className="text-zinc-400 text-sm flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech_image_url?.map(
                    (techImage: string, index: number) => {
                      const techName =
                        techImage
                          .split('/')
                          .pop()
                          ?.split('.')[0]
                          ?.replace(/-/g, ' ') ?? 'Tech';
                      return (
                        <div
                          key={`${project.slug}-${index}`}
                          className="flex items-center gap-1 px-2 py-1 border border-zinc-700 rounded"
                        >
                          <Image
                            src={techImage}
                            alt={techName}
                            width={18}
                            height={18}
                            className="object-contain"
                          />
                          <span className="text-xs text-zinc-300 capitalize">
                            {techName}
                          </span>
                        </div>
                      );
                    }
                  )}
                </div>
                {project.github_url && (
                  <div className="mt-3">
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                    >
                      <Image
                        src="/github_light.png"
                        alt="GitHub"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      <span className="text-sm">View on GitHub</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
