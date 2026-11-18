"use client";

import { useState, type FormEvent } from "react";
import { classes, classify, minAges } from "../data";

type FormState = {
  studentName: string;
  dob: string;
  gender: string;
  classFor: string;
  parentName: string;
  contact: string;
  city: string;
  previousSchool: string;
  note: string;
};

const empty: FormState = {
  studentName: "",
  dob: "",
  gender: "",
  classFor: "",
  parentName: "",
  contact: "",
  city: "",
  previousSchool: "",
  note: "",
};

function ageOnReference(dob: string): number | null {
  if (!dob) return null;
  const birth = new Date(`${dob}T00:00:00`);
  if (Number.isNaN(birth.getTime())) return null;
  const ref = new Date(2027, 2, 31);
  let age = ref.getFullYear() - birth.getFullYear();
  const monthDiff = ref.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && ref.getDate() < birth.getDate()))
    age -= 1;
  return age;
}

const stepNames = ["Student", "Parent", "Review"];

export default function AdmissionForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(empty);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const age = ageOnReference(form.dob);
  const classIndex = classes.indexOf(form.classFor);
  const minAge = classIndex >= 0 ? minAges[classIndex] : null;
  const ageNote =
    age !== null && minAge !== null && age < minAge
      ? `Your child will be ${age} years old on 31 March 2027. The usual minimum age for ${form.classFor} is ${minAge}. You can still apply, and our team will guide you.`
      : "";

  function validate(current: number): string {
    if (current === 1) {
      if (!form.studentName.trim()) return "Please enter the student's name.";
      if (!form.dob) return "Please enter the date of birth.";
      if (age === null || age < 2 || age > 18)
        return "Please check the date of birth.";
      if (!form.classFor)
        return "Please choose the class you are applying for.";
    }
    if (current === 2) {
      if (!form.parentName.trim())
        return "Please enter the parent or guardian name.";
      if (!classify(form.contact))
        return "Please enter a valid email address or a 10-digit mobile number.";
    }
    return "";
  }

  function goNext() {
    const message = validate(step);
    setError(message);
    if (!message) setStep((s) => Math.min(s + 1, 3));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = validate(1) || validate(2);
    if (message) {
      setError(message);
      return;
    }
    setError("");
    setLoading(true);

    const kind = classify(form.contact);
    const payload: Record<string, unknown> = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      subject: "New Admission Enquiry - Vidyanjali International School (Demo)",
      student_name: form.studentName,
      date_of_birth: form.dob,
      gender: form.gender || "Not stated",
      class_applied: form.classFor,
      parent_name: form.parentName,
      contact: form.contact,
      city: form.city,
      previous_school: form.previousSchool,
      message: form.note,
    };
    if (kind === "email") payload.email = form.contact.trim();
    if (kind === "phone") payload.phone = form.contact.trim();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (result.success) {
        setDone(true);
        setForm(empty);
      } else {
        setError(
          result.message ||
            "Unable to send your application. Please try again.",
        );
      }
    } catch {
      setError("Unable to send your application. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const fieldClass =
    "w-full rounded-2xl border-2 border-line bg-white px-4 py-3.5 text-base outline-none transition placeholder:text-ink/40 focus:border-royal focus:ring-4 focus:ring-royal/10";
  const labelClass = "mb-2 block text-sm font-bold";

  if (done) {
    return (
      <div className="rounded-3xl bg-sun-soft p-8 text-center" role="status">
        <p className="text-5xl">🎉</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-royal">
          Thank you!
        </h2>
        <p className="mt-3 text-base leading-7 text-slate">
          We have received your application. Our admissions team will contact
          you soon to arrange the next step.
        </p>
        <button
          type="button"
          onClick={() => {
            setDone(false);
            setStep(1);
          }}
          className="mt-6 rounded-full bg-royal px-7 py-3.5 text-sm font-bold text-white transition hover:bg-royal-dark"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ol
        className="mb-8 flex items-center gap-2"
        aria-label="Application steps"
      >
        {stepNames.map((name, index) => {
          const number = index + 1;
          const active = step === number;
          const complete = step > number;
          return (
            <li
              key={name}
              className="flex flex-1 items-center gap-2"
              aria-current={active ? "step" : undefined}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  active
                    ? "bg-royal text-white"
                    : complete
                      ? "bg-leaf text-white"
                      : "bg-sky text-slate"
                }`}
              >
                {complete ? "✓" : number}
              </span>
              <span
                className={`hidden text-sm font-bold sm:block ${active ? "text-royal" : "text-slate"}`}
              >
                {name}
              </span>
              {number < 3 && (
                <span
                  className="h-0.5 flex-1 rounded bg-line"
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>

      {step === 1 && (
        <div className="space-y-5">
          <h2 className="font-display text-2xl font-semibold text-royal">
            Student details
          </h2>

          <div>
            <label htmlFor="ad-student" className={labelClass}>
              Student&apos;s full name
            </label>
            <input
              id="ad-student"
              type="text"
              value={form.studentName}
              onChange={(e) => update("studentName", e.target.value)}
              autoComplete="off"
              placeholder="Enter the student's name"
              className={fieldClass}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="ad-dob" className={labelClass}>
                Date of birth
              </label>
              <input
                id="ad-dob"
                type="date"
                value={form.dob}
                min="2008-01-01"
                max="2026-12-31"
                onChange={(e) => update("dob", e.target.value)}
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="ad-gender" className={labelClass}>
                Gender (optional)
              </label>
              <select
                id="ad-gender"
                value={form.gender}
                onChange={(e) => update("gender", e.target.value)}
                className={fieldClass}
              >
                <option value="">Prefer not to say</option>
                <option value="Girl">Girl</option>
                <option value="Boy">Boy</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="ad-class" className={labelClass}>
              Applying for
            </label>
            <select
              id="ad-class"
              value={form.classFor}
              onChange={(e) => update("classFor", e.target.value)}
              className={fieldClass}
            >
              <option value="">Select a class</option>
              {classes.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
            {minAge !== null && (
              <p className="mt-2 text-xs text-slate">
                Usual minimum age for {form.classFor}: {minAge} years as on 31
                March 2027 (sample rule).
              </p>
            )}
          </div>

          {ageNote && (
            <p
              className="rounded-2xl bg-sun-soft p-4 text-sm leading-6 text-royal-dark"
              role="status"
            >
              {ageNote}
            </p>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <h2 className="font-display text-2xl font-semibold text-royal">
            Parent or guardian
          </h2>

          <div>
            <label htmlFor="ad-parent" className={labelClass}>
              Parent or guardian name
            </label>
            <input
              id="ad-parent"
              type="text"
              value={form.parentName}
              onChange={(e) => update("parentName", e.target.value)}
              autoComplete="name"
              placeholder="Enter your name"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="ad-contact" className={labelClass}>
              Email or Phone Number
            </label>
            <input
              id="ad-contact"
              type="text"
              value={form.contact}
              onChange={(e) => update("contact", e.target.value)}
              autoComplete="email"
              placeholder="Email address or 10-digit mobile number"
              className={fieldClass}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="ad-city" className={labelClass}>
                City (optional)
              </label>
              <input
                id="ad-city"
                type="text"
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                placeholder="For example, Pune"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="ad-prev" className={labelClass}>
                Previous school (optional)
              </label>
              <input
                id="ad-prev"
                type="text"
                value={form.previousSchool}
                onChange={(e) => update("previousSchool", e.target.value)}
                placeholder="School name"
                className={fieldClass}
              />
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5">
          <h2 className="font-display text-2xl font-semibold text-royal">
            Review and send
          </h2>

          <dl className="divide-y divide-line rounded-2xl border-2 border-line text-sm">
            {[
              ["Student", form.studentName],
              ["Date of birth", form.dob],
              ["Class", form.classFor],
              ["Parent", form.parentName],
              ["Contact", form.contact],
              ["City", form.city || "Not given"],
              ["Previous school", form.previousSchool || "Not given"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 px-4 py-3">
                <dt className="font-bold text-slate">{label}</dt>
                <dd className="text-right font-semibold">{value}</dd>
              </div>
            ))}
          </dl>

          <div>
            <label htmlFor="ad-note" className={labelClass}>
              Message (optional)
            </label>
            <textarea
              id="ad-note"
              rows={4}
              value={form.note}
              onChange={(e) => update("note", e.target.value)}
              placeholder="Anything you would like us to know"
              className={`${fieldClass} resize-y`}
            />
          </div>
        </div>
      )}

      {error && (
        <p
          role="alert"
          className="mt-5 rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700"
        >
          {error}
        </p>
      )}

      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => {
              setError("");
              setStep(step - 1);
            }}
            className="rounded-full border-2 border-line px-6 py-3 text-sm font-bold text-slate transition hover:border-royal hover:text-royal"
          >
            ← Back
          </button>
        ) : (
          <span />
        )}

        {step < 3 ? (
          <button
            type="button"
            onClick={goNext}
            className="rounded-full bg-royal px-8 py-3.5 text-sm font-bold text-white transition hover:bg-royal-dark"
          >
            Next →
          </button>
        ) : (
          <button
            type="button"
            disabled={loading}
            onClick={(e: any) => handleSubmit(e)}
            className="rounded-full bg-sun px-8 py-3.5 text-sm font-bold text-royal-dark transition hover:brightness-95 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Application"}
          </button>
        )}
      </div>
    </form>
  );
}
