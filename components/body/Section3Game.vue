<template>
  <div class="gameBox">
    <div class="titleCell">
      <h2>Best Games</h2>
      <p>
        UW99 trusted online casino is serving you all with the best casino
        gaming services.
      </p>
    </div>
    <div id="choseGame" class="gameChose">
      <ul>
        <li :class="{ cur: cur === 0 }" @click="cur = 0">
          <i class="cion1" /><span>SPORTS</span>
        </li>
        <li :class="{ cur: cur === 1 }" @click="cur = 1">
          <i class="cion2" /><span>CASINO</span>
        </li>
        <li :class="{ cur: cur === 2 }" @click="cur = 2">
          <i class="cion3" /><span>POKER</span>
        </li>
        <li :class="{ cur: cur === 3 }" @click="cur = 3">
          <i class="cion4" /><span>SLOT</span>
        </li>
        <li :class="{ cur: cur === 4 }" @click="cur = 4">
          <i class="cion5" /><span>LOTTERY</span>
        </li>
        <li :class="{ cur: cur === 5 }" @click="cur = 5">
          <i class="cion6" /><span>JACKPOT</span>
        </li>
      </ul>
    </div>

    <div class="choseBar">
      <div class="choseBox" :class="{ active: cur === 0 }">
        <div class="uw88_home_tab">
          <div>
            <div style="z-index: 2">
              <!-- <img src="/data/1833/uploads/left-ball.png" class="leftBall" />
              <img src="/data/1833/uploads/right-ball.png" class="rightBall" />
              <img src="/data/1833/uploads/fade-ball.png" class="fadeBall" /> -->
            </div>
            <img
              src="~/assets/images/games/uw88_sport_01_man2.png"
              class="gymani3"
            />
          </div>
        </div>
        <div class="gameTxt">
          <p class="eventTit">SPORTS</p>
          <p class="eventNotice">
            At UW99, we provide only the best gaming technology with
            World-famous game products.Making your experience to another
            level!Show off your Prediction Skill, Win original millions of
            Freebet!
          </p>
          <div class="tagList flexChose uw88Chose">
            <ul style="flex-wrap: nowrap; margin-top: 0">
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="m-sport" />
                  </div>
                  <p>M-Sport</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="s-sport" />
                  </div>
                  <p>S-Sport</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="e-sport" />
                  </div>
                  <p>E-Sport</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="sbobet" />
                  </div>
                  <p>Sbo Bet</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="maxbet" />
                  </div>
                  <p>Max Bet</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="choseBox" :class="{ active: cur === 1 }">
        <div class="uw88_home_tab">
          <div>
            <div style="z-index: 2">
              <!-- <img src="/data/1833/uploads/big-coin.png" class="bigglod" />
              <img src="/data/1833/uploads/small-coin.png" class="smallglod" />
              <img src="/data/1833/uploads/triangle.png" class="flypan" />
              <img src="/data/1833/uploads/dice.png" class="touzi" /> -->
            </div>
            <img
              src="~/assets/images/games/home-casino-beauty001.webp"
              class="gymani3"
            />
          </div>
        </div>
        <div class="gameTxt">
          <p class="eventTit">CASINO</p>
          <p class="eventNotice">
            UW99 Malaysia is a spectacular casino that takes you to an unreal
            world of online casino games. The live games are the perfect choice
            for all types of casino lovers. Whatever your experience level is,
            you can join. We are adding variety consistently to match your
            needs.
          </p>
          <div class="tagList flexChose uw88Chose">
            <ul style="flex-wrap: nowrap; margin-top: 0">
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="sagaming" />
                  </div>
                  <p>SA<br />GAMING</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="wmcasino" />
                  </div>
                  <p>WM<br />CASINO</p>
                </a>
              </li>

              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="luckystreak" />
                  </div>
                  <p>LUCKY<br />STREAK</p>
                </a>
              </li>

              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="xpggaming" />
                  </div>
                  <p>XPG<br />GAMING</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="srown855" />
                  </div>
                  <p>855<br />CROWN</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="dreamgaming" />
                  </div>
                  <p>DREAM<br />GAMING</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="choseBox" :class="{ active: cur === 2 }">
        <div class="uw88_home_tab">
          <div>
            <div style="z-index: 2">
              <!-- <img
                src="/data/1833/uploads/token_1.png"
                class="pokerSmallRightCoin"
              />
              <img
                src="/data/1833/uploads/left_coin.png"
                class="pokerLeftCoin"
              />
              <img
                src="/data/1833/uploads/token_3.png"
                class="pokerRightToken2"
              /> -->
            </div>
            <img
              src="~/assets/images/games/home-poker-beauty001.webp"
              class="gymani3"
            />
          </div>
        </div>
        <div class="gameTxt">
          <p class="eventTit">POKER</p>
          <p class="eventNotice">
            UW99 is home to the best online poker events. Every year we run the
            best online tournament series in the world. We also host the best
            weekly tournaments, plus many more every day of the week. With a
            game starting every second, UW99 is the only place to play
            tournament poker online.
          </p>
          <div class="tagList flexChose uw88Chose">
            <ul style="flex-wrap: nowrap; margin-top: 0">
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="pokertournament" />
                  </div>
                  <p>POKER</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="big2" />
                  </div>
                  <p>BIG 2</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="niuniu" />
                  </div>
                  <p>NIU NIU</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="mahjong" />
                  </div>
                  <p>MAHJONG</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="choseBox" :class="{ active: cur === 3 }">
        <div class="uw88_home_tab">
          <div>
            <div style="z-index: 2">
              <!-- <img src="/data/1833/uploads/joy-left.png" class="leftJoy" />
              <img src="/data/1833/uploads/joy-right.png" class="rightJoy" /> -->
            </div>
            <img
              src="~/assets/images/games/home-slot-beauty001.webp"
              class="gymani3"
            />
          </div>
        </div>
        <div class="gameTxt">
          <p class="eventTit">SLOT</p>
          <p class="eventNotice">
            UW99 Malaysia currently offers the best online slots that you can
            love. We offer very quick payouts with outstanding customer service.
            It’s a place where you can play online slots as long as you want and
            still not feel bored. We are the best in terms of game collection.
            Play Slots Games Malaysia starting now!
          </p>
          <div class="tagList flexChose trueList">
            <ul style="flex-wrap: nowrap; margin-top: 0">
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="icon13" />
                  </div>
                  <p>SLOT</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="choseBox" :class="{ active: cur === 4 }">
        <div class="uw88_home_tab">
          <div>
            <div style="z-index: 2">
              <!-- <img
                src="/data/1833/uploads/ball43.png"
                class="lotteryLeftBall"
              />
              <img
                src="/data/1833/uploads/ball9.png"
                class="lotteryRightBall"
              />
              <img
                src="/data/1833/uploads/ball6.png"
                class="lotteryLeftBottomBall"
              /> -->
            </div>
            <img
              src="~/assets/images/games/home-lottery-beauty002.webp"
              class="gymani3"
            />
          </div>
        </div>
        <div class="gameTxt">
          <p class="eventTit">LOTTERY</p>
          <p class="eventNotice">
            4D is a popular type of lottery that requires you to pick four
            digits from a set of numbers, ranging from 0000 to 9999. A draw of
            twenty three winning digits is usually carried out each time. You
            win a prize if you successfully match your numbers to the draw
            results.Get the Chance to Win Big With 4D Lottery UW99 Malaysia!
          </p>
          <div class="tagList flexChose uw88Chose">
            <ul style="flex-wrap: nowrap; margin-bottom: -14px">
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="marksix" />
                  </div>
                  <p>MARKSIX</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="chinalottery" />
                  </div>
                  <p>CHINA<br />LOTTERY</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="sgmy4d" />
                  </div>
                  <p>4D<br />SINGAPORE</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="sgmy4d" />
                  </div>
                  <p>4D<br />MALAYSIA</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="keno" />
                  </div>
                  <p>KENO</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="choseBox" :class="{ active: cur === 5 }">
        <div class="uw88_home_tab">
          <div>
            <img
              src="~/assets/images/games/uw88_home_jackpot_01.webp"
              class="gymani3"
            />
          </div>
        </div>
        <div class="gameTxt">
          <p class="eventTit">JACKPOT</p>
          <p class="eventNotice">
            Mega Jackpot winner will ONLY get the 80% of the Jacpot Amount,20%
            of the Jackpot Amount will become the next Starting Jackpot Amount
            in UW99!
          </p>
          <div class="tagList flexChose trueList">
            <ul style="flex-wrap: nowrap; margin-top: 0">
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="icon19" />
                  </div>
                  <p>1ST x1</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="icon20" />
                  </div>
                  <p>2ND x2</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="icon8" />
                  </div>
                  <p>3RD x3</p>
                </a>
              </li>
              <li>
                <a href="javascript:;" class="callLoginPopup">
                  <div class="enterIcon">
                    <i class="icon22" />
                  </div>
                  <p>4TH x12</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const cur = ref(0);
