import "./App.css";
import "./reset.css";
import "./style.scss";
import { useState } from "react";
import Search from "./components/Search";
import Courses from "./components/Courses";

function App() {
  const courses = [
    {
      name: "Html y Css",
      color: "rgb(47, 164, 171)",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/html-css.png",
      desc:
        "Aprendé a estructurar páginas web con HTML y desatá todo su potencial visual con CSS siguiendo los estándares de la industria",
    },
    {
      name: "Javascript",
      color: "rgb(222,145,3)",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/javascript.png",
      desc:
        "Aprendé a programar junto al lenguaje que domina el mundo del desarrollo web",
    },
    {
      name: "Terminal",
      color: "rgb(222,145,3)",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/terminal.png",
      desc:
        "La terminal es una herramienta esencial para programar, en este curso aprendé sus conceptos básicos",
    },
    {
      name: "Git y Github",
      color: "rgb(15,29,68)",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/git.png",
      desc:
        "La herramienta principal para compartir código, en este curso te enseñamos todo lo que tenés que saber sobre crear y compartir repositorios",
    },
    {
      name: "React",
      color: "rgb(17,114,213)",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/react.png",
      desc:
        "Conocé una de las librerías más populares del mercado para crear aplicaciones web robustas y performantes",
    },
    {
      name: "API Context",
      color: "rgb(197,111,208)",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/api-context.png",
      desc:
        "La terminal es una herramienta esencial para programar, en este curso aprendé sus conceptos básicos",
    },
  ];

  const [filteredCourses, setFilteredCourses] = useState(courses);

  function handleChange(inputValue) {
    if (inputValue == "") {
      setFilteredCourses(courses);
    }
    const filtered = courses.filter((course) => {
      return course.name.toLowerCase().includes(inputValue.toLowerCase());
    });

    setFilteredCourses(filtered);
  }

  return (
    <div className="App">
      <Search handleCallback={handleChange} />
      <div className="cardsContainer">
        <Courses data={filteredCourses} />
      </div>
    </div>
  );
}

export default App;
