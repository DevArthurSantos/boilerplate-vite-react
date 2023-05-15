import S from "./styled";

function Header(): JSX.Element {
  return (
    <S.HeaderWrapper>
      <S.TitleContainer>
        <S.HeaderTitle>Boilerplate</S.HeaderTitle>
        <S.HeaderSubTitle>React + Vite + axios + Styled-Components </S.HeaderSubTitle>
      </S.TitleContainer>
      <div>
        <S.HeaderTitle>Arthur Santos</S.HeaderTitle>
      </div>
    </S.HeaderWrapper>
  );
}

export default Header;
