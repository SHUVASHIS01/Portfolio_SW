"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email", value: "basakshuvashis@gmail.com", href: "mailto:basakshuvashis@gmail.com" },
  { icon: Phone, label: "Phone", value: "+880 1709 363615", href: "tel:+8801709363615" },
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: null },
];

const SOCIAL_ITEMS = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/SHUVASHIS01" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shuvashis-basak-177425247/" },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:basakshuvashis@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-faint outline-none transition-all focus:border-accent/60 focus:bg-white/[0.05]";

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0%",
          right: "5%",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.03) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="mx-auto max-w-6xl w-full relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* ── LEFT: CONTACT DETAILS ── */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="section-eyebrow">// Connect</span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-ink display italic leading-tight">
                Let&apos;s build something <span className="text-accent-gradient">impactful.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Open to full-time engineering roles, internships, and exciting projects. Drop me a message — I reply within 24 hours.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="flex flex-col gap-3 mt-4">
              {CONTACT_ITEMS.map((item, idx) => {
                const Icon = item.icon;
                const card = (
                  <div className="glass-soft flex items-center gap-4 rounded-xl px-4 py-3 border border-white/5 transition-colors hover:border-white/10">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[10px] uppercase tracking-wide text-faint font-semibold">
                        {item.label}
                      </div>
                      <div className="text-sm font-semibold text-ink mt-0.5">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={idx} href={item.href} className="block cursor-pointer">
                    {card}
                  </a>
                ) : (
                  <div key={idx}>{card}</div>
                );
              })}
            </div>

            {/* Social Links Row */}
            <div className="mt-4">
              <h4 className="text-xs uppercase tracking-wider text-faint font-semibold mb-3">
                Find me online
              </h4>
              <div className="flex gap-3">
                {SOCIAL_ITEMS.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-soft flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm text-ink transition-colors hover:border-accent/40 border border-white/5 cursor-pointer"
                    >
                      <Icon className="h-4 w-4 text-accent" />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── RIGHT: CONTACT FORM ── */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8 flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs text-muted font-medium select-none">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs text-muted font-medium select-none">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs text-muted font-medium select-none">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Collaboration opportunity..."
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs text-muted font-medium select-none">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your idea, project, or opportunity..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="btn-primary mt-3 w-full justify-center text-center select-none"
              >
                {submitted ? "Message Drafted ✓" : "Send message"}
              </button>

              <p className="mt-1 text-center text-[10px] text-faint font-medium">
                This opens your local email app with the message ready to send.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
