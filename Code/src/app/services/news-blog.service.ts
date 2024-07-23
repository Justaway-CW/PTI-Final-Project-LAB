import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsBlogService {

  constructor() { }

  getNews = function() {
    return [
      {"newsid" : 0, "judul" : "Bikin Bangga, 2 Pemain DotA 2 Indonesia Ada di TI10 : Lebih Banyak dari Prancis dan Korsel", "sneak" : "Bagi Indonesia, TI10 terasa spesial dan sejarah bakal tercetak. Hal ini berkaitan dengan keberadaan dua pemain asal Tanah Air yang membela T1. Kata terakhir adalah nama tim yang berhasil lolos setelah tampil cemerlang sepanjang seri Dota Pro Circuit (DPC), sehingga mendapatkan akumulasi poin yang memenuhi syarat berpartisipasi di Bucharest, Rumania...", "link" : "https://www.bola.com/e-sports/read/4623710/bikin-bangga-2-pemain-dota-2-indonesia-ada-di-ti10-lebih-banyak-dari-prancis-dan-korsel"},
      {"newsid" : 1, "judul" : "Misteri Sebab Sumur Resapan di Lebak Bulus Banyak yang Ambles", "sneak" : "JAKARTA, KOMPAS.com - Sumur resapan di kawasan Bona Indah, Jakarta Selatan, jebol pada Rabu (8/12/2021). Sumur resapan tersebut baru rampung dibangun pada Minggu (5/12/2021) dan diaspal pada Selasa (7/12/2021)...", "link" : "https://megapolitan.kompas.com/read/2021/12/10/06471191/misteri-sebab-sumur-resapan-di-lebak-bulus-banyak-yang-ambles"},
      {"newsid" : 2, "judul" : "PPKM Level 3 Batal, Tempat Wisata di Banyuwangi Buka Saat Nataru, Pesta Kembang Api Dilarang", "sneak" : "BANYUWANGI, KOMPAS.com - Bupati Banyuwangi Ipuk Fiestiandani telah mendapatkan arahan dari Menteri Dalam Negeri (Mendagri) terkait pengendalian pandemi Covid-19 di masa Natal dan Tahun Baru (Nataru)...", "link" : "https://regional.kompas.com/read/2021/12/10/101722078/ppkm-level-3-batal-tempat-wisata-di-banyuwangi-buka-saat-nataru-pesta"},
      {"newsid" : 3, "judul" : "Verstappen dan Hamilton Menuju Titik Kulminasi", "sneak" : "Max Verstappen merasa diperlakukan tidak sama dengan pebalap F1 lainnya setelah dijatuhi sanksi di Arab Saudi. Namun, hal itu tak mengubah misinya mengakhiri...", "link" : "https://www.kompas.id/baca/olahraga/2021/12/10/verstappen-dan-hamilton-menuju-titik-kulminasi/?utm_source=external_kompascom&utm_medium=berita_terkini&utm_campaign=kompascom"},
      {"newsid" : 4, "judul" : "Motif Batik Dijadikan Outsole Sepatu, Memangnya Boleh? ", "sneak" : "KOMPAS.com - Baru-baru ini salah satu brand sepatu lokal asal Bandung mendapat teguran dari warganet karena menjadikan motif batik parang sebagai desain outsole sepatu mereka...", "link" : "https://lifestyle.kompas.com/read/2021/12/10/101246220/motif-batik-dijadikan-outsole-sepatu-memangnya-boleh"},
      {"newsid" : 5, "judul" : "Sejak 2005, LPS Telah Bayar Klaim Nasabah Bank Dilikuidasi Hingga Rp 1,69 Triliun", "sneak" : "JAKARTA, KOMPAS.com - Lembaga Penjamin Simpanan (LPS) telah membayar simpanan nasabah bank yang dilikuidasi sebesar Rp 1,69 triliun, sejak 2005 hingga ...", "link" : "https://money.kompas.com/read/2021/12/10/101058826/sejak-2005-lps-telah-bayar-klaim-nasabah-bank-dilikuidasi-hingga-rp-169"},
      {"newsid" : 6, "judul" : 'Rayakan 20 Tahun "The Lord of The Rings", Selandia Baru Putar Film Langsung di Desa Hobbit', "sneak" : 'KOMPAS.com - Memperingati 20 tahun sejak film pertama dalam trilogi "The Lord of The Rings" diputar secara internasional, Selandia Baru merayakannya langsung di lokasi syuting', "link" : "https://travel.kompas.com/read/2021/12/10/101000427/rayakan-20-tahun-the-lord-of-the-rings-selandia-baru-putar-film-langsung-di"},
      {"newsid" : 7, "judul" : "Jenis Tepung untuk Bikin Pilus, Apa Saja?", "sneak" : "KOMPAS.com - Pilus merupakan camilan renyah yang bentuknya mirip seperti kacang atom. Bedanya, ukuran pilus lebih kecil dan tidak berisi kacang...", "link" : "https://www.kompas.com/food/read/2021/12/10/100900475/jenis-tepung-untuk-bikin-pilus-apa-saja-"}  
    ]
  }

  getBlogs = function() {
    return [
      {"blogid" : 0, "judul" : "Mental Health Tips: Back to School", "sneak" : "“Wisdom is not a product of schooling but of the lifelong attempt to acquire it.” ― Albert Einstein In-Person Classes Good morning and happy first day of classes! Getting back into a school routine can be very challenging after experiencing an online platform during the pandemic. It is important to have...", "link" : "https://soul-dogs-inc.org/mental-health-tips-back-to-school/", "author" : "zoellesouldogs"},
      {"blogid" : 1, "judul" : "Dog Tips: Toxic Foods to Avoid", "sneak" : "“As a dog owner, it’s extremely important to know what types of food are toxic for your furry friend. Moreover, many people may be tempted to give their dog all of their food scraps, but this is not a good habit to get into. There are some fruits, vegetables, and...", "link" : "https://soul-dogs-inc.org/dog-tips-toxic-foods-to-avoid/", "author" : "ashleymariekeller"},
      {"blogid" : 2, "judul" : "Dog Tips: Teaching Your Pup How to Stay", "sneak" : "“Teaching your dog to stay is a valuable command for their safety and your peace of mind. Before you teach this command, make sure that your dog is proficient at sit and lie down. Additionally, when you are speaking a command you want your dog to listen to you. If...", "link" : "https://soul-dogs-inc.org/dog-tips-teaching-your-pup-how-to-stay/", "author" : "ashleymariekeller"},
      {"blogid" : 3, "judul" : "Success Stories Within The IDD Community: Josh Blue", "sneak" : "Josh Blue is an American comedian. He lives with cerebral palsy, but instead of letting that hinder him, he uses his disability as fuel for his comedy work. Early Life: Josh Blue was born on November 27, 1978, in Cameroon, which is a country in Central Africa. During that time...", "link" : "https://soul-dogs-inc.org/success-stories-within-the-idd-community-josh-blue/", "author" : "mdhunna"},
      {"blogid" : 4, "judul" : "Mental Health Tips: Normalizing Therapy", "sneak" : "“Courage doesn’t happen when you have all the answers. It happens when you are ready to face the questions you have been avoiding your whole life.” ― Shannon L. Alder Therapy is a Great Solution In the present day, many individuals have mixed feelings and concerns when it comes down to...", "link" : "https://soul-dogs-inc.org/mental-health-tips-normalizing-therapy/", "author" : "zoellesouldogs"},
      {"blogid" : 5, "judul" : "Success Stories Within The IDD Community: Isabella Springmuhl Tejada", "sneak" : "Isabella Springmuhl Tejada is a Guatemalan fashion designer. Living with Down Syndrome has presented her with many obstacles and challenges. But with strength and perseverance, she has overcome them all and built a successful career for herself! She is one of the most well-known fashion designers in Guatemala. Early Life:...", "link" : "https://soul-dogs-inc.org/success-stories-within-the-idd-community-isabella-springmuhl-tejada/", "author" : "mdhunna"},
      {"blogid" : 6, "judul" : "Dog Tips: Puppy-Proof Your Home", "sneak" : "After you’ve named your puppy, you may be considering what the next step may be. A valuable next step is puppy proofing your home to protect your furry friend from an injury. Your dog will be spending a majority of their life within your home and it’s important to create...", "link" : "https://soul-dogs-inc.org/dog-tips-puppy-proof-your-home/", "author" : "ashleymariekeller"},
      {"blogid" : 7, "judul" : "Mental Health Tips: It’s Okay to Take a Self-Care Day", "sneak" : "“Be you, love you. All ways, always.” ― Alexandra Elle Back to Reality As we get back into the speed of everyday life it is important to prioritize our mental health. Quarantine was a great time to reflect and focus on one’s self. This is why it is of the utmost...", "link" : "https://soul-dogs-inc.org/mental-health-tips-its-okay-to-take-a-self-care-day/", "author" : "zoellesouldogs"},
      {"blogid" : 8, "judul" : "Success Stories Within The IDD Community: Sophia Warner", "sneak" : "Sophia Warner is a British track and field Paralympian. She lives with cerebral palsy and competes in T35 events. Early Life: Sophia Warner was born on May 23, 1974, in Dorking, England. Warner was born with cerebral palsy. For college, she attended the University of Leicester in Leicester, England,  where...", "link" : "https://soul-dogs-inc.org/success-stories-within-the-idd-community-sophia-warner/", "author" : "mdhunna"}
    ]
  }
}
