"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, BookOpen, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email", value: "basakshuvashis@gmail.com", href: "mailto:basakshuvashis@gmail.com" },
  { icon: Phone, label: "Phone", value: "+880 1709 363615", href: "tel:+8801709363615" },
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: null },
  { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/shuvashis-basak-177425247", href: "https://www.linkedin.com/in/shuvashis-basak-177425247/" },
  { icon: FaGithub, label: "GitHub", value: "github.com/SHUVASHIS01", href: "https://github.com/SHUVASHIS01" },
  { icon: BookOpen, label: "Blog", value: "hashnode.com/@SHUVASHIS01", href: "https://hashnode.com/@SHUVASHIS01" },
];

const SOCIAL_ICONS = [
  { icon: FaGithub, href: "https://github.com/SHUVASHIS01", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/shuvashis-basak-177425247/", label: "LinkedIn" },
  { icon: BookOpen, href: "https://hashnode.com/@SHUVASHIS01", label: "Hashnode" },
];

const FIELDS = [
  { id: "name", label: "Full Name", type: "text" },
  { id: "email", label: "Email Address", type: "email" },
  { id: "subject", label: "Subject", type: "text" },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const mailtoUrl = `mailto:basakshuvashis@gmail.com?subject=${encodeURIComponent(formData.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailtoUrl);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const fieldStyle = (id: string) => ({
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${focused === id ? "rgba(0,212,255,0.6)" : "rgba(255,255,255,0.1)"}`,
    boxShadow: focused === id ? "0 0 0 3px rgba(0,212,255,0.10)" : "none",
    color: "rgba(255,255,255,0.9)",
    transition: "all 0.2s ease",
  });

  return (
    <section id="contact" className="relative py-28 lg:py-36">
      {/* Glow */}
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)", filter: "blur(100px)" }} />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Label */}
        <p className="text-xs font-mono tracking-[0.15em] uppercase mb-4" style={{ color: "#00d4ff" }}>
          // Contact
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* ── LEFT ── */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: "rgba(255,255,255,0.95)" }}>
                Let&apos;s build something{" "}
                <span style={{ background: "linear-gradient(135deg, #00d4ff, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  impactful together.
                </span>
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Open to full-time roles, internships, and exciting projects. Drop me a message — I reply within 24 hours.
              </p>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div
                    className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200 hover:bg-white/5"
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)" }}
                    >
                      <Icon size={15} color="#00d4ff" />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{item.label}</p>
                      <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIAL_ICONS.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.6)",
                    }}
                    aria-label={s.label}
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {FIELDS.map((field, i) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="relative"
              >
                <label
                  htmlFor={field.id}
                  className="absolute left-4 text-xs font-medium pointer-events-none transition-all duration-200 z-10"
                  style={{
                    top: focused === field.id || formData[field.id as keyof typeof formData] ? "8px" : "50%",
                    transform: focused === field.id || formData[field.id as keyof typeof formData] ? "translateY(0)" : "translateY(-50%)",
                    fontSize: focused === field.id || formData[field.id as keyof typeof formData] ? "10px" : "13px",
                    color: focused === field.id ? "#00d4ff" : "rgba(255,255,255,0.4)",
                  }}
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  required
                  value={formData[field.id as keyof typeof formData]}
                  onChange={(e) => setFormData((p) => ({ ...p, [field.id]: e.target.value }))}
                  onFocus={() => setFocused(field.id)}
                  onBlur={() => setFocused(null)}
                  className="w-full rounded-xl outline-none text-sm pt-6 pb-3 px-4"
                  style={fieldStyle(field.id)}
                />
              </motion.div>
            ))}

            {/* Textarea */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24, duration: 0.4 }}
            >
              <label
                htmlFor="message"
                className="absolute left-4 top-4 text-xs font-medium pointer-events-none transition-all duration-200"
                style={{
                  fontSize: focused === "message" || formData.message ? "10px" : "13px",
                  color: focused === "message" ? "#00d4ff" : "rgba(255,255,255,0.4)",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className="w-full rounded-xl outline-none text-sm pt-8 pb-4 px-4 resize-none"
                style={{ ...fieldStyle("message"), minHeight: 140 }}
              />
            </motion.div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,212,255,0.35)" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-[#0a0a0f] transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #00d4ff, #00b4d8)", boxShadow: "0 0 20px rgba(0,212,255,0.2)" }}
            >
              <Send size={15} />
              {submitted ? "Message Sent! ✓" : "Send Message →"}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
