/**
 * CIVIC PRECISION — contact capture uses an explicit, accessible form and a truthful mail client handoff.
 */
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";

const options = [
  "Government / Teaming",
  "Staffing (IT)",
  "Healthcare Staffing",
  "Custom Software",
  "AI & Governance",
  "Partnership",
  "Other",
];

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState(options[0]);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = `${topic} inquiry from ${String(form.get("name") || "website visitor")}`;
    const body = [
      `Name: ${String(form.get("name") || "")}`,
      `Organization: ${String(form.get("organization") || "")}`,
      `Email: ${String(form.get("email") || "")}`,
      `Phone: ${String(form.get("phone") || "")}`,
      `Inquiry: ${topic}`,
      "",
      String(form.get("message") || ""),
    ].join("\n");
    setSubmitted(true);
    window.location.href = `mailto:info@emfoi.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  if (submitted) {
    return <div className="form-success"><CheckCircle2 size={28} /><div><strong>Your email client is ready.</strong><p>Send the prepared message to share your request with the EMFOI team.</p></div></div>;
  }

  return (
    <form className={`contact-form ${compact ? "contact-form-compact" : ""}`} onSubmit={submit}>
      <div className="form-grid">
        <label><span>Name</span><input name="name" required autoComplete="name" placeholder="Your name" /></label>
        <label><span>Work email</span><input name="email" type="email" required autoComplete="email" placeholder="name@organization.com" /></label>
        {!compact && <label><span>Organization</span><input name="organization" autoComplete="organization" placeholder="Organization name" /></label>}
        {!compact && <label><span>Phone <em>optional</em></span><input name="phone" type="tel" autoComplete="tel" placeholder="Phone number" /></label>}
      </div>
      <label><span>How can we help?</span><select value={topic} onChange={(e) => setTopic(e.target.value)} aria-label="Inquiry type">{options.map((option) => <option key={option}>{option}</option>)}</select></label>
      <label><span>Message</span><textarea name="message" required placeholder="Tell us about the program, role, or outcome you need support with." rows={compact ? 3 : 5} /></label>
      <div className="form-footer"><p>Submitting opens a pre-addressed email to <a href="mailto:info@emfoi.com">info@emfoi.com</a>.</p><button className="button button-primary" type="submit">Start the conversation <ArrowRight size={16} /></button></div>
    </form>
  );
}
