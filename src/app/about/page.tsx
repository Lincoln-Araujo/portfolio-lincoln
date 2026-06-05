import AboutHero from '@/sections/about/AboutHero/AboutHero';
import Journey from '@/sections/about/Journey/Journey';
import HowIThink from '@/sections/about/HowIThink/HowIThink';
import SkillsCapabilities from '@/sections/about/SkillsCapabilities/SkillsCapabilities';
import Education from '@/sections/about/Education/Education';
import ResumeBlock from '@/sections/about/ResumeBlock/ResumeBlock';
import ContactBlock from '@/sections/about/ContactBlock/ContactBlock';

export default function AboutPage() {
  return (
    <main id="main-content">
      <AboutHero />
      <Journey />
      <HowIThink />
      <SkillsCapabilities />
      <Education />
      <ResumeBlock />
      <ContactBlock />
    </main>
  );
}