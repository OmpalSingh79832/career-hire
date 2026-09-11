"use client";

import { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "Contact",
  email: "",
  phone: "",
  companyName: "",
  howCanWeHelp: "",
  country: "",
  practiceGroup: "",
  zipCode: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <h3 className="font-display text-xl font-bold text-emerald-900">Request received</h3>
        <p className="mt-2 text-sm leading-relaxed text-emerald-700">
          Thanks for reaching out — a member of our team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Field label="Name" name="firstName" value={form.firstName} onChange={handleChange} required />
      <Field label="Organization Name" name="companyName" value={form.companyName} onChange={handleChange} />
      <Field label="Official Email ID" name="email" type="email" value={form.email} onChange={handleChange} required />
      <Field label="Website" name="phone" value={form.phone} onChange={handleChange} />
      <input type="hidden" name="lastName" value={form.lastName} readOnly />
      <div>
        <label className="sr-only" htmlFor="howCanWeHelp">
          Requirement Industry
        </label>
        <select
          name="howCanWeHelp"
          value={form.howCanWeHelp}
          onChange={handleChange}
          id="howCanWeHelp"
          className="h-14 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
        >
          <option value="">Requirement Industry</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Retail">Retail</option>
          <option value="Hospitality">Hospitality</option>
        </select>
      </div>
      <Field label="No. of individuals required" name="country" value={form.country} onChange={handleChange} />
      <Field label="Type of Requirement:" name="practiceGroup" value={form.practiceGroup} onChange={handleChange} />
      <Field label="Preferred Channel for Contact" name="zipCode" value={form.zipCode} onChange={handleChange} />

      <div className="md:col-span-2">
        <label className="sr-only" htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-600 focus:border-brand focus:ring-4 focus:ring-brand/10"
        />
      </div>

      {status === "error" && (
        <p className="md:col-span-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-brand">{errorMsg}</p>
      )}

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
}

function Field({ label, name, value, onChange, type = "text", required = false }) {
  return (
    <div>
      <label className="sr-only" htmlFor={name}>
        {label} {required && <span>*</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        required={required}
        className="h-14 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-600 focus:border-brand focus:ring-4 focus:ring-brand/10"
      />
    </div>
  );
}
