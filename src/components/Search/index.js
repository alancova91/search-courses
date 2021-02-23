function Search(props) {
  function handleChange(e) {
    const { value } = e.target;
    props.handleCallback(value);
  }

  return (
    <>
      <h3 className="search-title">Buscá tu curso:</h3>
      <div className="inputContainer">
        <input
          className="searchBar"
          type="text"
          placeholder="Escribe el nombre del curso"
          onChange={handleChange}
        ></input>
      </div>
    </>
  );
}

export default Search;
