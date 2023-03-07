import React, { useState, useEffect } from "react";
import { List } from "../../components/list";
import Title from "../../components/title";
import * as S from "./style";

import MovieList from "./../../data/movies.json";
import SearchField from "../../components/searchField";
import { IMovie } from "../../types/types";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [occorences, setOccorencesList] = useState<IMovie[]>(MovieList);

  useEffect(() => {
    if (searchValue) {
      const newOccorences = MovieList.filter(
        (item) =>
          item.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
      ).sort();

      setOccorencesList(newOccorences);
    } else {
      setOccorencesList(MovieList.sort());
    }
  }, [searchValue]);

  const onChangeSearch = (value: string) => {
    setSearchValue(value);
  };

  return (
    <S.SearchPage>
      <Title>Search Movies</Title>
      <SearchField onChange={onChangeSearch} />
      <List items={occorences} />
    </S.SearchPage>
  );
};

export default SearchPage;
