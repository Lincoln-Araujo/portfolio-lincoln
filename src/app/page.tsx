import HomeHero from '@/sections/home/HomeHero/HomeHero';
import SelectedWork from '@/sections/home/SelectedWork/SelectedWork';
import Approach from '@/sections/home/Approach/Approach';
import AboutPreview from '@/sections/home/AboutPreview/AboutPreview';

export default function HomePage() {
  return (
    <main id="main-content">
      <HomeHero />
      <SelectedWork />
      <Approach />
      <AboutPreview />
    </main>
  );
}