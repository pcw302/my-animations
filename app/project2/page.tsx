import gallery2 from "../../data/gallery2.json";
import "../../app/globals.css";

export default function Project2() {
  return (
    <main className="font-sans p-8 max-w-5xl mx-auto min-h-screen relative overflow-hidden text-white bg-black">
      

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center mb-6">
          Treasure Chest Modeling Project
        </h1>
        <p className="text-center text-gray-200 mb-6">
          Project 2 Page.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {gallery2.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/80 shadow-lg rounded-xl overflow-hidden border border-gray-700 hover:shadow-2xl transition-shadow"
            >
              <div className="aspect-video bg-black flex items-center justify-center">
                {item.type === "video" ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${item.youtubeId}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                ) : (
                  <img
                    src={item.file}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h2>
                <p className="text-gray-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <section id="about-project" className="text-center text-gray-200 mb-12">
          <h2 className="text-3xl font-bold mb-4">References</h2>
          <p className="mb-2">
            https://architextures.org/textures/799 -{'>'}for the metal textures 
            <br />
            https://www.freepik.com -{'>'}for the wood texture
          </p>
        </section>
      </div>
    </main>
  );
}
