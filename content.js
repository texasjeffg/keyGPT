function findPrompt() {
  return document.querySelector("#prompt-textarea");
}

function findScrollRoot() {
  return document.querySelector("[data-scroll-root]");
}

function scrollConversation(amount) {
  const scrollRoot = findScrollRoot();

  scrollRoot?.scrollBy({
    top: amount,
    behavior: "smooth",
  });
}

let navigationMode = false;

document.addEventListener(
  "keydown",
  (event) => {
    if (navigationMode) {
      const scrollRoot = findScrollRoot();

      if (!scrollRoot) {
        return;
      }

      const halfPage = scrollRoot.clientHeight / 2;
      const smallStep = 240;

      if (event.key === "d") {
        event.preventDefault();
        scrollConversation(halfPage);
        return;
      }

      if (event.key === "u") {
        event.preventDefault();
        scrollConversation(-halfPage);
        return;
      }

      if (event.key === "j") {
        event.preventDefault();
        scrollConversation(smallStep);
        return;
      }

      if (event.key === "k") {
        event.preventDefault();
        scrollConversation(-smallStep);
        return;
      }

      if (event.key === "End") {
        event.preventDefault();
        scrollRoot.scrollTo({
          top: scrollRoot.scrollHeight,
        });
        return;
      }
    }

    if (event.key !== "Escape") {
      return;
    }

    const prompt = findPrompt();

    if (!prompt) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    navigationMode = !navigationMode;

    if (navigationMode) {
      prompt.blur();
    } else {
      prompt.focus();
    }
  },
  true,
);
