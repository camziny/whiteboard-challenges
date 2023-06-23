import React, { useRef, useEffect } from "react";

const App = () => {
  const navbarRef = useRef(null);
  const sectionsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionsRef.current.children;
      const activeSection = Array.from(sections).find((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        return scrollY >= sectionTop && scrollY < sectionTop + sectionHeight;
      });

      if (activeSection) {
        const activeLink = navbarRef.current.querySelector(
          `a[href="#${activeSection.id}"]`
        );
        activeLink.classList.add("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav ref={navbarRef}>
        <a href="#section-1">Section 1</a>
        <a href="#section-2">Section 2</a>
        <a href="#section-3">Section 3</a>
      </nav>

      <main ref={sectionsRef}>
        <section id="section-1">Section 1</section>
        <section id="section-2">Section 2</section>
        <section id="section-3">Section 3</section>
      </main>
    </>
  );
};

export default App;
