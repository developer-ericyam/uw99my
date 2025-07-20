<template>
  <div class="serviceBox">
    <div class="titleCell">
      <h2>Best Service</h2>
      <p>Dedicated to provide you with the best quality service</p>
    </div>
    <div class="serviceList">
      <ul>
        <li class="active">
          <div class="circle">
            <div class="circleBox"><span id="myTargetElement1">60</span>s</div>
            <div class="aniCricle">
              <div class="line1" />
              <div class="line2" />
            </div>
          </div>
          <p>AVERAGE TIME OF DEPOSIT</p>
        </li>
        <li class="active">
          <div class="circle">
            <div class="circleBox"><span id="myTargetElement2">80</span>s</div>
            <div class="aniCricle">
              <div class="line1" />
              <div class="line3" />
            </div>
          </div>
          <p>PAYMENT PLATFORM PARTNERS</p>
        </li>
        <li class="active">
          <div class="circle">
            <div class="circleBox"><span id="myTargetElement3">90</span>s</div>
            <div class="aniCricle">
              <div class="line1" />
              <div class="line3" />
            </div>
          </div>
          <p>AVERAGE TIME OF WITHDRAW</p>
        </li>
        <li class="active">
          <div class="circle">
            <div class="circleBox"><span id="myTargetElement4">22</span>s</div>
            <div class="aniCricle">
              <div class="line1" />
              <div class="line4" />
            </div>
          </div>
          <p>GAMING PROVIDER PARTNERS</p>
        </li>
      </ul>
      <dl>
        <dt>
          <img src="~/assets/images/services/icon-fast-payment@2x.png" />
          <div class="serviceTxt">
            <h2>Fast deposit and withdrawal</h2>
            <p>
              The latest technology processing system can really make deposits
              quickly and quickly.
            </p>
          </div>
        </dt>
        <dt>
          <img src="~/assets/images/services/image_686Z.png" />
          <div class="serviceTxt">
            <h2>Massive game types</h2>
            <p>
              A variety of entertainment options such as live action, lottery,
              electronic games, etc., give you a perfect gaming experience.
            </p>
          </div>
        </dt>
        <dt>
          <img src="~/assets/images/services/image_355Z.png" />
          <div class="serviceTxt">
            <h2>Multiple devices</h2>
            <p>
              Enjoy Website, iOS, Android, allowing you to entertain and bet
              whatever you want, anytime, anywhere!
            </p>
          </div>
        </dt>
        <dt>
          <img src="~/assets/images/services/image_853Z.png" />
          <div class="serviceTxt">
            <h2>24 Hours Customer Services</h2>
            <p>
              7x24 hours online customer service provides the most intimate and
              quality service.
            </p>
          </div>
        </dt>
      </dl>
    </div>
  </div>
</template>

<style scoped lang="scss">
.serviceBox {
  margin-top: 140px;
  .serviceList {
    padding: 50px 0;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        text-align: center;
        .circle {
          position: relative;
          width: 130px;
          height: 130px;
          margin: 0 auto;
          text-align: center;
          font-size: 14px;
          color: #fff;
          background-image: url(~/assets/images/services/image-table@2x.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          .circleBox {
            position: relative;
            height: 100%;
            line-height: 120px;
            span {
              font-size: 24px;
            }
          }
          .aniCricle {
            width: 90px;
            height: 90px;
            position: absolute;
            left: 20px;
            top: 20px;
            background: url(~/assets/images/services/image-scale-active@2x.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }

        p:last-child {
          width: 128px;
          line-height: 1.4;
          margin: 10px auto;
          font-size: 12px;
          color: #636363;
          font-weight: normal;
        }
      }
    }

    dl {
      position: relative;
      overflow: hidden;
      margin-top: 40px;
      margin-bottom: 20px;
      dt {
        float: left;
        position: relative;
        display: flex;
        align-items: center;
        width: 540px;
        margin-bottom: 30px;
        font-weight: 700;
        line-height: 1.42857143;
        img {
          width: 107px;
          height: 107px;
        }
        .serviceTxt {
          position: relative;
          margin-left: 10px;
          flex: 1;
          h2 {
            font-weight: 700;
            font-size: 16px;
            color: #414755;
          }
          p {
            line-height: 1.6;
            margin-top: 10px;
            font-size: 14px;
            color: #636363;
          }
        }
      }
    }
  }
}

.line1 {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0px;
  background-image: url(~/assets/images/services/image-scale-default-all.png);
  background-repeat: no-repeat;
  background-size: 90px 90px;
  z-index: 1;
  left: 0px;
  transform-origin: right center;
  transform: rotate(-4deg);
  overflow: hidden;
  background-position: 0px 100%;
}

.line2 {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0px;
  background-image: url(~/assets/images/services/image-scale-default-all.png);
  background-repeat: no-repeat;
  background-size: 90px 90px;
  z-index: 1;
  right: 0px;
  transform: rotate(-139deg);
  transform-origin: 0px 50%;
  overflow: hidden;
  background-position: -45px 100%;
}

.line3 {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0px;
  background-image: url(~/assets/images/services/image-scale-default-all.png);
  background-repeat: no-repeat;
  background-size: 90px 90px;
  z-index: 1;
  right: 0px;
  animation-iteration-count: 1;
  transform: rotate(-180deg);
  transform-origin: 0px 50%;
  overflow: hidden;
  background-position: -45px 100%;
}

.line4 {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0px;
  background-image: url(~/assets/images/services/image-scale-default-all.png);
  background-repeat: no-repeat;
  background-size: 90px 90px;
  z-index: 1;
  right: 0px;
  animation-iteration-count: 1;
  transform: rotate(-120deg);
  transform-origin: 0px 50%;
  overflow: hidden;
  background-position: -45px 100%;
}
</style>
