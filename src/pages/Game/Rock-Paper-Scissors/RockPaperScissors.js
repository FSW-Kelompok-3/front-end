import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./assets/css/style.css";
import logo from "./assets/img/logo.png";
import batu from "./assets/img/batu.png";
import kertas from "./assets/img/kertas.png";
import gunting from "./assets/img/gunting.png";
import refresh from "./assets/img/refresh.png";
import Navbar from "../../../components/Navbar";
import { Nav } from "reactstrap";

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

const rawHTML = `
<div class="backgroundAndText">
  <!-- Navbar Section -->
  <div class="container-fluid pt-3">

    <!-- Row of navbar -->
    <div class="row align-items-center">

      <!-- First column for back button -->
      <div class="col-1 fs-1 fw-bolder text-end custom-back-button" id="back">
        <!-- Use "&lt;" instead of "<" because it is a special character-->
        &lt;
      </div>

      <!-- Second column for logo -->
      <div class="col-1 text-center">
        <img src=${logo} class="custom-logo" />
      </div>

      <!-- Third column for game title text -->
      <div class="col fs-2 fw-bold custom-game-title">
        ROCK PAPER SCISSOR
      </div>

    </div>
  </div>

  <!-- Game Section -->
  <div class="container text-center custom-game-section backgroundAndText">

    <!-- First row for player/comp -->
    <div class="row my-3 justify-content-center align-items-center">

      <div class="col-2 fs-4 fw-bold custom-game-player-name">
        PLAYER 1
      </div>

      <div class="col-2">
      </div>

      <div class="col-2 fs-4 fw-bold custom-game-player-name">
        COM
      </div>

    </div>

    <!-- Second row for rock option -->
    <div class="row my-5 justify-content-center align-items-center">

      <div class="col-2 custom-choice-background align-items-center" id="player-rock">
        <img class="custom-choice" src=${batu} />
      </div>

      <div class="col-2">
      </div>

      <div class="col-2 custom-choice-background" id="com-rock">
        <img class="custom-choice" src=${batu} />
      </div>

    </div>

    <!-- Thrid row for paper option -->
    <div class="row my-5 justify-content-center align-items-center">

      <div class="col-2 custom-choice-background" id="player-paper">
        <img class="custom-choice" src=${kertas} />
      </div>

      <div class="col-2 mx-2 fw-bold custom-vs-background custom-vs-text" id="vs">
        VS
      </div>

      <div class="col-2 custom-choice-background" id="com-paper">
        <img class="custom-choice" src=${kertas} />
      </div>

    </div>

    <!-- Fourth row for scissor option -->
    <div class="row mt-5 justify-content-center align-items-center">

      <div class="col-2 custom-choice-background" id="player-scissor">
        <img class="custom-choice" src=${gunting} />
      </div>

      <div class="col-2">
      </div>

      <div class="col-2 custom-choice-background" id="com-scissor">
        <img class="custom-choice" src=${gunting} />
      </div>

    </div>

    <!-- Fifth row for reset option -->
    <div class="row justify-content-center align-items-center backgroundAndText">

      <div class="col-2">
      </div>

      <div class="col-2" id="ulang">
        <img class="custom-choice" src=${refresh} />
      </div>

      <div class="col-2">
      </div>

    </div>

  </div>
  </div>
</div>
`;

class RockPaperScissors extends Component {
  state = {
    isAuthentidated: false,
    redirect: false,
    // Author : localStorage.getItem("token")
  };

  componentWillMount() {
    this.checkUser();
  }

  // ini nantinya akan melakukan request ke server
  checkUser = () => {
    const token = localStorage.getItem("token");

    if (token) {
      return this.setState({
        isAuthentidated: true,
      });
    }
  };