</script>

<style scoped lang="scss">
.gameBox {
  margin-top: 140px;
  .titleCell {
    text-align: center;
  }

  .gameChose {
    margin-top: 26px;
    justify-content: center;
    position: relative;
    display: flex;

    li {
      float: left;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 160px;
      height: 50px;
      line-height: 50px;
      margin-left: 12px;
      text-align: center;
      background-size: cover;
      border-radius: 0 0 14px 14px;
      box-shadow: 0 6px 10px 0 rgba(184, 208, 255, 0.3);
      cursor: pointer;
      background: url(~/assets/images/games/primary-medium-txt-normal@2x.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      position: relative;
      color: #636363;
      transition: all 0.3s;

      &.cur,
      &:hover {
        background: none;
        color: #fff;
        z-index: 1;

        i {
          width: 44px;
          height: 44px;
          margin-right: 0px;
          position: relative;
          top: 4px;
        }

        i.cion1 {
          background-position: -490px 0px;
        }
        i.cion2 {
          background-position: -184px 0px;
        }
        i.cion3 {
          background-position: -108px 0px;
        }
        i.cion4 {
          background-position: -260px 0px;
        }
        i.cion5 {
          background-position: -336px 0px;
        }
        i.cion6 {
          background-position: -413px 0px;
        }
      }

      &:before {
        -webkit-animation: AcY_Acf 0.35s ease-out forwards;
        animation: AcY_Acf 0.35s ease-out forwards;
      }

      &:hover:before {
        content: "";
        z-index: -2;
        top: 0;
        display: block;
        width: 180px;
        height: 66px;
        position: absolute;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        background-image: url(~/assets/images/games/primary-medium-new-selected.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }

      i {
        display: block;
        width: 28px;
        height: 28px;
        background: url(~/assets/images/games/sprite7.png);
        background-repeat: no-repeat;
        background-size: 606px 44px;
        margin-right: 14px;

        &.cion1 {
          background-position: -456px 0px;
        }
        &.cion2 {
          background-position: -152px 0px;
        }
        &.cion3 {
          background-position: -76px 0px;
        }
        &.cion4 {
          background-position: -228px 0px;
        }
        &.cion5 {
          background-position: -304px 0px;
        }
        &.cion6 {
          background-position: -380px 0px;
        }
      }

      &.cur:before {
        content: "";
        z-index: -2;
        top: 0;
        display: block;
        width: 180px;
        height: 66px;
        position: absolute;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        background-image: url(~/assets/images/games/primary-medium-new-selected.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
    }
  }

  .choseBar {
    position: relative;
    display: flex;
    height: 451px;
    box-sizing: border-box;
    z-index: 1;
    margin-top: 68px;

    .choseBox {
      display: flex;
      position: absolute;
      width: 100%;
      height: 100%;

      &.active {
        .uw88_home_tab {
          animation: fadeInaniLeft 0.5s ease-in forwards;
        }
        .gameTxt {
          animation: fadeInaniRight 0.5s ease-in forwards;
        }
      }

      .uw88_home_tab {
        width: 650px;
        top: -40px;
        position: relative;
        z-index: 1;
        animation: fadeOutLefts 0.5s ease-in forwards;
        background: url(~/assets/images/games/uw99_home_block_bg.png) top center
          no-repeat;

        > div {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          flex-direction: column;
          margin-top: 40px;
        }
      }

      .gameTxt {
        width: 542px;
        position: relative;
        margin-top: 40px;
        animation: fadeOutRights 0.5s ease-in forwards;

        p.eventTit {
          font-family: sans-serif !important;
          font-weight: 700 !important;
        }

        .eventTit {
          margin-top: 20px;
          font-family: "Galano-Bold";
          font-weight: 700;
          font-size: 70px;
          line-height: 75px;
          background-image: -webkit-linear-gradient(#e1c7ae 40%, #d4bb9d 70%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 400;
          white-space: nowrap;
        }

        .eventNotice {
          line-height: 1.6;
          margin-top: 20px;
          font-size: 14px;
          color: #636363;
          letter-spacing: -0.47px;
        }

        .tagList {
          position: absolute;
          left: 0;
          bottom: 42px;
          z-index: 1;
        }

        .flexChose ul {
          position: relative;
          display: flex;
          margin-top: 40px;
          flex-wrap: wrap;
          li {
            margin-right: 5px;
            cursor: pointer;
            position: relative;
            text-align: center;

            p {
              position: relative;
              margin-top: 8px;
              font-size: 14px;
              color: #636363;
              text-align: center;
              line-height: 1.1em;
            }

            .enterIcon {
              width: 90px;
              height: 100px;
              display: flex;
              justify-content: center;
              align-items: center;
              background-image: none !important;
              position: relative;
              z-index: 1;

              &::after {
                content: "";
                z-index: -1;
                top: 0;
                display: block;
                width: 101px;
                height: 113px;
                position: absolute;
                left: 50%;
                transform: translate3d(-50%, 0, 0);
                background-image: url(~/assets/images/games/spec-normal-new@2x.png);
                background-repeat: no-repeat;
                background-size: 100% 100%;
              }

              i {
                background-size: 40px 80px;
                background-position: top;
                width: 40px;
                height: 40px;

                &.m-sport {
                  background-image: url(~/assets/images/games/sports/uw88_msport_icon.png);
                }
                &.s-sport {
                  background-image: url(~/assets/images/games/sports/uw88_ssport_icon.png);
                }
                &.e-sport {
                  background-image: url(~/assets/images/games/sports/uw88_esport_icon.png);
                }
                &.sbobet {
                  background-image: url(~/assets/images/games/sports/uw88_sbobet_icon.png);
                }
                &.maxbet {
                  background-image: url(~/assets/images/games/sports/uw88_maxbet_icon.png);
                }
                &.sagaming {
                  background-image: url(~/assets/images/games/casino/uw88_sagaming_icon.png);
                }
                &.wmcasino {
                  background-image: url(~/assets/images/games/casino/uw88_wmcasino_icon.png);
                }
                &.luckystreak {
                  background-image: url(~/assets/images/games/casino/uw88_luckystreak_icon.png);
                }
                &.xpggaming {
                  background-image: url(~/assets/images/games/casino/uw88_xpggaming_icon.png);
                }
                &.srown855 {
                  background-image: url(~/assets/images/games/casino/uw88_fairguaranted_icon.png);
                }
                &.dreamgaming {
                  background-image: url(~/assets/images/games/casino/uw88_dreamgaming_icon.png);
                }
                &.pokertournament {
                  background-image: url(~/assets/images/games/poker/uw88_pokertournament_icon.png);
                }
                &.big2 {
                  background-image: url(~/assets/images/games/poker/uw88_big2_icon.png);
                }
                &.niuniu {
                  background-image: url(~/assets/images/games/poker/uw88_niuniu_icon.png);
                }
                &.mahjong {
                  background-image: url(~/assets/images/games/poker/uw88_mahjong_icon.png);
                }
                &.icon13 {
                  background-position: -104px 0px;
                  width: 50px;
                  height: 50px;
                  display: inline-block;
                  background-image: url(~/assets/images/games/sprite8.png);
                  background-repeat: no-repeat;
                  background-size: 2182px 50px;
                }
                &.marksix {
                  background-image: url(~/assets/images/games/lottery/uw88_marksix_icon.png);
                }
                &.chinalottery {
                  background-image: url(~/assets/images/games/lottery/uw88_chinalottery_icon.png);
                }
                &.sgmy4d {
                  background-image: url(~/assets/images/games/lottery/uw88_4dsgmy_icon.png);
                }
                &.keno {
                  background-image: url(~/assets/images/games/lottery/uw88_keno_icon.png);
                }
                &.icon19 {
                  background-position: -1352px 0px;
                  width: 50px;
                  height: 50px;
                  display: inline-block;
                  background-image: url(~/assets/images/games/sprite8.png);
                  background-repeat: no-repeat;
                  background-size: 2182px 50px;
                }
                &.icon20 {
                  background-position: -520px 0px;
                  width: 50px;
                  height: 50px;
                  display: inline-block;
                  background-image: url(~/assets/images/games/sprite8.png);
                  background-repeat: no-repeat;
                  background-size: 2182px 50px;
                }
                &.icon8 {
                  background-position: -208px 0px;
                  width: 50px;
                  height: 50px;
                  display: inline-block;
                  background-image: url(~/assets/images/games/sprite8.png);
                  background-repeat: no-repeat;
                  background-size: 2182px 50px;
                }
                &.icon22 {
                  background-position: -1144px 0px;
                  width: 50px;
                  height: 50px;
                  display: inline-block;
                  background-image: url(~/assets/images/games/sprite8.png);
                  background-repeat: no-repeat;
                  background-size: 2182px 50px;
                }
              }
            }
          }
        }
      }
    }
  }
}

@keyframes AcY_Acf {
  0% {
    opacity: 0.25;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOutLefts {
  0% {
    opacity: 1;
    z-index: 1;
    transform: translateZ(0);
  }
  95% {
    z-index: 0;
  }
  100% {
    opacity: 0;
    z-index: 0;
    transform: translate3d(-110px, 0, 0);
  }
}

@keyframes fadeOutRights {
  0% {
    opacity: 1;
    z-index: 1;
    transform: translateZ(0);
  }
  95% {
    z-index: 0;
  }
  99% {
    opacity: 0;
    z-index: 0;
    transform: translate3d(110px, 0, 0);
  }
  100% {
    opacity: 0;
    z-index: 0;
    transform: translateZ(0);
  }
}

@keyframes fadeInaniLeft {
  0% {
    opacity: 0;
    z-index: 0;
    transform: translate3d(-70px, 0, 0);
  }

  100% {
    opacity: 1;
    z-index: 2;
    transform: translateZ(0);
  }
}

@keyframes fadeInaniRight {
  0% {
    opacity: 0;
    z-index: 0;
    transform: translate3d(70px, 0, 0);
  }

  100% {
    opacity: 1;
    z-index: 1;
    transform: translateZ(0);
  }
}
</style>
