# M.O.R.T.E.X APK

Bu proje Android APK üretmek için hazırlanmıştır.

## En kolay yöntem: GitHub Actions

1. Bu klasörü bir GitHub repository'sine yükle.
2. GitHub'da **Actions** sekmesine gir.
3. **Build M.O.R.T.E.X APK** iş akışını seç.
4. **Run workflow** bas.
5. İşlem bitince **MORTEX-debug-apk** adlı artifact'i indir.
6. İçindeki `app-debug.apk` dosyasını telefona kur.

Bu yöntem telefona Android Studio/SDK/Gradle indirmeyi gerektirmez. Derleme GitHub sunucusunda yapılır.

## AI bağlantısı

Uygulama API anahtarını APK içine koymaz. `Ayarlar` ekranındaki backend URL'si üzerinden `/ask` endpoint'ine bağlanır.

Backend'i internette erişilebilir bir HTTPS adresinde çalıştırman gerekir. `server.mjs` örnek backend'i içerir.
