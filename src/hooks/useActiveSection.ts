import { useState, useEffect } from 'react';

/**
 * useActiveSection:
 * Uses an IntersectionObserver with rootMargin: "-50% 0px -50% 0px" to detect
 * which section is currently crossing the vertical middle of the viewport.
 * Automatically targets all DOM elements with the [data-bg] attribute.
 *
 * Defaults to "hero" on load.
 * Keeps the last section active when scrolled to the very bottom of the page.
 */
export function useActiveSection(defaultSection: string = 'hero'): string {
  const [activeSection, setActiveSection] = useState<string>(defaultSection);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-bg]'));
    if (sections.length === 0) return;

    // IntersectionObserver detecting when a section crosses the vertical center of the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bg = (entry.target as HTMLElement).dataset.bg;
            if (bg) {
              setActiveSection(bg);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Handle scroll edge cases:
    // - Very top of page (scrollY <= 50) defaults to first section ("hero")
    // - Very bottom of page defaults to last section (e.g. "faq" or "register")
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY <= 50) {
        const firstBg = sections[0]?.dataset.bg || 'hero';
        setActiveSection(firstBg);
      } else if (windowHeight + scrollY >= documentHeight - 50) {
        const lastBg = sections[sections.length - 1]?.dataset.bg;
        if (lastBg) {
          setActiveSection(lastBg);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check in case page was reloaded at a scroll position
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
}

export default useActiveSection;
