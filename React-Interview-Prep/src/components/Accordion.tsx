import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "What is Java?",
    answer: "Java is an object-oriented programming language.",
  },
  {
    id: 3,
    question: "What is Spring Boot?",
    answer: "Spring Boot is a Java framework for building REST APIs.",
  },
];

export function Accordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  function handleUserClick(id:number) {
    if (id == openId) {
        setOpenId(null);
    } else {
        setOpenId(id);
    }
  }

  return (
    <div>
      {faqs.map((faq) => (
        <div key={faq.id}>
          <h1 onClick={() => handleUserClick(faq.id)}>{faq.question}</h1>
          {openId == faq.id && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}
