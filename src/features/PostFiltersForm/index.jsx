import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

PostFiltersFormFeature.propTypes = {
  onSubmit: PropTypes.func,
};

PostFiltersFormFeature.defaultProps = {
  onSubmit: null,
};

function PostFiltersFormFeature({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeOutRef = useRef(null);

  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;

    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }

    typingTimeOutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);
    }, 300);
  };
  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
    </form>
  );
}

export default PostFiltersFormFeature;
