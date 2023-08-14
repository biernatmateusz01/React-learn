import ReactDOM from "react-dom/client";
// import { Link } from "./components/Link";
// import { HeadingItalic } from "./components/HeadingItalic";
// import { Logger } from "./components/Logger";
import App from "./App";

// const title = "Nasza Strona ITALIC";

// const element = (
//   <>
//     <Logger>
//       <HeadingItalic>{title}</HeadingItalic>
//       <HeadingItalic>
//         <Link />
//       </HeadingItalic>
//     </Logger>

//     <main>
//       <Link text={"first"} openNewTab={false} />
//       <p>Lorem ipsum dolor sit.</p>
//       <Link openNewTab={true} />
//     </main>
//   </>
// );

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
