<script>
  import StatusBar from '../StatusBar.svelte';
  import Logo from '../Logo.svelte';
</script>

<div class="phone welcome">
  <StatusBar light />
  <div class="hero">
    <Logo size={96} />
    <h1>Returnly</h1>
    <p class="tag">Tag the stuff that matters.<br />When it’s lost, it finds its way home.</p>
  </div>

  <div class="ribbon">
    <div class="r-item"><i class="fa-solid fa-bottle-water"></i> bottles</div>
    <div class="r-item"><i class="fa-solid fa-shirt"></i> jackets</div>
    <div class="r-item"><i class="fa-solid fa-baseball"></i> gear</div>
    <div class="r-item"><i class="fa-solid fa-bag-shopping"></i> bags</div>
  </div>

  <div class="foot">
    <button class="btn white">Get started</button>
    <p class="small">Found something with a Returnly tag? Just scan it — no app needed.</p>
  </div>
</div>

<style>
  .welcome { background: linear-gradient(165deg, #3E8CFF 0%, #1366F2 45%, #0B4ED1 100%); color: #fff; }
  .hero { flex: 1 1 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 22px; padding: 0 36px; text-align: center; }
  h1 { font-size: 44px; font-weight: 850; letter-spacing: -1px; }
  .tag { font-size: 18px; line-height: 1.5; color: rgba(255, 255, 255, 0.9); font-weight: 500; }
  .ribbon { display: flex; justify-content: center; gap: 10px; padding: 0 20px 22px; flex-wrap: wrap; }
  .r-item { background: rgba(255, 255, 255, 0.14); border: 1px solid rgba(255, 255, 255, 0.18); padding: 8px 14px; border-radius: 999px; font-size: 14px; font-weight: 600; display: flex; align-items: center; gap: 7px; }
  .r-item i { font-size: 13px; opacity: 0.95; }
  .foot { padding: 8px 24px 40px; display: flex; flex-direction: column; gap: 16px; }
  .btn.white { background: #fff; color: var(--primary-ink); box-shadow: 0 12px 26px rgba(0, 0, 0, 0.2); }
  .small { text-align: center; font-size: 13.5px; line-height: 1.45; color: rgba(255, 255, 255, 0.82); padding: 0 10px; }
</style>
