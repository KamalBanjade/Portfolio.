import React, { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import "./sheet.css";

interface CustomDialogProps extends Dialog.DialogProps {
  shouldScaleBackground?: boolean;
}

const Sheet = ({
  shouldScaleBackground = true,
  ...props
}: CustomDialogProps) => <Dialog.Root {...props} />;
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
      "fixed inset-0 z-40 bg-black/70 transition-opacity duration-300",
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
  const [height, setHeight] = useState<number | string>("auto");
  const startYRef = useRef(0);
  const translateYRef = useRef(0);

  const handleDragStart = (event: React.TouchEvent) => {
    startYRef.current = event.touches[0].clientY;
  };

  const handleDragMove = (event: React.TouchEvent) => {
    const currentY = event.touches[0].clientY;
    translateYRef.current = currentY - startYRef.current;
    setHeight(`calc(100% - ${translateYRef.current}px)`);
  };

  const handleDragEnd = () => {
    if (translateYRef.current > 100) {
      setHeight("0");
    } else {
      setHeight("auto");
      translateYRef.current = 0;
    }
  };

  return (
    <SheetPortal>
      <SheetOverlay isVisible={true} />
      <Dialog.Content
        ref={ref}
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-lg bg-white transition-transform duration-300 ease-in-out md:top-0 md:right-0 md:left-auto md:bottom-auto md:h-full md:max-w-md sheet-content",
          className
        )}
        style={{
          height,
          transform: `translateY(${Math.max(translateYRef.current, 0)}px)`,
        }}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        {...props}
      >
        <SheetClose asChild>
          <button
            className="absolute right-4 top-4 p-1 rounded-full text-white hover:bg-teal-600 transition-colors z-50"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </SheetClose>
        <div className="sheet-content p-4 overflow-y-auto">{children}</div>
      </Dialog.Content>
    </SheetPortal>
  );
});
SheetContent.displayName = Dialog.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof Dialog.Title>,
  React.ComponentPropsWithoutRef<typeof Dialog.Title>
>(({ className, ...props }, ref) => (
  <Dialog.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
SheetTitle.displayName = Dialog.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof Dialog.Description>,
  React.ComponentPropsWithoutRef<typeof Dialog.Description>
>(({ className, ...props }, ref) => (
  <Dialog.Description
    ref={ref}
    className={cn("text-sm text-gray-600", className)}
    {...props}
  />
));
SheetDescription.displayName = Dialog.Description.displayName;

export {
  Sheet,
  SheetTrigger,
  SheetPortal,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
