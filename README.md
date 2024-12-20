# Floating Icon Link

A simple JavaScript library to create a floating icon link on a webpage. The link can display an icon, text, and offers various customizable properties like background color, text color, shadow effects, animation, and more.

## Features

- **Customizable Icon**: Use Font Awesome icons or SVG icons.
- **Floating Element**: The icon link stays in a fixed position on the screen.
- **Text Animation**: The text can disappear with an animation, leaving only the icon.
- **Customizable Styles**: Adjust background color, text color, shadow, and more.
- **Optional Auto Disappearance**: Remove the element after a certain time.
- **Clickable**: The icon link is clickable and can redirect to any specified URL.

## Installation

### Using Direct Link from GitHub (CDN)

You can directly use the library in your project by referencing the `floatingIcon.js` script hosted on GitHub.

1. Add the following `<script>` tag to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/Ryuga/floating-icon@main/dist/floatingicon.js"></script>
```

## Usage

### Basic Usage

To add the floating icon link to your webpage, call the `createFloatingIconLink` function with the desired parameters.

```html
<script>
  createFloatingIconLink({
    icon: "fa-brands fa-github", // Font Awesome icon class (default: GitHub icon)
    text: "Open Source", // Text to display (default: "Open Source")
    backgroundColor: "transparent", // Background color of the button (default: transparent)
    textColor: "#000", // Text color (default: black)
    shadowEffect: "0 4px 6px rgba(0, 0, 0, 0.1)", // Shadow effect (default: light shadow)
    animationSpeed: 150, // Speed of text removal animation (default: 150ms)
    initialDelay: 1000, // Initial delay before animation starts (default: 1000ms)
    disappearAfter: 5000, // Time in ms to remove the button after (default: null)
    link: "https://github.com/Ryuga/floating-icon/", // Link the button redirects to (default: '#')
    bottom: "20px",
    right: "20px",
    left: null,
    top: null,
    position: "fixed",
    fontSize: "24px",
  });
</script>
```

### Options

| Option            | Type     | Description                                               | Default                        |
| ----------------- | -------- | --------------------------------------------------------- | ------------------------------ |
| `icon`            | `string` | Icon to display (either Font Awesome class or SVG)        | `fa-brands fa-github`          |
| `text`            | `string` | Text to display alongside the icon                        | `Open Source`                  |
| `backgroundColor` | `string` | Background color of the button (CSS valid color)          | `transparent`                  |
| `textColor`       | `string` | Color of the text (CSS valid color)                       | `#000`                         |
| `shadowEffect`    | `string` | Box-shadow CSS property                                   | `0 4px 6px rgba(0, 0, 0, 0.1)` |
| `animationSpeed`  | `number` | Speed of text disappearance animation in milliseconds     | `150`                          |
| `initialDelay`    | `number` | Delay in milliseconds before starting the text animation  | `1000`                         |
| `disappearAfter`  | `number` | Time in milliseconds after which the icon link disappears | `null`                         |
| `link`            | `string` | The URL to link to when the icon is clicked               | `#`                            |
| `position`        | `string` | Position type for the element                             | `fixed`                        |
| `top`             | `string` | Top position value                                        | `null`                         |
| `bottom`          | `string` | Bottom position value                                     | `20px`                         |
| `left`            | `string` | Left position value                                       | `null`                         |
| `right`           | `string` | Right position value                                      | `20px`                         |
| `fontSize`        | `number` | Font size for text (number)                               | `24`                           |
| `padding`         | `number` | Padding value for the text content                        | `24`                           |
