(function () {
  const ACT_MIPASE = false;
  const ACT_XARAVE = false;

  const host = location.hostname;
  const isMipase = ['mipase.com','www.mipase.com'].includes(host);
  const isXarave = ['xarave.com','www.xarave.com'].includes(host);

  const BLOCKED_PREFIXES = ['/checkout','/cart','/account','/apps'];
  const rutaBloqueada = BLOCKED_PREFIXES.some(p => location.pathname.startsWith(p));
  const esCheckout = typeof Shopify !== 'undefined' && Shopify.Checkout;

  const activarBroma = !rutaBloqueada && !esCheckout && (
    (ACT_MIPASE && isMipase) || (ACT_XARAVE && isXarave)
  );

  if (!activarBroma) return;

  document.documentElement.innerHTML = `
    <div style="background:#fafafa;color:#212529;height:100vh;
                display:flex;align-items:center;justify-content:center;
                flex-direction:column;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
                font-size:14px;text-align:left;padding:20px;box-sizing:border-box;line-height:1.5;">
      <div style="max-width:600px;background:white;padding:40px;border-radius:8px;
                  box-shadow:0 2px 4px rgba(0,0,0,0.1);width:100%;">
        <div style="color:#96bf48;font-weight:bold;font-size:18px;margin-bottom:30px;">
          ⬢ Shopify
        </div>
        <h1 style="color:#bf0711;font-size:20px;font-weight:600;margin:0 0 16px 0;">
          Liquid error
        </h1>
        <div style="background:#f8f9fa;color:#6c757d;font-family:Monaco,Menlo,monospace;
                    font-size:12px;padding:8px 12px;border-radius:4px;margin-bottom:20px;">
          Error ID: LIQ_ERR_${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}_${String(new Date().getHours()).padStart(2, '0')}${String(new Date().getMinutes()).padStart(2, '0')}${String(new Date().getSeconds()).padStart(2, '0')}
        </div>
        <div style="color:#495057;margin-bottom:24px;">
          <p>We're sorry, but something went wrong while rendering this page.</p>
          <p>The error has been logged and our team has been notified. Please try refreshing the page, or contact your store administrator if the problem persists.</p>
        </div>
        <div style="border-top:1px solid #e9ecef;padding-top:20px;margin-top:30px;">
          <a href="https://help.shopify.com" target="_blank" style="color:#0066cc;text-decoration:none;margin-right:16px;">Shopify Help Center</a>
          <a href="https://help.shopify.com/en/questions" target="_blank" style="color:#0066cc;text-decoration:none;margin-right:16px;">Contact Support</a>
          <a href="https://admin.shopify.com" target="_blank" style="color:#0066cc;text-decoration:none;">Store Admin</a>
        </div>
      </div>
    </div>
  `;
})();
