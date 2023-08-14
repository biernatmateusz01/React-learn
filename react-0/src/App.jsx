import { PersonInfo } from "./components/PersonInfo";
import image from "../src/assets/1.jpeg";
import secImg from "/2.jpeg"

function App() {
  const person = {
    name: "Jan",
    surname: "Kowalski",
    mail: "j.kowalski@gmail.com",
    tel: "+48 501 694 457",
  };

  const janina = {
    name: "Janina",
    surname: "Kowalski",
    mail: "j.anina@gmail.com",
    tel: "+48 501 694 457",
    image: image
  };

  const karol = {
    name: "Janina",
    surname: "Kowalski",
    mail: "j.anina@gmail.com",
    image: secImg
    // tel: "+48 501 694 457",
  };

  return (
    <>
      <PersonInfo person={person} />
      <PersonInfo person={janina} />
      <PersonInfo person={karol} />

    </>
  );
}

export default App;
