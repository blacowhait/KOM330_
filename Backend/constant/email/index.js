const staticBaseUrl = process.env.EMAIL_STATIC_URL

exports.VERIFY = (verify_url, name) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <title>Verifikasi Email</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            font-family: "Inter", sans-serif;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
          }
          .brand {
            font-size: 20px;
            font-weight: bold;
            color: white;
          }
          .title {
            font-size: 22px;
            font-weight: bold;
            color: #F8A94A;
            margin-top: 50px;
          }
          .desc {
            font-size: 17px;
            font-weight: normal;
            color:  rgba(255, 255, 255, 0.8);
            margin: 30px 0;
          }
          .item-center {
            align-items: center;
            text-align: start;
          }
          .d-flex {
            display: flex;
            justify-content: start !important;
            -webkit-justify-content: start !important;
          }
          .d-flex2 {
            display: flex;
            justify-content: space-between !important;
            -webkit-justify-content: space-between !important;
          }
          .brand-img {
            width: 60px;
            height: 60px;
          }
          .vertical-center {
            margin-top: auto;
            margin-bottom: auto;
          }
          .horizontal-center {
            margin-left: auto;
            margin-right: auto;
          }
          .blue-btn {
            background: linear-gradient(180deg, #F47D4B 0%, #F26327 100%);
            color: white !important;
            border-radius: 12px;
            text-decoration: none;
            padding: 14px 32px;
            display: inline-block;
            box-shadow: 0px 8px 25px rgba(17, 17, 68, 0.12);
            text-align: start;
            -webkit-tap-highlight-color: transparent;
          }
          .footer-bg {
            background: #200723;
            margin-top: 20px;
          }
          .icon-width {
            width: 35px;
            height: 35px;
          }
          .web-name {
            font-size: 17px;
            font-weight: normal;
            color: #333333 !important;
            text-decoration: none;
            -webkit-tap-highlight-color: transparent;
            display: flex;
          }
          .icon-margin {
            margin: 0 10px;
            color: unset;
          }
          main {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .footer-width {
            padding: 30px 0;
            display: block;
          }
          .content {
            padding: 0;
          }
          .margin-left {
            margin-left: 15px;
          }
          .container {
            height: 100vh;
            position: relative;
            background: #28092C;
          }
          .web {
            color: rgba(255, 255, 255, 0.8);
          }
          .center {
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            width: 100%;
          }
          @media screen and (min-width: 768px) {
            .content,
            .footer-width {
              max-width: 600px;
              margin: 0 auto;
            }
          }
          @media screen and (max-width: 768px) {
            .content {
              padding: 0 20px;
            }
            .footer-width {
              padding: 30px 20px;
              display: block;
            }
            .footer-flex {
              margin-top: 20px;
            }
          }
          .mt-2 {
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="center">
            <div class="content">
              <div class="d-flex">
                <img src="${staticBaseUrl}/email/logo-psn.png" alt="logo PSN 2022" class="brand-img" />
                <h3 class="brand vertical-center">PSN 2022</h3>
              </div>
              <h3 class="title item-center">Verifikasi Email</h3>
              <p class="desc item-center">Hai ${name}, terima kasih telah mendaftar akun di Pesta Sains Nasional 2022. Kamu dapat melakukan verifikasi email dengan menekan tombol di bawah</p>
              <div class="d-flex" style="margin-bottom: 50px">
                <a href="${verify_url}" class="blue-btn" target="_blank" rel="noopener">Verifikasi Email</a>
              </div>
            </div>

            <footer class="footer-bg">
              <div class="footer-width">
                <div>
                  <a href="http://pestasains.ipb.ac.id/" target="_blank" rel="noopener" class="web-name">
                    <img src="${staticBaseUrl}/email/logo-web.png" alt="web icon" class="icon-width" />
                    <p class="vertical-center margin-left web">pestasains.ipb.ac.id</p>
                  </a>
                </div>
                <div class="mt-2">
                  <a href="https://www.instagram.com/pestasainsipb/" target="_blank" rel="noopener" class="icon-margin" style="margin-left: 0">
                    <img src="${staticBaseUrl}/email/logo-ig.png" alt="instagram icon" class="icon-width" />
                  </a>
                  <a href="https://twitter.com/pestasainsIPB" target="_blank" rel="noopener" class="icon-margin">
                    <img src="${staticBaseUrl}/email/logo-twitter.png" alt="twitter icon" class="icon-width" />
                  </a>
                  <a href="http://line.me/R/ti/p/@455hhzcc" target="_blank" rel="noopener" class="icon-margin">
                    <img src="${staticBaseUrl}/email/logo-line.png" alt="line icon" class="icon-width" />
                  </a>
                  <a href="http://ipb.link/tiktoknyapsn" target="_blank" rel="noopener" class="icon-margin">
                    <img src="${staticBaseUrl}/email/logo-tiktok.png" alt="tiktok icon" class="icon-width" />
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
`
}

exports.FORGOT_PASSWORD = (forgot_url, name) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <title>Atur Ulang Kata Sandi</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            font-family: "Inter", sans-serif;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
          }
          .brand {
            font-size: 20px;
            font-weight: bold;
            color: white;
          }
          .title {
            font-size: 22px;
            font-weight: bold;
            color: #F8A94A;
            margin-top: 50px;
          }
          .desc {
            font-size: 17px;
            font-weight: normal;
            color:  rgba(255, 255, 255, 0.8);
            margin: 30px 0;
          }
          .item-center {
            align-items: center;
            text-align: start;
          }
          .d-flex {
            display: flex;
            justify-content: start !important;
            -webkit-justify-content: start !important;
          }
          .d-flex2 {
            display: flex;
            justify-content: space-between !important;
            -webkit-justify-content: space-between !important;
          }
          .brand-img {
            width: 60px;
            height: 60px;
          }
          .vertical-center {
            margin-top: auto;
            margin-bottom: auto;
          }
          .horizontal-center {
            margin-left: auto;
            margin-right: auto;
          }
          .blue-btn {
            background: linear-gradient(180deg, #F47D4B 0%, #F26327 100%);
            color: white !important;
            border-radius: 12px;
            text-decoration: none;
            padding: 14px 32px;
            display: inline-block;
            box-shadow: 0px 8px 25px rgba(17, 17, 68, 0.12);
            text-align: start;
            -webkit-tap-highlight-color: transparent;
          }
          .footer-bg {
            background: #200723;
            margin-top: 20px;
          }
          .icon-width {
            width: 35px;
            height: 35px;
          }
          .web-name {
            font-size: 17px;
            font-weight: normal;
            color: #333333 !important;
            text-decoration: none;
            -webkit-tap-highlight-color: transparent;
            display: flex;
          }
          .icon-margin {
            margin: 0 10px;
            color: unset;
          }
          main {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .footer-width {
            padding: 30px 0;
            display: block;
          }
          .content {
            padding: 0;
          }
          .margin-left {
            margin-left: 15px;
          }
          .container {
            height: 100vh;
            position: relative;
            background: #28092C;
          }
          .web {
            color: rgba(255, 255, 255, 0.8);
          }
          .center {
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            width: 100%;
          }
          @media screen and (min-width: 768px) {
            .content,
            .footer-width {
              max-width: 600px;
              margin: 0 auto;
            }
          }
          @media screen and (max-width: 768px) {
            .content {
              padding: 0 20px;
            }
            .footer-width {
              padding: 30px 20px;
              display: block;
            }
            .footer-flex {
              margin-top: 20px;
            }
          }
          .mt-2 {
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="center">
            <div class="content">
              <div class="d-flex">
                <img src="${staticBaseUrl}/email/logo-psn.png" alt="logo PSN 2022" class="brand-img" />
                <h3 class="brand vertical-center">PSN 2022</h3>
              </div>
              <h3 class="title item-center">Atur Ulang Kata Sandi</h3>
              <p class="desc item-center">Hai ${name}, lupa kata sandi? silahkan tekan tombol di bawah</p>
              <div class="d-flex">
                <a href="${forgot_url}" class="blue-btn" target="_blank" rel="noopener">Atur Ulang Kata Sandi</a>
              </div>
              <p class="desc item-center" style="margin-bottom: 50px">Jika kamu tidak ingin mengatur ulang kata sandi, abaikan saja email ini dan tidak akan ada yang berubah.</p>
            </div>

            <footer class="footer-bg">
              <div class="footer-width">
                <div>
                  <a href="http://pestasains.ipb.ac.id/" target="_blank" rel="noopener" class="web-name">
                    <img src="${staticBaseUrl}/email/logo-web.png" alt="web icon" class="icon-width" />
                    <p class="vertical-center margin-left web">pestasains.ipb.ac.id</p>
                  </a>
                </div>
                <div class="mt-2">
                  <a href="https://www.instagram.com/pestasainsipb/" target="_blank" rel="noopener" class="icon-margin" style="margin-left: 0">
                    <img src="${staticBaseUrl}/email/logo-ig.png" alt="instagram icon" class="icon-width" />
                  </a>
                  <a href="https://twitter.com/pestasainsIPB" target="_blank" rel="noopener" class="icon-margin">
                    <img src="${staticBaseUrl}/email/logo-twitter.png" alt="twitter icon" class="icon-width" />
                  </a>
                  <a href="http://line.me/R/ti/p/@455hhzcc" target="_blank" rel="noopener" class="icon-margin">
                    <img src="${staticBaseUrl}/email/logo-line.png" alt="line icon" class="icon-width" />
                  </a>
                  <a href="http://ipb.link/tiktoknyapsn" target="_blank" rel="noopener" class="icon-margin">
                    <img src="${staticBaseUrl}/email/logo-tiktok.png" alt="tiktok icon" class="icon-width" />
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
    `
}