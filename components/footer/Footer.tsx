import BackToTop from "$store/components/footer/BackToTop.tsx";
import ColorClasses from "$store/components/footer/ColorClasses.tsx";
import Divider from "$store/components/footer/Divider.tsx";
import ExtraLinks from "$store/components/footer/ExtraLinks.tsx";
import FooterItems from "$store/components/footer/FooterItems.tsx";
import Logo from "$store/components/footer/Logo.tsx";
import MobileApps from "$store/components/footer/MobileApps.tsx";
import PaymentMethods from "$store/components/footer/PaymentMethods.tsx";
import RegionSelector from "$store/components/footer/RegionSelector.tsx";
import Social from "$store/components/footer/Social.tsx";
import Newsletter from "$store/islands/Newsletter.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import PoweredByDeco from "apps/website/components/PoweredByDeco.tsx";

export type Item = {
  label: string;
  href: string;
};

export type Section = {
  label: string;
  items: Item[];
};

export interface SocialItem {
  label:
    | "Discord"
    | "Facebook"
    | "Instagram"
    | "Linkedin"
    | "Tiktok"
    | "Twitter";
  link: string;
}

export interface PaymentItem {
  label: "Diners" | "Elo" | "Mastercard" | "Pix" | "Visa";
}

export interface MobileApps {
  /** @description Link to the app */
  apple?: string;
  /** @description Link to the app */
  android?: string;
}

export interface RegionOptions {
  currency?: Item[];
  language?: Item[];
}

export interface NewsletterForm {
  placeholder?: string;
  buttonText?: string;
  /** @format html */
  helpText?: string;
}

export interface Layout {
  backgroundColor?:
    | "Primary"
    | "Secondary"
    | "Accent"
    | "Base 100"
    | "Base 100 inverted";
  variation?:
    | "Variation 1"
    | "Variation 2"
    | "Variation 3"
    | "Variation 4"
    | "Variation 5";
  hide?: {
    logo?: boolean;
    newsletter?: boolean;
    sectionLinks?: boolean;
    socialLinks?: boolean;
    paymentMethods?: boolean;
    mobileApps?: boolean;
    regionOptions?: boolean;
    extraLinks?: boolean;
    backToTheTop?: boolean;
  };
}

export interface Props {
  logo?: {
    image: ImageWidget;
    description?: string;
  };
  newsletter?: {
    title?: string;
    /** @format textarea */
    description?: string;
    form?: NewsletterForm;
  };
  sections?: Section[];
  social?: {
    title?: string;
    items: SocialItem[];
  };
  payments?: {
    title?: string;
    items: PaymentItem[];
  };
  mobileApps?: MobileApps;
  regionOptions?: RegionOptions;
  extraLinks?: Item[];
  backToTheTop?: {
    text?: string;
  };
  layout?: Layout;
}

