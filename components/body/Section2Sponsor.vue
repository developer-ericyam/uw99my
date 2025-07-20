<template>
  <div class="sponBar promo">
    <ul>
      <li>
        <a href="javascript:;" class="callLoginPopup">
          <div class="sopnImg uw88_promo_01"></div>
          <p>DAILY CHECK IN<br />REWARD</p>
        </a>
      </li>
      <li>
        <a href="javascript:;" class="callLoginPopup">
          <div class="sopnImg uw88_promo_02"></div>
          <p>BIRTHDAY<br />BONUS</p>
        </a>
      </li>
      <li>
        <a href="javascript:;" class="callLoginPopup">
          <div class="sopnImg uw88_promo_03"></div>
          <p>LUCKY SPIN<br />WHEEL</p>
        </a>
      </li>
      <li>
        <a href="javascript:;" class="callLoginPopup">
          <div class="sopnImg uw88_promo_04"></div>
          <p>WEEKLY LOSS<br />REBATES UP TO 338</p>
        </a>
      </li>
      <li>
        <a href="javascript:;" class="callLoginPopup">
          <div class="sopnImg uw88_promo_05"></div>
          <p>
            100% FREE<br />SIGNUP BONUS<br /><small
              >(FOR SLOT &amp; SOCCER ONLY)</small
            >
          </p>
        </a>
      </li>
      <li>
        <a href="javascript:;" class="callLoginPopup">
          <div class="sopnImg uw88_promo_06"></div>
          <p>10% DAILY<br />DEPOSIT BONUS</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.sponBar {
  position: relative;
  margin-top: 35px;
}

.sponBar ul {
  position: relative;
  display: flex;
  justify-content: space-between;

  li {
    position: relative;
    width: 150px;
    height: 176px;
    border-radius: 25px;
    overflow: visible;
    box-shadow: 0 8px 12px 0 rgba(232, 193, 152, 0.5);
    text-align: center;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.1);
    }

    a {
      display: block;
      background: url(~/assets/images/item@2x.png);
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      transition: all 0.1s;

      p {
        color: #444c64;
        font-size: 11px;
        line-height: 13px;
      }
    }
  }
}
.sponBar li .sopnImg {
  width: 72px;
  height: 72px;
  margin: 30px auto 12px;
  background-size: 516px 72px;
}

.sponBar.promo li .sopnImg.uw88_promo_01 {
  background-image: url(~/assets/images/sponsor/uw88_home_block_icon_01.png);
  background-size: contain;
  background-position: center center;
}

.sponBar.promo li .sopnImg.uw88_promo_02 {
  background-image: url(~/assets/images/sponsor/uw88_home_block_icon_02.png);
  background-size: contain;
  background-position: center center;
}

.sponBar.promo li .sopnImg.uw88_promo_03 {
  background-image: url(~/assets/images/sponsor/uw88_home_block_icon_03.png);
  background-size: contain;
  background-position: center center;
}

.sponBar.promo li .sopnImg.uw88_promo_04 {
  background-image: url(~/assets/images/sponsor/uw88_home_block_icon_338.png);
  background-size: contain;
  background-position: center center;
}

.sponBar.promo li .sopnImg.uw88_promo_05 {
  background-image: url(~/assets/images/sponsor/uw88_home_block_icon_05.png);
  background-size: contain;
  background-position: center center;
}

.sponBar.promo li .sopnImg.uw88_promo_06 {
  background-image: url(~/assets/images/sponsor/uw88_home_block_icon_06.png);
  background-size: contain;
  background-position: center center;
}
</style>
