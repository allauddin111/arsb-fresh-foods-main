import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to all elements matching `selector`
 * inside the given container (defaults to document). When an element
 * enters the viewport it gains the `revealed` class, which pairs with
 * the `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale` CSS
 * utilities defined in styles.css to animate it in.
 *
 * Usage:
 *   const ref = useScrollReveal<HTMLDivElement>();
 *   return <div ref={ref}>...</div>
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  selector = "[class*='reveal']",
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current ?? document;
    const targets = Array.from(
      root instanceof HTMLElement
        ? root.querySelectorAll(selector)
        : document.querySelectorAll(selector)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px", ...options }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, options]);

  return ref;
}
