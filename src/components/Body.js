import "./Body.css";
import image from "../assets/me.jpeg";
import name from "../assets/TextNameSurname";
import aboutMe from "../assets/TextAboutMe.js";
import PageAboutMe from "../components/aboutme-components/PageAboutMe";
import PageCharacterList from "../components/character-components/PageCharacterList";
import PageToDo from "../components/todo-components/PageToDo";
import PageContact from "../components/contact-components/PageContact";

const Body = ({ selectedButton, setLogo, logo, setLogoText }) => {
  return (
    <div className="body">
      {(selectedButton === "about me" ||
        selectedButton.text === "about me") && (
        <PageAboutMe
          image={image}
          name={name}
          cv={aboutMe}
          setLogoText={setLogoText}
        />
      )}
      {selectedButton.text === "character list" && <PageCharacterList />}
      {selectedButton.text === "todo" && (
        <PageToDo setLogo={setLogo} logo={logo} />
      )}
      {selectedButton.text === "contact" && <PageContact />}
    </div>
  );
};

export default Body;
