


interface DropDownListProps {
  label: string;
  content: { title: string; path: string }[];
}

export default function DropDownMenu({ label, content }: DropDownListProps) {
  const listItems = content.map((item, index) => (
    <div className="py-1" role="none" key={index}>
      <a
        href={item.path}
        className="text-gray-700 block px-4 py-2 text-sm active:bg-dark-purple"
        role="menuitem"
        tabIndex={-1}
        id={`menu-item-${index}`}
      >
        {item.title}
      </a>
    </div>
  ));
  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-medium-purple px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-dark-purple"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            {label}
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-medium-purple shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          {listItems}
        </div>
      </div>
    </>
  );





 }
