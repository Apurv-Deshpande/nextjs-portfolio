import resumeData from '../data/resume.json';

export default function Resume() {
  const { bio, contacts, hobbies, schools } = resumeData;

  return (
    <div className="min-h-screen bg-zinc-950 py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-white mb-8">Resume</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column 1/3 */}
          <div className="md:col-span-1 bg-white rounded-lg p-6 border border-zinc-200 space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-zinc-900 mb-2">Bio</h2>
              <p className="text-zinc-700 text-sm leading-relaxed">{bio}</p>
            </div>
            <div className="border-t border-zinc-200 pt-3 text-sm text-zinc-700 space-y-1">
              <div>
                <span className="font-medium text-zinc-900">Phone: </span>
                <span>{contacts.phone}</span>
              </div>
              <div>
                <span className="font-medium text-zinc-900">Email: </span>
                <a
                  href={`mailto:${contacts.email}`}
                  className="text-zinc-900 hover:underline"
                >
                  {contacts.email}
                </a>
              </div>
              <div>
                <span className="font-medium text-zinc-900">GitHub: </span>
                <a
                  href={`https://github.com/${contacts.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 hover:underline"
                >
                  {contacts.github}
                </a>
              </div>
            </div>
            <div className="border-t border-zinc-200 pt-3">
              <h3 className="text-sm font-semibold text-zinc-900 mb-2">
                Interests
              </h3>
              <ul className="list-disc list-inside text-zinc-700 text-sm space-y-1">
                {hobbies.map((hobby) => (
                  <li key={hobby}>{hobby}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column 2/3 */}
          <div className="md:col-span-2 bg-white space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900">Education</h2>
            {schools.map((school) => (
              <div
                key={school.name}
                className="bg rounded-lg p-6 border border-zinc-200 space-y-3"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {school.name}
                    </h3>
                    <p className="text-sm text-zinc-600">{school.location}</p>
                  </div>
                </div>
                {school.major1 && (
                  <p className="text-sm font-medium text-zinc-800">
                    {school.major1}
                  </p>
                )}
                {school.coursework && school.coursework.length > 0 && (
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-zinc-700">
                      Selected coursework:
                    </p>
                    <ul className="list-disc list-inside text-xs text-zinc-700 space-y-1">
                      {school.coursework.map((course) => (
                        <li key={course.title}>
                          <span className="font-medium text-zinc-900">
                            {course.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
