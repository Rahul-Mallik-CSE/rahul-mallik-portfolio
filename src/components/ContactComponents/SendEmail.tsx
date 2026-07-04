"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { LoaderCircle, Send } from "lucide-react";
import { Button } from "../ui/button";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const SendEmail = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [statusMessage, setStatusMessage] = useState<{
    type: "idle" | "success" | "error" | "loading";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage({ type: "loading", message: "Sending your message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const result = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(result.error || "Unable to send message.");
      }

      setFormState(initialFormState);
      setStatusMessage({
        type: "success",
        message:
          result.message ||
          "Message sent successfully. I’ll reply to your email as soon as possible.",
      });
    } catch (error) {
      setStatusMessage({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending the message.",
      });
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-white/80">Your Name</span>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Rahul"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#95EDFF]/60 focus:bg-white/8"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-white/80">Email Address</span>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#95EDFF]/60 focus:bg-white/8"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-white/80">Phone Number</span>
          <input
            type="tel"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            placeholder="+88 01xxxxxxxxx"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#95EDFF]/60 focus:bg-white/8"
          />
        </label>

        <label className="space-y-2 sm:col-span-2">
          <span className="text-sm font-medium text-white/80">Message</span>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Tell me about the project, timeline, and what you need help with."
            required
            rows={6}
            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#95EDFF]/60 focus:bg-white/8"
          />
        </label>
      </div>

      <div className="flex flex-col gap-3">
        <Button
          type="submit"
          className="inline-flex h-auto items-center justify-center gap-2 rounded-xl border border-[#95EDFF]/40 bg-[#95EDFF] px-6 py-3 text-base font-semibold text-black transition-all hover:bg-[#7de5fa]"
          disabled={statusMessage.type === "loading"}
        >
          {statusMessage.type === "loading" ? (
            <LoaderCircle className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5" />
          )}
          <span>{statusMessage.type === "loading" ? "Sending" : "Send Message"}</span>
        </Button>

        {statusMessage.type !== "idle" ? (
          <p
            className={`rounded-xl border px-4 py-3 text-sm ${
              statusMessage.type === "success"
                ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                : statusMessage.type === "error"
                  ? "border-rose-400/30 bg-rose-400/10 text-rose-200"
                  : "border-[#95EDFF]/30 bg-[#95EDFF]/10 text-[#95EDFF]"
            }`}
          >
            {statusMessage.message}
          </p>
        ) : null}
      </div>
    </form>
  );
};

export default SendEmail;
