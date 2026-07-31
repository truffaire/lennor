"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const INTERESTS = [
  "MR Plywood", "BWR Plywood", "BWP Plywood", "Marine Plywood",
  "Block Boards", "Flush Doors", "Bulk pre-cut order", "Dealership enquiry",
];

const WHATSAPP_NUMBER = "917760778886";

/**
 * Quote request form.
 *
 * Submits to Formspree (emails the enquiry to Lennor) and keeps the original
 * WhatsApp hand-off as a secondary action.
 *
 * NOTE: the form id is intentionally NOT "qform" — main.js binds a WhatsApp
 * submit handler to #qform, which would double-fire against Formspree. The
 * chip toggling that main.js used to do is handled here in React instead.
 */
export default function ContactForm() {
  const [state, handleSubmit] = useForm("xbdnebdy");
  const [fields, setFields] = useState({ name: "", phone: "", city: "", email: "", message: "" });
  const [interests, setInterests] = useState([]);
  const [invalid, setInvalid] = useState({});

  const set = (k) => (e) => setFields((f) => ({ ...f, [k]: e.target.value }));

  const toggleInterest = (label) =>
    setInterests((cur) =>
      cur.includes(label) ? cur.filter((i) => i !== label) : [...cur, label]
    );

  // Same rules the previous vanilla handler enforced.
  const validate = () => {
    const next = {
      name: fields.name.trim().length < 2,
      phone: !/^[+\d][\d\s-]{7,15}$/.test(fields.phone.trim()),
    };
    setInvalid(next);
    return !next.name && !next.phone;
  };

  const onSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
      return;
    }
    handleSubmit(e);
  };

  const whatsappHref = () => {
    const lines = [
      "Hello Lennor Ply! I would like a quote.",
      `Name: ${fields.name.trim()}`,
      `Phone: ${fields.phone.trim()}`,
    ];
    if (fields.city.trim()) lines.push(`City: ${fields.city.trim()}`);
    if (interests.length) lines.push(`Interested in: ${interests.join(", ")}`);
    if (fields.message.trim()) lines.push(`Details: ${fields.message.trim()}`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  if (state.succeeded) {
    return (
      <div className="qform is-sent" style={{ marginTop: "clamp(26px,3.4vh,44px)" }}>
        <p className="qform__success body" role="status">
          <strong>Thank you.</strong> Your enquiry has reached us — we&apos;ll reply
          within one working day. Need it sooner? Call{" "}
          <a className="link-line" href="tel:+917760778886">+91 77607 78886</a> or{" "}
          <a className="link-line" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
            message us on WhatsApp
          </a>.
        </p>
      </div>
    );
  }

  return (
    <form
      className="qform"
      id="quote-form"
      style={{ marginTop: "clamp(26px,3.4vh,44px)" }}
      onSubmit={onSubmit}
      noValidate
      data-reveal
    >
      <div className="qform__grid">
        <div className={`field${invalid.name ? " is-invalid" : ""}`}>
          <label htmlFor="f-name">Your name *</label>
          <input type="text" id="f-name" name="name" autoComplete="name" placeholder="Full name" value={fields.name} onChange={set("name")} required />
          <span className="err">Please enter your name.</span>
        </div>
        <div className={`field${invalid.phone ? " is-invalid" : ""}`}>
          <label htmlFor="f-phone">Phone *</label>
          <input type="tel" id="f-phone" name="phone" autoComplete="tel" placeholder="+91 ..." value={fields.phone} onChange={set("phone")} required />
          <span className="err">Please enter a valid phone number.</span>
        </div>
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input type="email" id="f-email" name="email" autoComplete="email" placeholder="you@company.com" value={fields.email} onChange={set("email")} />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="err" style={{ display: "block" }} />
        </div>
        <div className="field">
          <label htmlFor="f-city">City / project location</label>
          <input type="text" id="f-city" name="city" autoComplete="address-level2" placeholder="e.g. Hassan, Bengaluru, Mysuru" value={fields.city} onChange={set("city")} />
        </div>
        <div className="field field--full">
          <label id="interest-label">I&rsquo;m interested in</label>
          <div className="ichips" role="group" aria-labelledby="interest-label">
            {INTERESTS.map((i) => (
              <button
                type="button"
                className="ichip"
                aria-pressed={interests.includes(i)}
                key={i}
                onClick={() => toggleInterest(i)}
              >
                {i}
              </button>
            ))}
          </div>
          {/* carried to Formspree as a single readable field */}
          <input type="hidden" name="interested in" value={interests.join(", ")} />
        </div>
        <div className="field field--full">
          <label htmlFor="f-msg">Project details</label>
          <textarea id="f-msg" name="message" placeholder="Quantities, sizes, timelines — anything that helps us quote faster." value={fields.message} onChange={set("message")}></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} className="err" style={{ display: "block" }} />
        </div>
      </div>

      <input type="hidden" name="_subject" value="New quote request — lennorply.com" />

      <div className="qform__foot">
        <button type="submit" className="btn" data-magnetic="0.15" disabled={state.submitting}>
          <span>{state.submitting ? "Sending…" : "Send enquiry"}</span>
          <span className="btn__arr">→</span>
        </button>
        <p className="small qform__note">
          Or{" "}
          <a className="link-line" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
            send it on WhatsApp
          </a>{" "}
          instead — we reply within one working day either way.
        </p>
        <noscript>
          <p className="small" style={{ marginTop: "12px" }}>
            This form requires JavaScript. Please call <a href="tel:+917760778886">+91 77607 78886</a> or <a href="https://wa.me/917760778886">message us on WhatsApp</a> directly.
          </p>
        </noscript>
      </div>

      <ValidationError errors={state.errors} className="err" style={{ display: "block", marginTop: "12px" }} />
    </form>
  );
}
