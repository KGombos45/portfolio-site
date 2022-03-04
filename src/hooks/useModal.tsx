import {useCallback, useMemo, useState} from 'react';
import {Modal} from '../components/modal/Modal';

export type ModalDataType = {
  src: string;
  svg: string;
  cardTitle: string;
  cardSubtitle: string;
  frontEndSubtitle: string;
  backEndSubtitle?: string;
  cardBody: string;
  modalBody: string;
  link: string;
  originalLink?: string;
  repositoryLink?: string;
  frontEndRepositoryLink?: string;
  backEndRepositoryLink?: string;
};

export const useModal = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [modalData, setModalData] = useState<ModalDataType | undefined>(undefined);

  const handleOpenModal = useCallback(
    (data: ModalDataType) => {
      setIsClosing(false);
      setIsToggled(true);
      setModalData(data);
    },
    [setIsToggled, setModalData],
  );

  const handleCloseModal = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsToggled(false);
    }, 700);
  }, [setIsToggled]);

  const modal = useMemo(
    () => (
      <Modal
        close={handleCloseModal}
        isClosing={isClosing}
        isToggled={isToggled}
        modalData={modalData}
      />
    ),
    [isToggled, isClosing, modalData, handleCloseModal],
  );

  return {handleOpenModal, modal};
};
