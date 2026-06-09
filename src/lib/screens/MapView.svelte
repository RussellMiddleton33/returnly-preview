<script>
  import StatusBar from '../StatusBar.svelte';
  import { items } from '../data.js';
  const item = items[0];
</script>

<div class="phone map-screen">
  <div class="map">
    <div class="water"></div>
    <div class="park"><span>Stephen Field</span></div>
    <div class="road r1"></div>
    <div class="road r2"></div>
    <div class="road r3"></div>
    <div class="block b1"></div>
    <div class="block b2"></div>

    <div class="pin-stack">
      <div class="ring"></div>
      <div class="pin-head"><i class="fa-solid fa-location-dot"></i></div>
    </div>
  </div>

  <StatusBar />

  <div class="topbar">
    <div class="back-btn"><i class="fa-solid fa-chevron-left"></i></div>
    <div class="track-pill"><i class="fa-solid fa-location-crosshairs"></i> Last found here</div>
    <div class="back-btn"><i class="fa-solid fa-layer-group"></i></div>
  </div>

  <div class="grow"></div>

  <div class="sheet">
    <div class="grip"></div>
    <div class="row item-row">
      <div class="thumb"><i class="fa-solid {item.icon}"></i></div>
      <div class="grow">
        <div class="i-name">{item.owner}’s {item.name}</div>
        <div class="i-loc"><i class="fa-solid fa-location-dot"></i> Stephen Field, by the playground</div>
        <div class="i-time">Found {item.when} · pinged by the finder</div>
      </div>
    </div>
    <div class="btns">
      <button class="btn primary"><i class="fa-solid fa-diamond-turn-right"></i> Get directions</button>
      <button class="btn ghost"><i class="fa-regular fa-comment-dots"></i> Message finder</button>
    </div>
  </div>
</div>

<style>
  .map-screen { position: relative; }
  .map { position: absolute; inset: 0; z-index: 0; background: #E6ECF3; overflow: hidden; }
  .water { position: absolute; right: -40px; bottom: -60px; width: 320px; height: 300px; background: #BFD6F2; border-radius: 46% 54% 40% 60%; transform: rotate(-12deg); }
  .park { position: absolute; left: 38px; top: 300px; width: 250px; height: 220px; background: #CDE7C6; border-radius: 24px; display: flex; align-items: flex-start; justify-content: flex-start; }
  .park span { color: #5E8B55; font-weight: 700; font-size: 13px; padding: 12px 14px; }
  .road { position: absolute; background: #fff; box-shadow: 0 0 0 1px #DCE3EC; }
  .r1 { top: 230px; left: -40px; width: 520px; height: 26px; transform: rotate(-8deg); }
  .r2 { top: -30px; left: 150px; width: 24px; height: 700px; transform: rotate(10deg); }
  .r3 { top: 540px; left: -40px; width: 520px; height: 20px; transform: rotate(-4deg); }
  .block { position: absolute; background: #DCE3EC; border-radius: 8px; }
  .b1 { width: 90px; height: 70px; top: 150px; right: 36px; }
  .b2 { width: 70px; height: 64px; top: 90px; left: 40px; }
  .pin-stack { position: absolute; top: 360px; left: 150px; z-index: 2; display: flex; align-items: center; justify-content: center; }
  .ring { position: absolute; width: 130px; height: 130px; border-radius: 50%; background: rgba(19, 102, 242, 0.16); border: 1.5px solid rgba(19, 102, 242, 0.35); }
  .pin-head { position: relative; font-size: 44px; color: var(--lost); filter: drop-shadow(0 8px 7px rgba(0, 0, 0, 0.25)); }

  .topbar { position: relative; z-index: 3; display: flex; align-items: center; justify-content: space-between; padding: 4px 18px; gap: 10px; }
  .back-btn { width: 42px; height: 42px; border-radius: 50%; background: #fff; box-shadow: var(--shadow-sm); display: flex; align-items: center; justify-content: center; font-size: 17px; color: var(--ink); }
  .track-pill { background: #fff; box-shadow: var(--shadow-sm); border-radius: 999px; padding: 10px 16px; font-weight: 700; font-size: 13.5px; color: var(--primary-ink); display: flex; align-items: center; gap: 7px; }
  .track-pill i { color: var(--primary); }

  .sheet { position: relative; z-index: 3; background: var(--surface); border-radius: 26px 26px 0 0; padding: 10px 20px 28px; box-shadow: 0 -10px 30px rgba(14, 23, 38, 0.12); }
  .grip { width: 40px; height: 5px; border-radius: 3px; background: var(--line); margin: 0 auto 16px; }
  .item-row { gap: 14px; align-items: flex-start; }
  .thumb { width: 54px; height: 54px; flex: 0 0 54px; border-radius: 15px; background: var(--surface-2); border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; font-size: 24px; color: var(--primary); }
  .i-name { font-weight: 800; font-size: 18px; letter-spacing: -0.3px; }
  .i-loc { color: var(--ink); font-size: 14px; margin-top: 4px; }
  .i-loc i { color: var(--primary); font-size: 12px; margin-right: 3px; }
  .i-time { color: var(--muted); font-size: 13px; margin-top: 3px; }
  .btns { display: flex; flex-direction: column; gap: 10px; margin-top: 18px; }
  .btns i { font-size: 15px; }
</style>
