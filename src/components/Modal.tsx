import styled from "styled-components";
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

export default function Modal(): JSX.Element {
    return (
        <StyledModal id="modal">
            <ModalContainer>
                <Title className="preview-h4">Delete this document?</Title>
                <Paragraph className="preview-paragraph">
                    Are you sure you want to delete the ‘welcome.md’ document and its contents? This
                    action cannot be reversed.
                </Paragraph>
                <ModalButton className="heading-m">Confirm & Delete</ModalButton>
            </ModalContainer>
        </StyledModal>
    );
}
