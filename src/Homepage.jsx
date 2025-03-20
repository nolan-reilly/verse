import Post from "./Post";

export default function Homepage() {
  return (
    <div>
      {/* Sidebar for large screen */}

      {/* Navbar for mobile */}
      <header className="navbar bg-light-gray">
        <nav className="container flex flex-row justify-between align-center py-24">
          <img className="width-32" src="./menu.svg" alt="Star" />

          <div className="flex flex-row align-center">
            <img className="width-32" src="./star.svg" alt="Star" />
            <p className="text-medium weight-700">Verse</p>
          </div>

          <img className="width-32" src="./message.svg" alt="Star" />
        </nav>
      </header>

      {/* large scrolling area */}
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
