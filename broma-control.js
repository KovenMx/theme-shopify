const activarBroma = true; 
if (activarBroma) {
  document.documentElement.innerHTML = `
    <div style="background:#000;color:#0f0;font-family:monospace;font-size:14px;
                padding:20px;box-sizing:border-box;height:100vh;width:100vw;
                display:flex;flex-direction:column;justify-content:center;">
      <pre>
>> ERROR 0x0006E1: Shopify Theme Core Failure
------------------------------------------------------------
[ SYSTEM FAILURE ] Theme rendering interrupted unexpectedly
[ TIMESTAMP ] ${new Date().toLocaleString()}
[ ERROR CODE ] layout.core_theme_failure @ /layout/theme.liquid:92

>> Unable to fetch critical layout dependencies.
>> Possible causes:
    - Theme corruption
    - Shopify liquid compilation failure
    - DOM injection interference

>> Recommended actions:
    - Contact Shopify Support
    - Restore previous theme version
    - Re-deploy from GitHub

------------------------------------------------------------
Log trace: 
  at renderTheme (liquid-engine.js:432)
  at main (index.js:18)
  at window.onload (runtime.js:1)

------------------------------------------------------------
Theme ID: mipase-theme-v1.3 | Session ID: ${Math.floor(Math.random()*99999999)}
      </pre>
    </div>
  `;
}


