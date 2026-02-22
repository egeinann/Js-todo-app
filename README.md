# React CRUD Todo App

Modern web geliştirme tekniklerini kullanarak geliştirilmiş bir Todo uygulaması. ReactJS ve Bootstrap 5 ile hazırlanmıştır ve kullanıcıların görev ekleme, düzenleme, silme ve listeleme işlemlerini kolayca yapabilmesini sağlar.

---

**🔗 Canlı Uygulama Linki:** [https://exquisite-stardust-1eb05c.netlify.app/](https://exquisite-stardust-1eb05c.netlify.app/)

---

## Özellikler
- Görev ekleme, düzenleme ve silme
- Listeleme ve durum takibi
- React state yönetimi ile gerçek zamanlı güncellemeler
- Bootstrap 5 ile şık ve modern tasarım
- Responsive ve kullanıcı dostu arayüz

---

## Teknolojiler
- ReactJS – Kullanıcı arayüzü oluşturmak için
- Bootstrap 5 – Tasarım ve stil için
- JavaScript – Fonksiyonellik ve state yönetimi için
- CSS – Özel stiller ve hover efektleri için

---

## Kurulum ve Çalıştırma
1. Repo klonlanır: `git clone <repo-linki>`
2. Gerekli paketler yüklenir: `npm install`
3. Uygulama başlatılır: `npm start`

Uygulama `http://localhost:3000` adresinde çalışacaktır.

---

## Kullanım
- Görev eklemek için input alanına metin yazıp **Ekle** butonuna basın.
- Mevcut bir görevi düzenlemek için **Düzenle** butonuna basın ve değişiklikleri kaydedin.
- Görevleri silmek için **Sil** butonunu kullanın.
- Üst kısımdaki istatistik kartları toplam görev sayısını, durumunu ve versiyonu gösterir.

---

## Proje Yapısı
- components/ – Header, TodoForm ve TodoItem bileşenleri
- pages/ – Ana sayfa bileşeni
- Interfaces/ – Todo objesi tanımı
- App.js – Uygulamanın ana bileşeni ve state yönetimi
- index.js – React uygulamasının başlatılması
- styles.css – Genel stiller ve kart/liste tasarımları

---

## Geliştirme Notları
- State yönetimi tamamen React `useState` hook’u ile yapılmıştır.
- Bootstrap 5 kullanılarak responsive ve modern bir tasarım sağlanmıştır.
- Todo öğeleri listeye eklenirken ve silinirken gerçek zamanlı olarak güncellenir.
- Düzenleme fonksiyonu seçilen todo’yu input alanına yerleştirir ve güncelleme sonrası inputu temizler.
