function FindProxyForURL(url, host) {
  var proxyDomains = [
    // Google / YouTube
    "google.com",
    "google.ru",
    "googlevideo.com",
    "gvt1.com",
    "gvt2.com",
    "gstatic.com",
    "googleapis.com",
    "googleusercontent.com",
    "ggpht.com",
    "ytimg.com",
    "youtube.com",
    "youtu.be",
    "youtube-nocookie.com",
    "yt3.ggpht.com",
    "yt3.googleusercontent.com",
    "youtube.googleapis.com",

    // OpenAI / ChatGPT
    "openai.com",
    "chat.openai.com",
    "api.openai.com",
    "cdn.openai.com",
    "chatgpt.com",
    "ai.com",

    // Twitter / X / Telegram Web / Reddit
    "twitter.com",
    "x.com",
    "twimg.com",
    "telegram.org",
    "t.me",
    "web.telegram.org",
    "reddit.com",
    "redd.it",

    // TikTok / Instagram / Facebook
    "tiktok.com",
    "instagram.com",
    "cdninstagram.com",
    "facebook.com",
    "fb.com",
    "fbcdn.net",
    "messenger.com",
    "meta.com",

    // Spotify / Deezer / SoundCloud
    "spotify.com",
    "scdn.co",
    "deezer.com",
    "soundcloud.com",

    // VPN
    "amnezia.org",
    "antizapret.prostovpn.org",
    "psiphon.ca",
    "nexitally.com",
    "nthlink.com",
    "getoutline.org",
    "outline.org",
    "vpnbook.com",
    "protonvpn.com",
    "windscribe.com",
    "dnsleaktest.com",

    // News
    "meduza.io",
    "zona.media",
    "rferl.org",
    "svoboda.org",
    "bbc.com",
    "dw.com",
    "currenttime.tv",
    "theins.ru",
    "novayagazeta.ru",
    "echo.msk.ru",
    "ovdinfo.org",
    "news.google.com",

    // Dev / Infra
    "github.com",
    "githubusercontent.com",
    "raw.githubusercontent.com",
    "gitlab.com",
    "bitbucket.org",
    "npmjs.com",
    "docker.com",
    "stackblitz.com",
    "codesandbox.io",
    "vercel.com",
    "netlify.app",
    "glitch.me",
    "jsdelivr.net",

    // Other
    "rutracker.org",
    "linkedin.com",
    "microsoft.com",
    "ikea.com",
    "digitalocean.com",
    "cloudflare.com",
    "cloudflareinsights.com",
    "fastly.net",
    "akamaihd.net"
  ];

  for (var i = 0; i < proxyDomains.length; i++) {
    if (dnsDomainIs(host, proxyDomains[i]) || shExpMatch(host, "*." + proxyDomains[i])) {
      return "SOCKS5 127.0.0.1:1086";
    }
  }

  return "DIRECT";
}

