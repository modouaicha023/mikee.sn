interface SearchInputProps {}

export const SearchInput: React.FC<SearchInputProps> = ({}) => {
  return (
    <label className="input input-bordered hidden screen430:flex items-center gap-2" >
      <input
        type="text"
        className="screen670:w-full screen810:w-80"
        placeholder="Search"
      />
      <kbd className="kbd text-base-content hidden screen670:block">⌘</kbd>
      <kbd className="kbd text-base-content hidden screen670:block">K</kbd>
    </label>
  );
};
