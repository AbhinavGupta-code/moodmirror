function reflectMood() {
  const mood = document.getElementById("mood").value;
  const response = document.getElementById("response");

  const reflections = {
    happy: "It sounds like things feel light right now. Take a moment to enjoy this — happiness doesn’t need to be rushed.",
    sad: "It’s okay to feel low sometimes. You don’t need to fix anything right now. Just being here is enough.",
    tired: "You’ve been carrying a lot. Rest isn’t weakness — it’s how you take care of yourself.",
    anxious: "Your thoughts might be loud, but you are still safe in this moment. Breathe slowly. One step at a time.",
    calm: "This sense of calm is something worth protecting. Stay here for a while."
  };

  if (!mood) {
    response.style.opacity = 0;
    setTimeout(() => {
      response.innerText = "Choose a mood to begin.";
      response.style.opacity = 1;
    }, 100);
    return;
  }

  response.style.opacity = 0;
  setTimeout(() => {
    response.innerText = reflections[mood] + "\n\nYou’re not alone.";
    response.style.opacity = 1;
  }, 150);
}
