// let Element = <h1>This is JSX</h1>;
// console.log(Element);
// ReactDOM.render(Element, document.getElementById("root"));

// <-------------------this will also work----------------->
// ReactDOM.render(
//   <div className="Parent">
//     <h1>This is JSX</h1>
//     <p>This is a paragraph</p>
//   </div>,
//   document.getElementById("root")
// );

// <-------------------this will also work----------------->
// const page = (
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
//   </div>
// );

// console.log(page);

// ReactDOM.render(page, document.getElementById("root"));

ReactDOM.render(
  <div className="Parent">
    <nav>
      <h1>Logo</h1>
      <ul className="flex">
        <li>Home</li>
        <li>About</li>
      </ul>
      <button>Login/Signup</button>
    </nav>
  </div>,
  document.getElementById("root")
);
