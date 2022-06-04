import React, { useEffect, useState } from "react";
import { animated, useSpring, config } from "react-spring";
import News from "./Components/News";
import axios from "axios";
import "./App.css";
import "./styles.css";
import Content from "./Content";
import Rain from "./Rain";
import abus from "./abus";
import Card from "./Card";

function App() {
  let interval3;
  const [waktunyaeval, setwaktunyaeval] = useState(0);
  const [count, setCount] = useState(0);
  const [loc, setLoc] = useState(null);
  const [name, setName] = useState(null);
  const [major, setMajor] = useState(null);
  const [temp, setTemp] = useState(null);
  const [Weather, setWeather] = useState();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [i, seti] = useState(0);
  const [salam, setSalam] = useState("null");
  const day = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  const url = `https://api.openweathermap.org/data/2.5/weather?q=Serpong&units=imperial&appid=2c1176bd8678e36046d7971bafb32930`;

  /* AWAL BAR */
  const [disable, setDisable] = useState(false);
  const [makan, setMakan] = useState(50);
  const [minum, setMinum] = useState(50);
  const [main, setMain] = useState(50);
  const [tidur, setTidur] = useState(50);
  const [belajar, setBelajar] = useState(0);

  // Parameter untuk evaluasi akhir
  const [jumlahMakan, setjumlahMakan] = useState(0);
  const [jumlahMinum, setjumlahMinum] = useState(0);
  const [jumlahMain, setjumlahMain] = useState(0);
  const [jumlahTidur, setjumlahTidur] = useState(0);
  const [jumlahKafe, setjumlahKafe] = useState(0);
  const [jumlahBioskop, setjumlahBioskop] = useState(0);

  // untuk player gagal
  const [isDead, setIsdead] = useState("");

  useEffect(() => {
    if (makan <= 0 || main <= 0 || tidur <= 0 || minum <= 0) {
      if (makan <= 0) {
        setIsdead("Anda gagal karena kelaparan!");
      }
      if (main <= 0) {
        setIsdead("Anda gagal karena terlalu stress!");
      }
      if (minum <= 0) {
        setIsdead("Anda gagal karena dehidrasi!");
      }
      if (tidur <= 0) {
        setIsdead("Anda gagal karena kurang tidur!");
      }

      document.getElementById("secPage").style.display = "none";
      document.getElementById("deadpage").style.display = "block";
      document.getElementById("body").style.backgroundImage =
        "url(https://i.ibb.co/BK8ZNWm/evalll.jpg)";
    }
  });

  const pmakan = useSpring({ width: makan + "%", config: config.slow });
  const pminum = useSpring({ width: minum + "%", config: config.slow });
  const pmain = useSpring({ width: main + "%", config: config.slow });
  const ptidur = useSpring({ width: tidur + "%", config: config.slow });
  const pbelajar = useSpring({ width: belajar + "%", config: config.slow });

  function sMakan() {
    setjumlahMakan((prevjumlahMakan) => jumlahMakan + 1);
    let x = 0;
    setDisable(true);
    const interval2 = setInterval(() => {
      if (makan + 20 >= 100) {
        setMakan(100);
      } else {
        setMakan((prevMakan) => prevMakan + 15);
      }
      setMinum((prevMinum) => prevMinum - 3);
      setMain((prevMain) => prevMain - 2);
      setTidur((prevTidur) => prevTidur - 1);
      x++;
      if (x >= 3) {
        clearInterval(interval2);
        x = 0;
        setDisable(false);
      }
    }, 1000);
    if (count === 0) {
      document.getElementById("ImageSec").src =
        "https://i.ibb.co/LCZZQ56/Naruto-Eating-Home2.jpg";
    } else if (count === 1) {
      document.getElementById("ImageSec").src =
        "https://i.ibb.co/dtt6XTx/Sakura-Eating.jpg";
    } else {
      document.getElementById("ImageSec").src =
        "https://i.ibb.co/YNFbwpB/Sasuke-Eating-Home2.png";
    }
  }

  function sMinum() {
    setjumlahMinum((prevjumlahMinum) => jumlahMinum + 1);
    let x = 0;
    setDisable(true);
    const interval2 = setInterval(() => {
      if (minum + 20 >= 100) {
        setMinum(100);
      } else {
        setMinum((prevMinum) => prevMinum + 20);
      }
      setMakan((prevMakan) => prevMakan - 2);
      setMain((prevMain) => prevMain - 2);
      setTidur((prevTidur) => prevTidur - 1);
      x++;
      if (x >= 3) {
        clearInterval(interval2);
        x = 0;
        setDisable(false);
      }
    }, 1000);
    if (count === 0) {
      document.getElementById("ImageSec").src =
        "https://i.ibb.co/5jTFT6N/Naruto-Minum.jpg";
    } else if (count === 1) {
      document.getElementById("ImageSec").src =
        "https://i.ibb.co/4dsQxY9/Sakura-Minum.jpg";
    } else {
      document.getElementById("ImageSec").src =
        "https://i.ibb.co/mF8MRdS/Sasuke-Minum.jpg";
    }
  }

  function sMain() {
    setjumlahMain((prevjumlahMain) => jumlahMain + 1);

    let x = 0;
    setDisable(true);
    const interval2 = setInterval(() => {
      if (main + 20 >= 100) {
        setMain(100);
      } else {
        setMain((prevMain) => prevMain + 15);
      }
      setMinum((prevMinum) => prevMinum - 3);
      setMakan((prevMakan) => prevMakan - 2);
      setTidur((prevTidur) => prevTidur - 1);
      x++;
      if (x >= 3) {
        clearInterval(interval2);
        x = 0;
        setDisable(false);
      }
    }, 1000);
    if (count === 0) {
      document.getElementById("ImageSec").src =
        "https://i.ibb.co/QCc7MV8/Naruto-Playing-Home.jpg";
    } else if (count === 1) {
      document.getElementById("ImageSec").src =
        "https://i.ibb.co/RCNfdZV/Sakura-Playing.jpg";
    } else {
      document.getElementById("ImageSec").src =
        "https://i.ibb.co/hX0pZFv/Sasuke-Playing-Home2.jpg";
    }
  }

  function sTidur() {
    setjumlahTidur((prevjumlahTidur) => jumlahTidur + 1);
    let x = 0;
    setDisable(true);
    const interval2 = setInterval(() => {
      if (tidur + 20 >= 100) {
        setTidur(100);
      } else {
        setTidur((prevTidur) => prevTidur + 20);
      }
      setMinum((prevMinum) => prevMinum - 5);
      setMain((prevMain) => prevMain - 4);
      setMakan((prevMakan) => prevMakan - 4);
      x++;
      if (x >= 3) {
        clearInterval(interval2);
        x = 0;
        setDisable(false);
      }
    }, 1000);
    if (count === 0) {
      document.getElementById("ImageSec").src =
        "https://i.ibb.co/ZJD9Vyt/Naruto-Sleep01.jpg";
    } else if (count === 1) {
      document.getElementById("ImageSec").src =
        "https://i.ibb.co/NjtGZdM/Sakura-Sleeping.jpg";
    } else {
      document.getElementById("ImageSec").src =
        "https://i.ibb.co/k2grcF4/Sasuke-Sleeping02.jpg";
    }
  }

  function sBelajar() {
    let x = 0;
    setDisable(true);
    const interval2 = setInterval(() => {
      if (belajar + 20 >= 100) {
        setBelajar(100);
      } else {
        setBelajar((prevBelajar) => prevBelajar + 2);
      }
      setMakan((prevMakan) => prevMakan - 3);
      setMinum((prevMinum) => prevMinum - 3);
      setMain((prevMain) => prevMain - 3);
      setTidur((prevTidur) => prevTidur - 2);
      x++;
      if (x >= 3) {
        clearInterval(interval2);
        x = 0;
        setDisable(false);
      }
    }, 1000);
    if (count === 0) {
      document.getElementById("ImageSec").src =
        "https://i.ibb.co/2hFS5Nf/ssdd.jpg";
    } else if (count === 1) {
      document.getElementById("ImageSec").src =
        "https://i.ibb.co/87j8qhd/Sakura-Studying.jpg";
    } else {
      document.getElementById("ImageSec").src =
        "https://i.ibb.co/gz2gVWs/Sasuke-Studying01.jpg";
    }
  }

  /* BATAS BAR */
  useEffect(() => {
    let interval;
    if (i >= 7) {
      clearInterval(interval);

      document.getElementById("secPage").style.display = "none";
      if (waktunyaeval === 0) {
        document.getElementById("body").style.backgroundImage =
          "url(https://i.ibb.co/LYHySXg/quizzz.jpg)";
        document.getElementById("thirdpage").style.display = "block";
        document.getElementById("evaluasiakhir").style.display = "none";
      }
    }
    // harusnya namanya hours
    if (minutes === 24) {
      seti(i + 1);
      setMinutes(0);
    }
    // harusnya namanya minutes
    if (seconds === 60) {
      setMinutes(minutes + 1);
      setSeconds(0);
    }

    // Untuk pengaturan salam
    if (minutes < 4) {
      setSalam("Night");
    } else if (minutes >= 4 && minutes < 12) {
      setSalam("Morning");
    } else if (minutes >= 12 && minutes < 19) {
      setSalam("Afternoon");
    } else if (minutes >= 19 && minutes <= 23) {
      setSalam("Evening");
    }

    interval = setInterval(() => {
      setSeconds(seconds + 20);
      if (loc === "cafe") {
        if (minutes >= 17) {
          document.getElementById("body").style.backgroundImage =
            "url(https://img.freepik.com/free-vector/front-view-night-cafe-exterior-from-street_43633-10787.jpg?w=740)";
        } else if (minutes < 17 && minutes >= 5) {
          document.getElementById("body").style.backgroundImage =
            "url(https://i.ibb.co/hfnH5dg/Ichiraku-Background.jpg)";
        }
      } else if (loc === "rumah") {
        if (minutes >= 17) {
          document.getElementById("body").style.backgroundImage =
            "url(https://t3.ftcdn.net/jpg/02/01/01/70/360_F_201017018_QDrMmpX1Kk4wW64A4L8EkJg5VbCOymxE.jpg)";
        } else if (minutes < 17 && minutes >= 5) {
          document.getElementById("body").style.backgroundImage =
            "url(https://i.ibb.co/Br3fJR6/bedroom-morning.jpg)";
        }
      } else if (loc === "kampus") {
        if (minutes >= 17) {
          document.getElementById("body").style.backgroundImage =
            "url(https://i.ibb.co/YhvRnym/UMNBackground2.jpg)";
        } else if (minutes < 17 && minutes >= 5) {
          document.getElementById("body").style.backgroundImage =
            "url(https://i.ibb.co/mt2hnT7/UMNBackground.jpg)";
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
    });
    document.getElementById("secPage").style.display = "none";
    document.getElementById("about-us").style.display = "none";
    document.getElementById("thirdpage").style.display = "none";
    document.getElementById("evaluasiakhir").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
    document.getElementById("deadpage").style.display = "none";
    document.getElementById("conToEval").style.display = "none";
  }, []);

  function handleNameChange(event) {
    setTemp(event.target.value);
  }

  function home() {
    document.getElementById("secPage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
    document.getElementById("about-us").style.display = "none";
    document.getElementById("thirdpage").style.display = "none";
    document.getElementById("evaluasiakhir").style.display = "none";
    /* BELUMAANNNNNN */
    document.getElementById("body").style.backgroundImage =
      "url(https://i.ibb.co/R9BwKdX/uassss.jpg)";
  }

  function aboutus() {
    document.getElementById("secPage").style.display = "none";
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("about-us").style.display = "block";
    document.getElementById("thirdpage").style.display = "none";
    document.getElementById("evaluasiakhir").style.display = "none";
    document.getElementById("body").style.backgroundImage =
      "url(https://i.ibb.co/Q9kBJjf/baru.jpg)";
  }

  // Untuk awal permainan dimulai
  function start(event) {
    setMinutes(0);
    setSeconds(0);
    setLoc("rumah");
    setSalam("Night");
    if (temp === null) {
      window.location.reload();
    }

    document.getElementById("body").style.backgroundImage =
      "url(https://i.ibb.co/Br3fJR6/bedroom-morning.jpg)";
    document.getElementById("secPage").style.display = "block";
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("about-us").style.display = "none";
    document.getElementById("thirdpage").style.display = "none";
    document.getElementById("evaluasiakhir").style.display = "none";

    if (Weather.weather[0].main === "Clouds") {
      document.getElementById("hujan").style.display = "none";
    } else if (Weather.weather[0].main === "Clear") {
      document.getElementById("hujan").style.display = "none";
    }
    setName(temp);
    event.preventDefault();

    document.getElementById("btn-belajar").style.display = "none";
    document.getElementById("btn-main2").style.display = "none";
    document.getElementById("btn-main3").style.display = "none";
    document.getElementById("btn-perpus").style.display = "none";
    document.getElementById("btn-kelas").style.display = "none";
    document.getElementById("btn-kantin").style.display = "none";
    document.getElementById("matkul").style.display = "none";

    /* MAJOR */
    var select = document.getElementById("opsi");
    setMajor(select.options[select.selectedIndex].value);
    if (select.options[select.selectedIndex].value === "null") {
      window.location.reload();
    }

    // Untuk pengurangan bar

    interval3 = setInterval(() => {
      if (makan >= 100) {
        setMakan(99);
      }
      if (main >= 100) {
        setMain(99);
      }
      if (tidur >= 100) {
        setTidur(99);
      }
      if (minum >= 100) {
        setMinum(99);
      }
      setMakan((prevMakan) => prevMakan - 1);
      setMinum((prevMinum) => prevMinum - 1);
      setMain((prevMain) => prevMain - 1);
      setTidur((prevTidur) => prevTidur - 1);
    }, 2000);

    return () => clearInterval(interval3);
  }
  function increase() {
    if (count !== 2) {
      setCount(count + 1);
    }
    if (count === 2) {
      setCount(0);
    }
  }
  function decrease() {
    if (count !== 0) {
      setCount(count - 1);
    }
    if (count === 0) {
      setCount(2);
    }
  }

  // untuk perpindahan lokasi
  function handleLocChange(event) {
    // mencegah kuliah di jam tak wajar
    if (event.target.value === "kampus") {
      if (i === 0 || minutes < 8 || minutes > 17) {
        return;
      }
    }
    setLoc(event.target.value);

    if (event.target.value === "rumah") {
      document.getElementById("body").style.backgroundImage =
        "url(https://i.ibb.co/Br3fJR6/bedroom-morning.jpg)";
      document.getElementById("btn-makan").style.display = "block";
      document.getElementById("minum1").style.display = "none";
      document.getElementById("minum").style.display = "block";
      document.getElementById("btn-main1").style.display = "block";
      document.getElementById("btn-main2").style.display = "none";
      document.getElementById("btn-main3").style.display = "none";
      document.getElementById("btn-tidur").style.display = "block";
      document.getElementById("btn-belajar").style.display = "none";
    } else if (event.target.value === "bioskop") {
      setjumlahBioskop((prevjumlahBioskop) => jumlahBioskop + 1);

      document.getElementById("body").style.backgroundImage =
        "url(https://i.ibb.co/P5Ns1s8/UAS-PTI.png)";

      document.getElementById("btn-makan").style.display = "block";
      document.getElementById("minum1").style.display = "none";
      document.getElementById("minum").style.display = "none";
      document.getElementById("btn-main1").style.display = "none";
      document.getElementById("btn-main2").style.display = "block";
      document.getElementById("btn-main3").style.display = "none";
      document.getElementById("btn-tidur").style.display = "none";
      document.getElementById("btn-belajar").style.display = "none";
    } else if (event.target.value === "kampus") {
      document.getElementById("body").style.backgroundImage =
        "url(https://i.ibb.co/mt2hnT7/UMNBackground.jpg)";

      document.getElementById("btn-perpus").style.display = "block";
      document.getElementById("btn-kelas").style.display = "block";
      document.getElementById("btn-kantin").style.display = "block";
      document.getElementById("btn-makan").style.display = "none";
      document.getElementById("minum1").style.display = "none";
      document.getElementById("minum").style.display = "none";
      document.getElementById("btn-main1").style.display = "none";
      document.getElementById("btn-main2").style.display = "none";
      document.getElementById("btn-main3").style.display = "none";
      document.getElementById("btn-tidur").style.display = "none";
      document.getElementById("btn-belajar").style.display = "none";
    } else if (event.target.value === "cafe") {
      setjumlahKafe((prevjumlahKafe) => jumlahKafe + 1);
      document.getElementById("body").style.backgroundImage =
        "url(https://i.ibb.co/hfnH5dg/Ichiraku-Background.jpg)";

      document.getElementById("btn-makan").style.display = "block";
      document.getElementById("minum1").style.display = "none";
      document.getElementById("minum").style.display = "block";
      document.getElementById("btn-main1").style.display = "none";
      document.getElementById("btn-main2").style.display = "none";
      document.getElementById("btn-main3").style.display = "block";
      document.getElementById("btn-tidur").style.display = "none";
      document.getElementById("btn-belajar").style.display = "none";
    } else if (event.target.value === "perpus") {
      document.getElementById("btn-belajar").style.display = "block";
      document.getElementById("btn-makan").style.display = "none";
      document.getElementById("minum1").style.display = "none";
      document.getElementById("minum").style.display = "none";
      document.getElementById("btn-main1").style.display = "none";
      document.getElementById("btn-main2").style.display = "none";
      document.getElementById("btn-main3").style.display = "none";
      document.getElementById("btn-tidur").style.display = "none";
      document.getElementById("body").style.backgroundImage =
        "url(https://penerbitbukudeepublish.com/wp-content/uploads/2020/03/pengadaan-buku-perpustakaan-1024x682.jpg)";
    } else if (event.target.value === "kantin") {
      document.getElementById("btn-belajar").style.display = "none";
      document.getElementById("btn-makan").style.display = "block";
      document.getElementById("minum1").style.display = "block";
      document.getElementById("minum").style.display = "none";
      document.getElementById("btn-main1").style.display = "none";
      document.getElementById("btn-main2").style.display = "none";
      document.getElementById("btn-main3").style.display = "none";
      document.getElementById("btn-tidur").style.display = "none";
      document.getElementById("body").style.backgroundImage =
        "url(https://i.ibb.co/5TxDzxL/Kantin-UMN.jpg)";
    } else if (event.target.value === "kelas") {
      document.getElementById("matkul").style.display = "block";
      if (major === "Informatika") {
        document.getElementById("btn-matkul1").style.display = "block";
        document.getElementById("btn-matkul2").style.display = "block";
        document.getElementById("btn-matkul3").style.display = "none";
        document.getElementById("btn-matkul4").style.display = "none";
        document.getElementById("btn-matkul5").style.display = "none";
        document.getElementById("btn-matkul6").style.display = "none";
      } else if (major === "Bussiness") {
        document.getElementById("btn-matkul1").style.display = "none";
        document.getElementById("btn-matkul2").style.display = "none";
        document.getElementById("btn-matkul3").style.display = "block";
        document.getElementById("btn-matkul4").style.display = "block";
        document.getElementById("btn-matkul5").style.display = "none";
        document.getElementById("btn-matkul6").style.display = "none";
      } else if (major === "DKV") {
        document.getElementById("btn-matkul1").style.display = "none";
        document.getElementById("btn-matkul2").style.display = "none";
        document.getElementById("btn-matkul5").style.display = "block";
        document.getElementById("btn-matkul6").style.display = "block";
        document.getElementById("btn-matkul3").style.display = "none";
        document.getElementById("btn-matkul4").style.display = "none";
      }
      document.getElementById("body").style.backgroundImage =
        "url(https://i.ibb.co/TmBg6XD/Ruang-Kelas-UMN.jpg)";
    }

    if (event.target.value !== "kampus") {
      document.getElementById("btn-perpus").style.display = "none";
      document.getElementById("btn-kelas").style.display = "none";
      document.getElementById("btn-kantin").style.display = "none";
    }
    if (event.target.value !== "kelas") {
      document.getElementById("matkul").style.display = "none";
    }
  }

  // Untuk game

  function quiz(event) {
    setMajor(event.target.value);
    if (event.target.value === "yes") {
      setBelajar(belajar + 5);
    }
    document.getElementById("conToEval").style.display = "block";
  }
  // Untuk evaluasi
  const [evalMakan, setEvalmakan] = useState("");
  const [evalMain, setEvalmain] = useState("");
  const [evalTidur, setEvaltidur] = useState("");
  const [evalMinum, setEvalminum] = useState("");
  const [evalBelajar, setEvalbelajar] = useState("");
  const [evalKafe, setEvalkafe] = useState("");
  const [evalBioskop, setEvalbioskop] = useState("");

  function fEvaluasi() {
    setwaktunyaeval(1);
    clearInterval(interval3);
    const interval4 = setInterval(() => {
      document.getElementById("thirdpage").style.display = "none";
      document.getElementById("evaluasiakhir").style.display = "block";
      document.getElementById("body").style.backgroundImage =
        "url(https://i.ibb.co/BK8ZNWm/evalll.jpg)";
    }, 1);

    //Untuk Makan
    if (jumlahMakan <= 15) {
      setEvalmakan("Pasti kamu gadisuruh makan sama ayangg!!");
    }
    if (jumlahMakan > 15 && jumlahMakan <= 30) {
      setEvalmakan("Pola makan kamu sangat bagus, pertahankan brodii..");
    }
    if (jumlahMakan > 30) {
      setEvalmakan(
        "Waduuhhh kamu kebanyakan makan, tiati yaa meninggoyy wkwkw"
      );
    }
    //Untuk Main
    if (jumlahMain <= 15) {
      setEvalmain("Kasihan dehh lohhh :')");
    }
    if (jumlahMain > 15 && jumlahMain <= 30) {
      setEvalmain(
        "Mantepp banget sih kamuuu, ajarin aku time management juga donkk!!"
      );
    }
    if (jumlahMain > 30) {
      setEvalmain("Maen mulu ngabb, lagi UAS nih..");
    }
    //Untuk Minum
    if (jumlahMinum <= 15) {
      setEvalminum("Anda sekarattttttttt, panggil ambulaannnn!!!");
    }
    if (jumlahMinum > 15 && jumlahMinum <= 30) {
      setEvalminum(
        "Ihhh keren, jaga terus ya pola minumnyaa, jangan berlebihan juga :)"
      );
    }
    if (jumlahMinum > 30) {
      setEvalminum("Rasaiinnnn, bulak-balik toilet kan kamuuu HAHAHA..");
    }
    //Untuk Tidur
    if (jumlahTidur <= 5) {
      setEvaltidur("Anda terancam punah karena kurang jam tidur...");
    }
    if (jumlahTidur > 5 && jumlahTidur <= 20) {
      setEvaltidur("Tidur anda sangat baik, yukkk main sama a'naaa..");
    }
    if (jumlahTidur > 20) {
      setEvaltidur("Tidurrrrr muluuuuu ngabbbb!!!");
    }
    // Untuk kafe
    if (jumlahKafe <= 5) {
      setEvalkafe("Kamu orangnya gak suka hangout ya? Introvert ya ???");
    }
    if (jumlahKafe > 5 && jumlahKafe <= 10) {
      setEvalkafe("Kamu ke Kafe seperti orang normal");
    }
    if (jumlahKafe > 10) {
      setEvalkafe(
        "Kamu kurang kerjaan ya? Nongkrong terus di kafe, bantuin Tugas dong"
      );
    }
    // Untuk Bioskop
    if (jumlahBioskop <= 5) {
      setEvalbioskop(
        "Kamu ga suka nonton film ya? atau ga punya ayank buat diajak nonton?"
      );
    }
    if (jumlahBioskop > 5 && jumlahBioskop <= 10) {
      setEvalbioskop("Kamu pasti seneng ya rutin ke bioskop sama ayank!");
    }
    if (jumlahBioskop > 10) {
      setEvalbioskop(
        "Ke Bioskop sama ayank bole sih... Tapi ingat Tugas Woy!!!"
      );
    }
    // Untuk Belajar
    if (belajar <= 20) {
      setEvalbelajar("Yukk semangat yukkk, bisa yukkk kawandddd...");
    }
    if (belajar > 20 && belajar < 80) {
      setEvalbelajar("Kamu lumayan rajin belajar ya..");
    }
    if (belajar >= 80) {
      setEvalbelajar("Tiati stresss belajar melulu wkkwkw");
    }
    return () => clearInterval(interval4);
  }

  return (
    <div id="utama">
      <div className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Piala.png"
          alt="piala"
        />
        <h1>7 Days Students</h1>
      </div>

      {/* Page pertama  */}
      <div id="mainPage">
        <div>
          <button className="aboutBut" onClick={aboutus}>
            ABOUT US
          </button>
        </div>
        <div id="menu">
          <div className="content">
            <div className="leftBut">
              <img
                className="arrow"
                onClick={decrease}
                src="https://img.icons8.com/office/2x/circled-chevron-left.png"
                alt="#"
              />
            </div>
            <div>
              <img id="Image" src={Content[count].imgURL} alt="#"></img>
            </div>
            <div className="rightBut">
              <img
                className="arrow"
                onClick={increase}
                src="https://img.icons8.com/office/2x/circled-chevron-right.png"
                alt="#"
              />
            </div>
          </div>
          <div className="inputBox">
            <form>
              <div>
                <input
                  id="Name"
                  type="text"
                  placeholder="Input Name"
                  onChange={handleNameChange}
                ></input>
              </div>
              <div>
                <select id="opsi">
                  <option value="null">Program Studi</option>
                  <option value="Informatika">Informatika</option>
                  <option value="Bussiness">Bussiness</option>
                  <option value="DKV">DKV</option>
                </select>
              </div>
            </form>
            <div>
              <button type="submit" className="subBut" onClick={start}>
                START
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Untuk page permainan */}
      <div id="secPage">
        <div id="hujan">
          <Rain />
        </div>

        {/* News API */}
        <div className="Phone">
          <img
            alt="#"
            id="mockup"
            src="http://assets.stickpng.com/thumbs/5e90a804c7c8f9000434dd95.png"
          ></img>
          <div className="Phone-scrollable">
            <News />
          </div>
        </div>

        <div id="barTombol">
          <div id="atas">
            {/* Untuk Bar */}
            <div id="bar">
              <div>
                <div className="meter">
                  <animated.span style={pmakan} />
                  <img
                    alt="#"
                    id="makann"
                    src="https://i.ibb.co/7XRqrHS/self-protection-lunch-food-healthcare-medical-covid-icon-140744.png"
                  ></img>
                </div>
                <div className="meter">
                  <animated.span style={pminum} />
                  <img
                    alt="#"
                    id="minumm"
                    src="https://i.ibb.co/fHLCZtB/coffee-icon-icons-com-50414.png"
                  ></img>
                </div>
                <div className="meter">
                  <animated.span style={pmain} />
                  <img
                    alt="#"
                    id="game"
                    src="https://i.ibb.co/cFWrPBH/976605-appliances-console-controller-dualshock-gamepad-games-videogame-106553.png"
                  ></img>
                </div>
                <div className="meter">
                  <animated.span style={ptidur} />
                  <img
                    alt="#"
                    id="game"
                    src="https://i.ibb.co/Xtj8cbg/sleepingbedsilhouette-89127.png"
                  ></img>
                </div>
                <div className="meter">
                  <animated.span style={pbelajar} />
                  <img
                    alt="#"
                    id="belajarr"
                    src="https://i.ibb.co/Y7fQjf0/learning-writing-icon-148367.png"
                  ></img>
                </div>
              </div>
            </div>
            <div>
              <img id="ImageSec" src={Content[count].imgURL} alt="#"></img>
            </div>
          </div>

          {/* Untuk bagian kanan */}
          <div id="aktivitas">
            <div>
              <h1>{day[i]}</h1>
              <h1>
                {minutes} : {seconds}
              </h1>
            </div>
            <div>
              <h1>
                Good {salam} {name}
              </h1>
            </div>

            {/* Untuk Bagian tempat */}
            <div id="goto">
              <h3>GO-TO</h3>
              <div id="gotosatu">
                <div className="go" id="rumah">
                  <button value="rumah" onClick={handleLocChange}>
                    Rumah
                  </button>
                </div>
                <div className="go" id="kampus">
                  <button value="kampus" onClick={handleLocChange}>
                    Kampus
                  </button>
                </div>
              </div>
              <div id="gotodua">
                <div className="go" id="cafe">
                  <button value="cafe" onClick={handleLocChange}>
                    Cafe
                  </button>
                </div>
                <div className="go" id="bioskop">
                  <button value="bioskop" onClick={handleLocChange}>
                    Bioskop
                  </button>
                </div>
              </div>
            </div>

            {/* Untuk bagian aktivitas */}
            <div id="activity">
              <h3>@{loc}</h3>
              <div id="satu">
                <div id="makan">
                  <button id="btn-makan" disabled={disable} onClick={sMakan}>
                    MAKAN
                  </button>
                </div>
                <div id="tidur">
                  <button id="btn-tidur" disabled={disable} onClick={sTidur}>
                    TIDUR
                  </button>
                </div>
                <div id="perpus">
                  <button
                    id="btn-perpus"
                    value="perpus"
                    onClick={handleLocChange}
                  >
                    PERPUS
                  </button>
                </div>
                <div id="kantin">
                  <button
                    id="btn-kantin"
                    value="kantin"
                    onClick={handleLocChange}
                  >
                    KANTIN
                  </button>
                </div>
                <div id="matkul">
                  <button
                    id="btn-matkul1"
                    disabled={disable}
                    onClick={sBelajar}
                  >
                    PROGFUN
                  </button>
                  <button
                    id="btn-matkul2"
                    disabled={disable}
                    onClick={sBelajar}
                  >
                    SISDIG
                  </button>

                  <button
                    id="btn-matkul3"
                    disabled={disable}
                    onClick={sBelajar}
                  >
                    MICECONOMIC
                  </button>
                  <button
                    id="btn-matkul4"
                    disabled={disable}
                    onClick={sBelajar}
                  >
                    MFBUSINESS
                  </button>
                  <button
                    id="btn-matkul5"
                    disabled={disable}
                    onClick={sBelajar}
                  >
                    NARASIVISUAL
                  </button>
                  <button
                    id="btn-matkul6"
                    disabled={disable}
                    onClick={sBelajar}
                  >
                    DESAINGRAFIS
                  </button>
                </div>
              </div>
              <div id="dua">
                <div id="main">
                  <button id="btn-main1" disabled={disable} onClick={sMain}>
                    MAIN
                  </button>
                  <button id="btn-main2" disabled={disable} onClick={sMain}>
                    NONTON
                  </button>
                  <button id="btn-main3" disabled={disable} onClick={sMain}>
                    HANGOUT
                  </button>
                </div>
                <div id="belajar">
                  <button
                    id="btn-belajar"
                    disabled={disable}
                    onClick={sBelajar}
                  >
                    BELAJAR
                  </button>
                </div>
                <div id="minum">
                  <button id="btn-minum" disabled={disable} onClick={sMinum}>
                    MINUM
                  </button>
                </div>
                <div id="kelas">
                  <button
                    value="kelas"
                    id="btn-kelas"
                    onClick={handleLocChange}
                  >
                    KELAS
                  </button>
                </div>
                <div id="minum1">
                  <button id="btn-minum" disabled={disable} onClick={sMinum}>
                    MINUM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* untuk page setelah selesai game  */}
      <div id="thirdpage">
        <div id="quizz">
          <div id="evalNotes">
            <div id="contentt">
              <div id="QUIZZZ">
                <h1>QUIZ TIME!!!</h1>
              </div>
              <div id="QUESTION">
                <h2>Apakah kita boleh mendapatkan nilai 100?? :")</h2>
              </div>
              <div>
                <button id="quizBut" value="no" onClick={quiz}>
                  TIDAK
                </button>
                <button id="quizBut" value="yes" onClick={quiz}>
                  IYAA BOLEHHH
                </button>
                <button id="conToEval" onClick={fEvaluasi}>
                  Evaluasi
                </button>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* untuk evaluasi akhir */}
      <div id="evaluasiakhir">
        <div id="evalNotes">
          <div id="contentt">
            <div id="EVALL">
              <h1>EVALUASI</h1>
            </div>
            <div id="Greet">
              <h1>Haii {name}</h1>
            </div>
            <div>
              <h2>Berikut adalah rekap kegiatanmu selama seminggu : </h2>
            </div>
            <div>
              <ul>
                <li>
                  Kamu ke Cafe {jumlahKafe} kali minggu ini
                  <br />
                  {evalKafe}
                </li>
                <li>
                  Kamu ke Bioskop {jumlahBioskop} kali minggu ini
                  <br />
                  {evalBioskop}
                </li>
                <li>
                  Kamu makan {jumlahMakan} kali minggu ini
                  <br />
                  {evalMakan}
                </li>
                <li>
                  Kamu minum {jumlahMinum} kali minggu ini
                  <br />
                  {evalMinum}
                </li>
                <li>
                  Kamu tidur {jumlahTidur} kali minggu ini
                  <br />
                  {evalTidur}
                </li>
                <li>
                  Kamu main {jumlahMain} kali minggu ini
                  <br />
                  {evalMain}
                </li>
                <li>
                  Persentase belajar kamu {belajar}% minggu ini
                  <br />
                  {evalBelajar}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Jika user mati */}
      <div id="deadpage">
        <div id="akhirannn">
          <div id="evalNotes">
            <div id="contentt">
              <div id="HEADING">
                <h1>ANDA TELAH GAGAL</h1>
              </div>
              <div>
                <h2>{isDead}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* untuk about us */}
      <div id="about-us">
        <div id="satu">
          <div>
            <button id="home" onClick={home}>
              HOME
            </button>
          </div>
          <div id="cards">
            <div className="tengah">
              <div className="kiri">
                <Card
                  name={abus[0].name}
                  imgURL={abus[0].imgURL}
                  phone={abus[0].phone}
                  email={abus[0].email}
                />
              </div>
              <div className="kanan">
                <Card
                  name={abus[1].name}
                  imgURL={abus[1].imgURL}
                  phone={abus[1].phone}
                  email={abus[1].email}
                />
              </div>
            </div>
            <div className="tengah">
              <div className="kiri">
                <Card
                  name={abus[2].name}
                  imgURL={abus[2].imgURL}
                  phone={abus[2].phone}
                  email={abus[2].email}
                />
              </div>
              <div className="kanan">
                <Card
                  name={abus[3].name}
                  imgURL={abus[3].imgURL}
                  phone={abus[3].phone}
                  email={abus[3].email}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
