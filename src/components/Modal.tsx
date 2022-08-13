import styled from "styled-components";
import DocumentService from "../services/DocumentService";
import { useAuth } from "./AuthProvider";
import { Button } from "./General";

const StyledModal = styled.div`
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto !important;
    background-color: hsla(225, 9%, 9%, 0.5);
`;

const ModalContainer = styled.div`
    background: ${(props) => props.theme.background};
    width: 90%;
    /* height: 218px; */
    max-width: 343px;
    padding: 24px;
    border-radius: 4px;

    overflow: clip !important;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ModalButton = styled(Button)`
    color: var(--color-100);
`;

const Title = styled.h4`
    color: ${(props) => props.theme.title};
`;

const Paragraph = styled.p`
    color: ${(props) => props.theme.body};
    margin: 16px 0px;
`;

interface ModalProps {
    currentDocument: string;
    setCurrentDocument: Function;
    setData: Function;
}

export default function Modal({
    currentDocument,
    setCurrentDocument,
    setData,
}: ModalProps): JSX.Element {
    const auth = useAuth();

    const getDocuments = async () => {
        let response = await DocumentService.GetDocuments(auth.user);
        setData((docs: document) => {
            return response.data.documents;
        });
    };

    const handleClick = async () => {
        if (currentDocument !== "") {
            await DocumentService.DeleteDocument(currentDocument, auth.user);
            getDocuments();
            const modal = document.getElementById("modal");
            if (modal !== null) {
                modal.style.display = "none";
            }
            setCurrentDocument("");
        }
    };

    return (
        <StyledModal id="modal">
            <ModalContainer>
                <Title className="preview-h4">Delete this document?</Title>
                <Paragraph className="preview-paragraph">
                    Are you sure you want to delete the '{currentDocument}' document and its
                    contents? This action cannot be reversed.
                </Paragraph>
                <ModalButton className="heading-m" onClick={handleClick}>
                    Confirm & Delete
                </ModalButton>
            </ModalContainer>
        </StyledModal>
    );
}
