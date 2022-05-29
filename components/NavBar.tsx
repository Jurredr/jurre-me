import Logo from './Logo'

const NavBar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-32 xl:px-48">
      <div className="dark:hidden">
        <Logo color="black" />
      </div>
      <div className="light:hidden">
        <Logo color="white" />
      </div>
      <div>Test</div>
    </div>
  )
}

export default NavBar
