import React, { useState } from 'react';
import { Mail, MapPin, Sparkles, HeartHandshake, Facebook, Instagram, Youtube, ExternalLink, Navigation, Copy, Check } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const WhatsappIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const socialLinks = [
    {
      id: 'whatsapp',
      name: 'WhatsApp Direct Line',
      handle: '+91 7431833009',
      url: 'https://wa.me/917431833009',
      icon: WhatsappIcon,
      color: 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-900/40',
      badge: 'WhatsApp'
    },
    {
      id: 'fb',
      name: 'Shova Rai Official Facebook',
      handle: 'Shova Rai Official',
      url: 'https://www.facebook.com/share/1FGMEjv4Qr/',
      icon: Facebook,
      color: 'bg-blue-950/40 text-blue-300 border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/40',
      badge: 'Facebook'
    },
    {
      id: 'cuttingedge_ig',
      name: 'Cutting Edge Hair Salon',
      handle: '@cuttingedge_hair_salon_gtk__',
      url: 'https://www.instagram.com/cuttingedge_hair_salon_gtk__?igsh=aG8xamhqcHlvMmpx',
      icon: Instagram,
      color: 'bg-pink-950/40 text-pink-300 border-pink-500/30 hover:border-pink-400 hover:bg-pink-900/40',
      badge: 'Instagram'
    },
    {
      id: 'blush_ig',
      name: 'Blush Fashion Boutique',
      handle: '@blush.clothingstore',
      url: 'https://www.instagram.com/blush.clothingstore?igsh=MWtpeGFvMm84eDJ2ag==',
      icon: Instagram,
      color: 'bg-purple-950/40 text-purple-300 border-purple-500/30 hover:border-purple-400 hover:bg-purple-900/40',
      badge: 'Instagram'
    },
    {
      id: 'yt',
      name: 'Shova Rai YouTube Channel',
      handle: '@shovarai963',
      url: 'https://youtube.com/@shovarai963?si=q1TtfmDNex0Nekrs',
      icon: Youtube,
      color: 'bg-red-950/40 text-red-300 border-red-500/30 hover:border-red-400 hover:bg-red-900/40',
      badge: 'YouTube'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONNECT & COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-100 leading-tight">
            Contact &amp; Studio Location
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed text-center">
            Reach out for business collaborations, salon appointments, artisanal pickle orders, block printing workshops, or community skill training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Address, Contact Details & Social Media Links */}
          <div className="lg:col-span-5 bg-stone-950/90 p-6 sm:p-8 rounded-[2rem] border border-amber-500/20 shadow-2xl flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-display">
                  PRIMARY HUB
                </span>
                <h3 className="text-2xl font-serif font-bold text-amber-100 mt-1">
                  Cutting Edge Headquarters
                </h3>
                <p className="text-stone-400 text-sm mt-0.5">
                  Located in the heart of Namnang, Gangtok, Sikkim.
                </p>
              </div>

              <div className="space-y-4">
                
                {/* Address Card */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-stone-900/80 border border-stone-800">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-amber-200 uppercase tracking-wide">Studio Location</h4>
                    <p className="text-stone-300 text-sm leading-relaxed mt-0.5">
                      Cutting Edge Hair & Beauty Salon<br />
                      Namnang, Gangtok, Sikkim - 737101, India
                    </p>
                  </div>
                </div>

                {/* Email Card with Copy button */}
                <div className="flex items-start justify-between gap-3 p-3.5 rounded-2xl bg-stone-900/80 border border-stone-800">
                  <div className="flex items-start gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-amber-200 uppercase tracking-wide">Official Email</h4>
                      <a
                        href={`mailto:${personalData.email}`}
                        className="text-stone-300 hover:text-amber-300 text-sm transition-colors block truncate"
                      >
                        {personalData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalData.email, 'email')}
                    title="Copy Email"
                    className="px-2.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold flex items-center gap-1.5 shrink-0 border border-stone-700 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* WhatsApp & Direct Call Card */}
                <div className="flex items-start justify-between gap-3 p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40">
                  <div className="flex items-start gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40">
                      <WhatsappIcon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-emerald-200 uppercase tracking-wide">Direct Line</h4>
                        <span className="px-2 py-0.5 text-[9px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full shrink-0">Active</span>
                      </div>
                      <p className="text-stone-200 text-sm font-mono mt-0.5">+91 7431833009</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => copyToClipboard('+917431833009', 'phone')}
                      title="Copy Number"
                      className="p-2 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-300 border border-emerald-500/30 transition-colors"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <a
                      href="https://wa.me/917431833009"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1"
                    >
                      <span>Chat</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Collaboration Areas */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-stone-900/80 border border-stone-800">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-amber-200 uppercase tracking-wide">Collaboration Inquiries</h4>
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mt-0.5">
                      Bridal styling appointments, organic pickle supply, handicraft workshops, and SHG skill programs.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Official Social Media Channels */}
            <div className="space-y-2.5 pt-4 border-t border-stone-800/80">
              <h4 className="text-xs font-bold text-amber-300 uppercase tracking-widest flex items-center justify-between font-display">
                <span>Official Channels</span>
                <span className="text-xs text-stone-400 font-normal font-sans">Click to Visit</span>
              </h4>

              <div className="grid grid-cols-1 gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-2.5 sm:p-3 rounded-xl border transition-all duration-300 flex items-center justify-between gap-3 ${social.color}`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-stone-950/80 flex items-center justify-center shrink-0 border border-stone-700/50 group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <h5 className="text-xs sm:text-sm font-bold text-stone-100 group-hover:text-amber-200 transition-colors truncate">
                            {social.name}
                          </h5>
                          <p className="text-[11px] text-stone-400 truncate">{social.handle}</p>
                        </div>
                      </div>

                      <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Google Map Embed */}
          <div className="lg:col-span-7 bg-stone-950/90 p-6 sm:p-8 rounded-[2rem] border border-amber-500/20 shadow-2xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 font-display">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>LOCATION MAP</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-amber-100">
                    Find Us in Gangtok
                  </h3>
                </div>
                <a
                  href="https://maps.google.com/?q=Namnang,+Gangtok,+Sikkim+737101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold transition-all shrink-0 w-fit"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
              <p className="text-stone-300 text-sm mb-4">
                Visit Cutting Edge Hair & Beauty Salon at Namnang, Gangtok. Centrally situated with convenient access across Sikkim.
              </p>
            </div>

            {/* Map Container with Curved Edge & Amber Border Frame */}
            <div className="relative w-full p-1.5 sm:p-2 rounded-[2rem] bg-gradient-to-br from-amber-400 via-amber-600/60 to-amber-950/80 shadow-[0_10px_35px_rgba(217,119,6,0.2)] overflow-hidden">
              <div className="w-full aspect-[4/3] sm:aspect-[16/10] min-h-[380px] sm:min-h-[440px] rounded-[1.5rem] overflow-hidden bg-stone-900 border border-amber-500/30 relative">
                <iframe
                  title="Cutting Edge Hair & Beauty Salon Location Map"
                  src="https://maps.google.com/maps?q=Namnang,%20Gangtok,%20Sikkim%20737101&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[380px] sm:min-h-[440px] rounded-[1.5rem]"
                />
              </div>
            </div>

            {/* Location Details Footer */}
            <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Namnang Road, Gangtok, East Sikkim - 737101</span>
              </div>
              <div className="flex flex-col items-center sm:items-end gap-0.5 text-amber-300 font-semibold text-xs bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                <span>Open: Monday–Sunday | Closed: Tuesday</span>
                <span className="text-amber-400/80">9:00 AM - 7:00 PM</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


