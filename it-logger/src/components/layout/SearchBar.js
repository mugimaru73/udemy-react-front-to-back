import React, { useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchLogs } from "../../actions/logActions";

const SearchBar = ({ searchLogs }) => {
  const text = useRef("");
  const onChange = () => {
    searchLogs(text.current.value);
  };

  return (
    <nav>
      <div className="nav-wrapper blue">
        <form>
          <div className="input-field">
            <input
              type="search"
              ref={text}
              placeholder="Search Logs..."
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);
