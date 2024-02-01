import phoneIcon from "@/assets/icons/phone.svg";
import envelopeIcon from "@/assets/icons/envelope.svg";
import linkIcon from "@/assets/icons/link.svg";
import Image from "next/image";

interface ContactItemProps {
  type: "email" | "phone" | "url";
  value: string;
}

export function ContactItem({ type, value }: ContactItemProps) {
  let hrefPrefix = "";
  switch (type) {
    case "email":
      hrefPrefix = "mailto:";
      break;
    case "phone":
      hrefPrefix = "tel:";
      break;
    default:
  }

  let icon = linkIcon;
  switch (type) {
    case "email":
      icon = envelopeIcon;
      break;
    case "phone":
      icon = phoneIcon;
      break;
    default:
  }

  return (
    <li className="flex items-center gap-2">
      <Image src={icon} alt="" width={16} height={16} />
      <a className="link" href={`${hrefPrefix}${value}`}>
        {value}
      </a>
    </li>
  );
}
