"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, type ReactNode } from "react";

/**
 * ui-layouts linear-modal — shared-layout dialog. A trigger tile morphs into a
 * full panel using a common layoutId.
 */
export function LinearModal({
  id,
  open,
  onOpenChange,
  trigger,
  children,
}: {
  id: string;
  open: boolean;
  onOpenChange: (v: boolean) => void;
  trigger: ReactNode;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onOpenChange(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  return (
    <>
      <motion.button layoutId={`card-${id}`} onClick={() => onOpenChange(true)} className="block w-full text-left">
        {trigger}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[95] grid place-items-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-void/70 backdrop-blur"
              onClick={() => onOpenChange(false)}
            />
            <motion.div
              layoutId={`card-${id}`}
              transition={{ type: "spring", bounce: 0.05, duration: 0.5 }}
              className="relative z-10 max-h-[86vh] w-[min(720px,92vw)] overflow-y-auto border border-steel bg-iron"
            >
              {children}
              <button
                onClick={() => onOpenChange(false)}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center border border-gold/40 text-gold"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default LinearModal;
