"use client";
import { useStore } from "@nanostores/react";
import { dictStore, localeStore } from "@/stores/i18n";

const useAgreementContent: Record<string, { title: string; content: string[] }[]> = {
  tr: [
    {
      title: "1. Kapsam",
      content: [
        "Bu çevrimiçi mağaza NOTRES şirketi tarafından işletilmektedir. Sitede yer alan tüm \"biz\", \"bizim\" ve \"bizim\" terimleri NOTRES'e atıfta bulunur. Web sitesini ziyaret ederek veya araçları, bilgileri ve hizmetleri kullanarak, kullanıcı / müşteri / ziyaretçi, burada belirtilen ve sipariş sırasında yürürlükte olan diğer belgelerdeki tüm şartların ve koşulların, politikaların ve bildirimlerin sürümlerini kabul eder ve bunlara tabidir.",
      ],
    },
    {
      title: "2. Genel Hükümler",
      content: [
        "Çevrimiçi mağazadaki ürünlerin gösterimi bizim için yasal olarak bağlayıcı değildir ve yalnızca taahhütsüz bir çevrimiçi katalog oluşturur. Ürünleri \"sepete\" eklemek tek başına bir sipariş oluşturmaz. Sepetteki öğelerin siparişi yalnızca sipariş sayfasındaki \"Sipariş Ver\" düğmesine tıkladığınızda bağlayıcı hale gelir.",
      ],
    },
    {
      title: "3. Teslimat ve Kargo Ücretleri",
      content: [
        "Sipariş ettiğiniz ürünleri seçtiğiniz teslimat aralığında ve sipariş sırasında belirttiğiniz adrese teslim ediyoruz.",
      ],
    },
  ],
  fr: [
    {
      title: "1. Champ d'application",
      content: [
        "Cette boutique en ligne est exploitée par la société Les NOTRES. Dans tout le site, les termes «nous», «nous» et «nos» font référence à Les NOTRES. En visitant le site Web ou en utilisant les outils, informations et services, l'utilisateur / client / visiteur accepte et est soumis aux versions de tous les termes et conditions, politiques et avis spécifiés ici et dans d'autres documents en vigueur au moment de la commande.",
      ],
    },
    {
      title: "2. Dispositions générales",
      content: [
        "L'affichage des produits dans la boutique en ligne n'est pas juridiquement contraignant pour nous et ne crée qu'un catalogue en ligne sans engagement. Le simple fait d'ajouter des produits au \"panier\" ne crée pas de commande. Une commande d'articles dans le panier devient obligatoire uniquement lorsque vous cliquez sur le bouton «Commander» sur la page de commande.",
      ],
    },
    {
      title: "3. La livraison et les frais de livraison",
      content: [
        "Nous livrons les produits que vous avez commandés dans la plage de livraison que vous choisissez et à l'adresse que vous avez indiquée lors de la commande.",
      ],
    },
  ],
  en: [
    {
      title: "1. Scope",
      content: [
        "This online store is operated by NOTRES company. Throughout the site, the terms \"we\", \"us\" and \"our\" refer to NOTRES. By visiting the website or using the tools, information and services, the user / client / visitor accepts and is subject to the versions of all terms and conditions, policies and notices specified here and in other documents in effect at the time of order.",
      ],
    },
    {
      title: "2. General Provisions",
      content: [
        "The display of products in the online store is not legally binding for us and creates only an online catalog without commitment. Simply adding products to the \"cart\" does not create an order. An order for items in the cart becomes binding only when you click the \"Order\" button on the order page.",
      ],
    },
    {
      title: "3. Delivery and Shipping COSTS",
      content: [
        "We deliver the products you ordered in the delivery range you choose and to the address you specified when ordering.",
      ],
    },
  ],
};

export default function UseAgreementPage() {
  const dict = useStore(dictStore);
  const locale = useStore(localeStore);
  const content = useAgreementContent[locale as keyof typeof useAgreementContent] || useAgreementContent.fr;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h2 className="mb-6 text-2xl font-bold">{dict.use_agreement}</h2>
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

