<template>
  <div v-show="show" id="Bar" class="ShowHide">
    <div id="left">
      <div>
        <a href="#" @click="show = false">X</a>
        <img src="~/assets/images/app_logouw99.png" alt="logo" />
        <div class="rightlogo">
          {{ t("downloadText1") }} <br />
          &amp; {{ t("downloadText2") }}
        </div>
      </div>
    </div>

    <div id="right">
      <a href="/en/download-link"
        ><div class="tophide-download">{{ t("download") }}</div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const show = ref(true);
</script>

<style scoped lang="scss">
.ShowHide {
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  background: #3c3b3b;
  background-repeat: no-repeat;
  background-size: 100%;
  color: #ffffff;
  padding: 4px;
  height: 49px;
  position: relative;
  width: 100vw;
  z-index: 100;
  font-weight: 550;

  #left {
    height: 20px;
    width: 220px;
    a {
      color: #ffffff;
      text-decoration: none;
      vertical-align: top;
      padding: 0px 10px;
    }

    img {
      width: 40px;
      display: inline-block;
    }

    .rightlogo {
      float: right;
      font-size: 10px;
      line-height: 11px;
      padding-top: 10px;
    }
  }
  #right {
    position: absolute;
    right: 10px;
    text-align: center;
    top: 10px;

    a {
      text-decoration: none;
      color: #636363;

      .tophide-download {
        border-radius: 5px;
        padding: 5px 15px;
        color: #000;
        font-weight: bold;
        font-size: 12px;
        background: linear-gradient(#ceaf8e, #e7d1bb, #ceaf8e);
      }
    }
  }
}
</style>
