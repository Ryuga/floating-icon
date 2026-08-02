(function (window, document) {
  const faScriptId = "font-awesome-floaticon";
  if (!document.getElementById(faScriptId)) {
    const script = document.createElement("script");
    script.id = faScriptId;
    script.src = "https://kit.fontawesome.com/7eae56138c.js";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }

  function createFloatingIconLink({
    icon = "fa-brands fa-github",
    text = "Open Source",
    backgroundColor = "#ffffff",
    textColor = "#0f172a",
    shadowEffect = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)", // Modern soft shadow
    initialDelay = 2500,
    disappearAfter = null,
    link = "https://github.com/Ryuga/floating-icon/",
    bottom = "24px",
    right = "24px",
    left = null,
    top = null,
    fontSize = 20,
    animate = false,
    keepClosed = false,
  } = {}) {
    const existing = document.getElementById("floatingIconLink");
    if (existing) existing.remove();

    const styleId = "floatingIconLink-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        #floatingIconLink {
          position: fixed;
          bottom: ${bottom};
          right: ${right};
          top: ${top};
          left: ${left};
          border-radius: 50px; /* High border-radius creates pill/circle shapes */
          box-shadow: ${shadowEffect};
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${backgroundColor};
          color: ${textColor};
          cursor: pointer;
          text-decoration: none;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), 
                      box-shadow 0.3s ease, 
                      opacity 0.4s ease;
          padding: 3px;
          box-sizing: border-box;
        }

        /* Hover Lift Effect */
        #floatingIconLink:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        }

        /* --- New Spinning Light Animation --- */
        #floatingIconLink.animated::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          /* Comet-tail gradient effect */
          background: conic-gradient(transparent 60%, #3b82f6 90%, transparent 100%);
          animation: fl-spin 2s linear infinite;
          z-index: -2;
        }

        /* Inner background to mask the glowing ring */
        #floatingIconLink.animated::after {
          content: '';
          position: absolute;
          inset: 0px;
          background-color: ${backgroundColor};
          border-radius: inherit;
          z-index: -1;
        }

        @keyframes fl-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* --- Component Layout --- */
        .fl-content {
          display: flex;
          align-items: center;
          z-index: 1; /* Stay above the animated backgrounds */
        }

        .fl-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: ${fontSize + 4}px;
          height: ${fontSize + 4}px;
          font-size: ${fontSize}px;
        }

        .fl-icon-wrapper svg {
          width: 100%;
          height: 100%;
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
          /* Smooth transition handles the morphing from Pill -> Circle */
          transition: max-width 0.5s cubic-bezier(0.25, 1, 0.5, 1), 
                      opacity 0.4s ease, 
                      margin 0.5s ease;
        }

        /* --- Closed (Icon Only) State --- */
        #floatingIconLink.closed .fl-text-wrapper {
          max-width: 0;
          opacity: 0;
          margin-left: 0;
          margin-right: 0;
        }
      `;
      document.head.appendChild(style);
    }

    const buttonElement = document.createElement("a");
    buttonElement.id = "floatingIconLink";
    buttonElement.href = link;
    buttonElement.target = "_blank";

    if (animate) buttonElement.classList.add("animated");
    if (keepClosed) buttonElement.classList.add("closed");

    let iconHtml = icon.startsWith("fa-") ? `<i class="${icon}"></i>` : icon;

    buttonElement.innerHTML = `
      <div class="fl-content">
        <div class="fl-icon-wrapper">${iconHtml}</div>
        <div class="fl-text-wrapper">${text}</div>
      </div>
    `;

    const mountComponent = () => {
      document.body.appendChild(buttonElement);

      if (!keepClosed) {
        setTimeout(() => {
          buttonElement.classList.add("closed");
        }, initialDelay);
      }

      if (disappearAfter) {
        setTimeout(() => {
          buttonElement.style.opacity = "0";
          buttonElement.style.pointerEvents = "none";
          setTimeout(() => buttonElement.remove(), 400);
        }, disappearAfter);
      }
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", mountComponent);
    } else {
      mountComponent();
    }
  }

  window.createFloatingIconLink = createFloatingIconLink;
})(window, document);
