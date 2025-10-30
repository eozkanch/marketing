"use client";
import { useStore } from "@nanostores/react";
import { dictStore } from "@/stores/i18n";
import ContactMap from "../components/common/contact/map/Map";
import ContactForm from "../components/common/contact/form/Form";
import Info from "../components/common/contact/info/Info";
import SectionHeader from "../components/common/section-header/SectionHeader";
import Spacer from "../components/common/spacer/Spacer";

export default function ContactPage() {
  const dict = useStore(dictStore);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Spacer size="md" />
      <SectionHeader title2={dict.contact_us} title3={dict.contact_desc} />
      <div className="my-8">
        <ContactMap />
      </div>
      <Spacer size="md" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <ContactForm />
        </div>
        <div>
          <Info />
        </div>
      </div>
      <Spacer size="md" />
    </div>
  );
}

