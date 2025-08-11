import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { workerStories } from "@/data/workerStories";
import { Button } from "@/components/ui/button";

const setPageMeta = (title: string, description: string, canonical?: string) => {
  document.title = title;

  let desc = document.querySelector('meta[name="description"]');
  if (!desc) {
    desc = document.createElement("meta");
    desc.setAttribute("name", "description");
    document.head.appendChild(desc);
  }
  desc.setAttribute("content", description);

  if (canonical) {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);
  }
};

export default function StoryPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const story = workerStories.find((w) => w.qrCodeId === id);

  useEffect(() => {
    const base = window.location.origin;
    if (story) {
      setPageMeta(
        `${story.name} – ${story.role} | Worker Story`,
        story.story.slice(0, 150),
        `${base}/story/${story.qrCodeId}`
      );
    } else {
      setPageMeta("Story Not Found", "The requested story could not be found.");
    }
  }, [story]);

  if (!story) {
    return (
      <main className="min-h-screen section-padding bg-gradient-to-br from-federal-blue via-federal-blue to-oxford-blue text-eggshell">
        <div className="container-width text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Story Not Found</h1>
          <p className="text-glaucous mb-8">The story you are looking for doesn’t exist or has been moved.</p>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-federal-blue via-federal-blue to-oxford-blue">
      <section className="section-padding">
        <div className="container-width">
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-eggshell mb-2">{story.name}</h1>
            <p className="text-xl text-glaucous italic">{story.role}</p>
          </header>

          <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-oxford-blue/50 border border-glaucous/20 rounded-xl p-6">
              <h2 className="sr-only">Video Story</h2>
              {story.videoUrl && story.videoUrl !== "#" ? (
                <div className="aspect-video w-full">
                  <iframe
                    src={story.videoUrl}
                    title={`${story.name} – ${story.role}`}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="bg-federal-blue rounded-lg p-8 text-center">
                  <p className="text-glaucous">Video coming soon</p>
                </div>
              )}
            </div>

            <div className="bg-oxford-blue/50 border border-glaucous/20 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-eggshell mb-4">{story.name}’s Journey</h2>
              <p className="text-glaucous leading-relaxed text-lg">{story.story}</p>
              <div className="mt-8">
                <Button onClick={() => navigate(-1)}>Back</Button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
