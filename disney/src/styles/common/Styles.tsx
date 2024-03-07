import styled from "styled-components";

interface IProps {
    width?: number | string;
    height?: number | string;
    w?: number | string;
    h?: number | string;
    mt?: number | string;
    mb?: number | string;
    ml?: number | string;
    mr?: number | string;
    mx?: number | string;
    my?: number | string;
    pt?: number | string;
    pb?: number | string;
    pl?: number | string;
    pr?: number | string;
    px?: number | string;
    py?: number | string;
    fontSize?: number;
    fontWeight?: string;
}

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const ContainerCenter = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MyText = styled.text`
    font-size: ${(props) => props.fontSize}px;
    font-weight: ${(props) => props.fontWeight};
`;
