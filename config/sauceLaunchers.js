const config = {};

/* =============
    CHROME
============== */
['beta', '54', '53'].forEach((version) => {
  // Windows
  config['sl_chrome-win-' + version] = {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 10',
    version
  };

  // MAC
  config['sl_chrome-osx-' + version] = {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'OS X 10.11',
    version
  };
});

// LINUX
['48', '47'].forEach((version) => {
  config['sl_firefox-linux-' + version] = {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Linux',
    version
  };
});

/* =============
  FIREFOX
============= */
['beta', '50', '49'].forEach((version) => {
  // Windows
  config['sl_chrome-win-' + version] = {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 10',
    version
  };
  
  // MAC
  config['sl_chrome-osx-' + version] = {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'OS X 10.11',
    version
  };
});

// Linux
['45', '44'].forEach((version) => {
  config['sl_firefox-linux-' + version] = {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Linux',
    version
  };
});

/* =============
  SAFARI
=============== */
['10', '9'].forEach((version) => {
  config['sl_safair-linux-' + version] = {
    base: 'SauceLabs',
    browserName: 'safari',
    platform: 'OS X 10.11',
    version
  };
});

/* ===============
  EDGE
================= */
config['sl_edge'] = {
  base: 'SauceLabs',
  browserName: 'MicrosoftEdge',
  platform: 'Windows 10'
};

console.log(config);
module.exports = config;