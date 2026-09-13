import Hero from "../sections/Hero";
import FeaturedMusic from "../sections/FeaturedMusic";
import FeaturedArtists from "../sections/FeaturedArtists";
import MusicGenres from "../sections/MusicGenres";
import DiscoverMusic from "../sections/DiscoverMusic";

function Home() {
  return (
    <main>
      <Hero />
      <FeaturedMusic />
      <FeaturedArtists />
      <MusicGenres />
      <DiscoverMusic />
    </main>
  );
}

export default Home;
