import RadioMecHero from '@/sections/work/RadioMecNacional/RadioMecHero/RadioMecHero';
import RadioMecContext from '@/sections/work/RadioMecNacional/RadioMecContext/RadioMecContext';
import RadioMecRole from '@/sections/work/RadioMecNacional/RadioMecRole/RadioMecRole';
import RadioMecChallenge from '@/sections/work/RadioMecNacional/RadioMecChallenge/RadioMecChallenge';
import RadioMecApproach from '@/sections/work/RadioMecNacional/RadioMecApproach/RadioMecApproach';
import RadioMecHighlights from '@/sections/work/RadioMecNacional/RadioMecHighlights/RadioMecHighlights';
import RadioMecReflection from '@/sections/work/RadioMecNacional/RadioMecReflection/RadioMecReflection';
import RadioMecNextProject from '@/sections/work/RadioMecNacional/RadioMecNextProject/RadioMecNextProject';

export default function RadioMecNacionalPage() {
  return (
    <main id="main-content">
      <RadioMecHero />
      <RadioMecContext />
      <RadioMecRole />
      <RadioMecChallenge />
      <RadioMecApproach />
      <RadioMecHighlights />
      <RadioMecReflection />
      <RadioMecNextProject />
    </main>
  );
}