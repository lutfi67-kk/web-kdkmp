/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CoffeeProduct, StorySection, LogoElement } from "./types";

// Dynamic images we generated (using absolute-like imports from src for the React app)
import logoImage from "./assets/images/kdkmp_logo_1784626903940.jpg";
import packagingImage from "./assets/images/kdkmp_packaging_1784626921436.jpg";
import plantationImage from "./assets/images/kdkmp_plantation_1784626936471.jpg";

export const IMAGES = {
  logo: logoImage,
  packaging: packagingImage,
  plantation: plantationImage,
};

export const COMPANY_PROFILE = {
  name: "Koperasi Desa Merah Putih (KDKMP)",
  tagline: "Merajut Asa Petani, Membawa Cita Rasa Garut ke Seluruh Dunia",
  history: `Koperasi Desa Merah Putih (KDKMP) berdiri di kaki Gunung Papandayan, Garut, Jawa Barat pada tahun 2018. Lahir dari inisiatif kolektif sekelompok petani muda yang gelisah melihat fluktuasi harga kopi ceri basah yang kerap merugikan petani akibat permainan tengkulak. Berbekal tekad untuk mendirikan kedaulatan ekonomi mandiri, mereka bersepakat membentuk koperasi produsen. Dengan mengusung nama "Merah Putih", koperasi ini tidak hanya membawa misi ekonomi, tetapi juga semangat nasionalisme untuk memosisikan kopi Garut sebagai salah satu kopi Arabika terbaik di panggung dunia, sekaligus memastikan kesejahteraan bagi petani yang mengolah tanah airnya.`,
  
  visi: "Menjadi pilar utama kedaulatan ekonomi petani kopi Arabika Garut yang unggul, adil, berwawasan global, dan berakar kuat pada nilai-nilai gotong royong.",
  
  misi: [
    "Menjamin tata niaga kopi yang adil dan transparan guna meningkatkan taraf hidup dan kesejahteraan sosial petani anggota.",
    "Menerapkan teknologi dan standar pemrosesan pasca-panen kopi specialty modern untuk menghasilkan kualitas biji kopi berstandar internasional secara konsisten.",
    "Mengembangkan kemitraan strategis nasional maupun internasional untuk menembus pasar ekspor global.",
    "Mendorong praktik pertanian kopi berkelanjutan yang menjaga kelestarian lingkungan dan sabuk hijau Gunung Garut."
  ],
  
  values: [
    {
      title: "Gotong Royong",
      desc: "Prinsip bahu-membahu dalam mengelola permodalan, pengolahan pasca-panen, hingga pemasaran. Berat sama dipikul, ringan sama dijinjing, memastikan keuntungan dibagi secara adil proporsional.",
      icon: "Users"
    },
    {
      title: "Kemandirian",
      desc: "Membangun ekosistem bisnis yang mandiri, lepas dari ketergantungan modal spekulatif atau tengkulak. Anggota adalah pemilik sekaligus penggerak utama koperasi.",
      icon: "Zap"
    },
    {
      title: "Kesejahteraan",
      desc: "Menjamin pengembalian margin keuntungan yang maksimal kepada petani. Setiap gram kopi yang diseduh di belahan dunia lain berdampak nyata pada kesejahteraan dapur keluarga petani lokal.",
      icon: "ShieldAlert"
    }
  ],
  
  structure: {
    title: "Struktur Usaha & Kegiatan Utama",
    items: [
      {
        phase: "01",
        name: "Budidaya Terbimbing",
        desc: "KDKMP memberikan bibit unggul, pupuk organik, dan pendampingan agronomi berkala kepada 150+ petani anggota agar menghasilkan ceri merah berkualitas prima."
      },
      {
        phase: "02",
        name: "Sistem Pikul Merah (Collection)",
        desc: "Petani menyetor hasil petik merah segar ke stasiun pengolahan pusat KDKMP dengan jaminan harga beli di atas rata-rata pasar tengkulak."
      },
      {
        phase: "03",
        name: "Proses Pasca-Panen Spesialis",
        desc: "Pengolahan ceri kopi di stasiun pusat menggunakan metode terkontrol: Full-Washed, Honey, dan Natural Process dengan pengawasan ketat kadar air (11-12%)."
      },
      {
        phase: "04",
        name: "Distribusi & Ekspor",
        desc: "Pemasaran biji kopi mentah (green beans) berkualitas tinggi ke roastery nasional serta mitra importir internasional di Asia, Eropa, dan Amerika."
      }
    ]
  },
  
  coffeeSuperiority: {
    title: "Keunggulan Kopi Arabika Garut",
    desc: "Kopi Arabika Garut memiliki keunikan rasa (terroir) yang tidak dimiliki wilayah lain. Tumbuh subur di tanah vulkanis berpasir di lereng Gunung Papandayan pada ketinggian 1200-1600 mdpl dengan iklim mikro pegunungan yang sejuk. Karakteristik khasnya terletak pada tingkat keasaman (acidity) yang cerah menyerupai jeruk (citrus/lemon), berpadu dengan kemanisan karamel alami yang tebal (brown sugar sweetness), dan diakhiri dengan sentuhan aroma bunga melati yang harum (jasmine note). Struktur body kopi ini sangat seimbang, menghasilkan secangkir kopi dengan profil rasa bersih dan memikat bagi para penikmat kopi dunia."
  },
  
  sustainability: {
    title: "Komitmen Keberlanjutan & Petani Lokal",
    desc: "Bagi KDKMP, kopi bukan sekadar komoditas dagang, melainkan pelindung bumi. Perkebunan kami menerapkan konsep agroforestri (tumpang sari di bawah naungan pohon hutan alami) untuk mencegah erosi dan tanah longsor di kawasan pegunungan Garut yang rawan bencana. Kami juga berkomitmen menggunakan limbah kulit ceri kopi menjadi pupuk kompos organik berkualitas tinggi, meminimalkan jejak karbon, dan menginvestasikan 20% dari keuntungan bersih tahunan koperasi untuk program beasiswa anak-anak petani anggota."
  }
};

