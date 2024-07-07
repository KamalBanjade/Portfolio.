import React, { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoCloseSharp } from "react-icons/io5";
import { cn } from "@/lib/utils";
import "./sheet.css";

interface CustomDialogProps extends Dialog.DialogProps {
  shouldScaleBackground?: boolean;
}

const Sheet = ({ shouldScaleBackground = true, ...props }: CustomDialogProps) => (
  <Dialog.Root {...props} />
);
Sheet.displayName = "Sheet";

const SheetTrigger = Dialog.Trigger;
const SheetPortal = Dialog.Portal;
const SheetClose = Dialog.Close;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof Dialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof Dialog.Overlay> & { isVisible: boolean }
>(({ className, isVisible, ...props }, ref) => (
  <Dialog.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-40 bg-black/70 transition-opacity duration-400",
      isVisible ? "opacity-100 blur-background" : "opacity-0",
      className
    )}
    {...props}
  />
));
SheetOverlay.displayName = Dialog.Overlay.displayName;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof Dialog.Content>,
  React.ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <SheetPortal>
      <SheetOverlay isVisible={true} />
      <Dialog.Content
        ref={ref}
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-lg bg-white transition-transform duration-400 ease-in-out md:top-0 md:right-0 md:left-auto md:bottom-auto md:h-auto md:max-w-md sheet-content content-animation",
          className
        )}
        {...props}
      >
        <SheetClose asChild>
          <button
            className="absolute right-4 top-4 p-1 text-teal-white transition-colors z-50 hover:text-teal-600"
            aria-label="Close"
          >
            <div className="block md:hidden">
              <IoCloseSharp size={18} />
            </div>
            <div className="hidden md:block lg:hidden">
              <IoCloseSharp size={22} />
            </div>
            <div className="hidden lg:block">
              <IoCloseSharp size={26} />
            </div>
          </button>
        </SheetClose>
        <div className="sheet-content p-2 overflow-y-auto">{children}</div>
      </Dialog.Content>
    </SheetPortal>
  );
});
SheetContent.displayName = Dialog.Content.displayName;

export {
  Sheet,
  SheetTrigger,
  SheetPortal,
  SheetClose,
  SheetContent
}
