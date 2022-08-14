import { useEffect } from "react";
import styled from "styled-components";
import icon from "../assets/icon-document.svg";
import DocumentService from "../services/DocumentService";
import { useAuth } from "./AuthProvider";

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

    currentDocument: string;
    setCurrentDocument: Function;
    setSource: Function;
}

export default function Document({
    date,
    name,
    onClick,
    currentDocument,
    setCurrentDocument,
    setSource,
}: DocumentProp): JSX.Element {
    let auth = useAuth();

    const updateDocument = async (): Promise<void> => {
        let response = await DocumentService.GetSelectedDocument(currentDocument, auth.user);
        setSource(response.data.document.document_body);
    };

    useEffect(() => {
        updateDocument();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentDocument]);

    const handleClick = async () => {
        // use own implementation
        setCurrentDocument(name);
    };

    return (
        <StyledDocument onClick={handleClick}>
            <img src={icon} alt="" />
            <div>
                <Date className="body-m">{date}</Date>
                <Name className="heading-m">{name}.md</Name>
            </div>
        </StyledDocument>
    );
}
