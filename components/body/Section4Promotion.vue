<template>
  <div class="appDown">
    <div class="titleCell mt-10">
      <h2>Promotion</h2>
    </div>

    <div class="promos">
      <ul>
        <li>
          <a href="#"
            ><img src="~/assets/images/promotion/WEEKLY-LOSS-REBATES-338.png"
          /></a>
        </li>
        <li><img src="~/assets/images/promotion/REFER-FRIEND-BONUS.png" /></li>
        <li><img src="~/assets/images/promotion/2.0Slot8001.jpg" /></li>
        <li><img src="~/assets/images/promotion/10800243-1.png" /></li>
      </ul>
      <div class="button-more">
        <NuxtLinkLocale to="/promotion">View More</NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.promos ul {
  padding: 0;
  text-align: center;
  margin-top: 26px;
  li {
    width: 49%;
    display: inline-block;
    padding: 13px 3px;
  }
}

.button-more {
  text-align: center;
  background: url(~/assets/images/games/primary-medium-new-selected.png);
  background-size: cover;
  width: 14%;
  margin: 0 auto;
  min-height: 62px;
  padding: 10px;
  font-size: 15px;
  text-transform: uppercase;
  color: #636363;
}
</style>
