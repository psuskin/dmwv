import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const ModernButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, onClick, type = "button", className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`font-sans flex justify-center items-center text-lg relative z-10 px-6 py-3 overflow-hidden rounded-full group transition-all duration-300 ease-in-out
                    bg-primary-500 hover:bg-primary-600 text-white
                    shadow-md hover:shadow-lg hover:shadow-primary-300/50
                    ${className}`}
        type={type}
        onClick={onClick}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {text}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 19"
            className="w-5 h-5 transform rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-90"
          >
            <path
              fill="currentColor"
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            />
          </svg>
        </span>
        <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
      </button>
    );
  }
);

ModernButton.displayName = "ModernButton";

export default ModernButton;

// Example usage
export function ButtonExample() {
  return (
    <div className="flex min-h-[300px] items-center justify-center bg-primary-50 p-4">
      <ModernButton
        text="Get Started"
        onClick={() => alert("Button clicked!")}
      />
    </div>
  );
}
