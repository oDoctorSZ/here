import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.RED_DARK};
    font-size: 32px;
`;