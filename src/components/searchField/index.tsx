import React from "react";
import * as S from "./style";

type InputProps = {
  onChange: (text: string) => void;
};

const SearchField: React.FC<InputProps> = ({ onChange }) => {
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value || "");
  };

  return (
    <S.InputSearch
      type="text"
      onChange={onChangeValue}
      placeholder="Type a movie name"
    />
  );
};

export default SearchField;
