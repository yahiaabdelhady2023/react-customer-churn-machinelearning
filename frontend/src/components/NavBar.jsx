import "../styles/NavBar.css";

function NavBar() {
  const nav_items = [
    { name: "Home", link: "/", id: 0 },
    { name: "Deep Analysis", link: "/deep-analysis", id: 1 },
    { name: "About", link: "/about", id: 2 },
  ];

  return (
    <div className="navbar">
      {nav_items.map((item) => (
        <NavItem item={item} key={item.id}/>
      ))}
    </div>
  );
}

function NavItem({ item }) {
  return (
    <div className="navbar-item">
      <a href={item.link}>{item.name}</a>
    </div>
  );
}


export default NavBar