import React, { useState } from 'react';

const BEEHIIV_PUBLICATION_ID = 'pub_8137fff3-d98e-4028-babb-6327d52bbf05';
const BEEHIIV_ENDPOINT = `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`;

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface BeehiivFormProps {
  utmMedium: string;
  submitLabel?: string;
  successMessage?: string;
  variant?: 'dark' | 'light';
}

const BeehiivForm: React.FC<BeehiivFormProps> = ({
  utmMedium,
  submitLabel = 'Subscribe',
  successMessage = "✓ You're in. Check your inbox.",
  variant = 'dark',
}) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');

    try {
      const res = await fetch(BEEHIIV_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          first_name: firstName,
          utm_source: 'website',
          utm_medium: utmMedium,
        }),
      });
      if (!res.ok) throw new Error(`Beehiiv responded ${res.status}`);
      setStatus('success');
    } catch (err) {
      console.error('Beehiiv subscribe failed:', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        className={`text-center font-semibold text-lg ${
          variant === 'dark' ? 'text-white' : 'text-brand-ink'
        }`}
      >
        {successMessage}
      </div>
    );
  }

  const inputClasses =
    'w-full bg-brand-bone text-brand-ink placeholder-brand-slate/70 px-4 py-3 rounded-md border border-brand-bone focus:outline-none focus:ring-2 focus:ring-brand-accent';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          name="first_name"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={inputClasses}
          autoComplete="given-name"
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={inputClasses}
          autoComplete="email"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto px-7 py-3 bg-brand-accent text-white font-semibold rounded-md hover:bg-brand-accentDark transition-colors disabled:opacity-60"
        style={{ minHeight: 44 }}
      >
        {status === 'submitting' ? 'Sending…' : submitLabel}
      </button>

      {status === 'error' && (
        <p className="text-brand-accent font-semibold">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
};

export default BeehiivForm;
