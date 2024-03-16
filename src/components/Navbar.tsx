export const Navbar = ():JSX.Element => {
  return (
    <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="#">
            <span className="sr-only">Title</span>
            <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"/>
          </a>
        </div>
      </div>
      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
        <a href="#" className="font-medium text-gray-500 hover:text-gray-900">About</a>
        <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Projects</a>
        <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Contact</a>
      </div>
    </nav>
  )
}