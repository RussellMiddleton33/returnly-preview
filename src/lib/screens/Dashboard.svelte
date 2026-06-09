<script>
  import StatusBar from '../StatusBar.svelte';
  import TabBar from '../TabBar.svelte';
  import { stats, recentWins } from '../data.js';
</script>

<div class="phone tinted">
  <StatusBar />
  <div class="scroll pad-top">
    <div class="h-eyebrow">This year with Returnly</div>
    <h1 class="h-title">You’re winning.</h1>

    <div class="hero-stat">
      <div class="big">${stats.saved}</div>
      <div class="cap">saved — {stats.recovered} items found &amp; returned</div>
      <div class="bars">
        {#each [40, 62, 35, 78, 52, 90] as h}
          <div class="bar" style="height:{h}%"></div>
        {/each}
      </div>
    </div>

    <div class="stat-grid">
      <div class="card stat"><div class="num">{stats.tags}</div><div class="lbl">Items tagged</div></div>
      <div class="card stat"><div class="num">{stats.scans}</div><div class="lbl">Scans this month</div></div>
      <div class="card stat"><div class="num">{stats.recovered}</div><div class="lbl">Brought home</div></div>
      <div class="card stat"><div class="num">{stats.returnRate}%</div><div class="lbl">Return rate</div></div>
    </div>

    <div class="section-label">Recent wins</div>
    <div class="card wins">
      {#each recentWins as w, idx}
        <div class="win {idx === recentWins.length - 1 ? 'last' : ''}">
          <div class="w-emoji"><i class="fa-solid {w.icon}"></i></div>
          <div class="grow"><div class="w-name">{w.name}</div><div class="w-sub">Returned home</div></div>
          <div class="w-val">+${w.value}</div>
        </div>
      {/each}
    </div>
    <div style="height:14px"></div>
  </div>
  <TabBar active="stats" />
</div>

<style>
  .hero-stat { margin-top: 16px; padding: 24px 22px 18px; border-radius: var(--radius); color: #fff; background: linear-gradient(150deg, #3E8CFF, #0B4ED1); box-shadow: var(--shadow); position: relative; overflow: hidden; }
  .big { font-size: 52px; font-weight: 850; letter-spacing: -2px; line-height: 1; }
  .cap { font-size: 15px; opacity: 0.92; margin-top: 6px; font-weight: 500; }
  .bars { display: flex; align-items: flex-end; gap: 8px; height: 56px; margin-top: 20px; }
  .bar { flex: 1 1 0; background: rgba(255, 255, 255, 0.5); border-radius: 5px 5px 0 0; }
  .bar:last-child { background: #fff; }
  .stat-grid { margin-top: 14px; }
  .num { color: var(--ink); }
  .wins { padding: 4px 16px; }
  .win { display: flex; align-items: center; gap: 13px; padding: 13px 0; border-bottom: 1px solid var(--line); }
  .win.last { border-bottom: none; }
  .w-emoji { width: 42px; height: 42px; border-radius: 12px; background: var(--surface-2); border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; font-size: 19px; color: var(--primary); }
  .w-name { font-weight: 700; font-size: 15.5px; }
  .w-sub { color: var(--muted); font-size: 13px; }
  .w-val { font-weight: 800; color: var(--primary); font-size: 16px; }
</style>
