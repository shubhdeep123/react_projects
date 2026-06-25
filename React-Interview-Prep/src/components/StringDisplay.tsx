import { useState } from "react";

export function StringDisplay() {
  const words = ["React", "Java", "Spring", "Redux", "Docker"];
  const [lastDisplayedIndex, setLastDisplayedIndex] = useState<number>(0);
  const displayedWords = words.slice(0,lastDisplayedIndex).join(',')
  function handleAddWord() {
    if (lastDisplayedIndex === words.length) return;
    setLastDisplayedIndex((prev) => prev + 1);
  }

  function handleRemoveWord() {
    if (lastDisplayedIndex == 0) return;
    setLastDisplayedIndex((prev) => prev - 1);
  }
  return (
    <div>
      <button onClick={handleAddWord}>Add</button>
      <button onClick={handleRemoveWord}>Remove</button>
      <p>Output:</p>
      <p>{displayedWords}</p>
      <p>{lastDisplayedIndex}</p>
    </div>
  );
}
