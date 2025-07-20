<template>
  <div class="noticeBox">
    <div class="marqueeIcon">
      <img src="~/assets/images/notice@2x.png" />
    </div>
    <div class="txtMarquee-left">
      <div class="bd">
        <div class="marquee-wrapper">
          <div class="marquee">
            UW99 Sebagai Syarikat Pertaruhan Kasino Dalam Talian Dipercayai di
            Malaysia dan Asia, komitmen kami untuk membuatkan anda berasa
            seperti di rumah sendiri.
          </div>
        </div>
      </div>
    </div>
    <a id="mar0" class="moreBtn">Lagi</a>
  </div>
</template>

<style scoped lang="scss">
.noticeBox {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 10px 0 18px;
  margin-top: 35px;
  border-radius: 20px;
  background-image: linear-gradient(180deg, #fff 14%, #ecefff 74%, #fefeff 98%);
  border: 1px solid #d1d5f5;

  .marqueeIcon {
    height: 100%;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    width: 61px;

    img {
      display: block;
      position: relative;
      width: 53px;
      height: 63px;
      top: 4px;
    }
  }

  .txtMarquee-left {
    width: 1028px;
    overflow: hidden;
    height: 42px;
    line-height: 42px;

    li {
      white-space: nowrap;
      font-weight: bold;
      display: inline-block;
      height: 100%;
      letter-spacing: -0.35px;
      color: #9da5bb;
      cursor: pointer;
      font-size: 12px;
      color: #9da5bb;
      width: auto !important;
      padding-right: 40px;
    }
  }

  a.moreBtn {
    width: 75px;
    height: 26px;
    line-height: 20px;
    margin-left: 10px;
    font-size: 12px;
    text-align: center;
    border: 1px solid #d3b797;
    border-radius: 13px;
    color: #d3b797;
    cursor: pointer;
    transition: all 0.2s;
  }
}

.marquee-wrapper {
  overflow: hidden;
  white-space: nowrap;
}

.marquee {
  display: inline-block;
  animation: scroll 30s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
