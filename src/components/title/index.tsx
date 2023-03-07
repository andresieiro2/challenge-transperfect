import * as S from "./style";

type TitleProps = { children: React.ReactNode };

const Title: React.FC<TitleProps> = ({ ...props }) => (
  <S.Title>{props.children}</S.Title>
);

export default Title;
