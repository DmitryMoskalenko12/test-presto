import React, { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  removeNotification: () => void
}

const Modal: React.FC<ModalProps> = ({children, removeNotification }) => {

  return (
    <div className=" fixed top-0 right-0 bottom-0 left-0 bg-black z-10" onClick={removeNotification}>
      <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[300px] h-[200px] bg-white rounded-[9px]" onClick={(e) => e.stopPropagation()}>
        <div className=" text-[50px] absolute right-[10px] top-[-5px]" onClick={removeNotification}>&times;</div>
        <p className=' text-center text-black w-[100%] h-[100%] flex justify-center items-center px-[20px] text-[18px] font-medium'>
          {children}
        </p>
      </div>
    </div>
  );
};

export default Modal;