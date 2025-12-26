import skillsData from './data/skills.json';
import projectsData from './data/projects.json';
import resumeData from './data/resume.json';
import Image from 'next/image';

const homepageProjects = projectsData.projects.filter(
  (project) => project.homepage
);
const randomProject =
  homepageProjects[Math.floor(Math.random() * homepageProjects.length)];

export default function Home() {
  const skills = skillsData.skills;
  const skillElements = [];

  const bio = resumeData.bio;
  const contacts = resumeData.contacts;

  for (let i = 0; i < skills.length; i += 2) {
    const skill1 = skills[i];
    const skill2 = skills[i + 1];

    skillElements.push(
      <div key={i} className="flex flex-col sm:flex-row gap-2 mb-3">
        <div className="flex items-center gap-2 p-2 border border-zinc-700 rounded flex-1 min-w-0">
          <Image
            src={skill1.imagePath}
            alt={skill1.name}
            width={24}
            height={24}
            className="object-contain shrink-0"
          />
          <span className="text-zinc-400 truncate">{skill1.name}</span>
        </div>
        {skill2 && (
          <div className="flex items-center gap-2 p-2 border border-zinc-700 rounded flex-1 min-w-0">
            <Image
              src={skill2.imagePath}
              alt={skill2.name}
              width={24}
              height={24}
              className="object-contain shrink-0"
            />
            <span className="text-zinc-400 truncate">{skill2.name}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Intro Column - 4/12 */}
          <div className="md:col-span-4 bg-zinc-900 rounded-lg p-6 border border-zinc-800 space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {resumeData.name}
              </h2>
              <div className="flex flex-wrap gap-2 mb-3">
                {resumeData.titles.map((title) => (
                  <span
                    key={title}
                    className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300"
                  >
                    {title}
                  </span>
                ))}
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">{bio}</p>
            </div>
            <div className="border-t border-zinc-800 pt-3 text-sm text-zinc-300 space-y-1">
              <div>
                <span className="font-medium text-zinc-200">Phone: </span>
                <span>{contacts.phone}</span>
              </div>
              <div>
                <span className="font-medium text-zinc-200">Email: </span>
                <a
                  href={`mailto:${contacts.email}`}
                  className="text-zinc-100 hover:underline"
                >
                  {contacts.email}
                </a>
              </div>
              <div>
                <span className="font-medium text-zinc-200">GitHub: </span>
                <a
                  href={`https://github.com/${contacts.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-100 hover:underline"
                >
                  {contacts.github}
                </a>
              </div>
            </div>
          </div>

          {/* Project Column - 5/12 */}
          <div className="md:col-span-5 bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-4">Project</h2>
            {randomProject && (
              <div className="space-y-4">
                {randomProject.header_img_url && (
                  <div className="overflow-hidden rounded-lg border border-zinc-800">
                    <Image
                      src={randomProject.header_img_url}
                      alt={randomProject.name}
                      width={600}
                      height={300}
                      className="h-48 w-full object-cover"
                      priority
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {randomProject.name}
                </h3>
                <p className="text-zinc-400 mb-3">
                  {randomProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {randomProject.tech_image_url?.map(
                    (techImage: string, index: number) => {
                      const techName =
                        techImage
                          .split('/')
                          .pop()
                          ?.split('.')[0]
                          ?.replace(/-/g, ' ') ?? 'Tech';
                      return (
                        <div
                          key={`${randomProject.slug}-${index}`}
                          className="flex items-center gap-2 p-2 border border-zinc-700 rounded"
                        >
                          <Image
                            src={techImage}
                            alt={techName}
                            width={24}
                            height={24}
                            className="object-contain shrink-0"
                          />
                          <span className="text-zinc-300 text-sm capitalize">
                            {techName}
                          </span>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Skills Column - 3/12 */}
          <div className="md:col-span-3 bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
            {skillElements}
          </div>
        </div>
      </div>
    </div>
  );
}
