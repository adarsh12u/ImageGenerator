import React from 'react'
import { globalcontext } from '../Context/Context';

const SearchBar = () => {
 








  const { setsearch } = globalcontext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    console.log(searchValue)
    if (!searchValue) return;
    setsearch(searchValue);
  };
  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input '
          name='search'
          placeholder='cat'
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </section>
  );
};
export default SearchBar
