

  const cursorDot = document.querySelector(".cursor-dot");
  const cursorRing = document.querySelector(".cursor-ring");

  window.addEventListener("mousemove", (e) => {
    // Fast-following dot
    gsap.set(cursorDot, {
      x: e.clientX,
      y: e.clientY
    });

    // Smooth-following ring
    gsap.to(cursorRing, {
      duration: 0.4,
      x: e.clientX,
      y: e.clientY,
      ease: "power2.out"
    });
  });