export const PREMIUM_PRODUCT: CoffeeProduct = {
  id: "kdkmp-sig-01",
  name: "Sunda Java Preanger",
  tagline: "Mount Papandayan Premium Arabica",
  origin: "Lereng Gunung Papandayan, Garut, Jawa Barat, Indonesia",
  elevation: "1.200 – 1.600 mdpl (meter di atas permukaan laut)",
  process: "Honey Process & Fully Washed (Double Soak)",
  variety: ["Sigarar Utang", "Kartika", "Ateng Super"],
  description: "Mahakarya cita rasa dari tanah vulkanik Garut. Biji kopi Arabika pilihan yang dipetik hanya saat berwarna merah sempurna, diolah melalui proses Honey tradisional untuk mempertahankan rasa manis buah yang kaya, atau Fully Washed untuk memunculkan keasaman buah jeruk yang bersih dan menyegarkan.",
  roastLevel: "Medium",
  grindSizes: ["Biji Utuh (Whole Beans)", "Giling Kasar (Coarse)", "Giling Sedang (Medium)", "Giling Halus (Fine)"],
  weights: [200, 500, 1000],
  pricePer100g: 45000, // RP 45.000 / 100g
  tastingNotes: {
    acidity: 7,
    sweetness: 9,
    body: 6,
    aroma: ["Melati (Jasmine)", "Kulit Jeruk (Lemon Zest)", "Madu Hutan"],
    flavors: ["Gula Merah (Brown Sugar)", "Jeruk Kuning (Yellow Citrus)", "Teh Hitam (Black Tea finish)"]
  },
  usp: [
    "100% Arabica Single Origin Garut murni tanpa campuran.",
    "Petik merah tangan (Hand-Picked Red Cherries) eksklusif.",
    "Dry-hulled secara higienis dengan kadar air optimal 11.5%.",
    "Didukung langsung oleh program pemberdayaan 150+ keluarga petani lokal Gunung Papandayan."
  ],
  imageSrc: IMAGES.packaging
};

export const VISUAL_CONCEPT = {
  photo: {
    title: "Konsep Foto Produk (Premium Heritage Mood)",
    lighting: "Soft Natural Side-light (Pencahayaan alami dari samping, merepresentasikan kehangatan mentari pagi di pegunungan Garut).",
    background: "Latar belakang bernuansa kayu gelap bertekstur kasar (rustic dark wood), dilengkapi aksen karung goni tua berstempel koperasi, dan beberapa tanaman kopi segar berdaun hijau gelap.",
    vibe: "Eksklusif, organik, dan sarat akan cerita sejarah (heritage story). Memperlihatkan kontras antara keindahan alam liar pegunungan dengan modernitas kemasan premium."
  },
  packaging: {
    title: "Konsep Mockup Kemasan (Premium Export Look)",
    material: "Standing Pouch Kraft Paper kualitas tinggi berwarna cokelat tanah alami bertekstur serat kayu halus, ramah lingkungan dan dapat didaur ulang.",
    interior: "Dilapisi aluminium foil tebal di bagian dalam lengkap dengan degassing valve satu arah untuk menjaga kesegaran gas kopi hasil roasting.",
    label: "Desain label berlatar putih bersih dengan aksen garis merah-putih vertikal tipis yang elegan di sudut kanan atas. Menggunakan font serif modern emas untuk nama produk, memancarkan kemewahan yang rendah hati (subtle luxury)."
  }
};

