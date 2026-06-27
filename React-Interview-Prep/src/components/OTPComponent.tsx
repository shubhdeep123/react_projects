import React, { useRef, useState } from "react";

const OTP_LENGTH = 6;

export default function OTPComponent() {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const updateOtp = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);

    setOtp((prev) => {
      const updated = [...prev];
      updated[index] = digit;
      return updated;
    });

    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key !== "Backspace") return;

    if (otp[index]) {
      setOtp((prev) => {
        const updated = [...prev];
        updated[index] = "";
        return updated;
      });
      return;
    }

    if (index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH)
      .split("");

    if (!pasted.length) return;

    const updated = Array(OTP_LENGTH).fill("");

    pasted.forEach((digit, index) => {
      updated[index] = digit;
    });

    setOtp(updated);

    const lastIndex = Math.min(pasted.length - 1, OTP_LENGTH - 1);
    inputRefs.current[lastIndex]?.focus();
  };

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          value={digit}
          onChange={(e) => updateOtp(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          maxLength={1}
          inputMode="numeric"
          style={{
            width: 50,
            height: 50,
            textAlign: "center",
            fontSize: 22,
          }}
        />
      ))}
    </div>
  );
}
