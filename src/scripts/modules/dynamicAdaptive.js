const dynamicAdaptive = (elemSelector, targetSelector, maxWidth) => {
  const element = document.querySelector(elemSelector),
    target = document.querySelector(targetSelector),
    originalParent = element.parentElement,
    originalNextSibling = element.nextElementSibling;

  if (!element || !target) {
    console.error("not elem or target");
    return;
  }

  function handleWidthChange(event) {
    if (event.matches) {
      target.appendChild(element);
    } else {
      if (originalNextSibling) {
        originalParent.insertBefore(element, originalNextSibling);
      } else {
        originalParent.appendChild(element);
      }
    }
  }

  const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);
  mediaQuery.addEventListener("change", handleWidthChange);
  handleWidthChange(mediaQuery);
};

export default dynamicAdaptive;
