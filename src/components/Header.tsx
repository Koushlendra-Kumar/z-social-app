import { Close, Menu } from "@mui/icons-material";

function Header({
  handleClick,
  isMenuOpen,
}: {
  handleClick: () => void;
  isMenuOpen: boolean;
}) {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-start border-b bg-slate-50 py-2 shadow-sm md:hidden">
      <div className="mx-4 cursor-pointer" onClick={handleClick}>
        {isMenuOpen ? <Close /> : <Menu />}
      </div>

      <svg
        className="mx-auto size-8"
        viewBox="0 0 29 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.9 36V33.35L19.2 2.95H2.5V0.299998H28.55V2.95L10.6 33.35H28.05V36H0.9ZM3.9 33.35H7.55L25.65 2.95H22.1L3.9 33.35Z"
          fill="black"
        />
      </svg>
    </div>
  );
}

export default Header;