function Footer({
  logo,
  newsletter = {
    title: "Newsletter",
    description: "",
    form: { placeholder: "", buttonText: "", helpText: "" },
  },
  sections = [{
    "label": "Atendimento",
    "items": [
      {
        "href": "/centraldeatendimento",
        "label": "Central de atendimento",
      },
      {
        "href": "/whatsapp",
        "label": "Fale conosco pelo WhatsApp",
      },
      {
        "href": "/trocaedevolucao",
        "label": "Troca e devolução",
      },
    ],
  }, {
    "label": "Institucional",
    "items": [
      {
        "href": "/quem-somos",
        "label": "Quem somos",
      },
      {
        "href": "/termos-de-uso",
        "label": "Termos de uso",
      },
      {
        "href": "/trabalhe-conosco",
        "label": "Trabalhe conosco",
      },
    ],
  }],
  social = {
    title: "Redes sociais",
    items: [{ label: "Instagram", link: "/" }, { label: "Tiktok", link: "/" }],
  },
  payments = {
    title: "Formas de pagamento",
    items: [{ label: "Mastercard" }, { label: "Visa" }, { label: "Pix" }],
  },
  mobileApps = { apple: "/", android: "/" },
  regionOptions = { currency: [], language: [] },
  extraLinks = [],
  backToTheTop,
  layout = {
    backgroundColor: "Primary",
    variation: "Variation 1",
    hide: {
      logo: false,
      newsletter: false,
      sectionLinks: false,
      socialLinks: false,
      paymentMethods: false,
      mobileApps: false,
      regionOptions: false,
      extraLinks: false,
      backToTheTop: false,
    },
  },
}: Props) {
  const _logo = layout?.hide?.logo ? <></> : <Logo logo={logo} />;
  const _newsletter = layout?.hide?.newsletter ? <></> : (
    <Newsletter
      content={newsletter}
      layout={{
        tiled: layout?.variation == "Variation 4" ||
          layout?.variation == "Variation 5",
      }}
    />
  );
  const _sectionLinks = layout?.hide?.sectionLinks ? <></> : (
    <FooterItems
      sections={sections}
      justify={layout?.variation == "Variation 2" ||
        layout?.variation == "Variation 3"}
    />
  );
  const _social = layout?.hide?.socialLinks
    ? <></>
    : <Social content={social} vertical={layout?.variation == "Variation 3"} />;
  const _payments = layout?.hide?.paymentMethods
    ? <></>
    : <PaymentMethods content={payments} />;
  const _apps = layout?.hide?.mobileApps
    ? <></>
    : <MobileApps content={mobileApps} />;
  const _region = layout?.hide?.regionOptions
    ? <></>
    : <RegionSelector content={regionOptions} />;
  const _links = layout?.hide?.extraLinks
    ? <></>
    : <ExtraLinks content={extraLinks} />;

  return (
    <footer
      class={`w-full flex flex-col pt-10 pb-2 md:pb-10 gap-10 !bg-[#2E2E2F] ${
        ColorClasses(layout)
      }`}
    >
      <div class="lg:container mx-6 lg:mx-auto">
        {(!layout?.variation || layout?.variation == "Variation 1") && (
          <div class="flex flex-col gap-10">
            <div class="flex flex-col md:flex-row md:justify-between md:flex-wrap lg:flex-nowrap gap-8 lg:gap-12">
        
              {_sectionLinks}
           
            </div>
            <Divider />
            <div class="flex flex-col md:flex-row gap-10 md:gap-14 md:items-end">
              {_payments}
              {_social}
              <div class="flex flex-col lg:flex-row gap-10 lg:gap-14 lg:items-end">
                {_apps}
                {_region}
              </div>
            </div>
            <Divider />
            <div class="flex flex-col-reverse md:flex-row md:justify-between gap-10">
             
              {_links}
            </div>
          </div>
        )}
        {layout?.variation == "Variation 2" && (
          <div class="flex flex-col gap-10">
            <div class="flex flex-col md:flex-row gap-10">
              <div class="flex flex-col gap-10 lg:w-1/2">
                {_logo}
                {_social}
                {_payments}
                {_apps}
                {_region}
              </div>
              <div class="flex flex-col gap-10 lg:gap-20 lg:w-1/2 lg:pr-10">
                {_newsletter}
                {_sectionLinks}
              </div>
            </div>
            <Divider />
            <div class="flex flex-col-reverse md:flex-row md:justify-between gap-10">
            
              {_links}
            </div>
          </div>
        )}
        {layout?.variation == "Variation 3" && (
          <div class="flex flex-col gap-10">
            {_logo}
            <div class="flex flex-col lg:flex-row gap-14">
              <div class="flex flex-col md:flex-row lg:flex-col md:justify-between lg:justify-normal gap-10 lg:w-2/5">
                {_newsletter}
                <div class="flex flex-col gap-10">
                  {_payments}
                  {_apps}
                </div>
              </div>
              <div class="flex flex-col gap-10 lg:gap-20 lg:w-3/5 lg:items-end">
                <div class="flex flex-col md:flex-row gap-10">
                  {_sectionLinks}
                  {_social}
                </div>
                {_region}
              </div>
            </div>
            <Divider />
            <div class="flex flex-col-reverse md:flex-row md:justify-between gap-10">
              
              {_links}
            </div>
          </div>
        )}
        {layout?.variation == "Variation 4" && (
          <div class="flex flex-col gap-10">
            {_newsletter}
            {layout?.hide?.newsletter ? <></> : <Divider />}
            <div class="flex flex-col lg:flex-row gap-10 lg:gap-20 lg:justify-between">
              {_sectionLinks}
              <div class="flex flex-col md:flex-row lg:flex-col gap-10 lg:gap-10 lg:w-2/5 lg:pl-10">
                <div class="flex flex-col md:flex-row gap-10 lg:gap-20">
                  <div class="lg:flex-auto">
                    {_payments}
                  </div>
                  <div class="lg:flex-auto">
                    {_social}
                  </div>
                </div>
                <div class="flex flex-col gap-10 lg:gap-10">
                  {_region}
                  {_apps}
                </div>
              </div>
            </div>
            <Divider />
            <div class="flex flex-col md:flex-row md:justify-between gap-10 md:items-center">
              {_logo}
            
            </div>
          </div>
        )}
        {layout?.variation == "Variation 5" && (
          <div class="flex flex-col gap-10">
            {_newsletter}
            {layout?.hide?.newsletter ? <></> : <Divider />}
            {_logo}
            <div class="flex flex-col md:flex-row gap-10 lg:gap-20 md:justify-between">
              {_sectionLinks}
              <div class="flex flex-col gap-10 md:w-2/5 lg:pl-10">
                {_payments}
                {_social}
                {_apps}
              </div>
            </div>
            <Divider />
            <div class="flex flex-col-reverse md:flex-row md:justify-between gap-10 md:items-center">
              
              <div class="flex flex-col md:flex-row gap-10 md:items-center">
                {_links}
                {_region}
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="31" viewBox="0 0 100 31" fill="none">
<path d="M59.1167 23.9787C59.0486 23.9787 58.9796 23.9837 58.9115 23.9949C58.8465 24.005 58.7887 24.01 58.7399 24.01C58.7226 24.01 58.7084 24.01 58.6972 24.008C58.6637 23.9443 58.5876 23.7449 58.5876 23.2429V15.2015C58.5876 14.2603 58.4281 13.4446 58.1153 12.7757C57.7954 12.0936 57.3445 11.54 56.7748 11.1281C56.2254 10.7314 55.5764 10.4389 54.8442 10.2598C54.1394 10.0868 53.3818 9.99973 52.5937 9.99973C51.7458 9.99973 50.9303 10.0969 50.1686 10.2892C49.3805 10.4885 48.6757 10.8083 48.0725 11.2405C47.457 11.6817 46.9493 12.2575 46.5634 12.9518C46.345 13.3454 46.1754 13.7877 46.0607 14.2674C45.954 14.7117 46.0556 15.1731 46.3409 15.5324C46.6263 15.8927 47.0529 16.0981 47.5119 16.0981C48.2025 16.0981 48.7976 15.6275 48.9601 14.9545C49.0322 14.655 49.1317 14.3919 49.2536 14.1723C49.4445 13.8292 49.6903 13.5529 49.9817 13.3515C50.2844 13.142 50.6479 12.9922 51.0613 12.9052C51.5142 12.8101 52.021 12.7615 52.5653 12.7615C53.7251 12.7615 54.5375 12.9842 54.9783 13.4234C55.4251 13.8687 55.6424 14.4313 55.6424 15.1438C55.6424 15.3664 55.613 15.6164 55.5561 15.8866C55.5297 16.0121 55.4779 16.0779 55.3682 16.1295C55.1326 16.2388 54.8148 16.3278 54.4228 16.3946C53.9881 16.4685 53.6083 16.5242 53.2955 16.5616L50.911 16.8764C49.0515 17.1223 47.6246 17.6688 46.671 18.5006C45.694 19.3528 45.1984 20.5075 45.1984 21.9304C45.1984 22.7481 45.3559 23.4696 45.6656 24.0758C45.9713 24.6749 46.3938 25.189 46.9188 25.604C47.4367 26.0128 48.042 26.3184 48.7194 26.5107C49.3724 26.6969 50.0599 26.7911 50.7627 26.7911C51.9316 26.7911 53.0365 26.5623 54.047 26.11C54.6848 25.8246 55.285 25.4522 55.8364 24.9988C55.8842 25.1465 55.9431 25.2882 56.0141 25.4218C56.1553 25.691 56.3462 25.9268 56.5798 26.1211C56.8337 26.3316 57.1597 26.4672 57.5486 26.5239C57.833 26.5866 58.1296 26.619 58.4322 26.619C58.7348 26.619 59.0507 26.5725 59.3645 26.4794L59.4863 26.4439C60.0276 26.285 60.3912 25.7993 60.3912 25.2356C60.3912 24.5413 59.8194 23.9766 59.1177 23.9766L59.1167 23.9787ZM55.6435 20.3344C55.6435 20.9659 55.5155 21.5124 55.2647 21.9597C55.0067 22.4181 54.6594 22.8007 54.2329 23.0972C53.7891 23.4059 53.2721 23.6396 52.6953 23.7914C52.1002 23.9483 51.4797 24.0283 50.849 24.0283C50.5037 24.0283 50.1574 23.9827 49.8213 23.8926C49.5075 23.8087 49.2302 23.6791 48.9977 23.5071C48.7752 23.3431 48.5935 23.1326 48.4564 22.8796C48.3253 22.6398 48.2593 22.3392 48.2593 21.988C48.2593 21.1784 48.5234 20.6238 49.0911 20.2423C49.7319 19.8112 50.6662 19.5491 51.8686 19.4621C52.6262 19.4044 53.3879 19.3264 54.1343 19.2303C54.6381 19.1655 55.1448 19.0552 55.6455 18.8994V20.3344H55.6435ZM44.253 14.063C44.3657 14.8179 44.4226 15.6002 44.4226 16.3896V25.1324C44.4226 25.9561 43.7492 26.6271 42.9226 26.6271C42.0959 26.6271 41.4226 25.9561 41.4226 25.1324V15.4767C41.4226 14.5163 41.2286 13.7664 40.8478 13.2483C40.5086 12.7888 39.8058 12.5561 38.7578 12.5561C38.2033 12.5561 37.66 12.6795 37.1451 12.9234C36.6353 13.1653 36.1783 13.5448 35.7873 14.0539C35.6288 14.2593 35.4948 14.5072 35.3881 14.7916C35.2714 15.1053 35.1749 15.4373 35.1028 15.7783C35.0297 16.1224 34.9789 16.4726 34.9515 16.8187C34.923 17.1739 34.9088 17.5048 34.9088 17.8013V25.1314C34.9088 25.9551 34.2355 26.6261 33.4088 26.6261C32.5822 26.6261 31.9088 25.9551 31.9088 25.1314V15.4757C31.9088 14.5153 31.7149 13.7654 31.334 13.2473C30.9948 12.7878 30.2921 12.5551 29.243 12.5551C28.6885 12.5551 28.1462 12.6785 27.6303 12.9224C27.1205 13.1643 26.6635 13.5438 26.2725 14.0539C26.1141 14.2583 25.98 14.5072 25.8744 14.7916C25.7576 15.1053 25.6611 15.4373 25.589 15.7793C25.5159 16.1234 25.4651 16.4736 25.4377 16.8197C25.4093 17.1749 25.3951 17.5058 25.3951 17.8024V25.1324C25.3951 25.9561 24.7217 26.6271 23.8951 26.6271C23.0684 26.6271 22.3951 25.9561 22.3951 25.1324V11.6503C22.3951 10.8265 23.0684 10.1556 23.8951 10.1556C24.6151 10.1556 25.2173 10.6636 25.3615 11.3376C25.6977 11.0148 26.0775 10.7375 26.4959 10.5098C27.4302 10.0007 28.4641 9.74267 29.567 9.74267C30.3357 9.74267 31.005 9.83173 31.5564 10.0078C32.114 10.1859 32.5994 10.4319 32.9996 10.7395C33.3987 11.0461 33.7348 11.4105 33.9989 11.8224C34.0425 11.8902 34.0852 11.96 34.1268 12.0308C34.596 11.4074 35.1627 10.9075 35.8096 10.5442C36.7561 10.0129 37.8458 9.74369 39.0503 9.74369C40.2547 9.74369 41.1342 9.94305 41.8451 10.3357C42.558 10.7304 43.1166 11.2607 43.5065 11.9114C43.8802 12.5368 44.1311 13.2604 44.2509 14.063H44.253ZM97.2072 11.3305C97.2072 12.1351 96.5959 12.801 95.7854 12.8809C95.2421 12.9346 94.7739 13.0601 94.3931 13.2554C93.8386 13.5408 93.3938 13.9284 93.0698 14.407C92.7337 14.905 92.4971 15.5071 92.3661 16.1963C92.2259 16.93 92.1558 17.7092 92.1558 18.5108V25.105C92.1558 25.9288 91.4825 26.5998 90.6559 26.5998C89.8292 26.5998 89.1559 25.9288 89.1559 25.105V11.622C89.1559 10.7982 89.8292 10.1272 90.6559 10.1272C91.4216 10.1272 92.0553 10.7021 92.1447 11.4418C92.4605 11.0654 92.8078 10.7597 93.1826 10.528C93.8041 10.1434 94.5658 9.89347 95.4483 9.78214C95.5133 9.77405 95.5793 9.77 95.6443 9.77C96.5055 9.77 97.2062 10.4693 97.2062 11.3295L97.2072 11.3305ZM73.8352 24.4007C74.1307 24.85 74.154 25.4005 73.8981 25.8732C73.6422 26.3458 73.1669 26.6281 72.6277 26.6281C72.1453 26.6281 71.6974 26.3903 71.4293 25.9916L66.3495 18.4511L64.1731 20.5095V25.1334C64.1731 25.9572 63.4998 26.6281 62.6732 26.6281C61.8465 26.6281 61.1732 25.9572 61.1732 25.1334V5.70373C61.1732 4.87995 61.8465 4.20898 62.6732 4.20898C63.4998 4.20898 64.1731 4.87995 64.1731 5.70373V16.5657L70.3914 10.5634C70.6636 10.3003 71.0231 10.1556 71.4029 10.1556C72.0082 10.1556 72.5251 10.5027 72.7516 11.0623C72.978 11.622 72.848 12.2292 72.4124 12.6472L68.5471 16.3602L73.8362 24.3997L73.8352 24.4007ZM81.2152 9.74369C80.0514 9.74369 78.9932 9.9724 78.067 10.4227C77.1459 10.8711 76.3548 11.4955 75.716 12.2788C75.0863 13.0499 74.5958 13.9587 74.2566 14.9829C73.9215 15.9969 73.7509 17.0939 73.7509 18.2436C73.7509 19.3932 73.8941 20.47 74.1774 21.4648C74.4668 22.486 74.9208 23.3877 75.5251 24.1457C76.1374 24.9148 76.9286 25.5281 77.8761 25.9683C78.8175 26.4065 79.9417 26.6281 81.2152 26.6281C82.2196 26.6281 83.1204 26.4905 83.8933 26.2203C84.6732 25.948 85.3607 25.5564 85.9355 25.0575C86.5032 24.5656 86.9826 23.9817 87.3604 23.3219C87.5025 23.0739 87.6356 22.8149 87.7564 22.5497C87.9667 22.0882 87.9281 21.5569 87.6518 21.1299C87.3736 20.6987 86.9013 20.4417 86.3885 20.4417C85.7619 20.4417 85.1982 20.8313 84.986 21.4102C84.7301 22.1115 84.3167 22.6752 83.7582 23.0851C83.0635 23.5961 82.2084 23.8552 81.2152 23.8552C80.4901 23.8552 79.8463 23.7176 79.3019 23.4464C78.7535 23.1731 78.2955 22.8057 77.9421 22.3544C77.5795 21.8919 77.3002 21.3343 77.1114 20.6947C76.9722 20.2211 76.8818 19.7191 76.8422 19.1979H86.8759C87.2883 19.1979 87.6721 19.034 87.9575 18.7354C88.2409 18.4389 88.3922 18.0341 88.3719 17.6242C88.2571 15.2764 87.6356 13.4082 86.5225 12.0723C85.2348 10.527 83.4495 9.74267 81.2142 9.74267L81.2152 9.74369ZM76.9214 16.5414C77.0037 16.1346 77.1195 15.7419 77.2667 15.3695C77.4891 14.8048 77.7877 14.3038 78.1543 13.8798C78.5108 13.4669 78.9495 13.1309 79.4563 12.8819C79.9539 12.638 80.545 12.5146 81.2152 12.5146C81.8855 12.5146 82.4887 12.635 82.9996 12.8728C83.5094 13.1107 83.9369 13.4325 84.271 13.8302C84.6102 14.235 84.8723 14.7238 85.049 15.2845C85.1739 15.6802 85.2561 16.1022 85.2957 16.5404H76.9225L76.9214 16.5414Z" fill="#3C3B3B"/>
<path d="M18.34 15.5425H13.38C12.6935 15.5425 12.1359 16.0991 12.1359 16.7822C12.1359 17.4653 12.6945 18.0219 13.38 18.0219H18.34C18.8203 18.0219 19.2113 18.4116 19.2113 18.8902C19.2113 19.3689 18.8203 19.7586 18.34 19.7586H17.7926C17.1061 19.7586 16.5485 20.3152 16.5485 20.9983V23.0699C16.5485 23.5485 16.1575 23.9382 15.6772 23.9382H15.5309C15.0506 23.9382 14.6596 23.5485 14.6596 23.0699V20.9983C14.6596 20.3142 14.101 19.7586 13.4155 19.7586H6.50973C6.02124 19.7586 5.60588 19.4944 5.40074 19.0532C5.19458 18.6109 5.25957 18.1252 5.57541 17.7527L14.3905 7.34418C14.6352 7.05475 14.9429 6.90801 15.3055 6.90801C15.4548 6.90801 15.6071 6.93432 15.7462 6.98492C16.1342 7.1266 16.5495 7.50105 16.5495 8.12951V13.0651C16.5495 13.7492 17.1081 14.3048 17.7936 14.3048C18.4791 14.3048 19.0377 13.7482 19.0377 13.0651V8.12951C19.0377 6.55886 18.081 5.19467 16.6003 4.65526C16.1819 4.50245 15.7483 4.42554 15.3106 4.42554C14.227 4.42554 13.1992 4.90624 12.4893 5.74318L3.67429 16.1517C2.73185 17.2639 2.52874 18.7759 3.14417 20.0956C3.75959 21.4152 5.04935 22.236 6.51074 22.236H12.1725V23.0678C12.1725 24.9138 13.6796 26.4156 15.5319 26.4156H15.6782C17.5306 26.4156 19.0377 24.9138 19.0377 23.0678V22.1641C20.5732 21.8413 21.7004 20.4781 21.7004 18.8882C21.7004 17.0423 20.1934 15.5405 18.341 15.5405L18.34 15.5425Z" fill="url(#paint0_radial_501_716)"/>
<defs>
<radialGradient id="paint0_radial_501_716" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.2456 15.4445) scale(16.446 17.6996)">
<stop stop-color="#E71E7E"/>
<stop offset="1" stop-color="#903089"/>
</radialGradient>
</defs>
</svg>
              </div>
            </div>
          </div>
        )}
      </div>
      {layout?.hide?.backToTheTop
        ? <></>
        : <BackToTop content={backToTheTop?.text} />}
    </footer>
  );
}

export default Footer;
