const setLink = (id, url) => {
  const el = document.getElementById(id);
  if (el && url) el.href = url;
};

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));
  }

  document.querySelectorAll("#year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  if (typeof SITE_CONFIG !== "undefined") {
    setLink("twitchBtn", SITE_CONFIG.links.twitch);
    setLink("discordBtn", SITE_CONFIG.links.discord);
    setLink("twitchBtn2", SITE_CONFIG.links.twitch);

    setLink("discordCard", SITE_CONFIG.links.discord);
    setLink("twitchCard", SITE_CONFIG.links.twitch);
    setLink("youtubeCard", SITE_CONFIG.links.youtube);
    setLink("instagramCard", SITE_CONFIG.links.instagram);
    setLink("tiktokCard", SITE_CONFIG.links.tiktok);
    setLink("websiteCard", SITE_CONFIG.links.website);

    setLink("paypalBasic", SITE_CONFIG.paypal.basic);
    setLink("paypalPro", SITE_CONFIG.paypal.pro);
    setLink("paypalVip", SITE_CONFIG.paypal.vip);

    const embed = document.getElementById("twitchEmbed");
    if (embed) {
      const channel = SITE_CONFIG.twitchChannel || "nomecanale";
      const parent = window.location.hostname || "localhost";
      embed.src = `https://player.twitch.tv/?channel=${channel}&parent=${parent}&muted=true`;
    }
  }
});
