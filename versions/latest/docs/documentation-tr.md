# bClass Animations

`bClass animations`, web projeleri için hazır kullanılabilir animasyonlar sağlayan bir CSS ve JavaScript kütüphanesidir. Kullanıcı deneyimini geliştirmek için pürüzsüz geçişler, hover efektleri ve çeşitli animasyon türleri sunar.

## Özellikler

- Pürüzsüz CSS animasyonları
- Hover efektleri
- Geçiş efektleri
- Kaydırma animasyonları
- Opaklık animasyonları
- Döndürme animasyonları
- Öğe etkileşim animasyonları

## Kullanım

### CSS Sınıfları

#### Animasyon Türleri

- `.animate-up` - Elemanları yukarı hareket ettiren animasyon
- `.animate-left` - Elemanları sola hareket ettiren animasyon
- `.animate-down` - Elemanları aşağı hareket ettiren animasyon
- `.animate-right` - Elemanları sağa hareket ettiren animasyon
- `.animate-slide-right` - Elemanları sağdan sola kaydıran animasyon
- `.animate-slide-left` - Elemanları soldan sağa kaydıran animasyon
- `.animate-slide-up` - Elemanları aşağıdan yukarı kaydıran animasyon
- `.animate-slide-down` - Elemanları yukarıdan aşağı kaydıran animasyon
- `.animate-opacity-sharp-full` - Keskin opaklık animasyonu (0'dan 1'e)
- `.animate-opacity-sharp-half` - Keskin opaklık animasyonu (0.5'ten 1'e)
- `.animate-opacity-soft-full` - Yumuşak opaklık animasyonu (0 → 1 → 0)
- `.animate-opacity-soft-half` - Yumuşak opaklık animasyonu (0.5 → 1 → 0.5)
- `.animate-rotate-l` - Sola döndürür
- `.animate-rotate-r` - Sağa döndürür
- `.animate-hover-up` - Fare üzerine geldiğinde elemanları yukarı hareket ettiren animasyon
- `.animate-hover-left` - Fare üzerine geldiğinde elemanları sola hareket ettiren animasyon
- `.animate-hover-down` - Fare üzerine geldiğinde elemanları aşağı hareket ettiren animasyon
- `.animate-hover-right` - Fare üzerine geldiğinde elemanları sağa hareket ettiren animasyon
- `.animate-items-m-1`, `.animate-items-hovered-m-1` - Hover efekti uygulanmış öğeler için stil
- `.animate-items-m-1`, `.animate-items-not-hovered-m-1` - Hover efekti uygulanmamış öğeler için stil
- `.animate-down-hover` - Fare üzerine geldiğinde elemanları aşağı hareket ettiren animasyon
- `.animate-right infinite hover:animate-none` - Elemanları sağa hareket ettiren, sonsuz döngüye alınan ve üzerine gelindiğinde etkinliği kaldırılan animasyon

#### Geçiş Efektleri

- `transition-none` - Geçiş yok
- `transition-all` - Tüm geçişler
- `transition-color` - Renk geçişleri
- `transition-opacity` - Opaklık geçişleri
- `transition-shadow` - Gölge geçişleri
- `transition-transform` - Dönüşüm geçişleri
- `transition-margin` - Kenar boşluğu geçişleri

#### Animasyon Zamanlama Fonksiyonları

- `.linear` - Doğrusal zamanlama fonksiyonu
- `.ease` - Kolay zamanlama fonksiyonu
- `.ease-in` - İçeri doğru kolay zamanlama fonksiyonu
- `.ease-out` - Dışarı doğru kolay zamanlama fonksiyonu
- `.ease-in-out` - İçeri ve dışarı kolay zamanlama fonksiyonu
- `.steps-6-end` - 6 adım ile zamanlama fonksiyonu
- `.cubic-bezier` - Kübik bezier zamanlama fonksiyonu

#### Animasyon Süresi

- `.animate-duration-0.1`
- `.animate-duration-0.2`
- `.animate-duration-0.3`
- `.animate-duration-0.4`
- `.animate-duration-0.5`
- `.animate-duration-0.6`
- `.animate-duration-0.7`
- `.animate-duration-0.8`
- `.animate-duration-0.9`
- `.animate-duration-1`
- `.animate-duration-2`
- `.animate-duration-3`
- `.animate-duration-4`
- `.animate-duration-5`
- `.animate-duration-6`
- `.animate-duration-7`
- `.animate-duration-8`
- `.animate-duration-9`
- `.animate-duration-10`
- `.animate-duration-15`
- `.animate-duration-20`
- `.animate-duration-25`
- `.animate-duration-30`
- `.animate-duration-35`
- `.animate-duration-40`
- `.animate-duration-45`
- `.animate-duration-50`
- `.animate-duration-55`
- `.animate-duration-60`

#### Animasyon Gecikmesi

- `.animate-delay-1`
- `.animate-delay-2`
- `.animate-delay-3`
- `.animate-delay-4`
- `.animate-delay-5`

#### Geçiş Süresi

- `.transition-duration-0.5`
- `.transition-duration-1`
- `.transition-duration-1.5`
- `.transition-duration-2`
- `.transition-duration-3`
- `.transition-duration-4`
- `.transition-duration-5`

#### Geçiş Gecikmesi

- `.transition-delay-0`
- `.transition-delay-10`
- `.transition-delay-25`
- `.transition-delay-50`
- `.transition-delay-75`
- `.transition-delay-100`

#### Örnek

[codepen](https://codepen.io/Endwall/pen/vYQJrqr)

## Kurulum

CSS ve JavaScript dosyalarını projenize ekleyin:

```html
<link rel="stylesheet" href="./bClass-animations.css" />
<script src="./bClass-animations.js"></script>
```

## Lisans

> Bik Public License 2.0 Lisansı kapsamında dağıtılmaktadır. Daha fazla bilgi için [LICENSE](./../../../LICENSE) dosyasına göz atın.
