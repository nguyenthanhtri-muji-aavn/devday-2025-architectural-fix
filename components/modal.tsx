'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      document.body.classList.add('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    }
  }, []);

  useEffect(() => {
    if (dialogRef.current?.open) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [dialogRef.current?.open]);
  function onDismiss() {
    document.body.classList.remove('modal-open');
    router.back();
  }

  return createPortal(
    <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
       <div className="modal-bg">
          <img
              src="/assets/images/modal-bg.svg"
              alt="ETH"
              width="auto"
              height="auto"
            />
       </div>
       <div className="modal-content"> 
       <span className="material-icons" onClick={onDismiss}>close</span>
        {children}
            
       </div>
       
      </dialog>,
    document.getElementById('modal-root')!
  );
}
