import React from "react";

export default {
  logo: <span>Kawkab JS</span>,
  project: {
    link: "https://github.com/kawkabjs/docs",
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
    { locale: 'ar', name: 'العربية', direction: 'rtl' },
  ]
};
