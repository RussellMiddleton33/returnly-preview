<script>
  import StatusBar from '../StatusBar.svelte';
  import { girls, categories } from '../data.js';
</script>

<div class="phone tinted">
  <StatusBar />
  <div class="navbar">
    <i class="fa-solid fa-chevron-left back"></i>
    <span class="nav-title">Add an item</span>
    <span class="edit" style="opacity:.35">Save</span>
  </div>

  <div class="scroll">
    <div class="scanned">
      <div class="check"><i class="fa-solid fa-check"></i></div>
      <div class="grow">
        <div class="scanned-title">Tag detected</div>
        <div class="scanned-id"><i class="fa-solid fa-tag"></i> Returnly tag · 7K2QX</div>
      </div>
      <span class="rescan">Rescan</span>
    </div>

    <div class="field">
      <label>What is it?</label>
      <div class="input filled">Owala Water Bottle</div>
    </div>

    <div class="field">
      <label>Whose is it?</label>
      <div class="chips">
        {#each girls as g, i}
          <span class="chip {i === 0 ? 'on' : ''}">{g}</span>
        {/each}
        <span class="chip"><i class="fa-solid fa-plus"></i> Add</span>
      </div>
    </div>

    <div class="field">
      <label>Category</label>
      <div class="chips">
        {#each categories as c, i}
          <span class="chip {i === 0 ? 'on' : ''}">{c}</span>
        {/each}
      </div>
    </div>

    <div class="field two">
      <div class="half">
        <label>Photo</label>
        <div class="photo-tile"><i class="fa-solid fa-camera"></i><span>Add</span></div>
      </div>
      <div class="half">
        <label>Value</label>
        <div class="input filled">$40</div>
      </div>
    </div>

    <button class="btn primary big">Register item</button>
    <div style="height:18px"></div>
  </div>
</div>

<style>
  .navbar { flex: 0 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 4px 22px 10px; font-size: 16px; }
  .back { font-size: 20px; color: var(--primary); }
  .nav-title { font-weight: 700; }
  .edit { color: var(--primary); font-weight: 600; }
  .scanned { display: flex; align-items: center; gap: 13px; padding: 15px; border-radius: var(--radius); background: var(--primary-soft); border: 1px solid #CADFFF; margin-bottom: 8px; }
  .check { width: 40px; height: 40px; border-radius: 50%; background: var(--primary); color: #fff; font-size: 18px; display: flex; align-items: center; justify-content: center; }
  .scanned-title { font-weight: 750; font-size: 16px; color: var(--primary-ink); }
  .scanned-id { font-size: 13px; color: var(--primary); margin-top: 1px; }
  .scanned-id i { font-size: 11px; }
  .rescan { font-size: 13px; font-weight: 700; color: var(--primary); }
  .field { margin-top: 20px; }
  .field.two { display: flex; gap: 12px; }
  .half { flex: 1 1 0; }
  label { display: block; font-size: 13px; font-weight: 700; color: var(--muted); margin: 0 2px 8px; }
  .input { background: var(--surface); border: 1.5px solid var(--line); border-radius: 14px; padding: 15px; font-size: 16px; }
  .input.filled { color: var(--ink); font-weight: 600; }
  .chips { display: flex; flex-wrap: wrap; gap: 8px; }
  .photo-tile { background: var(--surface); border: 1.5px dashed var(--faint); border-radius: 14px; height: 54px; display: flex; align-items: center; justify-content: center; gap: 7px; color: var(--muted); font-weight: 600; font-size: 15px; }
  .btn.big { margin-top: 26px; }
</style>
