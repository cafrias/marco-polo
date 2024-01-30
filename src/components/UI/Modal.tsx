import { CloseButton } from "./buttons/CloseButton";

interface ModalProps {
  title: string;
  open?: boolean;
  children?: React.ReactNode;
  onClose: () => void;
}

export function Modal({ title, open, children, onClose }: ModalProps) {
  return (
    <dialog className="modal" open={open}>
      <div className="modal-box p-0 flex flex-col">
        <header className="border-b border-base-200 pl-4 pr-2 py-1 flex justify-between items-center">
          <h1 className="text-xl">{title}</h1>
          <CloseButton onClick={onClose} autoFocus />
        </header>
        <div className="p-4 overflow-y-scroll">{children}</div>
      </div>
      <div aria-hidden className="modal-backdrop bg-slate-600 bg-opacity-25">
        <button onClick={onClose}>close</button>
      </div>
    </dialog>
  );
}
