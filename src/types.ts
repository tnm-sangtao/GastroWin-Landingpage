/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  translations: {
    [langCode: string]: {
      name: string;
      description: string;
    };
  };
}

export interface SampleMenu {
  id: string;
  restaurantName: string;
  cuisineType: string;
  themeStyle: {
    bg: string;
    text: string;
    accent: string;
    border: string;
    fontFamily: string;
  };
  items: MenuItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  restaurant: string;
  location: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  category?: {
    en: string;
    vi: string;
    de: string;
  };
  question: string;
  answer: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
  culinaryAccuracyNote: string;
}
