(function() {
  // Suppress the specific Tailwind CDN production warning
  var originalWarn = console.warn;
  console.warn = function(...args) {
    if (args[0] && typeof args[0] === 'string' && args[0].includes('cdn.tailwindcss.com')) {
      return;
    }
    originalWarn.apply(console, args);
  };

  // Inject the Tailwind CDN script
  var script = document.createElement('script');
  script.src = "https://cdn.tailwindcss.com";
  document.head.appendChild(script);
})();