import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
  align-items: center;
`;

export const NumbersOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const HeaderList = styled.View`
  width: 80%;

  flex-direction: row;
  align-items: center;

  margin: 32px 0 12px;
`;

export const Form = styled.View`
  width: 80%;
  
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  justify-content: center;
  border-radius: 6px
`;
