import React, { useState } from 'react';
import SEO from '../components/ui/SEO';

const CALENDLY_URL = 'https://calendly.com/synergeticconsult/30min';
const WLCRO_ENDPOINT = 'https://synergetic.whitelabelcro.com/api/v1/integrations/clients';
const WLCRO_NEW_LEAD_STATUS_ID = 23152;

type ScoreBucket = 'Under 500' | '500-549' | '550-599' | '600-649' | '650+';
type NegativeCount = '1-5' | '6-10' | '11-20' | '20+';
type EntityType = 'LLC' | 'Corporation' | 'Sole Proprietor' | 'Not yet formed';
type TimeInBusiness = 'Less than 1 year' | '1-2 years' | '3-5 years' | '5+ years';
type Revenue = '$0' | 'Under $5K' | '$5K-$15K' | '$15K-$50K' | '$50K+';
type FundingAmount =
  | 'Under $25K'
  | '$25K-$50K'
  | '$50K-$150K'
  | '$150K-$500K'
  | '$500K+';
type Purpose =
  | 'Working capital'
  | 'Equipment'
  | 'Real estate'
  | 'Inventory'
  | 'Business expansion'
  | 'Other';
type Source =
  | 'Instagram'
  | 'TikTok'
  | 'Facebook'
  | 'Twitter'
  | 'Referral'
  | 'Google'
  | 'Other';

const SCORE_OPTIONS: ScoreBucket[] = [
  'Under 500',
  '500-549',
  '550-599',
  '600-649',
  '650+',
];
const NEGATIVE_TYPES = [
  'Collections',
  'Late Payments',
  'Charge-offs',
  'Judgments',
  'Bankruptcies',
  'Repossessions',
  'Identity Theft',
];

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  equifax: ScoreBucket | '';
  experian: ScoreBucket | '';
  transunion: ScoreBucket | '';
  negativeCount: NegativeCount | '';
  negativeTypes: string[];
  disputedBefore: 'Yes' | 'No' | '';
  entityType: EntityType | '';
  timeInBusiness: TimeInBusiness | '';
  revenue: Revenue | '';
  hasBankAccount: 'Yes' | 'No' | '';
  fundingAmount: FundingAmount | '';
  purpose: Purpose | '';
  source: Source | '';
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  equifax: '',
  experian: '',
  transunion: '',
  negativeCount: '',
  negativeTypes: [],
  disputedBefore: '',
  entityType: '',
  timeInBusiness: '',
  revenue: '',
  hasBankAccount: '',
  fundingAmount: '',
  purpose: '',
  source: '',
};

const labelClass = 'block text-sm font-semibold text-brand-ink mb-2';
const inputClass =
  'w-full bg-white text-brand-ink px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent';

