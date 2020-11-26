function Course(props) {
  return (
    <>
      <div className="cardContainer">
        <div
          className="imgContainer"
          style={{ backgroundColor: props.course.color }}
        >
          <img src={props.course.img} />
        </div>
        <div>
          <h1 className="title">{props.course.name}</h1>
          <p className="desc">{props.course.desc}</p>
        </div>
      </div>
    </>
  );
}

export default Course;
