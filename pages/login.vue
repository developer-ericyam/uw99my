<template>
  <div class="themetblrow" bis_skin_checked="1">
    <div id="theme-container" class="themetblcell" bis_skin_checked="1">
      <div id="theme-content" bis_skin_checked="1">
        <div id="theme-contain-login" bis_skin_checked="1">
          <div class="contaiBox sportBetMy uw88casino" bis_skin_checked="1">
            <div class="nrBox" style="padding-top: 50px" bis_skin_checked="1">
              <div class="flexBar" bis_skin_checked="1">
                <div
                  class="flexLeft"
                  style="width: 650px; left: -75px"
                  bis_skin_checked="1"
                >
                  <div class="tiyuImgs active" bis_skin_checked="1">
                    <div
                      class="zhenrenimgChose active"
                      style="z-index: 2"
                      bis_skin_checked="1"
                    >
                      <!-- <img
                        src="/data/1833/uploads/dice-1.png"
                        class="regDice1"
                      />
                      <img
                        src="/data/1833/uploads/dice-2.png"
                        class="regDice2"
                      />
                      <img
                        src="/data/1833/uploads/dice-3.png"
                        class="regDice3"
                      />
                      <img
                        src="/data/1833/uploads/dice-4.png"
                        class="regDice4"
                      /> -->
                    </div>
                    <img
                      src="~/assets/images/auth/uw99_sport_01_pattern.png"
                      class="registertop gymani1"
                    />
                    <img
                      src="~/assets/images/auth/uw99_casino_main1.webp"
                      class="registercenter gymani3"
                    />
                  </div>
                </div>
                <div
                  class="flexRight"
                  style="width: 45%; margin-top: 25px"
                  bis_skin_checked="1"
                >
                  <div class="gymTxtbar" bis_skin_checked="1">
                    <div class="gymChose active" bis_skin_checked="1">
                      <h3 class="golden-login">{{ t("userLogin") }}</h3>
                      <div class="login2" bis_skin_checked="1">
                        <div class="col-sm-6 logv2" bis_skin_checked="1">
                          <h3>v2</h3>
                          <form
                            id="customform"
                            class="customform"
                            method="POST"
                            @submit="onSubmit"
                          >
                            <dl>
                              <dd>
                                <input
                                  id="customform_UserName"
                                  v-model="username"
                                  type="text"
                                  name="UserName"
                                  :placeholder="t('username')"
                                  maxlength="15"
                                  required
                                />
                              </dd>
                            </dl>
                            <dl>
                              <dd>
                                <input
                                  id="customform_Password"
                                  v-model="password"
                                  type="password"
                                  name="Password"
                                  :placeholder="t('password')"
                                  required
                                />
                              </dd>
                            </dl>
                            <dl>
                              <dd>
                                <input
                                  id="customform_submit"
                                  type="submit"
                                  :value="t('login')"
                                />
                              </dd>
                            </dl>

                            <div id="customformmsg" bis_skin_checked="1" />
                          </form>

                          <div class="btnBottom" bis_skin_checked="1">
                            <NuxtLinkLocale to="/registration"
                              ><span>{{ t("register") }}</span></NuxtLinkLocale
                            >
                            |
                            <a
                              href="javascript:history.back()"
                              bis_skin_checked="1"
                              ><span>{{ t("skipForNow") }}</span></a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const username = ref(null);
const password = ref(null);

const onSubmit = async (e: Event) => {
  e.preventDefault();

  try {
    const res = await $fetch("/api/login", {
      method: "POST",
      body: {
        username: username.value,
        password: password.value,
      },
    });
    const json = JSON.parse(res);
    if (json.Login === 0) window.location.href = json.Redirect;
    else alert(json.Text || "Login failed, please try again.");
  } catch (err) {
    console.log(err);
    alert("An error occurred while logging in.");
  }
};
</script>

<style scoped lang="scss">
#theme-container {
  clear: both;
  position: relative;

  .sportBetMy {
    background-size: cover;
    background: url(~/assets/images/UW88_Background_1.png) top no-repeat;

    .nrBox {
      position: relative;
      width: 1200px;
      height: 854px;
      box-sizing: border-box;
      margin: auto;

      .flexBar {
        position: relative;
        display: flex;

        .flexLeft {
          width: 854px;
          height: 754px;
          position: relative;
          left: -70px;
        }

        .flexRight {
          width: 484px;
          position: relative;
          margin-top: 100px;

          h3.golden-login {
            text-transform: uppercase;
            font-size: 50px;
            line-height: 64px;
            font-family: galano-bold, sans-serif;
            font-weight: 700;
            font-style: oblique;
            background-image: -webkit-linear-gradient(#e0c7ae 40%, #c2a884 70%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            color: #d1b493;
            text-align: center;
          }
        }
      }
    }
  }

  dl {
    margin-bottom: 20px;
  }
}

.col-sm-6 {
  padding-right: 15px;
  padding-left: 15px;
  &.logv2 {
    width: 100%;

    h3 {
      font-size: 51px;
      text-align: center;
      color: #d1b493;
    }
  }
}

textarea,
input[type="text"],
input[type="password"] {
  border: 0px solid #333333;
  padding: 2px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-top: 15px;
  border-radius: 20px;
  box-shadow: inset 0 1px 15px 0 #fff;
  background-color: hsla(0, 0%, 100%, 0.5);
  outline: none;
  color: #333;
  font-size: 14px;
  font-family: DinProMedium;
  opacity: 0.9;
  overflow: hidden;
  padding-left: 15px;
}

.btnBottom {
  text-align: center;
  color: #000;
  margin-top: 80px;

  a {
    margin: 0 20px;
    color: #000;
    position: unset;
    background-image: unset;
    line-height: unset;
    display: unset;
    font-size: 15px;
  }
}

.tiyuImgs > img {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  max-width: fit-content;
}
.registertop {
  top: -45px;
  height: 250px;
}
.registercenter {
  top: 70px;
}
</style>
