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
  const [timeoutId, setTimeOutId] = useState<NodeJS.Timeout>();

  const handleOpenModal = useCallback(
    (data: ModalDataType) => {
      if (timeoutId) clearTimeout(timeoutId);
      setIsClosing(false);
      setIsToggled(true);
      setModalData(data);
    },
    [setIsToggled, setModalData, timeoutId],
  );

  const handleCloseModal = useCallback(() => {
    setIsClosing(true);
    const id = setTimeout(() => {
      setIsToggled(false);
    }, 700);
    setTimeOutId(id);
  }, [setIsToggled, setTimeOutId]);

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
