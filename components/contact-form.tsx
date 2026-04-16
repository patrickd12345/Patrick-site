"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  email: string;
};

type Status = "idle" | "sent";

export function ContactForm({ email }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() ?? "";
    const senderEmail = formData.get("senderEmail")?.toString().trim() ?? "";
    const subject = formData.get("subject")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    const body = [
      `Name: ${name}`,
      `Sender Email: ${senderEmail}`,
      "",
      message,
    ].join("\n");

    const href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject || "Project Inquiry")}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="surface rounded-2xl p-6">
      <h2 className="text-xl font-semibold">Start a Conversation</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        This form opens your email client with a pre-filled message. A direct
        email is also available below.
      </p>

      <div className="mt-5 grid gap-4">
        <label className="grid gap-1.5 text-sm">
          <span className="text-muted">Name</span>
          <input
            required
            name="name"
            autoComplete="name"
            className="rounded-xl border border-subtle bg-surface px-3 py-2 outline-none transition-colors focus:border-accent"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="text-muted">Email</span>
          <input
            required
            type="email"
            name="senderEmail"
            autoComplete="email"
            className="rounded-xl border border-subtle bg-surface px-3 py-2 outline-none transition-colors focus:border-accent"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="text-muted">Subject</span>
          <input
            required
            name="subject"
            className="rounded-xl border border-subtle bg-surface px-3 py-2 outline-none transition-colors focus:border-accent"
          />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="text-muted">Message</span>
          <textarea
            required
            name="message"
            rows={6}
            className="rounded-xl border border-subtle bg-surface px-3 py-2 outline-none transition-colors focus:border-accent"
          />
        </label>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-full border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-colors hover:bg-accent-strong"
        >
          Compose Email
        </button>
        {status === "sent" ? (
          <p className="text-sm text-muted">Email draft opened in your client.</p>
        ) : null}
      </div>
    </form>
  );
}
