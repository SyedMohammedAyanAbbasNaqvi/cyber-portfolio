import React, { useState, useRef } from "react";
import type { ContactConfig } from "../../types/dossier";
import { Terminal, Send, AlertTriangle, Mail } from "lucide-react";

export interface TerminalContactFormProps {
  contact: ContactConfig;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

export const TerminalContactForm: React.FC<TerminalContactFormProps> = ({ contact, inputRef }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submissionState, setSubmissionState] = useState<"IDLE" | "SUBMITTING" | "FALLBACK" | "SUCCESS">("IDLE");

  const localNameRef = useRef<HTMLInputElement>(null);
  const nameInputRef = inputRef || localNameRef;

  const validateForm = (): boolean => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = "NAME REQUIRED";
    }

    if (!email.trim()) {
      newErrors.email = "EMAIL REQUIRED";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "ENTER A VALID EMAIL FORMAT";
    }

    if (!message.trim()) {
      newErrors.message = "MESSAGE REQUIRED";
    } else if (message.trim().length < 10) {
      newErrors.message = "MESSAGE TOO SHORT (MIN 10 CHARACTERS)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const recipient = contact.email || "ayanabbas78677@gmail.com";
    const mailSubject = subject.trim() || "Portfolio Contact // New Transmission";
    const mailBody = `TRANSMISSION TERMINAL // OPEN A CHANNEL\n\nNAME://\n${name}\n\nEMAIL://\n${email}\n\nSUBJECT (OPTIONAL)://\n${subject || "N/A"}\n\nMESSAGE://\n${message}`;

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    setSubmissionState("SUCCESS");
  };


  return (
    <div className="terminal-contact-form">
      <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "var(--font-size-xs)", color: "var(--color-accent)", fontWeight: "bold", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
        <Terminal size={14} />
        <span>TRANSMISSION TERMINAL // OPEN A CHANNEL</span>
      </div>

      <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        
        {/* Name Input */}
        <div className="terminal-input-group">
          <label htmlFor="contact-name" className="terminal-input-label">
            <span>NAME://</span>
          </label>
          <input
            ref={nameInputRef}
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className={`terminal-input-field ${errors.name ? "has-error" : ""}`}
            autoComplete="name"
          />
          {errors.name && <div className="terminal-field-error">ERROR: {errors.name}</div>}
        </div>

        {/* Email Input */}
        <div className="terminal-input-group">
          <label htmlFor="contact-email" className="terminal-input-label">
            <span>EMAIL://</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@organization.com"
            className={`terminal-input-field ${errors.email ? "has-error" : ""}`}
            autoComplete="email"
          />
          {errors.email && <div className="terminal-field-error">ERROR: {errors.email}</div>}
        </div>

        {/* Subject Input */}
        <div className="terminal-input-group">
          <label htmlFor="contact-subject" className="terminal-input-label">
            <span>SUBJECT (OPTIONAL)://</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Project inquiry / Role discussion"
            className="terminal-input-field"
          />
        </div>

        {/* Message Input */}
        <div className="terminal-input-group">
          <label htmlFor="contact-message" className="terminal-input-label">
            <span>MESSAGE://</span>
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className={`terminal-input-field ${errors.message ? "has-error" : ""}`}
            style={{ resize: "vertical" }}
          />
          {errors.message && <div className="terminal-field-error">ERROR: {errors.message}</div>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submissionState === "SUBMITTING"}
          style={{
            fontFamily: "var(--font-family-mono)",
            fontSize: "var(--font-size-sm)",
            fontWeight: 800,
            padding: "14px 24px",
            backgroundColor: "var(--color-accent)",
            color: "var(--color-bg)",
            border: "2px solid var(--color-accent)",
            boxShadow: "4px 4px 0px var(--color-surface-high)",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-3)",
            marginTop: "var(--space-2)",
            minHeight: "48px",
          }}
        >
          <Send size={16} />
          <span>{submissionState === "SUBMITTING" ? "TRANSMITTING..." : ">> TRANSMIT MESSAGE"}</span>
        </button>
      </form>

      {/* Submission Feedback State */}
      {submissionState === "FALLBACK" && (
        <div className="transmission-status-box fallback">
          <div style={{ fontWeight: "bold", display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
            <AlertTriangle size={14} />
            <span>TRANSMISSION CHANNEL NOT CONFIGURED</span>
          </div>
          <p>
            Direct contact channel unpopulated in current configuration. Please reach out directly or check back shortly.
          </p>
        </div>
      )}

      {submissionState === "SUCCESS" && (
        <div className="transmission-status-box success">
          <div style={{ fontWeight: "bold", display: "flex", alignItems: "center", gap: "6px" }}>
            <Mail size={14} />
            <span>MAIL CLIENT TRIGGERED // TRANSMISSION PREPARED</span>
          </div>
        </div>
      )}

    </div>
  );
};
