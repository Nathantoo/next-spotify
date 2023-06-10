import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-neutral-900/90 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] rounded-md bg-neutral-800 p-[25px] focus:outline-none border border-neutral-700 drop-shadow-md">
          <Dialog.Title className="text-xl text-center font-bold">
            {title}
          </Dialog.Title>
          <Dialog.Description className="text-sm leading-normal text-center mb-5">
            {description}
          </Dialog.Description>
          <div>{children}</div>
          <Dialog.Close asChild>
            <button className="text-neutral-400 hover:text-white absolute top-[10px] right-[10px] w-[25px] h-[25px] rounded-full focus:outline-none inline-flex justify-center items-center">
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
