import React from 'react';

const Search = ({ setSearch, fetchError, items }) => {
  return (
    <>
      {!fetchError && items.length !== 0 && (
        <div className="flex justify-center items-center mt-10">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              autoFocus
              type="text"
              className="bg-gray-200 p-2"
              placeholder="Search Here..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      )}
    </>
  );
};

export default Search;
