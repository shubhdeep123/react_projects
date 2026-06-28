import React, { useState } from "react";

export default function ChipComponent() {
  const [chips, setChips] = useState<string[]>(["React", "Java", "Spring"]);
  const [input, setInput] = useState<string>("");

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Backspace" && chips.length && input == "") {
      e.preventDefault();
      setChips((prev) => prev.slice(0, prev.length - 1));
      return;
    }

    if (e.key == "Enter") {
      if (!input.trim() || chips.includes(input.trim())) return;
      setChips((prev) => [...prev, input.trim()]);
      setInput("");
    }
  }

  function handleChipDelete(chip: string) {
    setChips((prev) => prev.filter((item) => item != chip));
  }
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {chips.map((chip, index) => (
        <span key={index}>
          [{chip} <span onClick={() => handleChipDelete(chip)}>✕</span>]
        </span>
      ))}
      <input
        type="text"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          handleKeyDown(e)
        }
        style={{ border: "none", borderBottom: "1px solid black" }}
      />
    </div>
  );
}
