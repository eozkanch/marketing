"use client";
import { useStore } from "@nanostores/react";
import { dictStore, localeStore } from "@/stores/i18n";

const confidentialityContent: Record<string, { title: string; content: string[] }[]> = {
  tr: [
    {
      title: "Veri Koruma",
      content: [
        "Siparişinizi işlemek için bize gönderdiğiniz verileri kullanıyoruz. Verileriniz, ürünlerin teslim edilmesi için gerekli ölçüde teslimatı yapan kargo şirketine aktarılacaktır. Ödeme işlemlerinin gerçekleştirilmesi için ödeme bilgilerinizi, ödemenizden sorumlu finansal veya kredi kuruluşuna aktarıyoruz. Verilerinizi reklam amaçlı üçüncü taraflara aktarmıyoruz.",
      ],
    },
    {
      title: "E-posta Reklamı (Bülten-Newsletter)",
      content: [
        "Newsletter'ımıza kayıt olursanız, size düzenli olarak e-posta göndermek için newsletter'ımızı kullanacağız. Newsletter'dan istediğiniz zaman çıkış yapabilirsiniz ve bu, newsletter'da bu amaç için sağlanan bağlantı kullanılarak yapılabilir.",
      ],
    },
    {
      title: "Çerezler",
      content: [
        "Sitemizin bazı sayfalarında navigasyonu kolaylaştırmak ve belirli işlevleri etkinleştirmek için çerezler kullanıyoruz. Bunlar bilgisayarınızda saklanan küçük metin dosyalarıdır. Çerezlerimizin çoğu, web tarayıcınızdan ayrıldığınızda otomatik olarak silinir.",
      ],
    },
  ],
  fr: [
    {
      title: "Protection des données",
      content: [
        "Nous utilisons les données que vous nous avez soumises pour traiter votre commande. Vos données seront transmises à la compagnie responsable de la livraison dans la mesure nécessaire à la livraison des marchandises. Pour le traitement des opérations de paiement, nous transmettons vos données de paiement à l'établissement financier ou de crédit responsable de votre paiement. Nous ne transférons pas vos données à des tiers à des fins publicitaires.",
      ],
    },
    {
      title: "Publicité par e-mail (Bulletin-Newsletter)",
      content: [
        "Si vous vous inscrivez à notre newsletter, nous utiliserons notre newsletter pour vous envoyer régulièrement des e-mails. Il est toujours possible de se désinscrire de la newsletter et peut se faire en utilisant le lien prévu à cet effet dans la newsletter.",
      ],
    },
    {
      title: "Cookies",
      content: [
        "Nous utilisons des cookies sur certaines de nos pages Web pour faciliter la navigation sur notre site et activer certaines fonctions. Ce sont de petits fichiers texte stockés sur votre ordinateur. La plupart de nos cookies sont automatiquement supprimés lorsque vous quittez votre navigateur Web.",
      ],
    },
  ],
  en: [
    {
      title: "Data Protection",
      content: [
        "We use the data you submitted to us to process your order. Your data will be transmitted to the shipping company responsible for delivery to the extent necessary for the delivery of goods. For payment processing, we transmit your payment data to the financial or credit institution responsible for your payment. We do not transfer your data to third parties for advertising purposes.",
      ],
    },
    {
      title: "E-mail Advertising (Newsletter)",
      content: [
        "If you subscribe to our newsletter, we will use our newsletter to send you regular emails. You can unsubscribe from the newsletter at any time using the link provided for this purpose in the newsletter.",
      ],
    },
    {
      title: "Cookies",
      content: [
        "We use cookies on some of our web pages to facilitate navigation on our site and enable certain functions. These are small text files stored on your computer. Most of our cookies are automatically deleted when you leave your web browser.",
      ],
    },
  ],
};

export default function ConfidentialityAgreementPage() {
  const dict = useStore(dictStore);
  const locale = useStore(localeStore);
  const content = confidentialityContent[locale as keyof typeof confidentialityContent] || confidentialityContent.fr;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h2 className="mb-6 text-2xl font-bold">{dict.confidentiality_agreement}</h2>
      <div className="space-y-6">
        {content.map((section, index) => (
          <div key={index}>
            <h3 className="mb-2 text-lg font-semibold">{section.title}</h3>
            {section.content.map((para, pIndex) => (
              <p key={pIndex} className="mb-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

