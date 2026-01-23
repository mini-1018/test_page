import type { Locale } from "@lib/translator";

export interface SubMenuItem {
  name: string;
  link: string;
}

export interface MenuItem {
  name: string;
  link?: string;
  subMenu: SubMenuItem[];
}

type TranslationFunction = (key: string) => string;

export function getMenuItems(locale: Locale, t: TranslationFunction): MenuItem[] {
  return [
    {
      name: t("brand"),
      link: `/${locale}/brand`,
      subMenu: [{ name: t("subMenu.brand"), link: `/${locale}/brand` }],
    },
    {
      name: t("products"),
      link: `/${locale}/products`,
      subMenu: [
        { name: t("subMenu.ReverseVendingMachine"), link: `/${locale}/products/reverse-vending-machines` },
        { name: t("subMenu.rfid"), link: `/${locale}/products/vehicle-food-waste-billing-system` },
        { name: t("subMenu.FoodWasteBillingSystem"), link: `/${locale}/products/food-waste-billing-system` },
        { name: t("subMenu.IotRecyclingScale"), link: `/${locale}/products/iot-recycling-scale` },
      ],
    },
    {
      name: t("news"),
      link: `/${locale}/news`,
      subMenu: [
        { name: t("subMenu.notice"), link: `/${locale}/news/notice` },
        { name: t("subMenu.news"), link: `/${locale}/news` },
      ],
    },
    {
      name: t("community"),
      link: `/${locale}/community`,
      subMenu: [
        { name: t("subMenu.faq"), link: `/${locale}/community/faq` },
        { name: t("subMenu.support"), link: `/${locale}/community/support` },
        { name: t("subMenu.downloads"), link: `/${locale}/community/downloads` },
      ],
    },
  ];
}
