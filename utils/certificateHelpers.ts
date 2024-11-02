const getCertificateTemplate = () => {
  // Load HTML content for the report
  const certificate = `
<!DOCTYPE html>
<html>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Charmonman:wght@400;700&family=Kumbh+Sans:wght@100..900&family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary-color: #2c180dff;
    }
    
    html { font-size: 12px; }

    body {
      margin: 100px 120px;
      background-image:url("https://c01uczkfapwnlbwv.public.blob.vercel-storage.com/certificateBG_dcpjnm-If3wlZHyFJkRXVyXF86Dm7KLnmd5j3.png");
      background-size:cover;
      background-repeat:no-repeat;
    }

    main {
      text-align: center;
    }

    .text-xxl {
      font-size: 4rem;
    }

    .text-xl {
      font-size: 3.2rem;
    }

    .text-lg {
      font-size: 2.4rem;
    }

    .text-md {
      font-size: 1.6rem;
    }

    .text-base {
      font-size: 1.6rem;
    }

    .signature_logos {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .logos {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      text-align: center;
    }

    .spectral-light {
      font-family: "Spectral", serif;
      font-weight: 300;
      font-style: normal;
    }

    .spectral-regular {
      font-family: "Spectral", serif;
      font-weight: 400;
      font-style: normal;
    }

    .spectral-bold {
      font-family: "Spectral", serif;
      font-weight: 700;
      font-style: normal;
    }

    .spectral-regular-italic {
      font-family: "Spectral", serif;
      font-weight: 400;
      font-style: italic;
    }

    .charmonman-bold {
      font-family: "Charmonman", cursive;
      font-weight: 700;
      font-style: normal;
    }

    .kumbh-sans-regular {
      font-family: "Kumbh Sans", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
      font-variation-settings:"YOPQ" 300;
    }

    .cert-section {
      margin-top: 2rem;
    }

    .mt-08 {
      margin-top: .8rem;
    }

    .mt-04 {
      margin-top: .4rem;
    }

    .proudly>div {
      padding: .2rem 1rem;
      border: 1px solid #2c180dff;
    }

    .proudly {
      margin: 4rem auto 2rem auto;
      width: fit-content;
      position: relative;
    }

    .proudly::before {
      content: "";
      position: absolute;
      top: 0px;
      left: -25px;
      width: 1.6rem;
      height: 100%;
      border-radius: 1.6rem 0% 0% 1.6rem;
      background-color: #2c180dff;
    }

    .proudly::after {
      content: "";
      position: absolute;
      top: 0px;
      right: -25px;
      width: 1.6rem;
      height: 100%;
      border-radius: 0% 1.6rem 1.6rem 0%;
      background-color: var(--primary-color);
    }

    .name-underline {
      border: .01rem solid grey;
      width: 400px;
      margin: auto;
    }

    .appreciation {
      display: flex;
      width: fit-content;
      margin: auto;
    }

    .appreciation-left {
      margin-top: .3rem;
      margin-right: .8rem;
    }

    .appreciation-left>div:nth-child(odd) {
      margin-left: 40px;
      border-bottom: .01px solid var(--primary-color);
      margin-top: 5px;
      width: 50px;
    }

    .appreciation-left>div:nth-child(even) {
      margin-right: 10px;
      border-bottom: .01px solid var(--primary-color);
      margin-top: 5px;
      width: 80px;
    }

    .appreciation-right {
      margin-top: .3rem;
      margin-left: .8rem;
    }

    .appreciation-right>div:nth-child(odd) {
      margin-right: 40px;
      border-bottom: .01px solid var(--primary-color);
      margin-top: 5px;
      width: 50px;
    }

    .appreciation-right>div:nth-child(even) {
      margin-left: 10px;
      border-bottom: .01px solid var(--primary-color);
      margin-top: 5px;
      width: 80px;
    }

    .signature_logos{
      margin-top:2rem;
    }
    
    .signature{
      position:relative;
      display:flex;
      flex-direction:column;
      justify-content:center;
    }
    
    .signature > #sig1{
      margin-top:-20px;
    }
    
    .signature > #sig2{
      margin-top:-20px;
    }

  </style>
</head>

<body>
  <main>
    <section class="cert-section">Registration No. : 03/27/01/22805/20</section>

    <section class="cert-section">
      <div class="text-xxl spectral-light">CERTIFICATE</div>
      <div class="appreciation">
        <div class="appreciation-left">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="text-md charmonman-bold">OF APPRECIATION</div>
        <div class="appreciation-right">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>

    <section class="cert-section">
      <div class="proudly">
        <div class="text-md spectral-light">THIS CERTIFICATE IS PROUDLY PRESENTED TO</div>
      </div>
      <div class="text-lg mt-08 spectral-regular">
        <div> <%= name %> </div>
        <div class="name-underline"></div>
      </div>
      <div class="text-base mt-04 spectral-regular">working as <span class="spectral-bold"> <%= position %> - <%= location %> </span></div>
    </section>

    <% if(position === "Social Intern") { %>
      <section class="cert-section text-base spectral-regular">This Internship certificate is gratefully presented to <span class="spectral-bold"><%= name %></span> for their valuable contribution from <span class="spectral-bold"><%= from %> to <%= to %></span> in <span class="spectral-regular-italic">#werisebyliftingothers</span> with MIC Organisation India. Only with kind hearted and passionate persons like you we can serve and help many.</section>
    <% } else { %>
      <section class="cert-section text-base spectral-regular">This certificate is gratefully presented to <span class="spectral-bold"><%= name %></span> for their valuable contribution from <span class="spectral-bold"><%= from %> to <%= to %></span> in <span class="spectral-regular-italic">#werisebyliftingothers</span> with MIC Organisation India. Only with kind hearted and passionate persons like you we can serve and help many.</section>
    <% } %>
    <section class="cert-section signature_logos kumbh-sans-regular">
      <div class="signature">
        <div ><img src="https://c01uczkfapwnlbwv.public.blob.vercel-storage.com/SIG1_1_cv9wch-dVWBzEF4VIBkaqAvog4myv9XnavMSg.png" width="60px"/></div>
        <div id="sig1">
          <div class="mt-08">MR. RAJU TINNA</div>
          <div class="mt-04">(CHIEF ADVISOR)</div>
        </div>
      </div>
      <div class="logos">
        <div>
          <img src="https://c01uczkfapwnlbwv.public.blob.vercel-storage.com/LOGO2_frenky-6xoroC4Uik8wcrwZy6imnLt803WdeY.png" width='120px'/>
        </div>
        <div>
           <img src="https://c01uczkfapwnlbwv.public.blob.vercel-storage.com/LOGO1_zykemu-tLfxr2xsCqN4hP6cF78IMrLJ3jWpAH.png" width='170px'/>
        </div>
      </div>
      <div class="signature">
        <div><img src="https://c01uczkfapwnlbwv.public.blob.vercel-storage.com/SIG2_1_wllaiq-qjGnXa06XUgmeK5a8vnI9V1ArjoNfb.png" width="120px"/></div>
        <div id="sig2">
          <div class="mt-08">MS. RUPANSHI SHRIVASTAVA</div>
          <div class="mt-04">(FOUNDER)</div>
        </div>
      </div>
    </section>
  </main>
</body>

</html>
`;

  return certificate;
};

const formatDateForCertificate = (date: Date) => {
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  } as Intl.DateTimeFormatOptions;
  return date.toLocaleDateString("en-US", options);
};

const certificateHelpers = {
  formatDateForCertificate,
  getCertificateTemplate,
};

export default certificateHelpers;
