import React, { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  removeNotification: () => void
}

const Modal: React.FC<ModalProps> = ({children, removeNotification }) => {

  return (
    <div className=" fixed top-0 right-0 bottom-0 left-0 bg-black" onClick={removeNotification}>
      <div className=" absolute translate-x-[50%] translate-y-[50%] w-[400px] h-[300px] bg-white" onClick={(e) => e.stopPropagation()}>
        <div className="" onClick={removeNotification}>&times;</div>
        {children}
      </div>
    </div>
  );
};

export default Modal;