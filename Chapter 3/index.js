function Mynavbar() {
  return (
    <div>
      <nav className="Navbar">
        <a href="#">
          <h1>My Website</h1>
        </a>
        <div className="flex">
          <p>Home</p>
          <p>Contact</p>
        </div>
        <button>Login/Signup</button>
      </nav>
    </div>
  );
}

function Content() {
  return <h1>Hello, I am learning React</h1>;
}
ReactDOM.render(
  <div>
    <Mynavbar />
    <Content />
  </div>,
  document.getElementById("root")
);
