
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "createFloatingIconLink", () => $c4cac621eebe1e20$export$9ec9dc57245be36e);
(function(window1, document1) {
    function createFloatingIconLink({ icon: icon = "<svg class='w-6 h-6 text-gray-800 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'><path d='M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z'/></svg>", text: text = "Floating Icon", backgroundColor: backgroundColor = "transparent", textColor: textColor = "#000", shadowEffect: shadowEffect = "0 4px 6px rgba(0, 0, 0, 0.1)", animationSpeed: animationSpeed = 150, initialDelay: initialDelay = 1000, disappearAfter: disappearAfter = null, link: link = "#" } = {}) {
        // Inject CSS dynamically
        const style = document1.createElement("style");
        style.textContent = `
        #floatingIconLink {
          position: fixed;
          bottom: 20px;
          right: 20px;
          padding: 10px;
          border-radius: 25px;
          box-shadow: ${shadowEffect};
          font-size: 16px;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s ease, transform 0.3s ease, width 0.3s ease, box-shadow 0.3s ease, border-radius 0.3s ease;
          background-color: ${backgroundColor};
          color: ${textColor};
          width: auto;
          overflow: hidden;
          cursor: pointer;
          text-decoration: none;
        }
  
        #floatingIconLink i {
          font-size: 24px;
          margin-right: 8px;
        }
  
        #floatingIconLink span {
          display: inline;
          white-space: nowrap;
          opacity: 1;
          transition: opacity 0.2s ease;
        }
  
        #floatingIconLink:hover {
          transform: scale(1.1);
          opacity: 0.9;
        }
      `;
        document1.head.appendChild(style);
        // Create and inject element into the page
        const buttonElement = document1.createElement("a");
        buttonElement.id = "floatingIconLink";
        buttonElement.href = link;
        buttonElement.target = "_blank";
        buttonElement.innerHTML = `<i class="${icon}"></i><span id="openSourceText">${text}</span>`;
        document1.body.appendChild(buttonElement);
        document1.addEventListener("DOMContentLoaded", function() {
            const textElement = document1.getElementById("openSourceText");
            const logoElement = document1.querySelector("#floatingIconLink i");
            let text = textElement.textContent;
            let index = 0;
            // Update button shadow and size dynamically
            function updateShadow() {
                const textWidth = textElement.offsetWidth;
                const maxWidth = 50;
                const newWidth = Math.max(maxWidth, textWidth);
                buttonElement.style.width = `${textWidth + 20}px`;
                buttonElement.style.borderRadius = "25px";
                buttonElement.style.boxShadow = `0 4px ${newWidth / 5}px rgba(0, 0, 0, 0.2)`;
                if (index === text.length) {
                    buttonElement.style.borderRadius = "50%";
                    buttonElement.style.boxShadow = `0 4px 6px rgba(0, 0, 0, 0.1)`;
                    buttonElement.style.width = null;
                    logoElement.style.marginRight = "0";
                }
            }
            function removeText() {
                if (index < text.length) {
                    const remainingText = text.slice(index);
                    textElement.innerHTML = `<span style="opacity: 0; transition: opacity 0.2s;">${remainingText[0]}</span>${remainingText.slice(1)}`;
                    index++;
                    updateShadow();
                    setTimeout(()=>{
                        textElement.textContent = text.slice(index);
                    }, 200);
                } else clearInterval(interval);
            }
            setTimeout(()=>{
                const interval1 = setInterval(removeText, animationSpeed);
            }, initialDelay);
            // Remove element after specified time if disappearAfter is set
            if (disappearAfter) setTimeout(()=>{
                buttonElement.style.display = "none";
            }, disappearAfter);
        });
    }
    window1.createFloatingIconLink = createFloatingIconLink;
})(window, document);


