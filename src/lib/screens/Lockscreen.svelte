<script>
  import StatusBar from '../StatusBar.svelte';
</script>

<div class="phone lock">
  <StatusBar light />

  <div class="lock-top">
    <i class="fa-solid fa-lock lock-icon"></i>
    <div class="time">9:41</div>
    <div class="date">Tuesday, June 9</div>
  </div>

  <div class="grow"></div>

  <div class="notifs">
    <div class="notif">
      <div class="app-icon">
        <svg viewBox="0 0 64 64" width="26" height="26">
          <path d="M32 6C21 6 12 14.4 12 25c0 12.8 17 28 18.8 29.6a1.4 1.4 0 0 0 2.4 0C35 53 52 37.8 52 25 52 14.4 43 6 32 6Z" fill="#fff" />
          <path d="M32 33.4c-.4 0-.7-.13-1-.4l-5.7-5.5c-1.45-1.45-1.45-3.8 0-5.2 1.35-1.35 3.5-1.45 5-.27l1.7 1.45 1.7-1.45c1.5-1.18 3.65-1.08 5 .27 1.45 1.4 1.45 3.75 0 5.2L33 33c-.3.27-.6.4-1 .4Z" fill="#1366F2" />
        </svg>
      </div>
      <div class="grow">
        <div class="n-head"><span class="n-app">RETURNLY</span><span class="n-time">now</span></div>
        <div class="n-title">Josie’s Owala Water Bottle was found!</div>
        <div class="n-body">Someone found it at Stephen Field. Tap to see where it is and message them.</div>
      </div>
    </div>

    <div class="notif faint">
      <div class="app-icon sm">
        <svg viewBox="0 0 64 64" width="20" height="20">
          <path d="M32 6C21 6 12 14.4 12 25c0 12.8 17 28 18.8 29.6a1.4 1.4 0 0 0 2.4 0C35 53 52 37.8 52 25 52 14.4 43 6 32 6Z" fill="#fff" />
          <path d="M32 33.4c-.4 0-.7-.13-1-.4l-5.7-5.5c-1.45-1.45-1.45-3.8 0-5.2 1.35-1.35 3.5-1.45 5-.27l1.7 1.45 1.7-1.45c1.5-1.18 3.65-1.08 5 .27 1.45 1.4 1.45 3.75 0 5.2L33 33c-.3.27-.6.4-1 .4Z" fill="#1366F2" />
        </svg>
      </div>
      <div class="grow">
        <div class="n-head"><span class="n-app">RETURNLY</span><span class="n-time">2h ago</span></div>
        <div class="n-title2">Taylor’s North Face is back home</div>
      </div>
    </div>
  </div>

  <div class="lock-bottom">
    <div class="circle"><svg viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M7 2h10l-1 3H8L7 2Zm1.2 4h7.6v2.8a2 2 0 0 1-.6 1.45l-1.1 1.05a2 2 0 0 0-.6 1.45V20a2 2 0 0 1-4 0v-6.25a2 2 0 0 0-.6-1.45L7.8 11.25A2 2 0 0 1 7.2 9.8V6Zm2.8 6h2v3h-2v-3Z"/></svg></div>
    <div class="home-bar"></div>
    <div class="circle"><i class="fa-solid fa-camera"></i></div>
  </div>
</div>

<style>
  .lock { background: linear-gradient(180deg, #0A368C 0%, #1366F2 58%, #3E86FF 100%); color: #fff; }
  .lock-top { display: flex; flex-direction: column; align-items: center; padding-top: 14px; }
  .lock-icon { font-size: 15px; opacity: 0.85; margin-bottom: 18px; }
  .time { font-size: 78px; font-weight: 700; letter-spacing: -2px; line-height: 1; }
  .date { font-size: 17px; font-weight: 600; opacity: 0.92; margin-top: 6px; }
  .notifs { padding: 0 12px; display: flex; flex-direction: column; gap: 9px; }
  .notif { display: flex; gap: 11px; align-items: flex-start; background: rgba(255, 255, 255, 0.86); backdrop-filter: blur(20px); border-radius: 19px; padding: 13px; box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12); }
  .notif.faint { background: rgba(255, 255, 255, 0.6); }
  .app-icon { width: 38px; height: 38px; flex: 0 0 38px; border-radius: 9px; background: var(--primary); display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); }
  .app-icon.sm { width: 32px; height: 32px; flex-basis: 32px; }
  .n-head { display: flex; justify-content: space-between; align-items: center; }
  .n-app { font-size: 12px; font-weight: 800; letter-spacing: 0.6px; color: #3a4555; }
  .n-time { font-size: 12px; color: #7a8597; }
  .n-title { font-weight: 700; font-size: 15px; color: #11151c; margin-top: 3px; line-height: 1.25; }
  .n-title2 { font-weight: 650; font-size: 14px; color: #11151c; margin-top: 2px; }
  .n-body { font-size: 14px; color: #3f4856; margin-top: 2px; line-height: 1.35; }
  .lock-bottom { display: flex; align-items: center; justify-content: space-between; padding: 26px 40px 14px; position: relative; }
  .circle { width: 48px; height: 48px; border-radius: 50%; background: rgba(255, 255, 255, 0.22); display: flex; align-items: center; justify-content: center; font-size: 18px; }
  .home-bar { position: absolute; left: 50%; bottom: 12px; transform: translateX(-50%); width: 134px; height: 5px; border-radius: 3px; background: rgba(255, 255, 255, 0.85); }
</style>
