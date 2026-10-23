(() => {
  (function (d, t) {
    let o = "font-awesome-floaticon";
    if (!t.getElementById(o)) {
      let i = t.createElement("script");
      i.id = o;
      i.src = "https://kit.fontawesome.com/7eae56138c.js";
      i.crossOrigin = "anonymous";
      t.head.appendChild(i);
    }

    function g({
      icon: i = "fa-brands fa-github",
      image: img = null,
      text: x = "Open Source",
      popupText: pt = "This software is built and maintained by BionicMind INC",
      popupLinkUrl: plu = null,
      popupLinkText: plt = "Visit link",
      backgroundColor: s = "#ffffff",
      textColor: m = "#0f172a",
      effectColor: ec = "#3b82f6",
      padding: pd = "1px",
      shadowEffect:
        h = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
      initialDelay: b = 2500,
      disappearAfter: r = null,
      bottom: w = "24px",
      right: u = "24px",
      left: L = null,
      top: k = null,
      fontSize: n = 20,
      animate: I = !1,
      animationType: A = "spin",
      keepClosed: l = !1,
    } = {}) {
      let c = t.getElementById("floatingIconLink");
      c && c.remove();
      let p = "floatingIconLink-styles";

      let activeAnimation = A;
      if (activeAnimation === "random") {
        const types = ["spin", "ripple", "pulse", "bounce", "glow"];
        activeAnimation = types[Math.floor(Math.random() * types.length)];
      }

      if (!t.getElementById(p)) {
        let a = t.createElement("style");
        a.id = p;
        a.textContent = `
        #floatingIconLink {
          position: fixed;
          bottom: ${w};
          right: ${u};
          top: ${k};
          left: ${L};
          border-radius: 50px;
          box-shadow: ${h};
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${s};
          color: ${m};
          cursor: pointer;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), 
                      box-shadow 0.3s ease, 
                      opacity 0.4s ease;
          padding: ${pd};
          box-sizing: border-box;
          user-select: none;
        }

        #floatingIconLink:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        }

        #floatingIconLink.animated-spin::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: conic-gradient(transparent 60%, ${ec} 90%, transparent 100%);
          animation: fl-spin 2s linear infinite;
          z-index: -2;
        }

        #floatingIconLink.animated-pulse {
          animation: fl-pulse 2s infinite ease-in-out;
        }

        @keyframes fl-pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        #floatingIconLink.animated-bounce {
          animation: fl-bounce 2s infinite ease-in-out;
        }

        @keyframes fl-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        #floatingIconLink.animated-glow {
          animation: fl-glow 2s infinite alternate ease-in-out;
        }

        @keyframes fl-glow {
          0% { box-shadow: 0 0 0 0 color-mix(in srgb, ${ec} 20%, transparent), ${h}; }
          100% { box-shadow: 0 0 10px 4px color-mix(in srgb, ${ec} 60%, transparent), ${h}; }
        }

        #floatingIconLink.animated-spin::after {
          content: '';
          position: absolute;
          inset: 0px;
          background-color: ${s};
          border-radius: inherit;
          z-index: -1;
        }

        @keyframes fl-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        #floatingIconLink.animated-ripple {
          animation: fl-ripple 1.5s infinite cubic-bezier(0.1, 0.6, 0.4, 1);
        }

        @keyframes fl-ripple {
          0% { box-shadow: 0 0 0 0 color-mix(in srgb, ${ec} 60%, transparent), ${h}; }
          100% { box-shadow: 0 0 0 8px transparent, ${h}; }
        }

        .fl-content {
          display: flex;
          align-items: center;
          z-index: 1;
        }

        .fl-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: ${n + 4}px;
          height: ${n + 4}px;
          font-size: ${n}px;
        }

        .fl-icon-wrapper svg {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        
        .fl-icon-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          transform: scale(1.25);
        }

        .fl-text-wrapper {
          white-space: nowrap;
          overflow: hidden;
          font-size: 14px;
          font-weight: 500;
          max-width: 250px;
          opacity: 1;
          margin-left: 10px;
          margin-right: 4px;
          transition: max-width 0.5s cubic-bezier(0.25, 1, 0.5, 1), 
                      opacity 0.4s ease, 
                      margin 0.5s ease;
        }

        #floatingIconLink.closed .fl-text-wrapper {
          max-width: 0;
          opacity: 0;
          margin-left: 0;
          margin-right: 0;
        }

        .fl-popup {
          position: absolute;
          bottom: calc(100% + 15px);
          ${L && L !== "auto" ? "left: 0;" : "right: 0;"} 
          background: ${s};
          color: ${m};
          padding: 16px;
          border-radius: 12px;
          box-shadow: ${h};
          width: max-content;
          max-width: 260px;
          display: none;
          flex-direction: column;
          gap: 10px;
          cursor: auto;
          z-index: 10000;
          text-align: left;
        }
        
        .fl-popup.fl-open {
          display: flex;
          animation: fl-fade-in 0.2s ease forwards;
        }
        
        @keyframes fl-fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fl-popup-text {
          font-size: 14px;
          line-height: 1.5;
          white-space: normal;
          font-weight: 400;
        }
        
        .fl-popup-link {
          color: ${ec};
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          align-self: flex-start;
        }
        
        .fl-popup-link:hover {
          text-decoration: underline;
        }
        
        #floatingIconLink .fl-icon-wrapper img {
          transform: none;
          border-radius: 0;
          object-fit: contain;
        }
    
        `;
        t.head.appendChild(a);
      }

      let e = t.createElement("div");
      e.id = "floatingIconLink";

      if (I) {
        e.classList.add("animated-" + activeAnimation);
      }
      if (l) e.classList.add("closed");

      let v = img
        ? `<img src="${img}" alt="icon" />`
        : i.startsWith("fa-")
          ? `<i class="${i}"></i>`
          : i;

      e.innerHTML = `
      <div class="fl-popup" id="flPopup">
        <div class="fl-popup-text">${pt}</div>
        ${plu ? `<a href="${plu}" target="_blank" class="fl-popup-link">${plt}</a>` : ""}
      </div>
      <div class="fl-content">
        <div class="fl-icon-wrapper">${v}</div>
        <div class="fl-text-wrapper">${x}</div>
      </div>
      `;

      e.addEventListener("click", (event) => {
        if (event.target.tagName === "A") return;
        const popup = t.getElementById("flPopup");
        if (popup) popup.classList.toggle("fl-open");
      });

      let f = () => {
        t.body.appendChild(e);
        if (!l)
          setTimeout(() => {
            e.classList.add("closed");
          }, b);
        if (r)
          setTimeout(() => {
            e.style.opacity = "0";
            e.style.pointerEvents = "none";
            setTimeout(() => e.remove(), 400);
          }, r);
      };

      t.readyState === "loading"
        ? t.addEventListener("DOMContentLoaded", f)
        : f();
    }

    d.createFloatingIconLink = g;
  })(window, document);
})();
