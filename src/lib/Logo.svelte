<script>
  let { size = 88 } = $props();
</script>

<div class="logo-tile" style="width:{size}px;height:{size}px;border-radius:{size * 0.27}px;">
  <svg viewBox="0 0 64 64" width={size * 0.62} height={size * 0.62}>
    <path d="M32 5C20 5 10.5 14.2 10.5 25.8 10.5 40 29 56.4 31 58.2a1.5 1.5 0 0 0 2 0C35 56.4 53.5 40 53.5 25.8 53.5 14.2 44 5 32 5Z" fill="var(--primary)"/>
    <path d="M32 35.4c-.4 0-.8-.15-1.1-.43l-6.3-6.1c-1.6-1.6-1.6-4.2 0-5.8 1.5-1.5 3.9-1.6 5.5-.3l1.9 1.6 1.9-1.6c1.6-1.3 4-1.2 5.5.3 1.6 1.6 1.6 4.2 0 5.8l-6.3 6.1c-.3.28-.7.43-1.1.43Z" fill="#fff"/>
  </svg>
</div>

<style>
  .logo-tile {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.16);
  }
</style>
