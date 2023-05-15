import { css } from "styled-components";

import { BreakpointProps } from "@infra/types/breakpointProps";

export default function Responsiveness(breakpoints: BreakpointProps[]) {
  return breakpoints.map(({ media, w, h, fz }) => {
    return css`
        @media (max-width: ${media}px) {
          ${w && `width: ${w};`}
          ${h && `height: ${h};`}
          ${fz && `font-size: ${fz};`}
        }
      `;
  });
}
