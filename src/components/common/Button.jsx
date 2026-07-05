const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-full bg-[#0B6E4F] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#09573F] hover:shadow-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;