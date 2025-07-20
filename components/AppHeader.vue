<template>
  <div>
    <AppMobile />
    <div class="top">
      <div class="topBox">
        <div style="width: 50%; float: left">
          Languages:
          <a @click="onLangClickHandler('en')">
            <span title="English" class="yuyan lang-en" />
          </a>
          <a @click="onLangClickHandler('cn')">
            <span title="简体中文" class="yuyan lang-cn" />
          </a>
          <a @click="onLangClickHandler('id')">
            <span title="Bahasa" class="yuyan lang-my" />
          </a>
        </div>
        <div id="nowtime" class="text-right" style="width: 50%; float: left">
          GMT+8 2021-2-25 00:53:56
        </div>
      </div>
    </div>
    <AppMenu />
  </div>
</template>

<script setup lang="ts">
const { setLocale } = useI18n();

function onLangClickHandler(lang: "en" | "cn" | "id") {
  setLocale(lang);
}
</script>

<style scoped lang="scss">
.top {
  background: #d1ae8e;
  color: #404654;

  .topBox {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    height: 22px;
    line-height: 18px;
    position: relative;
    z-index: 1;

    div {
      font-size: 11px;
    }

    .yuyan {
      display: inline-block;
      vertical-align: top;
      width: 20px;
      height: 14px;
      cursor: pointer;
      margin: 4px 2px;

      &.lang-en {
        background-image: url("~/assets/images/lang_en.png");
      }

      &.lang-cn {
        background-image: url("~/assets/images/lang_cn.png");
      }

      &.lang-my {
        background-image: url("~/assets/images/lang_my.png");
      }
    }
  }
}
</style>
