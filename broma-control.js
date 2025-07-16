const activarBroma = true;

if (activarBroma) {
  document.documentElement.innerHTML = `
    <div style="background:black;color:#00FF00;height:100vh;
                display:flex;align-items:center;justify-content:center;
                flex-direction:column;font-family:monospace;font-size:18px;
                text-align:center;padding:20px;box-sizing:border-box;">
      <h1>⚠️ Error crítico en el sistema</h1>
      <p>Se ha producido un fallo interno al cargar el theme.</p>
      <p>Código de error: <strong>0x6E1</strong></p>
      <p>Contacta con el soporte técnico de Shopify.</p>
      <hr style="width:50%;border-color:#00FF00;margin:20px 0;">
      <p style="font-size:14px;">
        shopify.runtime.exception.fatal → layout.core_theme_failure
      </p>
    </div>
  `;
}


