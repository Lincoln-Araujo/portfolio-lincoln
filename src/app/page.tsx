import HomeHero from '@/sections/home/HomeHero/HomeHero';
import SelectedWork from '@/sections/home/SelectedWork/SelectedWork';
import Approach from '@/sections/home/Approach/Approach';

export default function HomePage() {
  return (
    <main id="main-content">
      <HomeHero />
      <SelectedWork />
      <Approach />
    </main>
  );
}