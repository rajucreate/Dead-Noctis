import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { IntroSequence } from '@/components/animation/IntroSequence';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-void text-ctf-text font-body selection:bg-accent-green selection:text-background-void relative overflow-x-hidden">
      <IntroSequence>
        {/* Fixed Header / Navbar */}
        <Navbar />

        {/* Main Landing Hero Section */}
        <main id="main-content">
          <HeroSection />
        </main>
      </IntroSequence>
    </div>
  );
};

export default App;
