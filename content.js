function findPrompt() {
  return document.querySelector("#prompt-textarea");
}

function findScrollRoot() {
  return document.querySelector("[data-scroll-root]");
}

function isEditing() {
  const element = document.activeElement;

  return (
    element instanceof HTMLInputElement ||
    element instanceof HTMLTextAreaElement ||
    element instanceof HTMLSelectElement ||
    element?.isContentEditable
  );
}

function scrollConversation(amount) {
  const scrollRoot = findScrollRoot();

  scrollRoot?.scrollBy({
    top: amount,
    behavior: "smooth",
  });
}

document.addEventListener(
  "keydown",
  (event) => {
    if (!isEditing()) {
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

    // Prompt is focused: enter navigation mode.
    if (document.activeElement === prompt) {
      event.preventDefault();
      event.stopPropagation();
      prompt.blur();
      return;
    }

    // Another editable control is focused.
    // Leave Escape to ChatGPT.
    if (isEditing()) {
      return;
    }

    // Nothing editable is focused: return to the prompt.
    event.preventDefault();
    event.stopPropagation();
    prompt.focus();
  },
  true,
);