export const SUCCESS_STORY: StorySection[] = [
  {
    id: "chap-01",
    chapter: "Bab I",
    title: "Secangkir Asa di Kaki Papandayan",
    content: [
      "Mentari pagi di lereng Gunung Papandayan masih terhalang kabut tebal ketika para petani kopi mulai menyusuri jalan setapak yang curam pada tahun 2018. Namun, keindahan lanskap pegunungan Garut yang subur ini kontras dengan keresahan yang menggelayuti hati mereka. Setiap kali musim panen tiba, jerih payah mereka mengolah tanah dan memetik buah kopi ceri merah yang ranum dihargai sangat rendah oleh tengkulak.",
      "Keterbatasan akses pasar dan ketiadaan alat pengolah mandiri membuat para petani tak punya pilihan lain selain menerima harga berapapun yang disodorkan spekulan. Keadaan yang berlangsung bertahun-tahun ini membuat impian akan kehidupan yang sejahtera seolah terkubur di bawah rimbunnya pohon kopi.",
      "Melihat ketidakadilan ekonomi tersebut, segelintir pemuda desa yang sempat mengenyam bangku kuliah di kota memutuskan untuk kembali pulang. Mereka memikul misi sederhana namun berani: memutus rantai ketergantungan pada tengkulak dengan mendirikan Koperasi Desa Merah Putih (KDKMP). Nama Merah Putih dipilih sebagai simbol perjuangan rakyat, sebuah bentuk nasionalisme ekonomi untuk memerdekakan petani kopi Garut dari jerat kemiskinan."
    ],
    quote: "Koperasi ini bukan sekadar urusan dagang biji kopi, ini adalah perjuangan bersama untuk mengembalikan kedaulatan atas tanah dan keringat kami sendiri.",
    quoteAuthor: "Hari Lutfi, Ketua Koperasi Desa Merah Putih"
  },
  {
    id: "chap-02",
    chapter: "Bab II",
    title: "Menembus Batas Trauma dan Keterbatasan",
    content: [
      "Perjalanan awal KDKMP tidaklah semulus yang dibayangkan. Tantangan pertama justru datang dari dalam desa sendiri. Menghadapi skeptisisme para petani senior yang trauma terhadap kegagalan koperasi-koperasi masa lampau bukanlah perkara mudah. 'Koperasi hanya akan membawa lari uang kami,' begitulah kalimat yang kerap terdengar di awal sosialisasi.",
      "Tak patah arang, pengurus koperasi muda melakukan pendekatan personal dengan metode transparansi total. Mereka membuktikan komitmen dengan meminjam modal awal demi membeli alat pengupas ceri kopi (pulper) sederhana dan membangun dome penjemuran dari bambu. Mereka menjanjikan harga beli ceri kopi yang stabil dan jauh lebih tinggi daripada harga tengkulak, asalkan para petani mau memilah hanya buah merah sempurna.",
      "Tantangan berikutnya muncul ketika KDKMP bertekad menembus pasar internasional. Standar kualitas kopi specialty ekspor sangatlah ketat. Kadar air harus konsisten di angka 11-12%, kecacatan biji (defect rate) tidak boleh lebih dari 4%, dan profil rasa harus lolos uji cupping dengan skor minimal 83 dari Specialty Coffee Association (SCA). Di sinilah gotong royong diuji. Seluruh anggota, tua dan muda, berbaris mengelilingi meja sortasi untuk memilah biji-biji terbaik secara manual di bawah penerangan lampu desa yang temaram."
    ]
  },
  {
    id: "chap-03",
    chapter: "Bab III",
    title: "Dari Desa Garut Menuju Meja Kopi Dunia",
    content: [
      "Kunci lompatan KDKMP ke pasar global terletak pada integrasi antara tradisi, kualitas, dan pemanfaatan teknologi digital. Koperasi membangun situs web resmi yang memuat sistem ketertelusuran digital (traceability). Setiap kemasan kopi ekspor KDKMP dilengkapi dengan QR Code unik. Saat pembeli di Tokyo atau Hamburg memindai kode tersebut, mereka dapat melihat foto petani yang menanam kopi tersebut, ketinggian lahan, tanggal panen, hingga metode pengolahan pasca-panennya.",
      "Langkah cerdas ini membangun kepercayaan yang luar biasa di pasar premium internasional. Pada tahun 2022, melalui keikutsertaan dalam pameran kopi internasional di Jakarta yang dihadiri pembeli mancanegara, KDKMP menandatangani kontrak ekspor perdana sebanyak 18 ton green beans Arabika premium ke sebuah perusahaan roastery terkemuka di Nagoya, Jepang. Kontrak ini disusul oleh pesanan dari importir di Jerman dan Taiwan.",
      "Kini, harum aroma kopi Arabika Garut KDKMP yang bercita rasa melati dan manis jeruk lemon telah disesap oleh para penikmat kopi di berbagai belahan dunia. Keberhasilan ini membuktikan bahwa lembaga ekonomi rakyat berbentuk koperasi, jika dikelola secara modern, profesional, dan jujur, mampu bersaing secara tangguh di pasar ekspor global.",
      "Dampak ekonomi terasa nyata di desa. Pendapatan rata-rata petani anggota meningkat hingga 45%. Untuk pertama kalinya, anak-anak petani di lereng Gunung Papandayan memiliki tabungan pendidikan untuk melanjutkan kuliah di perguruan tinggi. Kebun-kebun kopi kini dirawat dengan konsep agroforestri berkelanjutan, menjadikannya sabuk hijau penahan longsor yang kokoh. Koperasi Desa Merah Putih telah membuktikan bahwa kekuatan ekonomi rakyat bukan sekadar teori, melainkan motor kesejahteraan nyata yang membawa harum nama bangsa di mata dunia."
    ],
    quote: "Saat secangkir kopi KDKMP diseduh di Jepang, di sana ada peluh hangat petani Garut, ada keindahan Gunung Papandayan, dan ada kehormatan bendera Merah Putih yang kami kibarkan.",
    quoteAuthor: "Pengurus KDKMP"
  }
];

