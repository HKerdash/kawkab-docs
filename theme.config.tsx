import React from "react";
import { useRouter } from "next/router";

export default {
  logo: <span>Kawkab JS</span>,
  project: {
    link: "https://github.com/kawkabjs/docs",
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Nextra'
      }
    }
  },
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="#" target="_blank">
        Kawkab JS
        </a>
        .
      </span>
    )
  },
  i18n: [
    { locale: 'en', name: 'English' },
    { locale: 'ar', name: 'العربية', direction: 'rtl' }
  ]
};
