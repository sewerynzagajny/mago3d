// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>3D Print Text Animation</title>
//   <style>
//     body {
//       background-color: #0a0a0a;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       height: 100vh;
//       margin: 0;
//     }

//     .print-container {
//       display: flex;
//       font-family: 'Courier New', monospace;
//       font-size: 4rem;
//       font-weight: bold;
//       color: #52d552;
//       perspective: 1000px;
//     }

//     .letter {
//       opacity: 0;
//       transform: translateY(100%) scaleY(0.1);
//       display: inline-block;
//       animation: print 0.5s forwards;
//     }

//     @keyframes print {
//       0% {
//         opacity: 0;
//         transform: translateY(100%) scaleY(0.1);
//       }
//       60% {
//         opacity: 1;
//         transform: translateY(0%) scaleY(1.2);
//       }
//       100% {
//         transform: translateY(0%) scaleY(1);
//       }
//     }
//   </style>
// </head>
// <body>
//   <div class="print-container" id="printer"></div>

//   <script>
//     const text = "Skontaktuj się z Nami";
//     const container = document.getElementById('printer');

//     text.split('').forEach((char, i) => {
//       const span = document.createElement('span');
//       span.classList.add('letter');
//       span.style.animationDelay = `${i * 0.2}s`;
//       span.textContent = char;
//       container.appendChild(span);
//     });
//   </script>
// </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>3D Print Text Animation</title>
//   <style>
//     body {
//       background-color: #0a0a0a;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       height: 100vh;
//       margin: 0;
//     }

//     .print-container {
//       display: flex;
//       font-family: 'Courier New', monospace;
//       font-size: 4rem;
//       font-weight: bold;
//       color: #52d552;
//       perspective: 1000px;
//       flex-wrap: wrap;
//     }

//     .letter {
//       opacity: 0;
//       transform: translateY(100%) scaleY(0.1);
//       display: inline-block;
//       animation: print 0.5s forwards;
//       animation-fill-mode: forwards;
//       white-space: pre;
//     }

//     @keyframes print {
//       0% {
//         opacity: 0;
//         transform: translateY(100%) scaleY(0.1);
//       }
//       60% {
//         opacity: 1;
//         transform: translateY(0%) scaleY(1.2);
//       }
//       100% {
//         opacity: 1;
//         transform: translateY(0%) scaleY(1);
//       }
//     }
//   </style>
// </head>
// <body>
//   <div class="print-container" id="printer"></div>

//   <script>
//     const text = "Skontaktuj się z Nami";
//     const container = document.getElementById('printer');

//     text.split('').forEach((char, i) => {
//       const span = document.createElement('span');
//       span.classList.add('letter');
//       span.style.animationDelay = `${i * 0.2}s`;
//       span.textContent = char === ' ' ? '\u00A0' : char;
//       container.appendChild(span);
//     });
//   </script>
// </body>
// </html>
