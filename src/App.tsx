import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import FeaturedMusic from "./sections/FeaturedMusic";
import FeaturedArtists from "./sections/FeaturedArtists";
import MusicGenres from "./sections/MusicGenres";
import DiscoverMusic from "./sections/DiscoverMusic";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <FeaturedMusic />
        <FeaturedArtists />
        <MusicGenres />
        <DiscoverMusic />
      </main>
      <Footer />
    </div>
  );
}

export default App;