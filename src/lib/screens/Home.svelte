<script>
  import StatusBar from '../StatusBar.svelte';
  import TabBar from '../TabBar.svelte';
  import { items, owner, stats } from '../data.js';

  const found = items.find((i) => i.status === 'found');
  const lost = items.filter((i) => i.status === 'lost');
  const safe = items.filter((i) => i.status === 'safe');

  const labels = { safe: 'Home', found: 'Found!', lost: 'Lost' };
</script>

<div class="phone">
  <StatusBar />
  <div class="scroll pad-top">
    <div class="row spread top">
      <div class="h-eyebrow"><i class="fa-solid fa-location-dot"></i> Returnly</div>
      <div class="avatar">{owner.initials}</div>
    </div>
    <h1 class="h-title">Your stuff</h1>
    <p class="h-sub">{stats.tags} items tagged · {stats.recovered} brought home this year</p>

    {#if found}
      <div class="found-banner">
        <div class="fb-emoji"><i class="fa-solid {found.icon}"></i></div>
        <div class="grow">
          <div class="fb-title">{found.owner}’s {found.name} was found!</div>
          <div class="fb-meta"><i class="fa-solid fa-location-dot"></i> {found.place} · {found.when}</div>
        </div>
        <i class="fa-solid fa-chevron-right chev"></i>
      </div>
    {/if}

    {#if lost.length}
      <div class="section-label">Needs attention</div>
      {#each lost as i}
        <div class="card item">
          <div class="thumb"><i class="fa-solid {i.icon}"></i></div>
          <div class="body">
            <div class="name">{i.owner}’s {i.name}</div>
            <div class="meta">{i.place}</div>
          </div>
          <span class="pill lost"><span class="dot"></span>{labels[i.status]}</span>
        </div>
      {/each}
    {/if}

    <div class="section-label">At home</div>
    {#each safe as i}
      <div class="card item">
        <div class="thumb"><i class="fa-solid {i.icon}"></i></div>
        <div class="body">
          <div class="name">{i.owner}’s {i.name}</div>
          <div class="meta">{i.category} · ${i.value}</div>
        </div>
        <span class="pill safe">{labels[i.status]}</span>
      </div>
    {/each}
    <div style="height:14px"></div>
  </div>
  <TabBar active="home" />
</div>

<style>
  .top { margin: 2px 4px 6px; }
  .h-eyebrow i { margin-right: 2px; }
  .avatar { width: 38px; height: 38px; border-radius: 50%; background: var(--primary); color: #fff; font-weight: 800; font-size: 14px; display: flex; align-items: center; justify-content: center; }
  .thumb i { color: var(--primary); font-size: 25px; }
  .found-banner { margin-top: 18px; display: flex; align-items: center; gap: 14px; padding: 16px; border-radius: var(--radius); color: #fff; background: linear-gradient(120deg, #2E86FF, #1366F2); box-shadow: 0 12px 26px rgba(19, 102, 242, 0.32); }
  .fb-emoji { width: 50px; height: 50px; border-radius: 14px; background: rgba(255, 255, 255, 0.22); display: flex; align-items: center; justify-content: center; font-size: 23px; }
  .fb-title { font-weight: 800; font-size: 16px; letter-spacing: -0.2px; }
  .fb-meta { font-size: 13px; opacity: 0.92; margin-top: 2px; }
  .fb-meta i { font-size: 11px; }
  .chev { font-size: 17px; opacity: 0.9; }
</style>
