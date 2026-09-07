import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hesab.accounting',
  appName: 'ሂሳብ ማወራረጃ',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    backgroundColor: '#f7f9fc'
  }
};

export default config;
