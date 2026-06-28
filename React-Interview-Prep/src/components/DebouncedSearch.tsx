import { useEffect, useState } from "react";

const products = [
  "React",
  "Redux",
  "Java",
  "Spring Boot",
  "Docker",
  "TypeScript",
  "JavaScript",
];

export default function DebouncedSearch() {
  const [input, setInput] = useState<string>("");
  const [debouncedInput, setDebouncedInput] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(input);
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  const filteredProducts = products.filter((item) =>
    item.toLowerCase().includes(debouncedInput.toLowerCase())
  );
  return (
    <>
      <input
        value={input}
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      {input !== debouncedInput && <p>Loading...</p>}
      {filteredProducts.length == 0 && <p>No Result Found</p>}
      {debouncedInput &&
        filteredProducts.map((item, index) => <p key={index}>{item}</p>)}
    </>
  );
}
