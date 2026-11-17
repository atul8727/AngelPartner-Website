'use client';
import { Home, FileText, Award, Wallet, Users, Bell, ChevronRight, Plus, Check, CalendarDays, Megaphone, Minus, ArrowUp, Signal, Wifi, BatteryFull } from 'lucide-react';

// Sample partner-app screens drawn inside a phone. All names and values are illustrative.
// Props: view = 'home' | 'refs' | 'points' | 'comm' | 'leads' | 'notes',  onChange(view)

const chipTone = { g: 'bg-[#DCEBE1] text-forest', o: 'bg-gold/30 text-[#7a4d16]', n: 'bg-[#ECE7DB] text-muted', f: 'bg-forest text-gold' };
const Chip = ({ t, children }) => <span className={`mt-1.5 inline-block whitespace-nowrap rounded-full px-2 py-0.5 text-[9.5px] font-medium ${chipTone[t]}`}>{children}</span>;
const Item = ({ lead, end, children }) => (
  <div className="mb-2 flex items-center gap-2.5 rounded-[14px] border border-line bg-white px-3 py-2.5">
    {lead}<div className="min-w-0 flex-1">{children}</div>{end}
  </div>
);
const Name = ({ children }) => <b className="block text-[13px] font-semibold">{children}</b>;
const Sub = ({ children }) => <small className="mt-px block text-[10.5px] text-muted">{children}</small>;
const Initials = ({ children }) => <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-forest/10 text-xs font-semibold">{children}</span>;
const IconBox = ({ icon: Icon, gold }) => <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] ${gold ? 'bg-gold/20 text-gold-dark' : 'bg-forest/10 text-forest'}`}><Icon size={16} /></span>;
const Fixed = () => <span className="text-right text-[10.5px] font-medium leading-tight text-muted">Fixed<br />amount</span>;

function BellBtn({ go }) {
  return (
    <button type="button" onClick={() => go('notes')} aria-label="Notifications" className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white outline-none focus-visible:ring-2 focus-visible:ring-gold">
      <Bell size={16} />
      <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-semibold leading-none text-forest">3</span>
    </button>
  );
}
function Head({ sub, title, go, staticBell }) {
  return (
    <div className="flex-none rounded-b-[2rem] bg-forest px-4 pb-[18px] pt-2.5 text-white">
      <div className="flex items-center justify-between pt-1.5">
        <div><small className="block text-[11px] text-white/70">{sub}</small><b className="text-xl font-semibold">{title}</b></div>
        {staticBell ? <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><Bell size={16} /></span> : <BellBtn go={go} />}
      </div>
    </div>
  );
}
const Body = ({ children, className = '' }) => <div className={`min-h-0 flex-1 overflow-y-auto px-3 pb-3.5 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}>{children}</div>;
const Tile = ({ icon: Icon, v, l, s, gold, onClick }) => (
  <button type="button" onClick={onClick} className="rounded-2xl border border-line bg-white p-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-gold">
    <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${gold ? 'bg-gold/20 text-gold-dark' : 'bg-forest/10 text-forest'}`}><Icon size={14} /></span>
    <b className="mt-2 block text-lg font-semibold leading-none">{v}</b>
    <em className="mt-1.5 block text-[11px] font-medium not-italic">{l}</em>
    <small className="block text-[10px] leading-tight text-muted">{s}</small>
  </button>
);

function screens(go) {
  return {
    home: (
      <>
        <div className="flex-none rounded-b-[2rem] bg-forest px-4 pb-[52px] pt-2.5 text-white">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-semibold text-forest">AP</span>
            <div className="flex-1"><small className="block text-[11px] text-white/70">Good afternoon,</small><b className="text-sm tracking-wide">PARTNER</b></div>
            <BellBtn go={go} />
          </div>
        </div>
        <Body className="!pt-0">
          <div className="relative -mt-10 rounded-2xl bg-white p-3.5 shadow-card">
            <div className="flex items-center justify-between text-xs text-muted">
              <span className="flex items-center gap-1.5"><FileText size={14} className="text-gold-dark" />My References</span>
              <button type="button" onClick={() => go('refs')} className="flex items-center font-semibold text-forest">View all<ChevronRight size={13} /></button>
            </div>
            <p className="mt-2 text-3xl font-semibold leading-none">12 <small className="text-sm font-normal text-muted">references</small></p>
            <p className="mt-1 text-[11px] text-muted">Total submitted by you</p>
            <div className="mt-3 grid grid-cols-3 divide-x divide-line border-t border-line pt-3 text-center">
              {[['3', 'Under Review'], ['7', 'In Progress'], ['2', 'Converted']].map(([v, l]) => (<div key={l}><b className="block text-base font-semibold">{v}</b><span className="text-[11px] text-muted">{l}</span></div>))}
            </div>
          </div>
          <p className="mx-1 mb-2 mt-3.5 text-sm font-semibold">Your dashboard</p>
          <div className="grid grid-cols-2 gap-2">
            <Tile icon={Award} gold v="7" l="My Points" s="Verified site visits" onClick={() => go('points')} />
            <Tile icon={Wallet} v="Pending" l="My Commission" s="Eligible bookings" onClick={() => go('comm')} />
            <Tile icon={Users} v="3" l="Leads for Me" s="Offered to you" onClick={() => go('leads')} />
            <Tile icon={Bell} gold v="3" l="Notifications" s="New updates" onClick={() => go('notes')} />
          </div>
        </Body>
      </>
    ),
    refs: (
      <>
        <Head sub="12 submitted" title="My References" go={go} />
        <Body>
          <div className="mb-2.5 flex gap-1.5 overflow-hidden">
            {['All', 'Under Review', 'In Progress', 'Converted'].map((c, i) => (<span key={c} className={`shrink-0 rounded-full border px-2.5 py-1 text-[10.5px] ${i === 0 ? 'border-forest bg-forest text-white' : 'border-line bg-white text-muted'}`}>{c}</span>))}
          </div>
          <Item lead={<Initials>RS</Initials>}><Name>Rahul S.</Name><Sub>AP-R-0124 · 2 BHK</Sub><Chip t="g">Site Visit Completed</Chip></Item>
          <Item lead={<Initials>NK</Initials>}><Name>Neha K.</Name><Sub>AP-R-0123 · 3 BHK</Sub><Chip t="o">Site Visit Scheduled</Chip></Item>
          <Item lead={<Initials>AP</Initials>}><Name>Amit P.</Name><Sub>AP-R-0121 · 2 BHK</Sub><Chip t="n">Under Review</Chip></Item>
          <Item lead={<Initials>SM</Initials>}><Name>Sunita M.</Name><Sub>AP-R-0118 · 1 BHK</Sub><Chip t="f">Converted</Chip></Item>
          <div className="mt-1 flex items-center justify-center gap-1.5 rounded-[14px] bg-forest p-3 text-[13px] font-medium text-white"><Plus size={15} />Add new reference</div>
        </Body>
      </>
    ),
    points: (
      <>
        <Head sub="Balance and history" title="My Points" go={go} />
        <Body>
          <div className="rounded-2xl bg-white p-3.5 shadow-card">
            <p className="text-[11px] text-muted">Available points</p>
            <p className="mt-2 text-[38px] font-semibold leading-none text-gold-dark">7</p>
            <p className="mt-1 text-[11px] text-muted">1 point for every verified, completed site visit</p>
          </div>
          <p className="mx-1 mb-2 mt-3.5 text-sm font-semibold">Recent activity</p>
          <Item lead={<IconBox icon={ArrowUp} gold />} end={<span className="text-sm font-semibold text-[#2b6a45]">+1</span>}><Name>Site visit verified</Name><Sub>Rahul S. · 2 days ago</Sub></Item>
          <Item lead={<IconBox icon={ArrowUp} gold />} end={<span className="text-sm font-semibold text-[#2b6a45]">+1</span>}><Name>Site visit verified</Name><Sub>Priya D. · 9 days ago</Sub></Item>
          <Item lead={<IconBox icon={Minus} />} end={<span className="text-sm font-semibold text-muted">−2</span>}><Name>Reward redeemed</Name><Sub>Recorded by our team</Sub></Item>
          <Item lead={<IconBox icon={ArrowUp} gold />} end={<span className="text-sm font-semibold text-[#2b6a45]">+1</span>}><Name>Site visit verified</Name><Sub>Karan T. · 3 weeks ago</Sub></Item>
          <p className="mx-1 mt-2.5 text-[10.5px] leading-snug text-muted">Points are added only after our team verifies the visit.</p>
        </Body>
      </>
    ),
    comm: (
      <>
        <Head sub="Eligible bookings" title="My Commission" go={go} />
        <Body>
          <div className="mb-3 grid grid-cols-2 gap-2 text-center">
            {[['3', 'Eligible bookings'], ['1', 'Paid']].map(([v, l]) => (<div key={l} className="rounded-xl bg-ivory p-2.5"><b className="block text-lg font-semibold">{v}</b><span className="text-[10.5px] text-muted">{l}</span></div>))}
          </div>
          <Item end={<Fixed />}><Name>Rahul S. · Booking</Name><Sub>Angel Residency · 08 Nov</Sub><Chip t="o">Approved</Chip></Item>
          <Item end={<Fixed />}><Name>Sunita M. · Booking</Name><Sub>Angel Residency · 21 Oct</Sub><Chip t="f">Paid</Chip></Item>
          <Item end={<Fixed />}><Name>Neha K. · Booking</Name><Sub>Angel Residency · 14 Nov</Sub><Chip t="n">Pending Eligibility</Chip></Item>
          <p className="mx-1 mt-2.5 text-[10.5px] leading-snug text-muted">Commission is a fixed amount set by Angel Partner. Not every lead qualifies automatically; our team confirms eligibility.</p>
        </Body>
      </>
    ),
    leads: (
      <>
        <Head sub="Offered by our team" title="Leads for Me" go={go} />
        <Body>
          <p className="mx-1 mb-2.5 mt-0.5 text-[10.5px] leading-snug text-muted">Leads our team offers you directly, with the date and current status.</p>
          <Item lead={<Initials>VR</Initials>} end={<ChevronRight size={16} className="text-muted" />}><Name>Vikram R.</Name><Sub>Offered 14 Nov</Sub><Chip t="n">New</Chip></Item>
          <Item lead={<Initials>AS</Initials>} end={<ChevronRight size={16} className="text-muted" />}><Name>Anita S.</Name><Sub>Offered 10 Nov</Sub><Chip t="g">Contacted</Chip></Item>
          <Item lead={<Initials>DM</Initials>} end={<ChevronRight size={16} className="text-muted" />}><Name>Deepak M.</Name><Sub>Offered 04 Nov</Sub><Chip t="o">Site Visit Scheduled</Chip></Item>
        </Body>
      </>
    ),
    notes: (
      <>
        <Head sub="3 new" title="Notifications" go={go} staticBell />
        <Body>
          <Item lead={<IconBox icon={Award} gold />}><Name>Point credited</Name><Sub>1 point added for Rahul S.’s verified visit</Sub></Item>
          <Item lead={<IconBox icon={Check} />}><Name>Reference accepted</Name><Sub>Neha K. is now with our sales team</Sub></Item>
          <Item lead={<IconBox icon={CalendarDays} />}><Name>Site visit scheduled</Name><Sub>Deepak M. · Saturday, 11:00 AM</Sub></Item>
          <Item lead={<IconBox icon={Wallet} gold />}><Name>Commission updated</Name><Sub>Rahul S.’s booking is now Approved</Sub></Item>
          <Item lead={<IconBox icon={Megaphone} />}><Name>Announcement</Name><Sub>A message from the Angel Partner team</Sub></Item>
        </Body>
      </>
    ),
  };
}

const nav = [['home', Home, 'Home'], ['refs', FileText, 'References'], ['points', Award, 'Points'], ['comm', Wallet, 'Commission'], ['leads', Users, 'Leads']];

export default function PhoneMock({ view = 'home', onChange = () => {}, className = '' }) {
  const screen = screens(onChange)[view];
  return (
    <figure className={`mx-auto w-[290px] ${className}`}>
      <div className="relative rounded-[2.9rem] bg-[#0b1710] p-[9px] ring-1 ring-white/15">
        <span aria-hidden="true" className="absolute -right-[3px] top-28 h-14 w-[3px] rounded-r bg-[#0b1710]" />
        <span aria-hidden="true" className="absolute -left-[3px] top-24 h-8 w-[3px] rounded-l bg-[#0b1710]" />
        <span aria-hidden="true" className="absolute -left-[3px] top-36 h-12 w-[3px] rounded-l bg-[#0b1710]" />

        <div role="group" aria-label="Sample partner app screens" className="relative flex h-[600px] flex-col overflow-hidden rounded-[2.3rem] bg-ivory text-forest">
          {/* status bar */}
          <div className="relative flex flex-none items-center justify-between bg-forest px-[22px] pb-1 pt-3 text-[11px] font-medium text-white">
            <span>9:41</span>
            <span aria-hidden="true" className="absolute left-1/2 top-2.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-black" />
            <span className="flex items-center gap-1"><Signal size={12} /><Wifi size={12} /><BatteryFull size={14} /></span>
          </div>

          <div key={view} className="flex min-h-0 flex-1 flex-col">{screen}</div>

          {/* bottom navigation */}
          <nav aria-label="Sample app navigation" className="flex flex-none justify-around border-t border-line bg-white px-1 pb-3 pt-1.5">
            {nav.map(([id, Icon, label]) => {
              const on = view === id;
              return (
                <button key={id} type="button" onClick={() => onChange(id)} aria-current={on ? 'page' : undefined} className={`flex flex-col items-center gap-0.5 rounded-lg text-[9px] outline-none focus-visible:ring-2 focus-visible:ring-gold ${on ? 'font-semibold text-forest' : 'text-muted'}`}>
                  <span className={`flex h-[26px] w-10 items-center justify-center rounded-full transition-colors duration-300 ${on ? 'bg-gold/30' : ''}`}><Icon size={16} /></span>{label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs text-white/60">Sample screen · tap to explore</figcaption>
    </figure>
  );
}