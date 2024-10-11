const CertificateView = ({ data }) => {
  return (
    <>
      <div className="content">
        <div className="cert-bg">
          <img
            alt="bg"
            src="https://res.cloudinary.com/dbbhjznn3/image/upload/v1727628795/certificate/certificateBG_dcpjnm.png"
          />
        </div>
        <main>
          <section className="cert-section spectral-light">
            Registration No. : 03/27/01/22805/20
          </section>

          <section className="cert-section">
            <div className="text-xxl spectral-light">CERTIFICATE</div>
            <div className="appreciation">
              <div className="appreciation-left">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="text-md charmonman-bold">OF APPRECIATION</div>
              <div className="appreciation-right">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </section>

          <section className="cert-section">
            <div className="proudly">
              <div className="text-md spectral-light">
                THIS CERTIFICATE IS PROUDLY PRESENTED TO
              </div>
            </div>
            <div className="text-lg mt-08 spectral-regular">
              <div>{data.name}</div>
              <div className="name-underline"></div>
            </div>
            <div className="text-md mt-04 spectral-regular">
              working as{" "}
              <span className="spectral-bold">
                {data.position} - {data.location}
              </span>
            </div>
          </section>

          <section className="cert-section text-md spectral-regular">
            This Internship certificate is gratefully presented to{" "}
            <span className="spectral-bold">{data.name}</span> for their
            valuable contribution from{" "}
            <span className="spectral-bold">
              {data.fromDate} to {data.toDate}
            </span>{" "}
            in{" "}
            <span className="spectral-regular-italic">
              #werisebyliftingothers
            </span>{" "}
            with MIC Organisation India. Only with kind hearted and passionate
            persons like you we can serve and help many.
          </section>

          <section className="signature_logos cert-section kumbh-sans-regular">
            <div className="signature">
              <div>
                <img
                  src="https://res.cloudinary.com/dbbhjznn3/image/upload/v1727635148/certificate/SIG1_1_cv9wch.png"
                  width="100px"
                  alt="signature"
                />
              </div>
              <div id="sig1">
                <div className="mt-08">MR. RAJU TINNA</div>
                <div className="mt-04">(CHIEF ADVISOR)</div>
              </div>
            </div>
            <div className="logos">
              <div>
                <img
                  src="https://res.cloudinary.com/dbbhjznn3/image/upload/v1727631979/certificate/LOGO2_frenky.png"
                  width="150px"
                  alt="logo"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dbbhjznn3/image/upload/v1727631979/certificate/LOGO1_zykemu.png"
                  width="200px"
                  alt="logo"
                />
              </div>
            </div>
            <div className="signature">
              <div>
                <img
                  src="https://res.cloudinary.com/dbbhjznn3/image/upload/v1727635148/certificate/SIG2_1_wllaiq.png"
                  width="200px"
                  alt="signature"
                />
              </div>
              <div id="sig2">
                <div className="mt-08">MS. RUPANSHI SHRIVASTAVA</div>
                <div className="mt-04">(FOUNDER)</div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <style jsx>
        {`
          .content {
            --primary-color: #2c180dff;
            width: 1440px;
            height: 1018px;
            position: relative;
          }

          .cert-bg {
            position: absolute;
          }

          main {
            text-align: center;
            padding: 100px;
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
            font-size: 1rem;
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

          .spectral-extralight {
            font-family: "Spectral", serif;
            font-weight: 200;
            font-style: normal;
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

          .spectral-medium {
            font-family: "Spectral", serif;
            font-weight: 500;
            font-style: normal;
          }

          .spectral-semibold {
            font-family: "Spectral", serif;
            font-weight: 600;
            font-style: normal;
          }

          .spectral-bold {
            font-family: "Spectral", serif;
            font-weight: 700;
            font-style: normal;
          }

          .spectral-extrabold {
            font-family: "Spectral", serif;
            font-weight: 800;
            font-style: normal;
          }

          .spectral-extralight-italic {
            font-family: "Spectral", serif;
            font-weight: 200;
            font-style: italic;
          }

          .spectral-light-italic {
            font-family: "Spectral", serif;
            font-weight: 300;
            font-style: italic;
          }

          .spectral-regular-italic {
            font-family: "Spectral", serif;
            font-weight: 400;
            font-style: italic;
          }

          .spectral-medium-italic {
            font-family: "Spectral", serif;
            font-weight: 500;
            font-style: italic;
          }

          .spectral-semibold-italic {
            font-family: "Spectral", serif;
            font-weight: 600;
            font-style: italic;
          }

          .spectral-bold-italic {
            font-family: "Spectral", serif;
            font-weight: 700;
            font-style: italic;
          }

          .spectral-extrabold-italic {
            font-family: "Spectral", serif;
            font-weight: 800;
            font-style: italic;
          }

          .charmonman-regular {
            font-family: "Charmonman", cursive;
            font-weight: 400;
            font-style: normal;
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
            font-variation-settings: "YOPQ" 300;
          }

          .kumbh-sans-bold {
            font-family: "Kumbh Sans", sans-serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
            font-variation-settings: "YOPQ" 300;
          }

          .cert-section {
            margin-top: 2rem;
          }

          .mt-08 {
            margin-top: 0.8rem;
          }

          .mt-04 {
            margin-top: 0.4rem;
          }

          .proudly > div {
            padding: 0.2rem 1rem;
            border: 1px solid #2c180dff;
          }

          .proudly {
            margin: 2rem auto;
            width: fit-content;
            position: relative;
          }

          .proudly::before {
            content: "";
            position: absolute;
            top: 0px;
            left: -30px;
            width: 1.6rem;
            height: 100%;
            border-radius: 1.6rem 0% 0% 1.6rem;
            background-color: #2c180dff;
          }

          .proudly::after {
            content: "";
            position: absolute;
            top: 0px;
            right: -30px;
            width: 1.6rem;
            height: 100%;
            border-radius: 0% 1.6rem 1.6rem 0%;
            background-color: var(--primary-color);
          }

          .name-underline {
            border: 0.01rem solid grey;
            width: 400px;
            margin: auto;
          }

          .appreciation {
            display: flex;
            items-center: center;
            width: fit-content;
            margin: auto;
          }

          .appreciation-left {
            margin-top: 0.3rem;
            margin-right: 0.8rem;
          }

          .appreciation-left > div:nth-child(odd) {
            margin-left: 40px;
            border-bottom: 0.01px solid var(--primary-color);
            margin-top: 5px;
            width: 50px;
          }

          .appreciation-left > div:nth-child(even) {
            margin-right: 10px;
            border-bottom: 0.01px solid var(--primary-color);
            margin-top: 5px;
            width: 80px;
          }

          .appreciation-right {
            margin-top: 0.3rem;
            margin-left: 0.8rem;
          }

          .appreciation-right > div:nth-child(odd) {
            margin-right: 40px;
            border-bottom: 0.01px solid var(--primary-color);
            margin-top: 5px;
            width: 50px;
          }

          .appreciation-right > div:nth-child(even) {
            margin-left: 10px;
            border-bottom: 0.01px solid var(--primary-color);
            margin-top: 5px;
            width: 80px;
          }

          .signature_logos {
            margin-top: 2rem;
          }

          .signature {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .signature > div > img {
            display: block;
            margin: auto;
          }
        `}
      </style>
    </>
  );
};

export default CertificateView;
