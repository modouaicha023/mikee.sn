import { themes } from "@/utils/themes";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        // className="btn text-xs m-1 whitespace-nowrap"
        className="btn btn-outline text-xs flex items-center justify-center whitespace-nowrap flex-nowrap"
      >
        Theme 🎨
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52 max-h-96 overflow-y-auto">
        {themes.map((themeOption) => (
          <li key={themeOption}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={
                themeOption.charAt(0).toUpperCase() + themeOption.slice(1)
              }
              value={themeOption}
              checked={theme === themeOption} // Ensure the radio button is checked for the current theme
              onChange={() => setTheme(themeOption)} // Set the selected theme
            />
            {/* <label>{themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}</label> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
