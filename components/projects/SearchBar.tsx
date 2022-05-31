import MaskSvg from '../MaskSvg'

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-start gap-2 rounded-2xl border-2 border-jurrelightgray bg-white py-[0.6rem] px-5">
        <MaskSvg
          className="h-[1.2rem] w-[1.2rem] !bg-jurregray"
          url="/img/icons/search.svg"
        />
        <input
          className="bg-transparent font-euclid text-jurregray placeholder-jurregray outline-none placeholder:font-euclid"
          spellCheck={false}
          type="text"
          name="Search"
          id="projects-search-input"
          placeholder="Search..."
        />
      </div>
    </div>
  )
}

export default SearchBar
