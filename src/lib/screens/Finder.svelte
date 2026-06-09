<script>
  import StatusBar from '../StatusBar.svelte';
  import Logo from '../Logo.svelte';
  import { items } from '../data.js';
  const item = items[0];
</script>

<div class="phone web">
  <StatusBar />
  <div class="safari">
    <i class="fa-solid fa-lock lock"></i>
    <span class="url">returnly.app/f/{item.id}</span>
    <i class="fa-solid fa-rotate-right reload"></i>
  </div>

  <div class="scroll">
    <div class="content">
      <div class="brand"><Logo size={44} /><span>Returnly</span></div>

      <div class="emoji-tile"><i class="fa-solid {item.icon}"></i></div>
      <h1>You found<br />{item.owner}’s water bottle!</h1>
      <p class="lede">Their family would love to get it back. Let them know where it is — it takes one tap.</p>

      <div class="ping-card">
        <span class="loc-icon"><i class="fa-solid fa-location-dot"></i></span>
        <div class="grow">
          <div class="loc-label">Share where it is</div>
          <div class="loc-sub">A one-time location ping — owner sees it on a map</div>
        </div>
        <div class="toggle on"><div class="knob"></div></div>
      </div>

      <button class="btn accent">Share location &amp; notify owner</button>
      <button class="btn ghost small">Just notify — skip location</button>

      <p class="trust"><i class="fa-solid fa-lock"></i> One-time only. You’re never tracked, and your phone number is never shared.</p>
    </div>
    <div class="wm">No app needed · Powered by Returnly</div>
  </div>
</div>

<style>
  .web { background: #fff; }
  .safari { flex: 0 0 auto; display: flex; align-items: center; gap: 8px; margin: 0 14px 6px; padding: 10px 14px; background: #EEF1F6; border-radius: 13px; }
  .lock { font-size: 12px; color: #7a8597; }
  .url { flex: 1 1 auto; text-align: center; font-size: 14px; color: #57617a; font-weight: 500; }
  .reload { color: #9aa4b5; }
  .content { padding: 18px 26px 8px; text-align: center; display: flex; flex-direction: column; align-items: center; }
  .brand { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 18px; color: var(--ink); margin-bottom: 26px; }
  .emoji-tile { width: 104px; height: 104px; border-radius: 30px; background: linear-gradient(150deg, #EAF1FF, #D8E6FF); border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; font-size: 50px; color: var(--primary); margin-bottom: 22px; }
  h1 { font-size: 30px; font-weight: 850; letter-spacing: -0.8px; line-height: 1.15; color: var(--ink); }
  .lede { color: var(--muted); font-size: 16px; line-height: 1.5; margin: 12px 4px 22px; }
  .ping-card { width: 100%; display: flex; align-items: center; gap: 12px; text-align: left; background: var(--surface-2); border: 1.5px solid var(--line); border-radius: 16px; padding: 14px 16px; margin-bottom: 14px; }
  .loc-icon { font-size: 20px; color: var(--primary); }
  .loc-label { font-size: 15.5px; font-weight: 750; }
  .loc-sub { font-size: 12.5px; color: var(--muted); margin-top: 2px; }
  .toggle { width: 46px; height: 28px; border-radius: 999px; background: var(--primary); display: flex; align-items: center; padding: 3px; justify-content: flex-end; flex: 0 0 auto; }
  .knob { width: 22px; height: 22px; border-radius: 50%; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,.25); }
  .btn.accent { margin-bottom: 10px; }
  .btn.ghost.small { color: var(--muted); }
  .trust { font-size: 13px; color: var(--muted); line-height: 1.5; margin-top: 18px; padding: 0 6px; }
  .wm { text-align: center; font-size: 12px; color: var(--faint); padding: 22px 0 18px; font-weight: 600; }
</style>
