// ─────────────────────────────────────────────────────────────
// ALL WEBSITE CONTENT LIVES HERE. Edit text/images without touching components.
// [[double brackets]] = highlighted word. Image paths live in /public/images.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'Angel Partner',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.your-domain.com',
  title: 'Angel Partner | Real Estate Partner Program for Low-Rise Homes',
  description: 'Join the Angel Partner program. Refer customers for thoughtfully designed low-rise homes, earn points for every verified site visit and track fixed commissions in one app.',
  keywords: ['real estate partner program', 'property referral', 'low-rise buildings', 'site visit points', 'real estate commission', 'Angel Partner'],
  contact: { email: '', phone: '', address: '' }, // empty values are hidden
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'about', label: 'About' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

// Keep app-store availability and destinations in one place. Add the real
// store URLs when the Angel Partner app is published; until then, the UI
// deliberately displays a safe "Coming soon" state instead of dead links.
export const appDownloads = {
  heading: 'Available on mobile',
  status: 'Coming soon on Google Play',
  googlePlayUrl: '',
};

export const hero = {
  eyebrow: 'Real estate partner program',
  title: 'Refer a buyer. Earn on every [[verified site visit]].',
  text: 'Angel Partner builds thoughtfully designed low-rise homes. Submit customer references, follow their progress and see your points and commissions in one place.',
  image: { src: '/images/herosection 2.jpg', alt: 'Angel Partner low-rise home exterior' },
  badge: { icon: 'Award', title: '1 point', text: 'per verified site visit' },
  highlights: [
    { icon: 'BadgeCheck', title: '1 point', text: 'for every verified, completed site visit' },
    { icon: 'Banknote', title: 'Fixed commission', text: 'on eligible bookings' },
    { icon: 'Layers', title: 'Live status', text: 'on every reference you submit' },
  ],
};

export const howItWorks = {
  eyebrow: 'How it works',
  title: 'From reference to reward in [[four simple steps]]',
  text: 'A clear flow for partners, backed by a team that follows up on every customer.',
  steps: [
    { icon: 'UserPlus', title: 'Register', text: 'Create your partner account with your name, mobile number, email and date of birth.', image: { src: '/images/step-register.jpg', alt: 'Partner registering on the app' } },
    { icon: 'FileText', title: 'Submit a reference', text: 'Add the customer’s name, mobile number, preferred BHK, budget and project or location.', image: { src: '/images/step-reference.jpg', alt: 'Customer reference being submitted' } },
    { icon: 'PhoneCall', title: 'We follow up', text: 'Our admin team reviews it and a sales team member contacts the customer. You see every status update.', image: { src: '/images/step-followup.jpg', alt: 'Sales team following up with a customer' } },
    { icon: 'Award', title: 'Get rewarded', text: 'Earn points for verified site visits and see commission on eligible bookings.', image: { src: '/images/step-rewards.jpg', alt: 'Partner receiving rewards' } },
  ],
  rewards: [
    { big: '1', icon: 'Award', title: 'Point per completed site visit', text: 'Credited only after our team verifies the visit. One eligible visit earns one point, never more. Redeemed with our team for rewards.', tone: 'dark' },
    { big: 'Fixed', icon: 'Wallet', title: 'Commission per eligible booking', text: 'The amount is set by Angel Partner. Track its status from approved to paid. Not every lead qualifies automatically.', tone: 'gold' },
  ],
};

export const about = {
  eyebrow: 'About Us',
  title: 'Building [[Better Homes]] for a Brighter Tomorrow',
  paragraphs: [
    'At Angel Partner, we believe a home is more than just a place — it’s a foundation for a better life. We are committed to delivering high-quality, thoughtfully designed low-rise homes that offer comfort, elegance, and long-term value.',
  ],
  // icon names: Home, Building2, Award, HeartHandshake
  stats: [
    { icon: 'Home', value: '500+', label: 'Happy Families' },
    { icon: 'Building2', value: '10+', label: 'Premium Projects' },
    { icon: 'Award', value: '99%', label: 'Client Satisfaction' },
    { icon: 'HeartHandshake', value: 'Years', label: 'of Trust' },
  ],
  tagline: 'Together, let’s build a [[better]] tomorrow.',
  // Two hover cards in the bottom strip
  vision: [
    { icon: 'Gem', title: 'Our Vision', text: 'To become the most trusted real estate partner, creating lasting value for generations.' },
    { icon: 'Target', title: 'Our Mission', text: 'To deliver quality homes with integrity, innovation, and a customer-centric approach.' },
  ],
  image: { src: '/images/about-building.jpg', alt: 'Angel Partner low-rise building exterior' },
  appTitle: 'Everything in one [[partner app]]',
  appFeatures: [
    { id: 'refs', icon: 'FileText', title: 'My References', text: 'Submit a customer’s name, mobile, BHK, budget and location, then follow it from Under Review to Converted.' },
    { id: 'points', icon: 'Award', title: 'My Points', text: 'One point for every verified, completed site visit. Your balance and full history stay visible.' },
    { id: 'comm', icon: 'Wallet', title: 'My Commission', text: 'A fixed commission on eligible bookings, tracked from Pending Eligibility to Paid.' },
    { id: 'leads', icon: 'Users', title: 'Leads for Me', text: 'Leads our team offers you directly, with the date offered and the current status.' },
    { id: 'notes', icon: 'Bell', title: 'Notifications', text: 'Updates when a reference is accepted, a visit is completed, a point is credited or a payment status changes.' },
  ],
  appRules: [
    { big: '1 point', text: 'per verified site visit' },
    { big: 'Fixed', text: 'commission on eligible bookings' },
    { big: 'Private', text: 'you only see your own records' },
  ],
};

export const faq = {
  eyebrow: 'FAQ',
  title: 'Questions [[partners ask]]',
  text: 'Everything you need to know about joining, earning points and tracking your commission.',
  image: { src: '/images/faq-support.jpg', alt: 'Angel Partner support team' },
  help: { title: 'Still have a question?', text: 'Send us your details and our team will get back to you.', cta: 'Contact us' },
  // Add real links when the app is live. Empty href = shows "Coming soon".
  stores: [
    { name: 'Google Play', href: '' },
    { name: 'App Store', href: '' },
  ],
  chips: [
    { id: 'all', label: 'All' },
    { id: 'earn', label: 'Points & commission' },
    { id: 'partner', label: 'Partnership' },
    { id: 'app', label: 'The app' },
  ],
  items: [
    { cat: 'partner', q: 'Who can become a partner?', a: 'Registration details and approval steps are being finalised. Send us your details and we will contact you.' },
    { cat: 'earn', q: 'When do I earn a point?', a: 'When a site visit for your customer is completed and verified by our admin team. One eligible visit earns one point.' },
    { cat: 'earn', q: 'How is commission decided?', a: 'Commission is a fixed amount set by Angel Partner for eligible bookings. Not every lead qualifies automatically.' },
    { cat: 'earn', q: 'How do I redeem points?', a: 'Redemption is handled manually by our admin team. You can see your balance and history in the app.' },
    { cat: 'partner', q: 'What if two partners refer the same customer?', a: 'Our admin team reviews possible duplicates before deciding how to proceed.' },
    { cat: 'app', q: 'How do I get the app?', a: 'The Angel Partner app will be available from the app stores. Download links will appear here as soon as it is live.', stores: true },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  title: 'Ready to [[partner]] with Angel Partner?',
  text: 'Leave your details and our team will get in touch about joining the program.',
  image: { src: '/images/contact-home.jpg', alt: 'Entrance of an Angel Partner home' },
  success: 'Thank you. We have received your details and will contact you soon.',
};
