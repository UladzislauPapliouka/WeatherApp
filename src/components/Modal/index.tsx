import React, { FC, MouseEvent, PropsWithChildren, useRef } from 'react';
import ReactDOM from 'react-dom';

import ModalWrapper from './styled';

const ModalWindow: FC<PropsWithChildren<{ handleClose: () => void }>> = ({
  handleClose,
  children,
}) => {
  const backRef = useRef(null);
  const handleBackgroundClick = ({ target }: MouseEvent<HTMLDivElement>) => {
    if (backRef.current === target) {
      handleClose();
    }
  };
  return ReactDOM.createPortal(
    <ModalWrapper ref={backRef} onMouseUp={handleBackgroundClick}>
      {children}
    </ModalWrapper>,
    document.body,
  );
};
export default ModalWindow;
