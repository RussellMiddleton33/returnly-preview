<script>
  let { light = false } = $props();
</script>

<div class="statusbar {light ? 'light' : ''}">
  <span>9:41</span>
  <span class="icons">
    <span class="bars"><i style="height:5px"></i><i style="height:7px"></i><i style="height:9px"></i><i style="height:11px"></i></span>
    <svg width="17" height="12" viewBox="0 0 17 12">
      <path d="M8.5 2.1c2.4 0 4.6.9 6.2 2.4l1.2-1.3C14 1.3 11.4.2 8.5.2S3 1.3 1.1 3.2l1.2 1.3C3.9 3 6.1 2.1 8.5 2.1z" fill="currentColor"/>
      <path d="M8.5 5.7c1.3 0 2.5.5 3.4 1.4l1.2-1.3c-1.2-1.2-2.9-1.9-4.6-1.9s-3.4.7-4.6 1.9l1.2 1.3c.9-.9 2.1-1.4 3.4-1.4z" fill="currentColor"/>
      <circle cx="8.5" cy="9.6" r="1.7" fill="currentColor"/>
    </svg>
    <svg width="27" height="13" viewBox="0 0 27 13">
      <rect x="1" y="1.5" width="21" height="10" rx="3" fill="none" stroke="currentColor" stroke-opacity=".35"/>
      <rect x="2.6" y="3.1" width="16.5" height="6.8" rx="1.7" fill="currentColor"/>
      <rect x="23.4" y="4.6" width="1.9" height="3.8" rx="1" fill="currentColor" fill-opacity=".5"/>
    </svg>
  </span>
</div>
