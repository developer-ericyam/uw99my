<template>
  <div id="theme-header-link">
    <div id="logo">
      <div class="movie">
        <a href="https://uw88movie.com/index.htm">
          <img src="~/assets/images/movie.gif" />
        </a>
      </div>

      <div class="logo">
        <a @click="$router.push('/')">
          <img src="~/assets/images/logo-uw99-shine.gif" />
        </a>
      </div>
    </div>
    <div id="theme-menu">
      <div id="cssmenu" class="cmsmenu">
        <div id="menu-line" style="width: 46px; left: 226.195px" />
        <div id="menu-button" @click="showMenu = !showMenu">
          Menu
          <Icon class="icon" name="prime:bars" size="26" />
        </div>
        <ul :class="{ show: showMenu }">
          <li class="active">
            <NuxtLink to="/">{{ t("pageHome") }}</NuxtLink>
          </li>
          <li class="has-sub">
            <NuxtLink to="#">{{ t("pageCasino") }}</NuxtLink>
            <ul>
              <li>
                <a href="/en/casino" target="_self"
                  ><h3>855 CROWN</h3>
                  <div class="cPopup">{{ t("playNow") }}</div>
                  <img
                    src="~/assets/images/menu/1_casino/uw88_menu_casino_005.png"
                /></a>
              </li>
              <li>
                <a href="/en/casino" target="_self"
                  ><h3>DREAM GAMING</h3>
                  <div class="cPopup">{{ t("playNow") }}</div>
                  <img
                    src="~/assets/images/menu/1_casino/uw88_menu_casino_006.png"
                /></a>
              </li>
              <li>
                <a href="/en/casino" target="_self"
                  ><h3>SA GAMING</h3>
                  <div class="cPopup">{{ t("playNow") }}</div>
                  <img
                    src="~/assets/images/menu/1_casino/uw88_menu_casino_001.png"
                /></a>
              </li>
              <li>
                <a href="/en/casino" target="_self"
                  ><h3>WM CASINO</h3>
                  <div class="cPopup">{{ t("playNow") }}</div>
                  <img
                    src="~/assets/images/menu/1_casino/uw88_menu_casino_002.png"
                /></a>
              </li>
              <li>
                <a href="/en/casino" target="_self"
                  ><h3>XPG GAMINNG</h3>
                  <div class="cPopup">{{ t("playNow") }}</div>
                  <img
                    src="~/assets/images/menu/1_casino/uw88_menu_casino_004.png"
                /></a>
              </li>
            </ul>
          </li>
          <li class="has-sub">
            <NuxtLink to="#">{{ t("pageSports") }}</NuxtLink>
            <ul>
              <li class="">
                <a href="/en/sportsbook" target="_self"
                  ><img
                    src="~/assets/images/menu/2_sports/uw88_menu_sport_002.png"
                  />
                  <div id="rtm">
                    <h3><br />S-SPORTS</h3>
                    <div id="cPp">{{ t("playNow") }}</div>
                  </div></a
                >
              </li>
              <li class="">
                <a href="/en/sportsbook" target="_self"
                  ><img
                    src="~/assets/images/menu/2_sports/uw88_menu_sport_001.png"
                  />
                  <div id="rtm">
                    <h3><br />M-SPORTS</h3>
                    <div id="cPp">{{ t("playNow") }}</div>
                  </div></a
                >
              </li>
              <li class="">
                <a href="/en/sportsbook" target="_self"
                  ><img
                    src="~/assets/images/menu/2_sports/uw88_menu_sport_003.png"
                  />
                  <div id="rtm">
                    <h3><br />E-SPORTS</h3>
                    <div id="cPp">{{ t("playNow") }}</div>
                  </div></a
                >
              </li>
              <li class="">
                <a href="/en/sportsbook" target="_self"
                  ><img
                    src="~/assets/images/menu/2_sports/uw88_menu_sport_004.png"
                  />
                  <div id="rtm">
                    <h3><br />MAX BET</h3>
                    <div id="cPp">{{ t("playNow") }}</div>
                  </div></a
                >
              </li>
              <li class="">
                <a href="/en/sportsbook" target="_self"
                  ><img
                    src="~/assets/images/menu/2_sports/uw88_menu_sport_005.png"
                  />
                  <div id="rtm">
                    <h3><br />SBO BET</h3>
                    <div id="cPp">{{ t("playNow") }}</div>
                  </div></a
                >
              </li>
            </ul>
          </li>
          <li class="has-sub">
            <NuxtLink to="#">{{ t("pagePoker") }}</NuxtLink>
            <ul>
              <li class="">
                <a href="/en/POKER" target="_self"
                  ><img
                    src="~/assets/images/menu/3_poker/uw88_menu_poker_004.png"
                  />
                  <div id="rtm">
                    <h3>MAHJONG <br />POKER</h3>
                    <div id="cPp">{{ t("playNow") }}</div>
                  </div></a
                >
              </li>
              <li class="">
                <a href="/en/POKER" target="_self"
                  ><img
                    src="~/assets/images/menu/3_poker/uw88_menu_poker_003.png"
                  />
                  <div id="rtm">
                    <h3>NIU NIU<br />POKER</h3>
                    <div id="cPp">{{ t("playNow") }}</div>
                  </div></a
                >
              </li>
              <li class="">
                <a href="/en/POKER" target="_self"
                  ><img
                    src="~/assets/images/menu/3_poker/uw88_menu_poker_002.png"
                  />
                  <div id="rtm">
                    <h3>BIG 2<br />ASIAN FAVOURITE</h3>
                    <div id="cPp">{{ t("playNow") }}</div>
                  </div></a
                >
              </li>
              <li class="">
                <a href="/en/POKER" target="_self"
                  ><img
                    src="~/assets/images/menu/3_poker/uw88_menu_poker_001.png"
                  />
                  <div id="rtm">
                    <h3>POKER<br />POKER TOURNEMENT</h3>
                    <div id="cPp">{{ t("playNow") }}</div>
                  </div></a
                >
              </li>
            </ul>
          </li>
          <li class="has-sub">
            <NuxtLink to="#">{{ t("pageLottery") }}</NuxtLink>
            <ul>
              <li class="">
                <a href="/en/lottery" target="_self"
                  ><img
                    src="~/assets/images/menu/4_lottery/uw88_menu_lottery_001.png"
                  />
                  <div id="rtm">
                    <h3>LOTTERY<br />MARKSIX</h3>
                    <div id="cPp">{{ t("playNow") }}</div>
                  </div></a
                >
              </li>
              <li class="">
                <a href="/en/lottery" target="_self"
                  ><img
                    src="~/assets/images/menu/4_lottery/uw88_menu_lottery_004.png"
                  />
                  <div id="rtm">
                    <h3>LOTTERY<br />4D SG &amp; MY</h3>
                    <div id="cPp">{{ t("playNow") }}</div>
                  </div></a
                >
              </li>
              <li class="">
                <a href="/en/lottery" target="_self"
                  ><img
                    src="~/assets/images/menu/4_lottery/uw88_menu_lottery_02.png"
                  />
                  <div id="rtm">
                    <h3>LOTTERY<br />CHINA LOTTERY</h3>
                    <div id="cPp">{{ t("playNow") }}</div>
                  </div></a
                >
              </li>
              <li class="">
                <a href="/en/lottery" target="_self"
                  ><img
                    src="~/assets/images/menu/4_lottery/uw88_menu_lottery_03.png"
                  />
                  <div id="rtm">
                    <h3>LOTTERY<br />KENO</h3>
                    <div id="cPp">{{ t("playNow") }}</div>
                  </div></a
                >
              </li>
            </ul>
          </li>
          <li class="has-sub">
            <NuxtLink to="#">{{ t("pageSlot") }}</NuxtLink>
            <ul>
              <li class="">
                <a href="/en/slot" target="_self"
                  ><h3>ACE333</h3>
                  <div class="cPopup">{{ t("playNow") }}</div>
                  <img src="~/assets/images/menu/5_slot/uw88_menu_slot_02.png"
                /></a>
              </li>
              <li class="">
                <a href="/en/slot" target="_self"
                  ><h3>BETSOFT</h3>
                  <div class="cPopup">{{ t("playNow") }}</div>
                  <img src="~/assets/images/menu/5_slot/uw88_menu_slot_06.png"
                /></a>
              </li>
              <li class="">
                <a href="/en/slot" target="_self"
                  ><h3>PRAGMATIC PLAY</h3>
                  <div class="cPopup">{{ t("playNow") }}</div>
                  <img src="~/assets/images/menu/5_slot/uw88_menu_slot_01.png"
                /></a>
              </li>
              <li class="">
                <a href="/en/slot" target="_self"
                  ><h3>SA GAMING</h3>
                  <div class="cPopup">{{ t("playNow") }}</div>
                  <img src="~/assets/images/menu/5_slot/uw88_menu_slot_05.png"
                /></a>
              </li>
              <li class="">
                <a href="/en/slot" target="_self"
                  ><h3>VIRTUAL TECH</h3>
                  <div class="cPopup">{{ t("playNow") }}</div>
                  <img src="~/assets/images/menu/5_slot/uw88_menu_slot_03.png"
                /></a>
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink to="#">{{ t("pagePromotion") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">{{ t("pageJackpot") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">{{ t("pageVIP") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">{{ t("pageRedeem") }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="clearboth" />
    </div>
    <div id="top-log">
      <div class="loginBox">
        <div class="userIcon">
          <img src="~/assets/images//uw88_login_icon_new.png" />
        </div>
        <div class="userBtn">
          <a href="/en/login">{{ t("login") }}</a
          ><span>/</span><a href="/en/registration">{{ t("register") }}</a>
        </div>
      </div>

      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="robots" content="noodp, noydir" />
      <meta name="copyright" content="� 2022. Copyright Uw88my.com" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const showMenu = ref(false);
</script>

<style scoped lang="scss">
#theme-header-link {
  position: relative !important;
  right: 0 !important;
}

#theme-header-link {
  position: unset;
  right: 10px;
  top: 0px;
  width: 1200px;
  margin: auto;

  &::after {
    content: "";
    display: block;
    clear: both;
  }
}

#theme-header-link a,
#theme-header-link a:visited {
  font-size: 12px;
  text-decoration: none;
  padding: 2px 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

#theme-header-link ul {
  list-style: none;
}

#theme-header-link ul li:first-child {
  border: 0px;
}

#logo {
  width: 180px;
  margin-right: 0;
  height: 101px;
  border: 0px solid red;
  float: left;

  img {
    width: 100%;
    border: 0px solid green;
    margin-top: -57px;
  }

  .movie {
    position: absolute;
    top: 40px;
    left: 16px;
    width: 7%;

    img {
      width: 100%;
      height: auto;
      cursor: pointer;
    }
  }

  .logo {
    position: relative;
    display: block;
    max-width: 230px;
    width: 198px;

    img {
      display: block;
    }
  }
}

#top-log {
  text-align: right !important;
  border: 0px solid red;
  width: 12%;
  float: right;
  margin-top: 28px;

  .loginBox {
    display: flex;
    align-items: center;

    .userIcon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
        display: block;
      }
    }

    .userBtn {
      display: flex;
      align-items: center;
      margin-left: 4px;
      font-size: 14px;
      color: #404654;
      margin-top: -4px;
    }
  }
}
</style>
