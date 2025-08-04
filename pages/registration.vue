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
                      <h3 class="golden">{{ t("userRegister") }}</h3>

                      <div class="newregister" bis_skin_checked="1">
                        <form
                          id="registerform"
                          class="registerform"
                          method="POST"
                          @submit="onSubmitHandler"
                        >
                          <dl id="groupUsername">
                            <dt>Username :</dt>
                            <dd>
                              <input
                                id="registerform_UserName"
                                v-model="username"
                                v-bind="usernameProps"
                                class="trimVal alphanumeric"
                                type="text"
                                name="UserName"
                                :placeholder="t('username')"
                                pattern=".{5,15}"
                                maxlength="15"
                                required
                                title="Use 5 to 15 characters for username, username may contain only letters and numbers"
                              />
                              <div
                                id="registerform_UserNameMsg"
                                class="small"
                                bis_skin_checked="1"
                              />
                            </dd>
                          </dl>

                          <dl id="groupPassword">
                            <dt>Password :</dt>
                            <dd>
                              <input
                                id="registerform_Password"
                                v-model="password"
                                v-bind="passwordProps"
                                class="Password trimVal alphapwd"
                                type="password"
                                name="Password"
                                :placeholder="t('password')"
                                pattern=".{8,25}"
                                maxlength="25"
                                title="Use 8 or more characters with a mix of letters, numbers &amp; symbols"
                                required
                              />
                              <div
                                id="registerform_PasswordMsg"
                                class="small"
                                bis_skin_checked="1"
                              />
                            </dd>
                          </dl>

                          <dl id="groupComfirmPassword">
                            <dt>Confirm Password :</dt>
                            <dd>
                              <input
                                id="registerform_CPassword"
                                v-model="cPassword"
                                v-bind="cPasswordProps"
                                class="CPassword trimVal alphapwd"
                                type="password"
                                name="CPassword"
                                :placeholder="t('cPassword')"
                                pattern=".{8,25}"
                                maxlength="25"
                                required
                              />
                              <div
                                id="registerform_CPasswordMsg"
                                class="small"
                                bis_skin_checked="1"
                              />
                            </dd>
                          </dl>
                          <dl id="groupFullName">
                            <dt>Full Name :</dt>
                            <dd>
                              <input
                                id="registerform_FullName"
                                v-model="fullName"
                                v-bind="fullNameProps"
                                type="text"
                                name="FullName"
                                :placeholder="t('fullName')"
                                pattern=".{1,}"
                                title="Use 5 to 15 characters for Fullname"
                                required
                              />
                              <div
                                id="registerform_FullNameDescription"
                                class="small"
                                bis_skin_checked="1"
                              >
                                {{ t("withdrawalMsg") }}
                              </div>
                              <div
                                id="registerform_FullNameMsg"
                                class="small"
                                bis_skin_checked="1"
                              />
                            </dd>
                          </dl>
                          <dl id="groupCurrency">
                            <dt>Currency :</dt>
                            <dd>
                              <select
                                id="registerform_Currency"
                                v-model="currency"
                                v-bind="currencyProps"
                                name="Currency"
                                required
                                class="selCurrencyCountryCode"
                              >
                                <option value="">
                                  -- {{ t("selectCurrency") }} --
                                </option>
                                <option value="MYR">MYR</option>
                                <option value="SGD">SGD</option>
                                <option value="AUD">AUD</option>
                              </select>
                            </dd>
                          </dl>
                          <dl id="groupMobileNumber">
                            <dt>Mobile Number :</dt>
                            <dd>
                              <input
                                id="registerform_Mobile"
                                v-model="mobile"
                                v-bind="mobileProps"
                                class="numbers"
                                type="text"
                                name="Mobile"
                                :placeholder="t('phoneNo')"
                                minlength="8"
                              />
                            </dd>
                          </dl>
                          <dl id="groupAffiliate">
                            <dt>Affiliate :</dt>
                            <dd>
                              <input
                                id="registerform_PromotionCode"
                                v-model="promotionCode"
                                v-bind="promotionCodeProps"
                                type="text"
                                name="PromotionCode"
                                :placeholder="t('promotionCode')"
                              />
                            </dd>
                          </dl>
                          <dl id="groupVerifyCode">
                            <dt>VerifyCode :</dt>
                            <dd>
                              <input
                                id="registerform_varifycode"
                                v-model="varifyCode"
                                v-bind="varifyCodeProps"
                                class="numbers"
                                type="text"
                                name="VarifyCode"
                                :placeholder="t('verifyCode')"
                                pattern=".{4,4}"
                                title="Key In 4 number for Verify Code"
                                required
                              />
                            </dd>
                            <dd>
                              <img
                                id="regcaptcha"
                                style="cursor: pointer"
                                @click="onClickCaptcha"
                              />
                            </dd>
                          </dl>
                          <dl id="groupSubmit">
                            <dd>
                              <input
                                id="registerform_btnSubmit"
                                type="submit"
                                :value="t('registerNow')"
                              />
                            </dd>
                          </dl>
                        </form>
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
const route = useRoute();
const { defineField, handleSubmit } = useForm({
  initialValues: {
    username: null,
    password: null,
    cPassword: null,
    fullName: null,
    currency: "",
    mobile: null,
    promotionCode: route.params.id || null,
    varifyCode: null,
  },
});

const [username, usernameProps] = defineField("username");
const [password, passwordProps] = defineField("password");
const [cPassword, cPasswordProps] = defineField("cPassword");
const [fullName, fullNameProps] = defineField("fullName");
const [currency, currencyProps] = defineField("currency");
const [mobile, mobileProps] = defineField("mobile");
const [promotionCode, promotionCodeProps] = defineField("promotionCode");
const [varifyCode, varifyCodeProps] = defineField("varifyCode");

function onClickCaptcha() {
  const captcha = document.getElementById("regcaptcha");
  if (captcha) {
    (captcha as any).src = `/api/captcha?${Date.now()}`;
  }
}

const onSubmitHandler = handleSubmit(async (values) => {
  try {
    const res = await $fetch("/api/register", {
      method: "POST",
      body: values,
    });
    const json = JSON.parse(res);
    if (json.ErrorCode === 0) window.location.href = json.Redirect;
    else {
      if (json.ErrorCode === -9) alert("Username already exists.");
      else alert(json.Text || "Registration failed, please try again.");
      onClickCaptcha(); // Refresh captcha on error
    }
  } catch (err) {
    console.log(err);
    alert("An error occurred while register.");
    onClickCaptcha(); // Refresh captcha on error
  }
});

onMounted(() => {
  onClickCaptcha();
});
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

          h3.golden {
            font-size: 56px;
            line-height: 64px;
            font-family: "Galano-Bold", sans-serif;
            font-weight: 700;
            font-style: oblique;
            background-image: -webkit-linear-gradient(#e0c7ae 40%, #c2a884 70%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
    }
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

form#registerform {
  width: 76%;

  dl#groupVerifyCode dd {
    border: 0px solid red;
    display: inline-block;
    vertical-align: middle;
  }
}

form#registerform dl dt {
  display: none;
}

select#registerform_Currency {
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

.newregister input#registerform_btnSubmit {
  left: 0;
}
</style>
