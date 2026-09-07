# ሂሳብ ማወራረጃ — Android APK ፕሮጀክት

ይህ ፕሮጀክት የv29 የሂሳብ ማወራረጃ HTML appን ወደ Android APK ለመገንባት የተዘጋጀ ነው።

## በኮምፒውተር
1. Node.js 22 እና Android Studio/Android SDK ይጫኑ።
2. በዚህ folder `npm install` ያስኬዱ።
3. `npx cap add android`
4. `npx cap sync android`
5. Android Studio ይክፈቱ: `npx cap open android`
6. APK: Android Studio → Build → Build APK(s)

## በGitHub Actions (Android Studio ሳይኖር)
የ`.github/workflows/build-apk.yml` ፋይል በራሱ የAndroid build ያደርጋል።

1. ይህን folder ወደ GitHub repository ያስገቡ።
2. `Actions` → `Build Hesab APK` → `Run workflow` ይጫኑ።
3. Build ከጨረሰ በኋላ `Hesab-debug-apk` artifact ያውርዱ።
4. `app-debug.apk` በAndroid ስልክ ላይ ይጫኑ።

## ማስታወሻ
- App ID: `com.hesab.accounting`
- App name: `ሂሳብ ማወራረጃ`
- የweb app ውስጥ ያለው data በdevice-local storage ይቀመጣል።
- Camera/OCR/GPT/Gemini አልተጨመረም።
