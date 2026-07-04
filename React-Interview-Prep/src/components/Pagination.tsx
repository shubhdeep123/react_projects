import { useState } from "react";
import ButtonList from "./ButtonList";

const USERS_PER_PAGE = 10;

const users = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
}));

export default function Pagination() {
  // ----------------------------
  // State
  // ----------------------------
  const [currentPage, setCurrentPage] = useState(1);

  // ----------------------------
  // Derived State
  // ----------------------------

  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

  const startIndex = (currentPage - 1) * USERS_PER_PAGE;

  const endIndex = startIndex + USERS_PER_PAGE;

  const currentUsers = users.slice(startIndex, endIndex);

  // ----------------------------
  // Event Handlers
  // ----------------------------

  function handlePageClick(page: number) {
    setCurrentPage(page);
  }

  function handlePrevious() {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }

  function handleNext() {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }

  // ----------------------------
  // JSX
  // ----------------------------

  return (
    <div>
      {currentUsers.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}

      <div>
        <button disabled={currentPage === 1} onClick={handlePrevious}>
          Previous
        </button>

        <ButtonList
          totalPages={totalPages}
          currentPage={currentPage}
          onPageClick={handlePageClick}
        />

        <button disabled={currentPage === totalPages} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
