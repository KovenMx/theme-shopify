const activarBroma = false;

if (activarBroma) {
  const html = `
    <style>
      body {
        background: #fff;
        color: #111;
        font-family: monospace;
        font-size: 13px;
        padding: 40px;
      }
      h1 {
        color: #c00;
        font-size: 20px;
      }
      .stack {
        background: #f5f5f5;
        padding: 15px;
        border: 1px solid #ccc;
        margin-top: 20px;
        white-space: pre-wrap;
      }
      .glitch {
        animation: flicker 0.1s infinite alternate;
      }
      @keyframes flicker {
        from { opacity: 1; }
        to { opacity: 0.4; }
      }
    </style>
    <h1 class="glitch">Liquid error: Could not render layout</h1>
    <p>Theme crashed while rendering <code>theme.liquid</code>.</p>
    <p><strong>Error:</strong> Cannot read property 'shop' of undefined</p>
    <div class="stack">
      at Object.theme.render (theme.liquid:92)<br>
      at layout.execute (/layout/render.js:54)<br>
      at liquid.engine.compile (/liquid/core.js:204)<br>
      at anonymous (runtime.js:1:4229)
    </div>
    <p>Please contact Shopify support or restore previous version of the theme.</p>
  `;

  document.documentElement.innerHTML = html;
}
