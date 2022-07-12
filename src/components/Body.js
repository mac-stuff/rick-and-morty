import image from "../assets/me.jpeg";
import "./Body.css";
import PageAboutMe from "./PageAboutMe";
import PageCharacterList from "./PageCharacterList";
import PageToDo from "./PageToDo";
import PageContact from "./PageContact";
import name from "../assets/TextNameSurname";
import aboutMe from "../assets/TextAboutMe.js";
import contact from "../assets/TextContact";

const Body = ({ selectedButton }) => {
  return (
    <div>
      {selectedButton.text === "about me" && (
        <PageAboutMe image={image} name={name} cv={aboutMe} />
      )}
      {selectedButton.text === "character list" && <PageCharacterList />}
      {selectedButton.text === "todo" && <PageToDo />}
      {selectedButton.text === "contact" && <PageContact contact={contact} />}
    </div>
  );
};

export default Body;
