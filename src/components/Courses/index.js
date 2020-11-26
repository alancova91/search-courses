import Course from "../Course";

function Courses(props) {
  return (
    <>
      {props.data.map((course, key) => {
        return <Course key={key} course={course} />;
      })}
    </>
  );
}
export default Courses;
