import { VFC } from 'react';
import { Modal, Text } from '@nextui-org/react'

interface InfoModalData {
  isVisible: boolean
  handleModal: () => void
  description: string
}

export const InfoModal: VFC<InfoModalData> = ({ isVisible, handleModal, description }) => {
  return (
    <Modal
      scroll
      closeButton
      aria-describedby='modal-description'
      width='20rem'
      open={isVisible}
      onClose={handleModal}
      style={{ paddingBottom: '1.5rem' }}
    >
      <Modal.Body>
        <Text id='modal-description' size={18} b>
          {description}
        </Text>
      </Modal.Body>
    </Modal>
  )
}
