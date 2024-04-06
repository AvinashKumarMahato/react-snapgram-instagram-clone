import { Models } from 'appwrite';
import Loader from './Loader';
import GridPostList from './GridPostList';

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[] | undefined; // Allow searchedPosts to be undefined
}

const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultsProps) => {
  if (isSearchFetching) return <Loader />;

  // Check if searchedPosts is undefined or null
  if (!searchedPosts) {
    return <p className="text-light-4 mt-10 text-center w-full">No results found</p>;
  }

  if (searchedPosts.length > 0) { // Now it's safe to access length property
    return (
      <GridPostList posts={searchedPosts} />
    );
  }
  
  return <p className="text-light-4 mt-10 text-center w-full">No results found</p>;
}

export default SearchResults;