export const LOGO_PHILOSOPHY: LogoElement[] = [
  {
    icon: "Mountain",
    title: "Siluet Tiga Puncak Gunung",
    philosophy: "Melambangkan tiga gunung pelindung bentang alam Garut tempat kopi tumbuh subur: Gunung Papandayan, Cikuray, dan Guntur. Gunung juga melambangkan visi koperasi yang tinggi menjulang, kokoh, dan berakar kuat melindungi masyarakat.",
    colorHex: "#2d1f18",
    colorName: "Sienna Coffee (Cokelat Kopi)",
    colorMeaning: "Melambangkan tanah vulkanis Garut yang subur, kekuatan, kemandirian ekonomi, serta keaslian biji kopi Arabika."
  },
  {
    icon: "Coffee",
    title: "Buah Kopi & Daun Organik",
    philosophy: "Butiran biji kopi tunggal di bagian tengah melambangkan fokus usaha koperasi pada keunggulan kopi specialty, sementara daun melambangkan praktik agroforestri berkelanjutan yang melestarikan alam gunung.",
    colorHex: "#c5a880",
    colorName: "Warm Gold (Emas Hangat)",
    colorMeaning: "Melambangkan kemakmuran, kualitas rasa premium, keunggulan ekspor, dan taraf hidup sejahtera yang diperjuangkan bagi petani."
  },
  {
    icon: "Heart",
    title: "Garis Melingkar Merah Putih",
    philosophy: "Garis melengkung dinamis menyerupai pelukan yang mengelilingi elemen gunung dan kopi. Ini menggambarkan asas kekeluargaan, persatuan gotong royong yang erat antar-anggota koperasi, sekaligus identitas kedaulatan bangsa Indonesia.",
    colorHex: "#b91c1c",
    colorName: "Crimson Red & Pearl White",
    colorMeaning: "Merah melambangkan keberanian menerobos pasar ekspor internasional dan keteguhan hati petani. Putih melambangkan ketulusan gotong royong, kejujuran pengurus koperasi, dan kemurnian produk."
  }
];

export const AI_LOGO_PROMPT = {
  style: "Modern Minimalist Corporate Premium Emblem",
  indonesian: "Sebuah logo emblem minimalis modern premium untuk Koperasi Kopi Arabika bernama 'Koperasi Desa Merah Putih'. Di tengah terdapat siluet elegan Gunung Papandayan Garut yang artistik dan sebutir biji kopi emas hangat di depannya. Di sekeliling gunung dan kopi, terdapat garis melingkar dinamis berwarna merah-putih yang elegan dan bersih. Desain datar (flat vector logo), kontras tinggi, latar belakang putih bersih, tampak profesional, mewah, rapi, cocok untuk identitas korporat kelas ekspor.",
  english: "A premium modern minimalist emblem logo for an Indonesian Arabica coffee cooperative named 'Koperasi Desa Merah Putih'. Centered features an elegant, artistic silhouette of Mount Papandayan in Garut with a single warm gold coffee bean in front. Surrounding the mountain and coffee is a dynamic, clean circular ribbon in elegant red and white. Flat vector design, high contrast, clean white background, professional and corporate look, premium luxury export quality."
};
