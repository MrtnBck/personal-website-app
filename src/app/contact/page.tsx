"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log(data);

      if (data.success) {
        setStatus({ type: "success", message: "Email sent successfully!" });
        setFormData({ email: "", name: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.message || "Failed to send email" });
      }
    } catch {
      setStatus({ type: "error", message: "An error occurred while sending the email" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
      <p className="font-space-grotesk text-secondary text-center">
        Open to ideas, conversations, and new opportunities.
      </p>
      <h3 className="text-2xl mt-6 text-center mb-6">Let&apos;s connect!</h3>

      <div className="mb-6">
        <h4 className="text-xl font-bold">Email</h4>
        <p className="text-base font-space-grotesk text-secondary">mbock996@gmail.com</p>
      </div>
      <div className="mb-6">
        <h4 className="text-xl font-bold">LinkedIn</h4>
        <a
          href="https://linkedin.com/in/martinbock96"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-space-grotesk text-secondary"
        >
          Link
        </a>
      </div>
      <div className="mb-6">
        <h4 className="text-xl font-bold">GitHub</h4>
        <a
          href="https://github.com/MrtnBck"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-space-grotesk text-secondary"
        >
          Link
        </a>
      </div>

      <hr className="my-8 border-t border-secondary" />

      <div>
        <h3 className="text-2xl mt-6 text-center mb-6">Send me an email here?</h3>
        <form className="flex flex-col max-w-md mx-auto" onSubmit={sendEmail}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="mb-4 p-2 border border-secondary rounded"
            required
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="mb-4 p-2 border border-secondary rounded"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows={4}
            className="mb-4 p-2 border border-secondary rounded"
            required
          />

          {status.message && (
            <div
              className={`mb-4 p-2 rounded ${
                status.type === "success" ? "bg-emerald text-background" : "bg-red-500 text-white"
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`mt-4 px-4 py-2 self-end rounded transition-colors ${
              isLoading
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-emerald text-background cursor-pointer hover:bg-emerald/90"
            }`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
