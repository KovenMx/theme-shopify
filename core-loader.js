const activarBroma = true; 

if (activarBroma) {
  // Crear estilos
  const style = document.createElement('style');
  style.textContent = `
    body {
      background: #fafafa !important;
      color: #212529 !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      font-size: 14px !important;
      margin: 0 !important;
      padding: 0 !important;
      line-height: 1.5 !important;
    }
    .shopify-error-container {
      max-width: 600px;
      margin: 80px auto;
      padding: 40px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .shopify-logo {
      color: #96bf48;
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 30px;
    }
    .error-title {
      color: #bf0711;
      font-size: 20px;
      font-weight: 600;
      margin: 0 0 16px 0;
    }
    .error-id {
      background: #f8f9fa;
      color: #6c757d;
      font-family: 'Monaco', 'Menlo', monospace;
      font-size: 12px;
      padding: 8px 12px;
      border-radius: 4px;
      margin-bottom: 20px;
    }
    .error-message {
      color: #495057;
      margin-bottom: 24px;
    }
    .help-links {
      border-top: 1px solid #e9ecef;
      padding-top: 20px;
      margin-top: 30px;
    }
    .help-links a {
      color: #0066cc;
      text-decoration: none;
      margin-right: 16px;
    }
    .help-links a:hover {
      text-decoration: underline;
    }
  `;
  document.head.appendChild(style);

  // Reemplazar solo el contenido del body
  document.body.innerHTML = `
    <div class="shopify-error-container">
        <div class="shopify-logo">⬢ Shopify</div>
        <h1 class="error-title">Liquid error</h1>
        <div class="error-id">Error ID: LIQ_ERR_${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}_${String(new Date().getHours()).padStart(2, '0')}${String(new Date().getMinutes()).padStart(2, '0')}${String(new Date().getSeconds()).padStart(2, '0')}</div>
        <div class="error-message">
            <p>We're sorry, but something went wrong while rendering this page.</p>
            <p>The error has been logged and our team has been notified. Please try refreshing the page, or contact your store administrator if the problem persists.</p>
        </div>
        <div class="help-links">
            <a href="https://help.shopify.com" target="_blank">Shopify Help Center</a>
            <a href="https://help.shopify.com/en/questions" target="_blank">Contact Support</a>
            <a href="https://admin.shopify.com" target="_blank">Store Admin</a>
        </div>
    </div>
  `;
}
