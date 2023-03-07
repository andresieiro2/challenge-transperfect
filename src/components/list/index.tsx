import React from "react";
import * as S from "./style";

import { IMovie } from "../../types/types";

type ListProps = {
  items: IMovie[];
};

export const List: React.FC<ListProps> = ({ items }) => (
  <S.List>{items && items.map((movie) => <li>{movie.name}</li>)}</S.List>
);
