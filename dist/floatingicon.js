(()=>{(function(d,t){let o="font-awesome-floaticon";if(!t.getElementById(o)){let i=t.createElement("script");i.id=o,i.src="https://kit.fontawesome.com/7eae56138c.js",i.crossOrigin="anonymous",t.head.appendChild(i)}function g({icon:i="fa-brands fa-github",text:x="Open Source",backgroundColor:s="#ffffff",textColor:m="#0f172a",shadowEffect:h="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",initialDelay:b=2500,disappearAfter:r=null,link:y="https://github.com/Ryuga/floating-icon/",bottom:w="24px",right:u="24px",left:L=null,top:k=null,fontSize:n=20,animate:I=!1,keepClosed:l=!1}={}){let c=t.getElementById("floatingIconLink");c&&c.remove();let p="floatingIconLink-styles";if(!t.getElementById(p)){let a=t.createElement("style");a.id=p,a.textContent=`
        #floatingIconLink {
          position: fixed;
          bottom: ${w};
          right: ${u};
          top: ${k};
          left: ${L};
          border-radius: 50px; /* High border-radius creates pill/circle shapes */
          box-shadow: ${h};
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${s};
          color: ${m};
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
          background-color: ${s};
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
          width: ${n+4}px;
          height: ${n+4}px;
          font-size: ${n}px;
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
      `,t.head.appendChild(a)}let e=t.createElement("a");e.id="floatingIconLink",e.href=y,e.target="_blank",I&&e.classList.add("animated"),l&&e.classList.add("closed");let v=i.startsWith("fa-")?`<i class="${i}"></i>`:i;e.innerHTML=`
      <div class="fl-content">
        <div class="fl-icon-wrapper">${v}</div>
        <div class="fl-text-wrapper">${x}</div>
      </div>
    `;let f=()=>{t.body.appendChild(e),l||setTimeout(()=>{e.classList.add("closed")},b),r&&setTimeout(()=>{e.style.opacity="0",e.style.pointerEvents="none",setTimeout(()=>e.remove(),400)},r)};t.readyState==="loading"?t.addEventListener("DOMContentLoaded",f):f()}d.createFloatingIconLink=g})(window,document);})();
