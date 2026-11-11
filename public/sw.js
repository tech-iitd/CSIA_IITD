const CACHE_NAME = "csia-offline-v1";
const LOCAL_ASSETS = [
  "/favicon.svg",
  "/icons.svg",
  "/assets/1.jpg",
  "/assets/2.jpg",
  "/assets/3.jpg",
  "/assets/4.jpg",
  "/assets/5.jpg",
  "/assets/6.jpg",
  "/assets/7.jpg",
  "/assets/8.jpg",
  "/assets/99c.jpg",
  "/assets/a.jpg",
  "/assets/a1.jpg",
  "/assets/a2.jpg",
  "/assets/anupam.jpg",
  "/assets/arpan.jpg",
  "/assets/arpanc.png",
  "/assets/ashok.gif",
  "/assets/awards.png",
  "/assets/bhalla.jpg",
  "/assets/bhim.jpg",
  "/assets/csia-logo.png",
  "/assets/cyber%20system.jpg",
  "/assets/Cyber-physical.jpg",
  "/assets/geet.jpg",
  "/assets/harshan.png",
  "/assets/HParsad.jpg",
  "/assets/huzur.jpg",
  "/assets/iit.jpg",
  "/assets/iitdlogo.png",
  "/assets/jaiswal.jpg",
  "/assets/jaiswal.png",
  "/assets/karuna.jpg",
  "/assets/khyati.jpg",
  "/assets/kolin.webp",
  "/assets/mpgupta.png",
  "/assets/mustafa.jpg",
  "/assets/niladri.png",
  "/assets/nivedita.jpg",
  "/assets/panigrahi.jpg",
  "/assets/piyush.jpg",
  "/assets/Priyanka.jpeg",
  "/assets/Rajendra.jpg",
  "/assets/ranjan%20bose.jpg",
  "/assets/ranjan%20sarangi.jpg",
  "/assets/ravi.jpg",
  "/assets/rksharma.jpg",
  "/assets/saif.jpg",
  "/assets/samuel.png",
  "/assets/Sandeep.jpg",
  "/assets/sandeep1.jpg",
  "/assets/sanjiva.jpg",
  "/assets/saroj.jpg",
  "/assets/senroy.jpg",
  "/assets/shankar.jpg",
  "/assets/sharma.jpg",
  "/assets/sheshadri.jpg",
  "/assets/sonam.jpg",
  "/assets/sorav.jpg",
  "/assets/SP%20Singh.png",
  "/assets/suri.jpg",
  "/assets/Tanvi.jpg",
  "/assets/vaishnavi.jpg",
  "/assets/venkata.jpg",
  "/assets/vigneswara.png",
  "/assets/vireshwer.jpg",
  "/vendor/fontawesome/css/all.min.css",
  "/vendor/fontawesome/webfonts/fa-brands-400.woff2",
  "/vendor/fontawesome/webfonts/fa-brands-400.ttf",
  "/vendor/fontawesome/webfonts/fa-regular-400.woff2",
  "/vendor/fontawesome/webfonts/fa-regular-400.ttf",
  "/vendor/fontawesome/webfonts/fa-solid-900.woff2",
  "/vendor/fontawesome/webfonts/fa-solid-900.ttf",
  "/vendor/fontawesome/webfonts/fa-v4compatibility.woff2",
  "/vendor/fontawesome/webfonts/fa-v4compatibility.ttf",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const response = await fetch("/", { cache: "reload" });
      if (!response.ok) throw new Error("Could not cache the site shell.");

      const html = await response.clone().text();
      await cache.put("/", response);
      await cache.put("/index.html", new Response(html, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }));

      const builtFiles = [...html.matchAll(/(?:src|href)="([^\"]+\.(?:js|css))"/g)]
        .map((match) => match[1])
        .filter((url) => url.startsWith("/"));

      await cache.addAll([...new Set([...LOCAL_ASSETS, ...builtFiles])]);
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(names.filter((name) => name.startsWith("csia-offline-") && name !== CACHE_NAME)
        .map((name) => caches.delete(name)));
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);

      if (request.mode === "navigate") {
        try {
          const response = await fetch(request);
          if (response.ok) await cache.put(request, response.clone());
          return response;
        } catch {
          return cached || cache.match("/index.html");
        }
      }

      if (cached) return cached;
      try {
        const response = await fetch(request);
        if (response.ok) await cache.put(request, response.clone());
        return response;
      } catch {
        return Response.error();
      }
    })()
  );
});
