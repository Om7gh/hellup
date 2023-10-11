import React from "react";

const Search = () => {
  return (
    <div className="search-bar">
      {" "}
      <div className="title">
        <h2>Cherchez Votre Doctore !</h2>
      </div>
      <form>
        <div className="form-element">
          <input
            type="text"
            name="nom"
            id="nom"
            placeholder="nom complet du doctor ..."
          />
        </div>
        <div className="form-element">
          <button type="submit" className="form-btn">Trouver</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
