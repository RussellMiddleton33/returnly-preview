<script>
  import Welcome from './lib/screens/Welcome.svelte';
  import Home from './lib/screens/Home.svelte';
  import Detail from './lib/screens/Detail.svelte';
  import Found from './lib/screens/Found.svelte';
  import AddItem from './lib/screens/AddItem.svelte';
  import Dashboard from './lib/screens/Dashboard.svelte';
  import Finder from './lib/screens/Finder.svelte';
  import Lockscreen from './lib/screens/Lockscreen.svelte';
  import MapView from './lib/screens/MapView.svelte';

  const screens = [
    { key: 'welcome', label: 'Welcome', comp: Welcome },
    { key: 'home', label: 'Your stuff', comp: Home },
    { key: 'detail', label: 'Item detail', comp: Detail },
    { key: 'add', label: 'Register', comp: AddItem },
    { key: 'lockscreen', label: 'Push alert', comp: Lockscreen },
    { key: 'found', label: 'It’s found!', comp: Found },
    { key: 'map', label: 'Map', comp: MapView },
    { key: 'dashboard', label: 'Savings', comp: Dashboard },
    { key: 'finder', label: 'Finder (no app)', comp: Finder },
  ];
  const map = Object.fromEntries(screens.map((s) => [s.key, s.comp]));

  const param = new URLSearchParams(location.search).get('screen');
  const shotMode = !!(param && map[param]);

  let current = $state(shotMode ? param : 'welcome');
  const Current = $derived(map[current] || Welcome);
</script>

{#if shotMode}
  <Current />
{:else}
  <div class="demo">
    <div class="demo-head">
      <div class="e">Returnly · concept preview</div>
      <h1>Tap through the experience</h1>
      <p>Working visuals — name, colors &amp; copy all adjustable</p>
    </div>

    <div class="nav">
      {#each screens as s}
        <button class:on={current === s.key} onclick={() => (current = s.key)}>{s.label}</button>
      {/each}
    </div>

    <div class="device">
      <div class="notch"></div>
      <div class="device-inner">
        <Current />
      </div>
    </div>
  </div>
{/if}

<style>
  .demo {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: radial-gradient(120% 80% at 50% 0%, #f4efe4, #e0dacd);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 16px 48px;
    gap: 22px;
  }
  .demo-head { text-align: center; }
  .demo-head .e { color: #1366f2; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; font-size: 12px; }
  .demo-head h1 { font-size: 27px; font-weight: 850; letter-spacing: -0.6px; color: #17120d; margin-top: 4px; }
  .demo-head p { color: #8c8378; font-size: 14px; margin-top: 5px; }
  .nav { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; max-width: 580px; }
  .nav button { font-family: inherit; border: 1.5px solid #dcd4c6; background: #fff; color: #17120d; font-weight: 650; font-size: 13.5px; padding: 9px 15px; border-radius: 999px; cursor: pointer; transition: all 0.12s; }
  .nav button:hover { border-color: #1366f2; }
  .nav button.on { background: #1366f2; color: #fff; border-color: #1366f2; }
  .device { position: relative; width: 390px; height: 844px; flex: 0 0 auto; background: #0c0c0c; border-radius: 52px; padding: 12px; box-shadow: 0 36px 80px rgba(0, 0, 0, 0.32); }
  .notch { position: absolute; top: 12px; left: 50%; transform: translateX(-50%); width: 124px; height: 30px; background: #0c0c0c; border-radius: 0 0 18px 18px; z-index: 20; }
  .device-inner { width: 100%; height: 100%; border-radius: 41px; overflow: hidden; position: relative; background: #fff; }
</style>
