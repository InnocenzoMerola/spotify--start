import MyMain from "./MyMain";

const SearchedResult = function ({ results, setResults }) {
  return <MyMain setResults={setResults} results={results} />;
};
export default SearchedResult;
