import EBCHero from '@/sections/work/EBC/EBCHero/EBCHero';
import EBCContext from '@/sections/work/EBC/EBCContext/EBCContext';
import EBCRole from '@/sections/work/EBC/EBCRole/EBCRole';
import EBCChallenge from '@/sections/work/EBC/EBCChallenge/EBCChallenge';
import EBCHighlights from '@/sections/work/EBC/EBCHighlights/EBCHighlights';
import EBCReflection from '@/sections/work/EBC/EBCReflection/EBCReflection';
import EBCNextProject from '@/sections/work/EBC/EBCNextProject/EBCNextProject';

export default function EBCPage() {
  return (
    <main id="main-content">
      <EBCHero />
      <EBCContext />
      <EBCRole />
      <EBCChallenge />
      <EBCHighlights />
      <EBCReflection />
      <EBCNextProject />
    </main>
  );
}