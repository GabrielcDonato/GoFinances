import styled from "styled-components/native";
import theme from "../../global/styles/theme";


    //da pra fazer desse jeito aqui tambem
    //background-color: ${(props) => props.theme.colors.primary};
    //background-color: ${( theme.colors.primary )};


export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${( {theme})=> theme.colors.primary };
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: purple
`;