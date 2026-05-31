export type SocialLink = {
  label: string;
  href: string;
};

export type CtaLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  title: string;
  subtitle: string;
  about: string[];
  location: string;
  email: string;
  socials: SocialLink[];
  cta: CtaLink[];
};
