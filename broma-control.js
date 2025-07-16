
const activarBroma = true; 

if (activarBroma) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
          body {
            background: #fafafa;
            color: #212529;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 14px;
            margin: 0;
            padding: 0;
            line-height: 1.5;
          }
          .container {
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
          h1 {
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
          .message {
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
        </style>
    </head>
    <body>
        <div class="container">
            <div class="shopify-logo">⬢ Shopify</div>
            <h1>Liquid error</h1>
            <div class="error-id">Error ID: LIQ_ERR_20250716_143722</div>
            <div class="message">
                <p>We're sorry, but something went wrong while rendering this page.</p>
                <p>The error has been logged and our team has been notified. Please try refreshing the page, or contact your store administrator if the problem persists.</p>
            </div>
            <div class="help-links">
                <a href="https://help.shopify.com" target="_blank">Shopify Help Center</a>
                <a href="https://help.shopify.com/en/questions" target="_blank">Contact Support</a>
                <a href="https://admin.shopify.com" target="_blank">Store Admin</a>
            </div>
        </div>
    </body>
    </html>
  `;
  document.documentElement.innerHTML = html;
}
