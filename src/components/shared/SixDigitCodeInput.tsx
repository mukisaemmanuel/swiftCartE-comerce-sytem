import React, { useRef, useEffect } from 'react';

export interface SixDigitCodeInputProps {
  value?: string;
  onChange?: (val: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  error?: boolean;
}

export const SixDigitCodeInput: React.FC<SixDigitCodeInputProps> = ({
  value = '',
  onChange = () => {},
  disabled = false,
  autoFocus = true,
  error = false,
}) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const safeValue = value || '';
  const digits = Array.from({ length: 6 }, (_, i) => safeValue[i] || '');

  useEffect(() => {
    if (autoFocus && inputsRef.current[0]) {
      inputsRef.current[0]?.focus();
    }
  }, [autoFocus]);

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const char = e.target.value.replace(/\D/g, '').slice(-1);
    const newDigits = [...digits];
    newDigits[index] = char;
    const combined = newDigits.join('').slice(0, 6);
    onChange(combined);

    if (char && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (!digits[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pasted) {
      onChange(pasted);
      const nextIdx = Math.min(pasted.length, 5);
      inputsRef.current[nextIdx]?.focus();
    }
  };

  return (
    <div className="flex items-center justify-between gap-2 max-w-sm mx-auto">
      {digits.map((digit, idx) => (
        <input
          key={idx}
          ref={(el) => {
            inputsRef.current[idx] = el;
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={digit}
          disabled={disabled}
          onChange={(e) => handleChange(idx, e)}
          onKeyDown={(e) => handleKeyDown(idx, e)}
          onPaste={handlePaste}
          className={`w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold rounded-xl border-2 transition-all outline-none focus:ring-4 ${
            error
              ? 'border-red-400 focus:border-red-500 focus:ring-red-100 bg-red-50 text-red-900'
              : digit
              ? 'border-[#FF8A1F] bg-white text-[#0E1B4D] focus:ring-orange-100'
              : 'border-slate-200 bg-white text-[#0E1B4D] focus:border-[#FF8A1F] focus:ring-orange-100'
          }`}
          aria-label={`Digit ${idx + 1} of 6`}
        />
      ))}
    </div>
  );
};

export default SixDigitCodeInput;
