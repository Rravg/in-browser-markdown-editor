import styled from "styled-components";
import icon from "../assets/icon-document.svg";

const StyledDocument = styled.div`
    display: flex;
    gap: 16px;

    align-items: center;
    margin-bottom: 26px;

    cursor: pointer;
    border-radius: 4px;

    &:hover :last-child {
        color: var(--orange);
    }
`;

const Date = styled.p`
    display: block;
    color: var(--color-500);
    margin-bottom: 3px;
`;

const Name = styled.p`
    display: block;
    margin-bottom: 0px;
    color: var(--color-100);
`;

interface DocumentProp {
    date: string;
    name: string;
    onClick?: Function;
}

export default function Document({ date, name, onClick }: DocumentProp): JSX.Element {
    const handleClick = () => {
        if (onClick) onClick();
    };

    return (
        <StyledDocument onClick={handleClick}>
            <img src={icon} alt="" />
            <div>
                <Date className="body-m">{date}</Date>
                <Name className="heading-m">{name}</Name>
            </div>
        </StyledDocument>
    );
}
