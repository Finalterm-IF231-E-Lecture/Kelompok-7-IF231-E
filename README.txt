KELOMPOK 07
================================
Wahyuda Abdia Putra (00000060638)
Rasyid Alim Aulia (00000061628)
Ivandy Wijaya (00000061844)   
Pra Yoga Wijaya (00000061956) 

======================================================================================================================================================
                    						PERATURAN PERMAINAN UAS
======================================================================================================================================================

1. Player diminta untuk menyelesaikan pendidikan mereka dalam game.
   - Dalam game akan ditampilkan 2 bagian menu button, yaitu Go-To dan aktivitas.
   - Dalam game akan ditampilkan 4 bar pilihan go to dimana, pada masing-masing bar akan sangat berpengaruh pada lokasi dan aktivitas pada permainan.
   - Pada masing-masing bar terdapat icon yang merepresentasikan aktivitas bar tersebut.
   - Terdapat juga button yang jika di klik dapat meningkatkan persentase bar tersebut.

2. Sistem Go-To dan tombol aktivitas
   Setelah masuk ke game, pemain akan ditemukan section Go-To dan tombol aktivitas. Tombol Go-To akan membawa pemain ke lokasi yang ditentukan sesuai 
   dengan keterangan pada tombol (Rumah, Kampus, Cafe, Bioskop). Pada masing-masing tempat memiliki aktivitas yang berbeda:
   - Go-To Rumah, membawa pemain ke rumah. Pada lokasi Rumah, terdapat 4 aktivitas yang dapat dilakukan pemain, yaitu Makan, Main, Minum, dan Tidur.
   - Go-To Kampus, membawa pemain ke Kampus UMN. Pada lokasi kampus UMN, pemain dapat pergi ke:
     ~> Kelas: Di kelas pemain dapat melakukan aktivitas belajar beberapa mata kuliah, sesuai dengan jurusan yang telah dipilih.
     ~> Kantin: Di kantin, pemain dapat melakukan aktivitas makan dan minum.
     ~> Perpustakaan: Di perpus, pemain dapat melakukan aktivitas belajar.
   - Go-To Cafe, membawa pemain ke Cafe. Pada lokasi ini, pemain dapat melakukan aktivitas makan, minum, dan HangOut (chit-chat).
   - Go-To Bioskop, membawa pemain ke Bioskop. Pada lokasi ini, pemain dapat melakukan aktivitas makan dan nonton.

3. Pemain akan memulai permainan pada hari Minggu pukul 00.00 WIB.

4. Kondisi bar makan, main, dan tidur akan dimulai pada persentase 50%, sedangkan bar belajar akan dimulai pada persentase 0%.

5. Jika pemain tidak memasukkan nama di awal game, maka nama pemain akan di set sebagai “null”.

6. Konfigurasi waktu yang digunakan pada permainan ini adalah 20 menit untuk 1 detik(s) dunia nyata.

7. Saat sebuah button di klik, seluruh button yang ada akan disabled. Saat seluruh proses penambahan selesai, seluruh button akan di enable kembali. 
   Tetapi, Player disarankan untuk menunggu sampai pertambahan bar yang di klik menyelesaikan prosesnya.
   - Waktu tunggu makan: 3 detik dunia nyata 
   - Waktu tunggu minum: 3 detik dunia nyata 
   - Waktu tunggu main: 3 detik dunia nyata 
   - Waktu tunggu tidur: 3 detik dunia nyata 
   - Waktu tunggu nonton: 3 detik dunia nyata 
   - Waktu tunggu belajar: 3 detik dunia nyata