const ApplyPage: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const toggleNegative = (item: string) => {
    setForm((f) => ({
      ...f,
      negativeTypes: f.negativeTypes.includes(item)
        ? f.negativeTypes.filter((n) => n !== item)
        : [...f.negativeTypes, item],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const apiKey = (import.meta.env.VITE_WLCRO_API_KEY as string | undefined) ?? '';

    try {
      await fetch(WLCRO_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': apiKey,
        },
        body: JSON.stringify({
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          phone: form.phone,
          source: 'website_apply_form',
          status_id: WLCRO_NEW_LEAD_STATUS_ID,
        }),
      });
    } catch (err) {
      console.error('WLCRO lead creation failed:', err);
    } finally {
      window.location.href = CALENDLY_URL;
    }
  };

  return (
    <>
      <SEO
        title="Apply — Synergetic Consulting Services"
        description="Tell us about your credit situation before your strategy call."
      />

      <section className="bg-brand-ink text-white pt-32 pb-16">
        <div className="container-wrapper max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
            Before Your Strategy Call
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Tell us about your situation so we can make the most of our time
            together. Takes 5 minutes.
          </p>
        </div>
      </section>

      <section className="bg-brand-bone py-16">
        <div className="container-wrapper max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-card rounded-xl p-6 sm:p-10 space-y-10"
          >
            {/* Personal Info */}
            <fieldset>
              <legend className="text-2xl font-bold text-brand-ink mb-6">
                Personal Info
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className={labelClass}>First Name *</label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => set('firstName', e.target.value)}
                    className={inputClass}
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>Last Name *</label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => set('lastName', e.target.value)}
                    className={inputClass}
                    autoComplete="family-name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                    className={inputClass}
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone *</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    className={inputClass}
                    autoComplete="tel"
                  />
                </div>
              </div>
            </fieldset>

            {/* Credit Situation */}
            <fieldset>
              <legend className="text-2xl font-bold text-brand-ink mb-6">
                Credit Situation
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                {(['equifax', 'experian', 'transunion'] as const).map((bureau) => (
                  <div key={bureau}>
                    <label htmlFor={bureau} className={labelClass}>
                      Estimated {bureau.charAt(0).toUpperCase() + bureau.slice(1)} score
                    </label>
                    <select
                      id={bureau}
                      value={form[bureau]}
                      onChange={(e) => set(bureau, e.target.value as ScoreBucket)}
                      className={inputClass}
                    >
                      <option value="">Select…</option>
                      {SCORE_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <label htmlFor="negativeCount" className={labelClass}>
                  Number of negative items
                </label>
                <select
                  id="negativeCount"
                  value={form.negativeCount}
                  onChange={(e) => set('negativeCount', e.target.value as NegativeCount)}
                  className={inputClass}
                >
                  <option value="">Select…</option>
                  {(['1-5', '6-10', '11-20', '20+'] as NegativeCount[]).map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>

              <div className="mb-5">
                <p className={labelClass}>Types of negatives (select all that apply)</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {NEGATIVE_TYPES.map((t) => (
                    <label key={t} className="flex items-center text-brand-ink cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.negativeTypes.includes(t)}
                        onChange={() => toggleNegative(t)}
                        className="h-5 w-5 mr-3 accent-brand-accent"
                      />
                      <span>{t}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className={labelClass}>Have you disputed before?</p>
                <div className="flex gap-6">
                  {(['Yes', 'No'] as const).map((v) => (
                    <label key={v} className="flex items-center text-brand-ink cursor-pointer">
                      <input
                        type="radio"
                        name="disputedBefore"
                        value={v}
                        checked={form.disputedBefore === v}
                        onChange={(e) => set('disputedBefore', e.target.value as 'Yes' | 'No')}
                        className="h-5 w-5 mr-2 accent-brand-accent"
                      />
                      <span>{v}</span>
                    </label>
                  ))}
                </div>
              </div>
            </fieldset>

            {/* Business Info */}
            <fieldset>
              <legend className="text-2xl font-bold text-brand-ink mb-6">
                Business Info
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div>
                  <label htmlFor="entityType" className={labelClass}>Business entity type</label>
                  <select
                    id="entityType"
                    value={form.entityType}
                    onChange={(e) => set('entityType', e.target.value as EntityType)}
                    className={inputClass}
                  >
                    <option value="">Select…</option>
                    {(['LLC', 'Corporation', 'Sole Proprietor', 'Not yet formed'] as EntityType[]).map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="timeInBusiness" className={labelClass}>Time in business</label>
                  <select
                    id="timeInBusiness"
                    value={form.timeInBusiness}
                    onChange={(e) => set('timeInBusiness', e.target.value as TimeInBusiness)}
                    className={inputClass}
                  >
                    <option value="">Select…</option>
                    {(['Less than 1 year', '1-2 years', '3-5 years', '5+ years'] as TimeInBusiness[]).map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="revenue" className={labelClass}>Estimated monthly revenue</label>
                  <select
                    id="revenue"
                    value={form.revenue}
                    onChange={(e) => set('revenue', e.target.value as Revenue)}
                    className={inputClass}
                  >
                    <option value="">Select…</option>
                    {(['$0', 'Under $5K', '$5K-$15K', '$15K-$50K', '$50K+'] as Revenue[]).map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <p className={labelClass}>Business bank account?</p>
                <div className="flex gap-6">
                  {(['Yes', 'No'] as const).map((v) => (
                    <label key={v} className="flex items-center text-brand-ink cursor-pointer">
                      <input
                        type="radio"
                        name="hasBankAccount"
                        value={v}
                        checked={form.hasBankAccount === v}
                        onChange={(e) => set('hasBankAccount', e.target.value as 'Yes' | 'No')}
                        className="h-5 w-5 mr-2 accent-brand-accent"
                      />
                      <span>{v}</span>
                    </label>
                  ))}
                </div>
              </div>
            </fieldset>

            {/* Goal */}
            <fieldset>
              <legend className="text-2xl font-bold text-brand-ink mb-6">
                Your Goal
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fundingAmount" className={labelClass}>Funding amount seeking</label>
                  <select
                    id="fundingAmount"
                    value={form.fundingAmount}
                    onChange={(e) => set('fundingAmount', e.target.value as FundingAmount)}
                    className={inputClass}
                  >
                    <option value="">Select…</option>
                    {(['Under $25K', '$25K-$50K', '$50K-$150K', '$150K-$500K', '$500K+'] as FundingAmount[]).map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="purpose" className={labelClass}>Purpose</label>
                  <select
                    id="purpose"
                    value={form.purpose}
                    onChange={(e) => set('purpose', e.target.value as Purpose)}
                    className={inputClass}
                  >
                    <option value="">Select…</option>
                    {(['Working capital', 'Equipment', 'Real estate', 'Inventory', 'Business expansion', 'Other'] as Purpose[]).map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="source" className={labelClass}>How did you hear about us?</label>
                  <select
                    id="source"
                    value={form.source}
                    onChange={(e) => set('source', e.target.value as Source)}
                    className={inputClass}
                  >
                    <option value="">Select…</option>
                    {(['Instagram', 'TikTok', 'Facebook', 'Twitter', 'Referral', 'Google', 'Other'] as Source[]).map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>
              </div>
            </fieldset>

            <button
              type="submit"
              disabled={submitting}
              data-cta="apply-submit"
              className="w-full bg-brand-accent text-white text-lg font-semibold py-4 rounded-md hover:bg-brand-accentDark transition-colors disabled:opacity-60"
              style={{ minHeight: 44 }}
            >
              {submitting ? 'Submitting…' : 'Submit & Book My Call'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ApplyPage;
