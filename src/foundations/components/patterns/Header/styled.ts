import styled from "styled-components";

const Styleds = {
  HeaderWrapper: styled.header`
    background-color: #F6F7F8;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: end;
    height: 3rem;
    padding: 1rem;
  `,
  TitleContainer: styled.div`
    display: flex;
    gap: .3rem;
    flex-flow: column nowrap;
  `,
  HeaderTitle: styled.h1`
    color: #020202;
    font-size: 20px;
    font-weight: bold;
  `,
  HeaderSubTitle: styled.h2`
    color: #BAC1CD;
    font-size: 11px;
    font-weight: bold;
  `,
  HeaderIcon: styled.img`
    font-size: 24px;
    font-weight: bold;
  `,
};

export default Styleds;