8. Mekanisme Button & Bar
   Masing-masing bar akan berkurang 0,5% per 20 menit ketika idle (tidak sedang melakukan kegiatan apapun), kecuali bar Belajar.

   - Button Makan:
     ~> Meningkatkan persentase bar Makan sebanyak 45% (15%/detik).
     ~> Pada saat makan, persentase bar yang lain akan menurun (kecuali bar Belajar). Bar Main akan berkurang sebesar 6%, bar Minum akan berkurang 
        sebesar 9%, dan bar Tidur akan berkurang sebesar 3%.

   - Button Minum:
     ~> Meningkatkan persentase bar Minum sebanyak 60% (20%/detik).
     ~> Pada saat Minum, persentase bar yang lain akan menurun (kecuali bar Belajar). Bar Main akan berkurang sebesar 6%, bar Makan akan berkurang 
        sebanyak 6%, dan bar Tidur akan berkurang sebesar 3%.

   - Button Main/Nonton/Hangout:
     ~> Meningkatkan persentase bar Main sebanyak 45% (15%/detik)
     ~> Pada saat bermain, persentase bar yang lain akan menurun (kecuali bar Belajar). Bar Makan akan berkurang sebesar 6%, bar Minum akan berkurang 
        sebesar 9%, dan bar Tidur akan berkurang sebesar 9%.

   - Button Tidur:
     ~> Meningkatkan persentase bar Tidur sebanyak 60% (20%/detik).
     ~> Pada saat tidur, persentase bar yang lain akan menurun (kecuali bar Belajar). Bar Makan akan berkurang sebesar 12%, bar Minum akan berkurang 
        sebesar 15% dan bar Main akan berkurang sebesar 12%.

   - Button Belajar:
     ~> Meningkatkan persentase belajar sebanyak 6% (2%/detik). 
     ~> Pada saat belajar, persentase bar yang lain akan menurun. Bar Makan akan berkurang akan berkurang sebesar 9%, bar Minum akan berkurang 
        sebesar 9%, bar Main akan berkurang 9%, dan bar Tidur akan berkurang 6%.

9. Mekanisme Game Over & Try Again
   Game akan berakhir ketika terdapat salah satu bar (makan/minum/main/tidur) mencapai angka 0%. Kemudian akan muncul pemberitahuan bahwa anda 
   telah gagal dalam 7 Days UMN. Tetapi anda bisa mencoba lagi hingga berhasil.

10. Page Death
    Player akan dinyatakan kalah jika salah salah satu dari bar Makan, Main, Minum, dan Tidur mencapai persentase 0%. Sistem akan menampilkan 
    halaman Game Over ketika anda kalah.

11. Untuk menyelesaikan game ini, pemain harus menyelesaikan simulasi berkuliah selama 7 hari. Kemudian, pada akhir permainan akan terdapat 
    evaluasi permainan Anda. Sebelum menerima evaluasi, pemain akan diberikan sebuah quiz dan pemain harus menjawab pertanyaan dengan benar agar 
    dapat menerima evaluasi permainan. Quiz yang diberikan merupakan 1 pertanyaan singkat terkait UAS ini. 

12. Page Evaluasi
    Pada akhir permainan, akan ditunjukkan data aktivitas player yg telah dilakukan selama permainan berlangsung. Seperti contoh, pada page 
    evaluasi ini akan menampilkan berapa banyak player makan atau berapa banyak player bermain. Data akan direkap pada akhir setiap minggu pada 
    permainan.
======================================================================================================================================================

<<CATATAN>> 
   ~> Jika pemain tidak mengisi nama pada menu awal, maka sistem akan merefresh game secara otomatis hingga pemain memasukkan nama.
   ~> Pemain bisa pergi ke kampus di hari Senin sampai Sabtu, dari jam 8 pagi sampai jam 5 sore. Tombol Go-To Campus akan disabled saat di 
      bawah jam 8 pagi dan di atas jam 5 sore.
   ~> Tombol Go-To Campus akan disabled pada hari minggu.
   ~> Permainan akan langsung selesai dan akan muncul quiz saat hari ke 7 terlewati (instant).
   ~> Terdapat beberapa fitur tambahan, seperti penggunaan hooks selain useState pada kode, Kemudian skema lokasi kampus yang dapat berpindah-pindah
   ~> Terdapat juga Quiz kecil di akhir, di mana pemain akan mendapat bonus poin (dapat menaikan evaluasi) jika menjawab dengan jawaban yang diharapkan
======================================================================================================================================================
Link Video YT: https://youtu.be/1QNV_J9awdA
======================================================================================================================================================

