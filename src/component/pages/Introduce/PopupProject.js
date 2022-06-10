import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

function PopupProject({ value }) {
    return (
        <div>
            <Modal isOpen={value.open}>
                <div style={{ display: 'flex' }}>
                    <ModalHeader>Modal title</ModalHeader>
                    <ModalHeader>Details</ModalHeader>
                </div>
                <ModalBody>
                    <div>test</div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={() => {
                            value.setOpen(false);
                        }}
                    >
                        Do Something
                    </Button>{' '}
                    <Button
                        onClick={() => {
                            value.setOpen(false);
                        }}
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default PopupProject;
