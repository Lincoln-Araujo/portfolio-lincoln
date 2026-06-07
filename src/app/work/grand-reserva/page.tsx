import GrandReservaHero from '@/sections/work/GrandReserva/GrandReservaHero/GrandReservaHero';
import GrandReservaContext from '@/sections/work/GrandReserva/GrandReservaContext/GrandReservaContext';
import GrandReservaRole from '@/sections/work/GrandReserva/GrandReservaRole/GrandReservaRole';
import GrandReservaChallenge from '@/sections/work/GrandReserva/GrandReservaChallenge/GrandReservaChallenge';
import GrandReservaHighlights from '@/sections/work/GrandReserva/GrandReservaHighlights/GrandReservaHighlights';
import GrandReservaReflection from '@/sections/work/GrandReserva/GrandReservaReflection/GrandReservaReflection';
import GrandReservaClosing from '@/sections/work/GrandReserva/GrandReservaClosing/GrandReservaClosing';

export default function GrandReservaPage() {
  return (
    <main id="main-content">
      <GrandReservaHero />
      <GrandReservaContext />
      <GrandReservaRole />
      <GrandReservaChallenge />
      <GrandReservaHighlights />
      <GrandReservaReflection />
      <GrandReservaClosing />
    </main>
  );
}