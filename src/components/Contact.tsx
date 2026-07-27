import React from 'react';
import { Mail, MapPin, Sparkles, HeartHandshake, Facebook, Instagram, Youtube, ExternalLink, Navigation } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const Contact: React.FC = () => {

  const socialLinks = [
    {
      id: 'fb',
      name: 'Shova Rai Facebook Page',
      handle: 'Shova Rai Official',
      url: 'https://www.facebook.com/share/1FGMEjv4Qr/',
      icon: Facebook,
      color: 'bg-blue-600/20 text-blue-400 border-blue-500/30 hover:border-blue-400 hover:bg-blue-600/30',
      badge: 'Facebook'
    },
    {
      id: 'cuttingedge_ig',
      name: 'Cuttingedge Instagram',
      handle: '@cuttingedge_hair_salon_gtk__',
      url: 'https://www.instagram.com/cuttingedge_hair_salon_gtk__?igsh=aG8xamhqcHlvMmpx',
      icon: Instagram,
      color: 'bg-pink-600/20 text-pink-400 border-pink-500/30 hover:border-pink-400 hover:bg-pink-600/30',
      badge: 'Instagram'
    },
    {
      id: 'blush_ig',
      name: 'Blush Instagram Page',
      handle: '@blush.clothingstore',
      url: 'https://www.instagram.com/blush.clothingstore?igsh=MWtpeGFvMm84eDJ2ag==',
      icon: Instagram,
      color: 'bg-purple-600/20 text-purple-400 border-purple-500/30 hover:border-purple-400 hover:bg-purple-600/30',
      badge: 'Instagram'
    },
    {
      id: 'yt',
      name: 'Shova Rai Youtube',
      handle: '@shovarai963',
      url: 'https://youtube.com/@shovarai963?si=q1TtfmDNex0Nekrs',
      icon: Youtube,
      color: 'bg-red-600/20 text-red-400 border-red-500/30 hover:border-red-400 hover:bg-red-600/30',
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
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto my-4 rounded-full" />
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Reach out for business collaborations, salon appointments, artisanal pickle orders, block printing workshops, or community skill training. Connect directly with us via our location or official social media channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Address, Contact Details & Social Media Links */}
          <div className="lg:col-span-5 bg-stone-950/80 p-6 sm:p-8 rounded-[2rem] border border-stone-800 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-widest">
                  PRIMARY HUB
                </span>
                <h3 className="text-2xl font-serif font-bold text-amber-100 mt-1">
                  Cutting Edge Headquarters
                </h3>
                <p className="text-stone-300 text-sm sm:text-base mt-1">
                  Located in the heart of Gangtok, Sikkim.
                </p>
              </div>

              <div className="space-y-5">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-amber-200">Address & Studio</h4>
                    <p className="text-stone-300 text-sm sm:text-base leading-relaxed mt-0.5">
                      Cutting Edge Hair & Beauty Salon<br />
                      Namnang, Gangtok, Sikkim - 737101, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-amber-200">Email Address</h4>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-stone-300 hover:text-amber-300 text-sm sm:text-base transition-colors underline decoration-amber-500/40"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-amber-200">Key Collaboration Areas</h4>
                    <p className="text-stone-300 text-sm sm:text-base leading-relaxed mt-0.5">
                      • Bridal Hair & Beauty Appointments<br />
                      • Zayel's Organic Pickle Wholesale & Retail<br />
                      • Traditional Block Printing Workshops<br />
                      • Women & SHG Livelihood Mentorship
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Official Social Media Channels */}
            <div className="space-y-3 pt-4 border-t border-stone-800/80">
              <h4 className="text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-widest flex items-center justify-between">
                <span>Official Social Media Pages</span>
                <span className="text-xs text-stone-400 font-normal">Connect Online</span>
              </h4>

              <div className="grid grid-cols-1 gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 ${social.color}`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-xl bg-stone-950/80 flex items-center justify-center shrink-0 border border-stone-700/50 group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div className="min-w-0">
                          <h5 className="text-sm font-bold text-stone-100 group-hover:text-amber-200 transition-colors truncate">
                            {social.name}
                          </h5>
                          <p className="text-xs sm:text-sm text-stone-300 truncate">{social.handle}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0 text-stone-300 group-hover:text-amber-300 text-xs font-bold">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Google Map Embed */}
          <div className="lg:col-span-7 bg-stone-950/80 p-6 sm:p-8 rounded-[2rem] border border-stone-800 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wider mb-1">
                    <Navigation className="w-4 h-4" />
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
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs sm:text-sm font-bold transition-all shrink-0 w-fit"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>
              </div>
              <p className="text-stone-300 text-sm sm:text-base mb-4">
                Visit Cutting Edge Hair & Beauty Salon at Namnang, Gangtok. Centrally situated with convenient access across Sikkim.
              </p>
            </div>

            {/* Map Container with Curved Edge & Amber Border Frame */}
            <div className="relative w-full p-2 rounded-[1.75rem] bg-gradient-to-br from-amber-400 via-amber-600/60 to-amber-950/80 shadow-[0_10px_35px_rgba(217,119,6,0.2)] overflow-hidden">
              <div className="w-full aspect-[4/3] sm:aspect-[16/10] min-h-[380px] sm:min-h-[440px] rounded-[1.25rem] overflow-hidden bg-stone-900 border border-amber-500/30 relative">
                <iframe
                  title="Cutting Edge Hair & Beauty Salon Location Map"
                  src="https://maps.google.com/maps?q=Namnang,%20Gangtok,%20Sikkim%20737101&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[380px] sm:min-h-[440px] rounded-[1.25rem]"
                />
              </div>
            </div>

            {/* Location Details Footer */}
            <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Namnang Road, Gangtok, East Sikkim - 737101</span>
              </div>
              <span className="text-amber-400 font-semibold text-xs sm:text-sm bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                Mon - Sat: 9:00 AM - 7:00 PM
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

