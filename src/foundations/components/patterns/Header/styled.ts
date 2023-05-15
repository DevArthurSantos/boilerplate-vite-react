import styled from "styled-components";

import Responsiveness from "@infra/styles/Responsiveness";
import HeaderTitleBreakpoints from "./Breakpoints/HeaderTitleBreakpoints";
import HeaderSubTitleBreakpoints from "./Breakpoints/HeaderSubTitleBreakpoints";


const Styleds = {
  HeaderWrapper: styled.header`
    background-color: #F6F7F8;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 1rem;
  `,
  TitleContainer: styled.div`
    display: flex;
    gap: .3rem;
    flex-flow: column nowrap;
  `,
  HeaderTitle: styled.h1`
    color: #020202;
    ${Responsiveness(HeaderTitleBreakpoints)}
    font-weight: bold;
  `,
  HeaderSubTitle: styled.h2`
    color: #BAC1CD;
    ${Responsiveness(HeaderSubTitleBreakpoints)}
    font-weight: bold;
  `,
  HeaderIcon: styled.img`
    font-size: 24px;
    font-weight: bold;
  `,
};

export default Styleds;
