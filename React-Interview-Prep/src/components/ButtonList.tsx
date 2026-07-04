interface ButtonListProps {
  totalPages: number;
  currentPage: number;
  onPageClick: (page: number) => void;
}

export default function ButtonList({
  totalPages,
  currentPage,
  onPageClick,
}: ButtonListProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageClick(page)}
          style={{
            fontWeight: currentPage === page ? "bold" : "normal",

            backgroundColor: currentPage === page ? "#007bff" : "",

            color: currentPage === page ? "white" : "",
          }}
        >
          {page}
        </button>
      ))}
    </>
  );
}
