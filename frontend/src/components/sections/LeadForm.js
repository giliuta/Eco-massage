import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { leadForm } from '@/data/translations';
import { motion } from 'framer-motion';
import { Shield, Phone, MessageCircle, CheckCircle, Loader2 } from 'lucide-react';
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const WHATSAPP_URL = 'https://wa.me/35795705596';

export default function LeadForm() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({ name: '', phone: '+357 ', contact_method: 'phone', preferred_time: '', concern: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = t(leadForm.required);
    if (!form.phone.trim() || form.phone.trim().length < 8) errs.phone = t(leadForm.required);
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, {
        name: form.name,
        phone: form.phone,
        contact_method: form.contact_method,
        preferred_time: form.preferred_time || null,
        concern: form.concern || null,
        language: lang,
      });
      setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="lead-form" data-testid="lead-form-section" className="py-20 lg:py-32 bg-[#F5F7FA]">
        <div className="max-w-lg mx-auto px-4 text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mb-6">
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto" />
          </motion.div>
          <h3 className="text-2xl font-montserrat font-bold text-[#1A1A2E] mb-4">{t(leadForm.success)}</h3>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" data-testid="lead-form-section" className="py-20 lg:py-32 bg-[#F5F7FA] relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0055FF] via-[#00D4FF] to-[#0055FF]" />
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#1A1A2E] uppercase tracking-wider mb-3">
            {t(leadForm.title)}
          </h2>
          <p className="text-[#1A1A2E]/60 text-sm">{t(leadForm.subtitle)}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          data-testid="lead-form"
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-[#0055FF]/5"
        >
          {/* Name */}
          <div className="mb-5">
            <label className="block text-sm font-bold text-[#1A1A2E] mb-1.5">{t(leadForm.nameLabel)} *</label>
            <input
              type="text"
              data-testid="lead-form-name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t(leadForm.namePlaceholder)}
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#F5F7FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0055FF]/30 transition-all ${errors.name ? 'border-red-400' : 'border-[#1A1A2E]/10'}`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div className="mb-5">
            <label className="block text-sm font-bold text-[#1A1A2E] mb-1.5">{t(leadForm.phoneLabel)} *</label>
            <input
              type="tel"
              data-testid="lead-form-phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder={t(leadForm.phonePlaceholder)}
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#F5F7FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0055FF]/30 transition-all ${errors.phone ? 'border-red-400' : 'border-[#1A1A2E]/10'}`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Contact Method */}
          <div className="mb-5">
            <label className="block text-sm font-bold text-[#1A1A2E] mb-2">{t(leadForm.contactLabel)}</label>
            <div className="flex gap-3">
              <button
                type="button"
                data-testid="lead-form-contact-phone"
                onClick={() => setForm({ ...form, contact_method: 'phone' })}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium border transition-all ${form.contact_method === 'phone' ? 'bg-[#0055FF] text-white border-[#0055FF]' : 'border-[#1A1A2E]/10 text-[#1A1A2E]/60 hover:border-[#0055FF]/30'}`}
              >
                <Phone className="w-4 h-4" /> {t(leadForm.contactCall)}
              </button>
              <button
                type="button"
                data-testid="lead-form-contact-whatsapp"
                onClick={() => setForm({ ...form, contact_method: 'whatsapp' })}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium border transition-all ${form.contact_method === 'whatsapp' ? 'bg-[#25D366] text-white border-[#25D366]' : 'border-[#1A1A2E]/10 text-[#1A1A2E]/60 hover:border-[#25D366]/30'}`}
              >
                <MessageCircle className="w-4 h-4" /> {t(leadForm.contactWhatsApp)}
              </button>
            </div>
          </div>

          {/* Preferred Time */}
          <div className="mb-5">
            <label className="block text-sm font-bold text-[#1A1A2E] mb-1.5">{t(leadForm.timeLabel)}</label>
            <select
              data-testid="lead-form-time"
              value={form.preferred_time}
              onChange={(e) => setForm({ ...form, preferred_time: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[#1A1A2E]/10 text-sm bg-[#F5F7FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0055FF]/30 transition-all"
            >
              <option value="">--</option>
              <option value="morning">{t(leadForm.timeMorning)}</option>
              <option value="afternoon">{t(leadForm.timeAfternoon)}</option>
              <option value="evening">{t(leadForm.timeEvening)}</option>
            </select>
          </div>

          {/* Concern */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-[#1A1A2E] mb-1.5">{t(leadForm.concernLabel)}</label>
            <textarea
              data-testid="lead-form-concern"
              value={form.concern}
              onChange={(e) => setForm({ ...form, concern: e.target.value })}
              rows={3}
              placeholder={t(leadForm.concernPlaceholder)}
              className="w-full px-4 py-3 rounded-xl border border-[#1A1A2E]/10 text-sm bg-[#F5F7FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0055FF]/30 transition-all resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            data-testid="lead-form-submit-btn"
            disabled={loading}
            className="w-full py-4 bg-[#D4A853] text-[#0A0E1A] text-sm font-black tracking-widest rounded-full hover:bg-[#C49A40] transition-all hover:shadow-[0_0_20px_rgba(212,168,83,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {t(leadForm.submit)}
          </button>

          <div className="flex items-center justify-center gap-1.5 mt-4">
            <Shield className="w-3.5 h-3.5 text-[#1A1A2E]/30" />
            <span className="text-[#1A1A2E]/40 text-xs">{t(leadForm.privacy)}</span>
          </div>
        </motion.form>

        <p className="text-center text-[#1A1A2E]/50 text-sm mt-6">
          {t(leadForm.alternative)}{' '}
          <a href="tel:+35795705596" className="text-[#0055FF] hover:underline">+357 95 705596</a>{' | '}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">WhatsApp</a>
        </p>
      </div>
    </section>
  );
}
