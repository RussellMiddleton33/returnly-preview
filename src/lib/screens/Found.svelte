<script>
  import StatusBar from '../StatusBar.svelte';
  import { items } from '../data.js';
  const item = items[0];
</script>

<div class="phone">
  <StatusBar light />
  <div class="celebrate">
    <div class="badge"><i class="fa-solid fa-circle-check"></i></div>
    <div class="kicker">GOOD NEWS</div>
    <h1>It’s found!</h1>
    <p class="who">{item.owner}’s {item.name}</p>
  </div>

  <div class="sheet">
    <div class="map">
      <div class="grid"></div>
      <i class="fa-solid fa-location-dot pin"></i>
      <div class="map-label">Stephen Field</div>
    </div>

    <div class="note">
      <div class="note-head">
        <div class="anon"><i class="fa-solid fa-user"></i></div>
        <div>
          <div class="anon-name">Someone nearby</div>
          <div class="anon-time">{item.when}</div>
        </div>
      </div>
      <p class="note-body">“{item.note}”</p>
    </div>

    <div class="btns">
      <button class="btn primary"><i class="fa-solid fa-diamond-turn-right"></i> Get directions</button>
      <button class="btn ghost"><i class="fa-regular fa-comment-dots"></i> Message finder — anonymously</button>
    </div>
    <p class="privacy"><i class="fa-solid fa-lock"></i> You and the finder stay private. Returnly relays the message.</p>
  </div>
</div>

<style>
  .phone { background: linear-gradient(170deg, #3E86FF 0%, #1366F2 38%, var(--bg) 38%, var(--bg) 100%); }
  .celebrate { flex: 0 0 auto; display: flex; flex-direction: column; align-items: center; color: #fff; padding: 6px 24px 26px; text-align: center; }
  .badge { width: 92px; height: 92px; border-radius: 28px; background: rgba(255, 255, 255, 0.22); display: flex; align-items: center; justify-content: center; font-size: 46px; margin-bottom: 14px; box-shadow: 0 14px 30px rgba(0, 0, 0, 0.14); }
  .kicker { font-size: 12.5px; font-weight: 800; letter-spacing: 1.4px; opacity: 0.92; }
  h1 { font-size: 38px; font-weight: 850; letter-spacing: -1px; margin-top: 2px; }
  .who { font-size: 17px; font-weight: 600; opacity: 0.95; margin-top: 4px; }
  .sheet { flex: 1 1 auto; background: var(--bg); border-radius: 28px 28px 0 0; margin-top: 4px; padding: 22px 20px 30px; display: flex; flex-direction: column; gap: 16px; }
  .map { position: relative; height: 150px; border-radius: var(--radius); overflow: hidden; background: linear-gradient(135deg, #DCE8FF, #C9DCFF); border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; }
  .grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(19, 102, 242, 0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(19, 102, 242, 0.13) 1px, transparent 1px); background-size: 26px 26px; }
  .pin { font-size: 40px; color: var(--lost); filter: drop-shadow(0 6px 6px rgba(0, 0, 0, 0.2)); z-index: 1; }
  .map-label { position: absolute; bottom: 12px; left: 12px; background: #fff; padding: 6px 12px; border-radius: 999px; font-weight: 700; font-size: 13px; box-shadow: var(--shadow-sm); }
  .note { background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); padding: 16px; box-shadow: var(--shadow-sm); }
  .note-head { display: flex; align-items: center; gap: 11px; margin-bottom: 10px; }
  .anon { width: 40px; height: 40px; border-radius: 50%; background: var(--surface-2); border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; font-size: 17px; color: var(--muted); }
  .anon-name { font-weight: 700; font-size: 15px; }
  .anon-time { color: var(--muted); font-size: 13px; }
  .note-body { font-size: 16px; line-height: 1.5; color: var(--ink); }
  .btns { display: flex; flex-direction: column; gap: 10px; margin-top: 2px; }
  .btns i { font-size: 15px; }
  .privacy { text-align: center; font-size: 13px; color: var(--muted); padding: 0 6px; }
</style>
