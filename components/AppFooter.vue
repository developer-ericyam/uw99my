<template>
  <div class="themetblrow">
    <div id="theme-footer" class="themetblcell">
      <footer>
        <div class="footer">
          <div class="footerBox">
            <div class="footerLink">
              <ul>
                <li style="width: 90px; height: 50px">
                  <div class="linkIcon"></div>
                  <div class="linkIconcur"></div>
                </li>
                <li style="width: 95px; height: 50px">
                  <div class="linkIcon"></div>
                  <div class="linkIconcur"></div>
                </li>
                <li style="width: 75px; height: 50px">
                  <div class="linkIcon"></div>
                  <div class="linkIconcur"></div>
                </li>
                <li style="width: 75px; height: 50px">
                  <div class="linkIcon"></div>
                  <div class="linkIconcur"></div>
                </li>
                <li style="width: 105px; height: 50px">
                  <div class="linkIcon"></div>
                  <div class="linkIconcur"></div>
                </li>
                <li style="width: 75px; height: 50px">
                  <div class="linkIcon"></div>
                  <div class="linkIconcur"></div>
                </li>
                <li style="width: 100px; height: 50px">
                  <div class="linkIcon"></div>
                  <div class="linkIconcur"></div>
                </li>
                <li style="width: 80px; height: 50px">
                  <div class="linkIcon"></div>
                  <div class="linkIconcur"></div>
                </li>
                <li style="width: 80px; height: 50px">
                  <div class="linkIcon"></div>
                  <div class="linkIconcur"></div>
                </li>
                <li style="width: 80px; height: 50px">
                  <div class="linkIcon"></div>
                  <div class="linkIconcur"></div>
                </li>
              </ul>
            </div>
            <div class="footerTxt">
              <div class="footcol">
                <h4 class="footerDarkText">
                  {{ t("footerServiceAdvantage") }}
                </h4>
                <div class="footerRow">
                  <div class="footerCol-50">
                    <span class="footerHighlight footerDarkText">{{
                      t("deposit")
                    }}</span>
                    <span class="footerNormalCase">{{ t("averageTime") }}</span>
                  </div>
                  <div class="footerCol-50 childInline">
                    <span class="footerHighlight">60</span
                    ><span>{{ t("second") }}</span>
                  </div>
                </div>
                <div class="footerRow">
                  <div class="footerCol-50">
                    <span class="footerHighlight footerDarkText">
                      {{ t("withdrawal") }}
                    </span>
                    <span class="footerNormalCase">{{ t("averageTime") }}</span>
                  </div>
                  <div class="footerCol-50 childInline">
                    <span class="footerHighlight">90</span
                    ><span>{{ t("second") }}</span>
                  </div>
                </div>
                <div class="footerRow">
                  <div class="footerCol-50">
                    <span class="footerHighlight footerDarkText">{{
                      t("onlineUser")
                    }}</span>
                  </div>
                  <div class="footerCol-50">
                    <span class="footerHighlight">162,544</span
                    ><span>{{ t("person") }}/{{ t("perHour") }}</span>
                  </div>
                </div>
              </div>
              <div class="footcol">
                <h4 class="footerDarkText">{{ t("footerContactUs") }}</h4>
                <div class="footerRow">
                  <div class="footerIcon">
                    <img src="~/assets/images/contact/uw88_wechat_logo.png" />
                  </div>
                  <div class="footerCol-50">
                    <span class="footerHighlight footerDarkText">{{
                      t("wechat")
                    }}</span>
                    <span>csuw88</span>
                  </div>
                </div>

                <div class="footerRow">
                  <div class="footerIcon">
                    <img src="~/assets/images/contact/uw88_telegram_logo.png" />
                    <img src="~/assets/images/contact/uw88_line_logo.png" />
                  </div>
                  <div class="footerCol-50">
                    <span class="footerHighlight footerDarkText"
                      >TELEGRAM &amp; LINE</span
                    >
                    <span class="footerNormalCase"
                      >Malaysia: +60115-677 4135</span
                    >
                  </div>
                </div>
              </div>
              <div class="footcol">
                <h4 class="footerDarkText">{{ t("footerBrandAdvantage") }}</h4>
                <div class="footerRow">
                  <div class="footerCol-50">
                    <span class="footerHighlight footerDarkText">{{
                      t("deposit")
                    }}</span>
                    <span class="footerNormalCase">{{
                      t("depositMessage")
                    }}</span>
                    <div class="childInline">
                      <span>{{ t("min") }}:</span>
                      <span class="footerHighlight"> 50 | 5</span>
                      <span>{{ t("mins") }}</span>
                    </div>
                  </div>
                </div>
                <div class="footerRow">
                  <div class="footerCol-50">
                    <span class="footerHighlight footerDarkText">{{
                      t("withdrawal")
                    }}</span>
                    <span class="footerNormalCase">{{
                      t("onlineTransfer")
                    }}</span>
                    <div class="childInline">
                      <span>{{ t("min") }}:</span>
                      <span class="footerHighlight"> 50 | </span>
                      <span>{{ t("max") }}:</span>
                      <span class="footerHighlight">
                        {{ t("unlimited") }} | 15</span
                      >
                      <span>{{ t("mins") }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="copyRight">
              COPYRIGHT © 2020 UW99 All RIGHTS RESERVED
            </div>
          </div>
        </div>
      </footer>
    </div>
    <div id="m-footer" class="themetblcell hidden">
      <h2>Sorry,Page Not Found.</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
