interface SearchInputProps {}

export const SearchInput: React.FC<SearchInputProps> = ({}) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <input type="text" className="grow" placeholder="Search" />
      <kbd className="kbd text-base-content">⌘</kbd>
      <kbd className="kbd text-base-content">K</kbd>
    </label>
  );
};
