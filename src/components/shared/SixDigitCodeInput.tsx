import React, { useRef, useState } from 'react';

export interface SixDigitCodeInputProps {
  onComplete?: (code: string) => void;
  onChange?: (code: string) => void;
  disabled?: boolean;
  className?: string;
  hasError?: boolean;
}

export const SixDigitCodeInput: React.FC<SixDigitCodeInputProps> = ({
  onComplete,
  onChange,
  disabled = false,
  className = '',
  hasError = false,
}) => {
  // Always starts with 6 empty boxes. Never displays a pre-filled code.
  const [digits, setDigits] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleDigitChange = (index: number, value: string) => {
    // Only accept numeric input
    const cleanValue = value.replace(/\D/g, '');
    const char = cleanValue.slice(-1); // Take the latest single digit

    const newDigits = [...digits];
    newDigits[index] = char;
    setDigits(newDigits);

    const fullCode = newDigits.join('');
    onChange?.(fullCode);

    // Auto-advance focus
    if (char && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (fullCode.length === 6 && !newDigits.includes('')) {
      onComplete?.(fullCode);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      // Move to previous box on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pasteData) return;

    const newDigits = ['', '', '', '', '', ''];
    for (let i = 0; i < pasteData.length; i++) {
      newDigits[i] = pasteData[i];
    }
    setDigits(newDigits);

    const fullCode = newDigits.join('');
    onChange?.(fullCode);

    // Focus either next empty box or the last box
    const nextIndex = Math.min(pasteData.length, 5);
    inputRefs.current[nextIndex]?.focus();

    if (pasteData.length === 6) {
      onComplete?.(pasteData);
    }
  };

  return (
    <div
      className={`flex items-center justify-center gap-2 sm:gap-3 ${className}`}
      role="group"
      aria-label="6-digit delivery handover verification code"
    >
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={digit}
          disabled={disabled}
          onChange={(e) => handleDigitChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className={`w-12 h-14 sm:w-14 sm:h-16 text-center text-[22px] font-bold rounded-2xl bg-[var(--d-surface-container)] border transition-all select-none
            focus:outline-none focus:ring-2 focus:ring-[#FF8A1F]
            disabled:opacity-50 disabled:cursor-not-allowed
            ${
              hasError
                ? 'border-rose-500 text-rose-500'
                : 'border-[var(--d-border)] text-[var(--d-text-primary)]'
            }
          `}
          aria-label={`Digit ${index + 1} of 6`}
          autoComplete="off"
        />
      ))}
    </div>
  );
};

export default SixDigitCodeInput;

