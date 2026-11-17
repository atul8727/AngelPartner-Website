// Data files refer to icons by name; add new Lucide icons here once.
import { UserPlus, FileText, PhoneCall, Award, BadgeCheck, Banknote, Building2, Compass, HeartHandshake, ShieldCheck, Headset, ClipboardList, Bell, Lock, Wallet, Users, Layers } from 'lucide-react';

export const icons = { UserPlus, FileText, PhoneCall, Award, BadgeCheck, Banknote, Building2, Compass, HeartHandshake, ShieldCheck, Headset, ClipboardList, Bell, Lock, Wallet, Users, Layers };
export const getIcon = (name) => icons[name] || Layers;
