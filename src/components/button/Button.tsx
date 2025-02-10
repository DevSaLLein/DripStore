import styled from "styled-components";
import { theme } from "../../themes";

interface ButtonProps {
    textButton: string;
    colorOfButton?: keyof typeof theme.colors;
}

const StyledButton = styled.button<{ colorOfButton?: keyof typeof theme.colors;}>`

    background-color: ${({ theme, colorOfButton = "primary" }) => theme.colors[colorOfButton]};
    color: ${({ theme }) => theme.colors.white};

    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
        
        background-color: ${({ theme, colorOfButton = "primary" }) => theme.colors[colorOfButton]};
        transform: translateY(-2px);
        opacity: 0.9;
    }
`;

export const Button: React.FC<ButtonProps> = ({ textButton, colorOfButton = "primary" }) => {

  return <StyledButton colorOfButton = { colorOfButton }> { textButton } </StyledButton>;
};
