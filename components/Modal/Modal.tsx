'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import styles from './Modal.module.css';

type Props = {
  children: React.ReactNode;
};

export default function Modal({ children }: Props) {
  const router = useRouter();
  const modalRoot = document.getElementById('modal-root');

  const close = () => router.back();

  useEffect(() => {
    // блокування скролу
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!modalRoot) return null;

  return createPortal(
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={close}
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button onClick={close}>Close</button>
      </div>
    </div>,
    modalRoot
  );
}
