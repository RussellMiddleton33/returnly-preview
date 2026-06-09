<script>
  import StatusBar from '../StatusBar.svelte';
  import { items } from '../data.js';

  const item = items[0]; // Josie's Owala — the "found" hero

  const timeline = [
    { icon: 'fa-circle-check', label: 'Found at Stephen Field', time: '2 min ago', accent: true },
    { icon: 'fa-bell', label: 'Reported lost by Kate', time: 'Today, 3:14 PM' },
    { icon: 'fa-tag', label: 'Tag registered', time: 'Aug 24, 2025' },
  ];
</script>

<div class="phone tinted">
  <StatusBar />
  <div class="navbar">
    <i class="fa-solid fa-chevron-left back"></i>
    <span class="nav-title">Item</span>
    <span class="edit">Edit</span>
  </div>

  <div class="scroll">
    <div class="hero-photo">
      <i class="fa-solid {item.icon} big-icon"></i>
      <span class="pill found float"><i class="fa-solid fa-circle-check"></i> Found!</span>
    </div>

    <h1 class="name">{item.owner}’s {item.name}</h1>
    <p class="sub">{item.category} · worth ${item.value}</p>

    <div class="card tag-card">
      <div class="qr">
        <svg viewBox="0 0 100 100" width="62" height="62" shape-rendering="crispEdges">
          <rect width="100" height="100" fill="#fff" />
          <path fill="#17120D" d="M8 8h26v26H8zM14 14v14h14V14zM66 8h26v26H66zM72 14v14h14V14zM8 66h26v26H8zM14 72v14h14V72z" />
          <path fill="#17120D" d="M40 8h6v6h-6zM52 8h6v12h-6zM40 20h12v6H40zM40 32h6v6h-6zM58 32h6v6h-6zM66 40h6v6h-6zM80 40h6v6h-6zM40 46h12v6H40zM58 52h6v6h-6zM70 52h10v6H70zM86 52h6v6h-6zM40 58h6v6h-6zM48 64h6v6h-6zM66 66h6v6h-6zM78 66h6v6h-6zM88 66h6v6h-6zM58 74h6v6h-6zM70 78h6v6h-6zM82 78h6v6h-6zM48 84h6v6h-6zM64 86h6v6h-6zM86 86h8v6h-8z" />
        </svg>
      </div>
      <div class="grow">
        <div class="tag-id">Tag {item.id}</div>
        <div class="tag-row"><span class="nfc"><i class="fa-solid fa-wifi"></i> NFC</span><span class="nfc qr-l"><i class="fa-solid fa-qrcode"></i> QR</span></div>
        <div class="tag-hint">Tap or scan to bring it home</div>
      </div>
    </div>

    <div class="section-label">History</div>
    <div class="card tl">
      {#each timeline as t, idx}
        <div class="tl-row {idx === timeline.length - 1 ? 'last' : ''}">
          <div class="tl-dot {t.accent ? 'on' : ''}"><i class="fa-solid {t.icon}"></i></div>
          <div class="grow">
            <div class="tl-label">{t.label}</div>
            <div class="tl-time">{t.time}</div>
          </div>
        </div>
      {/each}
    </div>

    <div class="actions">
      <button class="btn primary"><i class="fa-solid fa-house"></i> Mark as home</button>
      <button class="btn ghost">Transfer ownership</button>
    </div>
    <div style="height:16px"></div>
  </div>
</div>

<style>
  .navbar { flex: 0 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 4px 22px 10px; font-size: 16px; }
  .back { font-size: 20px; color: var(--primary); }
  .nav-title { font-weight: 700; }
  .edit { color: var(--primary); font-weight: 600; }
  .hero-photo { position: relative; height: 188px; border-radius: var(--radius); background: linear-gradient(150deg, #EAF1FF, #DAE7FF); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; border: 1px solid var(--line); }
  .big-icon { font-size: 74px; color: var(--primary); }
  .float { position: absolute; top: 14px; right: 14px; }
  .name { font-size: 26px; font-weight: 800; letter-spacing: -0.5px; padding: 0 2px; }
  .sub { color: var(--muted); font-size: 15px; margin: 2px 2px 0; }
  .tag-card { display: flex; align-items: center; gap: 16px; padding: 16px; margin-top: 18px; }
  .qr { background: #fff; padding: 5px; border-radius: 12px; border: 1px solid var(--line); }
  .tag-id { font-weight: 800; font-size: 17px; letter-spacing: 0.5px; }
  .tag-row { display: flex; gap: 8px; margin: 7px 0 5px; }
  .nfc { background: var(--primary-soft); color: var(--primary-ink); font-weight: 700; font-size: 12px; padding: 3px 9px; border-radius: 999px; }
  .nfc i { font-size: 10px; }
  .qr-l { background: var(--surface-2); color: var(--muted); border: 1px solid var(--line); }
  .tag-hint { color: var(--faint); font-size: 13px; }
  .tl { padding: 6px 16px; }
  .tl-row { display: flex; align-items: center; gap: 13px; padding: 12px 0; border-bottom: 1px solid var(--line); }
  .tl-row.last { border-bottom: none; }
  .tl-dot { width: 38px; height: 38px; border-radius: 50%; background: var(--surface-2); border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; font-size: 15px; color: var(--muted); }
  .tl-dot.on { background: var(--accent-soft); border-color: transparent; color: var(--primary); }
  .tl-label { font-weight: 650; font-size: 15px; }
  .tl-time { color: var(--muted); font-size: 13px; margin-top: 1px; }
  .actions { display: flex; flex-direction: column; gap: 10px; margin-top: 22px; }
</style>
