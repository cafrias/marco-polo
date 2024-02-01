import React, { useCallback } from "react";
import { Modal } from "../../UI/Modal";
import { GOOGLE_API_KEY } from "@/config";
import { getStore } from "@/data/Store/getStore";
import { Section } from "./components/Section";
import { ContactItem } from "./components/ContactItem";
import { useStoreModal } from "@/providers/store/store-modal-provider";

export function StoreModal() {
  const { selected, setSelected } = useStoreModal();

  const onClose = useCallback(() => {
    setSelected(null);
  }, [setSelected]);

  if (!selected) {
    return null;
  }

  const store = getStore(selected);

  const showContact = !!(store.phone || store.urls.length > 0);

  return (
    <Modal title="Store Details" onClose={onClose} open>
      <h2 className="text-2xl mb-4">{store.name}</h2>

      <div className="flex flex-col gap-3">
        <Section title="Location">
          <div>
            <iframe
              className="w-full max-w-full"
              width="450"
              height="250"
              frameBorder="0"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}&q=${store.location.lat},${store.location.lng}`}
              allowFullScreen
            ></iframe>
          </div>
        </Section>

        {store.address && (
          <Section title="Address" gutter>
            <p>{store.address}</p>
          </Section>
        )}

        {showContact && (
          <Section title="Contact" gutter>
            <ul className="flex flex-col gap-2">
              {store.phone && <ContactItem type="phone" value={store.phone} />}
              {store.email && <ContactItem type="email" value={store.email} />}
              {store.urls.map((url) => {
                return <ContactItem key={url.url} type="url" value={url.url} />;
              })}
            </ul>
          </Section>
        )}
      </div>
    </Modal>
  );
}
