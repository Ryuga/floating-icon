(function (window, document) {
  function createFloatingIconLink({
    icon = "fa-brands fa-github", // Default FontAwesome icon
    text = "Open Source", // Default text
    backgroundColor = "transparent", // Default background color
    textColor = "#000", // Default text color
    shadowEffect = "0 4px 6px rgba(0, 0, 0, 0.1)", // Default shadow effect
    animationSpeed = 150, // Speed of text removal
    initialDelay = 1000, // Delay before animation starts
    disappearAfter = null, // Time in ms to disappear (null means no disappear)
    link = "#", // Link for the element to navigate to
    bottom = "20px", // Default bottom position
    right = "20px", // Default right position
    left = null, // Default left position
    top = null, // Default top position
    fontSize = "24px",
    padding = "5px",
  } = {}) {
    // Inject CSS dynamically
    const style = document.createElement("style");
    style.textContent = `
      #floatingIconLink {
        position: fixed;
        bottom: ${bottom};
        right: ${right};
        top: ${top};
        left: ${left};
        padding: ${padding};
        border-radius: 25px;
        box-shadow: ${shadowEffect};
        font-size: ${fontSize};
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

      #floatingIconLink svg {
        display: inline-block;  /* Ensure the SVG is inline */
        width: 24px;
        height: 24px;
        margin-right: 8px; /* Space between the icon and text */
        vertical-align: middle; /* Align with the text */
      }

      #floatingIconLink i {
        font-size: ${fontSize}; /* Adjust icon size */
        margin-right: 8px; /* Add space between the icon and text */
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
    document.head.appendChild(style);

    // Create the element and inject it into the page
    const buttonElement = document.createElement("a");
    buttonElement.id = "floatingIconLink";
    buttonElement.href = link;
    buttonElement.target = "_blank"; // Open link in new tab

    // Check if icon is FontAwesome or a custom SVG/Unicode, and set the HTML accordingly
    let iconHtml = "";
    if (icon.startsWith("fa-")) {
      // If it's a FontAwesome class (e.g., "fa-brands fa-github")
      iconHtml = `<i class="${icon}"></i>`;
    } else {
      // If it's not FontAwesome, treat it as a custom SVG/Unicode
      iconHtml = `<div>${icon}</div>`;
    }

    buttonElement.innerHTML = `${iconHtml}<span id="openSourceText">${text}</span>`;
    document.body.appendChild(buttonElement);

    // Main functionality
    document.addEventListener("DOMContentLoaded", function () {
      const textElement = document.getElementById("openSourceText");
      const logoElement = document.querySelector("#floatingIconLink i");
      const svgElement = document.querySelector("#floatingIconLink svg");

      let text = textElement.textContent;
      let index = 0;
      let interval;

      function updateShadow() {
        const textWidth = textElement.offsetWidth;
        const maxWidth = 50;
        const newWidth = Math.max(maxWidth, textWidth);
        buttonElement.style.width = `${textWidth + 20}px`;
        buttonElement.style.borderRadius = "25px";
        buttonElement.style.boxShadow = `0 4px ${
          newWidth / 5
        }px rgba(0, 0, 0, 0.2)`;

        if (index === text.length) {
          buttonElement.style.borderRadius = "50%";
          buttonElement.style.boxShadow = `0 4px 6px rgba(0, 0, 0, 0.1)`;
          buttonElement.style.width = null;
          icon.startsWith("fa-")
            ? (logoElement.style.marginRight = "0")
            : (svgElement.style.marginRight = "0");
        }
      }

      function removeText() {
        if (index < text.length) {
          const remainingText = text.slice(index);
          textElement.innerHTML = `<span style="opacity: 0; transition: opacity 0.2s;">${
            remainingText[0]
          }</span>${remainingText.slice(1)}`;
          index++;
          updateShadow();
          setTimeout(() => {
            textElement.textContent = text.slice(index);
          }, 200);
        } else {
          clearInterval(interval);
        }
      }

      setTimeout(() => {
        interval = setInterval(removeText, animationSpeed);
      }, initialDelay);

      if (disappearAfter) {
        setTimeout(() => {
          buttonElement.style.display = "none";
        }, disappearAfter);
      }
    });
  }

  window.createFloatingIconLink = createFloatingIconLink;
})(window, document);