  componentDidMount() {
    // Membuat kelas Game
    let suitResult = "";
    class Game {
      // constructor() {}

      // Fungsi ini untuk mengacak pilihan komputer
      randomize() {
        // Menyimpan pilihan ke dalam array
        // Ada 3 element yg bisa diakses mulai dari index-0, index-1, index-2
        const choices = ["rock", "paper", "scissor"];

        // Math.random() mengacak angka desimal dari 0 sampai kurang dari 1
        // Kemudian angka tersebut dikalikan 3 dan dibulatkan ke bawah dengan Math.floor().
        // sehingga, hasil akhir berupa angka 0, 1, atau 2
        // hasil ini nantinya bisa digunakkan untuk mengakses array yang memiliki 3 elemen secara acak.
        const index = Math.floor(Math.random() * 3);

        // Akses element yg ada di dalam array choice dengan index hasil acakan
        return choices[index];
      }

      playGame(playerChoice) {
        // Pertama, hapus semua background agak player bisa main berkali kali tanpa harus mengklik reset secara manual
        this.resetBackground();

        // Cetak pilihan player & atur background pada pilihan tsb
        console.log(`Player memilih ${playerChoice}`);
        this.setBackground("player", playerChoice);

        // Cetak pilihan computer & atur background pada pilihan tsb
        const comChoice = this.randomize();
        console.log(`COM memilih ${comChoice}`);
        this.setBackground("com", comChoice);

        // Bandingkan pilihan computer & player
        // Jika sama, panggil fungsi resultDraw()
        // Jika player menang, panggil fungsi resultPlayerWin()
        // Jika player kalah, panggil fungsi resultPlayerLose()
        if (playerChoice === comChoice) {
          return this.resultDraw();
        }

        if (playerChoice === "rock" && comChoice === "paper") {
          return this.resultPlayerLose();
        }

        if (playerChoice === "rock" && comChoice === "scissor") {
          return this.resultPlayerWin();
        }

        if (playerChoice === "paper" && comChoice === "scissor") {
          return this.resultPlayerLose();
        }

        if (playerChoice === "paper" && comChoice === "rock") {
          return this.resultPlayerWin();
        }

        if (playerChoice === "scissor" && comChoice === "rock") {
          return this.resultPlayerLose();
        }

        if (playerChoice === "scissor" && comChoice === "paper") {
          return this.resultPlayerWin();
        }
      }

      setBackground(playerType, choice) {
        // Ambil element berdasar id, kemudian berikan kelas custom-selected
        // Cara di bawah bisa dilakukan karena penamaan id menggunakan format jenisplayer-pilihan
        const selectedElement = document.getElementById(`${playerType}-${choice}`);

        // Kelas custom-selected memberikan background, cek .custom-selected di style.css
        selectedElement.classList.add("custom-selected");
      }

      resetBackground() {
        // hapus style background pada pilihan player & computer
        document.getElementById("player-rock").classList.remove("custom-selected");
        document.getElementById("player-paper").classList.remove("custom-selected");
        document.getElementById("player-scissor").classList.remove("custom-selected");
        document.getElementById("com-rock").classList.remove("custom-selected");
        document.getElementById("com-paper").classList.remove("custom-selected");
        document.getElementById("com-scissor").classList.remove("custom-selected");

        // hapus style background pada tulisan VS
        document.getElementById("vs").classList.remove("custom-green-vs-box");
        document.getElementById("vs").classList.remove("custom-green-darker-vs-box");

        // atur kembali tulisan menjadi VS & kembalikan style asal
        document.getElementById("vs").innerHTML = "VS";
        document.getElementById("vs").classList.add("custom-vs-text");
      }

      resultDraw() {
        // Cetak tulisan ke console
        console.log("DRAW");
        suitResult = "Draw";

        // Ambil element & ubah tulisannya
        const vsElement = document.getElementById("vs");
        vsElement.innerHTML = "DRAW";

        // Hapus kelas custom-vs-text & tambahkan kelas custom-green-darker-vs-box
        // Cek kelas custom-vs-text & custom-green-darker-vs-box di style.css
        vsElement.classList.remove("custom-vs-text");
        vsElement.classList.add("custom-green-darker-vs-box");
      }

      resultPlayerLose() {
        // Cetak tulisan ke console
        console.log("COM WIN");
        suitResult = "COM Win";

        // Ambil element & ubah tulisannya
        const vsElement = document.getElementById("vs");
        vsElement.innerHTML = "COM WIN";

        // Hapus kelas custom-vs-text & tambahkan kelas custom-green-vs-box
        // Cek kelas custom-vs-text & custom-green-vs-box di style.css
        vsElement.classList.remove("custom-vs-text");
        vsElement.classList.add("custom-green-vs-box");
      }

      resultPlayerWin() {
        // Cetak tulisan ke console
        console.log("PLAYER WIN");
        suitResult = "Win";

        // Ambil element & ubah tulisannya
        const vsElement = document.getElementById("vs");
        vsElement.innerHTML = "PLAYER 1 WIN";

        // Hapus kelas custom-vs-text & tambahkan kelas custom-green-vs-box
        // Cek kelas custom-vs-text & custom-green-vs-box di style.css
        vsElement.classList.remove("custom-vs-text");
        vsElement.classList.add("custom-green-vs-box");


        axios
          .post("https://api-kel3.herokuapp.com/rps", {
            result: "win",
          }, { headers: { 'content-type': 'application/json;charset=UTF-8', Authorization: localStorage.getItem('token') } })
        console.log(localStorage.getItem("token"))
        // .then(function (response) {
        //   console.log(response);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
      }
    }

    // Membuat object baru menggunakan kelas Game
    const game = new Game();

    // Menyimpan semua elemen yang dibutuhkan ke dalam variable
    const playerRock = document.getElementById("player-rock");
    const playerPaper = document.getElementById("player-paper");
    const playerScissor = document.getElementById("player-scissor");

    // const comRock = document.getElementById("com-rock");
    // const comPaper = document.getElementById("com-paper");
    // const comScissor = document.getElementById("com-scissor");

    // const versus = document.getElementById("vs");

    const reset = document.getElementById("ulang");
    const back = document.getElementById("back");

    // Menambahkan fungsi yang dijalankan ketika element di-klik
    // isi dari namaElement.onclick harus berupa function
    // Jika onlcick dibuat langsung di element dalam dokumen html, tidak perlu berupa function, cukup nama fungsinya yg akan dipanggil saja

    if (playerRock) {
      playerRock.onclick = function () {
        game.playGame("rock");
      };
    }

    if (playerPaper) {
      playerPaper.onclick = function () {
        game.playGame("paper");
      };
    }

    if (playerScissor) {
      playerScissor.onclick = function () {
        game.playGame("scissor");
      };
    }

    if (reset) {
      reset.onclick = function () {
        // Pencetakan tulisan ini hanya dilakukan ketika mengklik gambar reset
        console.log("--- GAME RESET ---");

        game.resetBackground();
      };
    }

    if (back) {
      back.onclick = function () {
        this.setState({ redirect: true });
      }.bind(this);
    }
  }

  render() {
    const { isAuthentidated } = this.state;

    if (!isAuthentidated) {
      return <Redirect to="/login" />;
    }

    const { redirect } = this.state;
    if (redirect) {
      return <Redirect push to="/RockPaperScissors" />;
    }

    return <Fragment>
      <Navbar/>
      {<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} />}
    </Fragment>;
  }
}

export default withRouter(RockPaperScissors);
