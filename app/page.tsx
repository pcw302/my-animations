import gallery from "../data/gallery.json"; 
import "../app/globals.css";

export default function Home() {
  return (
    <main className="font-sans p-8 max-w-5xl mx-auto min-h-screen relative overflow-hidden text-white bg-black">
      <div className="stars"></div>
      <div className="twinkling"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center mb-6">☀️ Parker's Animation Locker ★</h1>
        <p className="text-center text-gray-200 mb-6">
          CSCI 417 Animations!
        </p>

        <div className="text-center mb-12">
          <a
            href="#about-me"
            className="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition"
          >
            About Me
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {gallery.map((item, index) => (
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
                <h2 className="text-xl font-semibold mb-2 text-white">{item.title}</h2>
                <p className="text-gray-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <section id="about-me" className="text-center text-gray-200 mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-2">
            I’m Parker White, a data science major and cs minor at the college of William and Mary.
            I have have never been artistically inclined, but I am looking forward to filling this page 
            throughout the semester!
          </p>
        </section>
      </div>
    </main>
  );
}
