
import React from 'react';

interface ModalProps {
  selectedImg: string;
  setSelectedImg: (img: string | null) => void;
}

const Modal: React.FC<ModalProps> = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === 'backdrop') {
      setSelectedImg(null);
    }
  };

  return (
    <div
      id="backdrop"
      onClick={handleClick}
      className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4 animate-fade-in"
    >
      <div className="relative">
         <img src={selectedImg} alt="Enlarged view" className="block max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-2xl border-4 border-white" />
         <button onClick={() => setSelectedImg(null)} className="absolute -top-4 -right-4 bg-white text-[#D9A5A0] rounded-full h-10 w-10 flex items-center justify-center font-bold text-2xl shadow-lg">&times;</button>
      </div>
    </div>
  );
};

export default Modal;
