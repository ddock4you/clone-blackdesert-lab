import { css } from "styled-components";

export const inner = css`
    width: 1400px;
    margin: 0 auto;
`;

export const centerContent = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const clearFix = css`
    &::after {
        content: "";
        display: block;
        clear: both;
    }
`;

export const skipText = css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
