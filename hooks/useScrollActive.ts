import { useState, useEffect } from "react";

function useScrollActive(initialValue: string, offset: number = 160) {
  const [activeSection, setActiveSection] = useState(initialValue);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - offset &&
          scrollPosition < sectionTop + sectionHeight - offset
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialValue, offset]);

  return activeSection;
}

export default useScrollActive;
