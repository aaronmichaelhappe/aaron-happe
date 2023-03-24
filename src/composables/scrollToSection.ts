
export type ScrollToFunction = (targetElement: HTMLElement | null) => void;

export const scrollToSection: ScrollToFunction = (targetElement) => {
  if (targetElement) {
    setTimeout(() => {
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  }
};