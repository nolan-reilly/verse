export default function Navbar() {
  return (
    <div className="navbar bg-light-gray">
      <nav className="container flex flex-row justify-between align-center py-24">
        <img className="width-32" src="./menu.svg" alt="Star" />

        <div className="flex flex-row align-center">
          <img className="width-32" src="./star.svg" alt="Star" />
          <p className="text-medium weight-700">Verse</p>
        </div>

        <img className="width-32" src="./message.svg" alt="Star" />
      </nav>
    </div>
  );
}
