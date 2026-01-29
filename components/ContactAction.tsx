"use client"

import {
  useState,
  useEffect,
  ReactNode,
  MouseEvent,
  KeyboardEvent,
} from "react";

interface ContactActionProps {
  children: ReactNode;
  message?: string;
  duration?: number;
}

const ContactAction: React.FC<ContactActionProps> = ({
  children,
  message = "This feature is coming soon. Stay tuned for updates.",
  duration = 4000,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  // Hide popup after duration
  useEffect(() => {
    if (!showPopup) return;
    const timer = setTimeout(() => setShowPopup(false), duration);
    return () => clearTimeout(timer);
  }, [showPopup, duration]);

  const openPopup = (e?: MouseEvent | KeyboardEvent) => {
    e?.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  // Wrapper click handler for both native buttons and custom components
  const handleClick = (e: MouseEvent | KeyboardEvent) => openPopup(e);
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openPopup(e);
    }
  };

  return (
    <>
      {/* Ensure the children are wrapped in a button if they aren't a native clickable element */}
      {typeof children === "string" || !("type" in (children as any)) ? (
        <button
          type="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className="inline-flex items-center justify-center cursor-pointer p-2 rounded-lg transition-transform hover:scale-105"
        >
          {children}
        </button>
      ) : (
        // If it's a React element (like your custom Button)
        <div
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          className="inline-flex w-full cursor-pointer focus:outline-none"
        >
          {children}
        </div>
      )}

      {/* Popup */}
      {showPopup && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 w-64 bg-card p-4 rounded-lg shadow-lg border border-border text-left z-[9999]"
        >
          <button
            onClick={closePopup}
            aria-label="Close notification"
            className="absolute top-2 right-2 text-sm text-muted-foreground hover:text-foreground"
          >
            ✕
          </button>
          <h4 className="text-lg font-semibold text-foreground mb-1">
            Coming soon!
          </h4>
          <p className="text-sm text-muted-foreground">{message}</p>
        </div>
      )}
    </>
  );
};

export default ContactAction;
