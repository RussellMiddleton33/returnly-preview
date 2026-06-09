<script>
  let { active = 'home' } = $props();
</script>

<div class="tabbar">
  <div class="tab {active === 'home' ? 'active' : ''}">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.8 12 3.5l9 7.3"/><path d="M5.2 9.4V20h13.6V9.4"/></svg>
    <span>Items</span>
  </div>
  <div class="tab {active === 'activity' ? 'active' : ''}">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M10.3 21a2 2 0 0 0 3.4 0"/></svg>
    <span>Activity</span>
  </div>
  <div class="tab-add">
    <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
  </div>
  <div class="tab {active === 'stats' ? 'active' : ''}">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>
    <span>Saved</span>
  </div>
  <div class="tab {active === 'profile' ? 'active' : ''}">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>
    <span>You</span>
  </div>
</div>
