/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SampleMenu, Testimonial, FAQItem, Language } from "./types";

export const LANGUAGES: Language[] = [
  { code: "es", name: "Spanish", flag: "🇪🇸", culinaryAccuracyNote: "Localizes regional tapas terms and wine denominations." },
  { code: "ja", name: "Japanese", flag: "🇯🇵", culinaryAccuracyNote: "Adapts Western cooking techniques into accurate Katakana/Kanji." },
  { code: "fr", name: "French", flag: "🇫🇷", culinaryAccuracyNote: "Maintains authentic classical culinary nouns and sauce suffixes." },
  { code: "de", name: "German", flag: "🇩🇪", culinaryAccuracyNote: "Translates compound ingredients seamlessly for strict allergen transparency." },
  { code: "vi", name: "Vietnamese", flag: "🇻🇳", culinaryAccuracyNote: "Translates texture adjectives and herb pairings with precise regional terms." },
  { code: "it", name: "Italian", flag: "🇮🇹", culinaryAccuracyNote: "Preserves hand-crafted pasta naming and strict regional origins." }
];

export const SAMPLE_MENUS: SampleMenu[] = [
  {
    id: "parisien-bistro",
    restaurantName: "Le Parisien Bistro",
    cuisineType: "Classic French",
    themeStyle: {
      bg: "bg-[#FCFBF7]", // Warm paper white
      text: "text-[#2B2A27]", // Antique black
      accent: "border-[#A08856]", // Gold accent
      border: "border-[#EFECE5]",
      fontFamily: "font-sans"
    },
    items: [
      {
        id: "p1",
        category: "Starters",
        name: "French Onion Soup",
        description: "Caramelized sweet onions in rich beef broth, topped with artisanal sourdough croutons and baked Gruyère cheese.",
        price: "$16.00",
        translations: {
          es: {
            name: "Sopa de Cebolla Francesa",
            description: "Cebollas dulces caramelizadas en un rico caldo de carne, cubiertas con picatostes de masa madre artesanal y queso Gruyère horneado."
          },
          ja: {
            name: "オニオングラタンスープ",
            description: "じっくり炒めた甘い玉ねぎを濃厚な牛ブロスのスープに。自家製サワードウのクルトンと、香ばしく焼き上げたグリュイエールチーズをのせて。"
          },
          fr: {
            name: "Soupe à l'Oignon Gratinée",
            description: "Oignons doux caramélisés dans un riche bouillon de bœuf, garnis de croûtons de pain au levain artisanal et de Gruyère gratiné."
          },
          de: {
            name: "Französische Zwiebelsuppe",
            description: "Karamellisierte süße Zwiebeln in kräftiger Rinderbrühe, garniert mit handgemachten Sauerteig-Croutons und überbackenem Gruyère-Käse."
          },
          vi: {
            name: "Súp Hành Tây Pháp",
            description: "Hành tây ngọt caramen nấu trong nước dùng bò đậm đà, phủ bánh mì nướng chua thủ công và phô mai Gruyère đút lò."
          },
          it: {
            name: "Zuppa di Cipolle alla Francese",
            description: "Cipolle dolci caramellate in ricco brodo di manzo, guarnite con crostini di pane a lievitazione naturale e formaggio Gruyère gratinato."
          }
        }
      },
      {
        id: "p2",
        category: "Mains",
        name: "Classic Coq au Vin",
        description: "Red wine braised chicken thighs, smoked pancetta lardoons, wild chanterelle mushrooms, and pearl onions over house butter tagliatelle.",
        price: "$34.00",
        translations: {
          es: {
            name: "Coq au Vin Clásico",
            description: "Muslos de pollo braseados al vino tinto, panceta ahumada, setas de rebozuelo silvestres y cebollitas perla sobre tagliatelle de la casa a la mantequilla."
          },
          ja: {
            name: "コック・オ・ヴァン (鶏肉の赤ワイン煮込み)",
            description: "鶏もも肉の赤ワイン煮込み。燻製パンチェッタ、野生のアンズタケ、ペコロスを添え、自家製バタータリアテッレと共にお召し上がりください。"
          },
          fr: {
            name: "Coq au Vin Traditionnel",
            description: "Cuisses de poulet mijotées au vin rouge, lardons de pancetta fumée, chanterelles sauvages et oignons grelots sur tagliatelles fraîches au beurre."
          },
          de: {
            name: "Klassisches Coq au Vin",
            description: "In Rotwein geschmorte Hähnchenkeulen, geräucherter Pancetta, wilde Pfifferlinge und Perlzwiebeln auf hausgemachten Butter-Tagliatelle."
          },
          vi: {
            name: "Gà Nấu Rượu Vang Truyền Thống",
            description: "Đùi gà om rượu vang đỏ, thịt heo pancetta xông khói, nấm chanterelle rừng và hành củ nhỏ dùng kèm mì dẹt tagliatelle bơ nhà làm."
          },
          it: {
            name: "Coq au Vin Classico",
            description: "Cosce di pollo brasate al vino rosso, dadini di pancetta affumicata, funghi finferli selvatici e cipolline su tagliatelle fresche al burro."
          }
        }
      },
      {
        id: "p3",
        category: "Desserts",
        name: "Tahitian Vanilla Crème Brûlée",
        description: "Velvety egg custard infused with premium Tahitian vanilla beans, finished with an ultra-thin, hand-torched caramelized sugar crust.",
        price: "$12.00",
        translations: {
          es: {
            name: "Crème Brûlée de Vainilla de Tahití",
            description: "Crema de huevo aterciopelada infundida con vainas de vainilla de Tahití premium, terminada con una capa ultra fina de azúcar caramelizado sopleteado a mano."
          },
          ja: {
            name: "タヒチ産バニラのクレームブリュレ",
            description: "高級タヒチ産バニラビーンズを贅沢に使用したなめらかなエッグカスタードに、バーナーで極限まで薄く仕上げたカリカリのキャラメルナッツを重ねて。"
          },
          fr: {
            name: "Crème Brûlée à la Vanille de Tahiti",
            description: "Crème veloutée infusée aux gousses de vanille de Tahiti, surmontée d'une fine croûte de sucre caramélisé craquante au chalumeau."
          },
          de: {
            name: "Tahiti-Vanille-Crème-Brûlée",
            description: "Samtige Eiercreme verfeinert mit edler Tahiti-Vanilleschote, vollendet mit einer hauchdünnen, handkaramellisierten Zuckerkruste."
          },
          vi: {
            name: "Bánh Kem Đốt Vani Tahiti",
            description: "Kem trứng mịn màng hòa quyện hạt vani Tahiti thượng hạng, kết thúc bằng lớp đường caramen mỏng giòn được khò thủ công."
          },
          it: {
            name: "Crème Brûlée alla Vaniglia di Tahiti",
            description: "Crema pasticcera vellutata infusa con baccelli di vaniglia di Tahiti premium, rifinita con una crosta di zucchero caramellato ultra sottile."
          }
        }
      }
    ]
  },
  {
    id: "sakura-izakaya",
    restaurantName: "Sakura Izakaya",
    cuisineType: "Modern Japanese Gastropub",
    themeStyle: {
      bg: "bg-[#121214]", // Dark charcoal slate
      text: "text-[#E4E4E7]", // Cool gray-light
      accent: "border-[#EF4444]", // Cherry blossom red
      border: "border-[#27272A]",
      fontFamily: "font-mono"
    },
    items: [
      {
        id: "s1",
        category: "Zensai (Appetizers)",
        name: "Flamed Wagyu Tataki",
        description: "Thinly sliced, ultra-marbled A5 Wagyu beef lightly seared with hot sesame oil, dressed in aged ponzu, garlic chips, and micro-shiso.",
        price: "$28.00",
        translations: {
          es: {
            name: "Tataki de Wagyu Flameado",
            description: "Carne de res Wagyu A5 de mármol supremo cortada fina y ligeramente sellada con aceite de sésamo caliente, bañada en ponzu añejo, chips de ajo y micro-shiso."
          },
          ja: {
            name: "特選A5和牛炙りタタキ",
            description: "見事な霜降りのA5ランク和牛を、熱い胡麻油でサッと炙り薄切りに。熟成ポン酢、香ばしいガーリックチップ、マイクロ紫蘇を添えて贅沢に仕上げました。"
          },
          fr: {
            name: "Tataki de Bœuf Wagyu Saisi",
            description: "Fines tranches de bœuf Wagyu A5 intensément persillé, légèrement saisies à l'huile de sésame chaude, nappées de ponzu affiné, pépites d'ail et micro-shiso."
          },
          de: {
            name: "Flambiertes Wagyu Tataki",
            description: "Hauchdünn geschnittenes, edles A5-Wagyu-Rindfleisch, leicht in heißem Sesamöl angebraten, serviert mit gereiftem Ponzu, Knoblauch-Chips und Mikroschiso."
          },
          vi: {
            name: "Bò Wagyu Tataki Áp Chảo",
            description: "Thịt bò Wagyu A5 vân mỡ thượng hạng thái mỏng, áp chảo nhẹ với dầu mè nóng, rưới sốt ponzu lâu năm, tỏi phi và lá tía tô non."
          },
          it: {
            name: "Tataki di Wagyu Fiammato",
            description: "Fettine sottili di manzo Wagyu A5 marmorizzato scottate leggermente con olio di sesamo caldo, condite con ponzu invecchiato, chips d'aglio e micro-shiso."
          }
        }
      },
      {
        id: "s2",
        category: "Kushiyaki (Skewers)",
        name: "Glazed Kurobuta Pork Belly",
        description: "Slow-braised heritage Kurobuta pork belly skewers, caramelized with a ginger-infused sweet mirin soy reduction, spring scallions.",
        price: "$19.00",
        translations: {
          es: {
            name: "Panceta de Cerdo Kurobuta Glaseada",
            description: "Brochetas de panceta de cerdo Kurobuta de herencia braceadas a fuego lento, caramelizadas con una reducción de soja y mirin dulce con jengibre, y cebollas de verdeo."
          },
          ja: {
            name: "黒豚バラ肉の照り焼き串",
            description: "最高品質の黒豚バラ肉をじっくり時間をかけて柔らかく煮込み、生姜を効かせた甘辛いみりん醤油ダレで香ばしくタレ焼きに。九条ねぎを添えて。"
          },
          fr: {
            name: "Brochette de Poitrine de Porc Kurobuta",
            description: "Poitrine de porc Kurobuta mijotée lentement et embrochée, caramélisée au mirin, réduction de sauce soja au gingembre et jeunes oignons."
          },
          de: {
            name: "Glasierter Kurobuta-Schweinebauch",
            description: "Langsam geschmorter Kurobuta-Schweinebauch am Spieß, karamellisiert mit einer Ingwer-Süß-Sojareduktion, garniert mit Frühlingszwiebeln."
          },
          vi: {
            name: "Ba Chỉ Heo Kurobuta Sốt Tương",
            description: "Xiên thịt ba chỉ heo đen Kurobuta hầm chậm, quét sốt mật tương gừng và rượu mirin ngọt ngào đun cô đặc, trang trí với hành lá."
          },
          it: {
            name: "Pancetta di Maiale Kurobuta Glassata",
            description: "Spiedini di pancetta di maiale Kurobuta stracotta, caramellati con una riduzione di salsa di soia e mirin allo zenzero, cipollotti freschi."
          }
        }
      }
    ]
  },
  {
    id: "dolce-vita",
    restaurantName: "La Dolce Vita",
    cuisineType: "Artisanal Italian Trattoria",
    themeStyle: {
      bg: "bg-[#FEFAF3]", // Warm cream
      text: "text-[#3D251D]", // Roasted chestnut brown
      accent: "border-[#15803D]", // Tuscan Olive green
      border: "border-[#F1E8D9]",
      fontFamily: "font-sans"
    },
    items: [
      {
        id: "d1",
        category: "Primi (Pasta)",
        name: "Truffle Butter Tagliolini",
        description: "Hand-rolled egg pasta tossed in emulsified organic mountain butter, showered with shaving of fresh Umbrian black winter truffles.",
        price: "$38.00",
        translations: {
          es: {
            name: "Tagliolini de Mantequilla de Trufa",
            description: "Pasta de huevo enrollada a mano en emulsión de mantequilla de montaña orgánica, cubierta con lascas de trufas negras de invierno frescas de Umbría."
          },
          ja: {
            name: "厳選黒トリュフのタリオリーニ",
            description: "毎朝手打ちする極細卵麺タリオリーニを、オーガニック高原バターのエマルジョン（乳化ソース）で和え、イタリア・ウンブリア産の高級黒冬トリュフを目の前で贅沢に削り出して。"
          },
          fr: {
            name: "Tagliolini au Beurre de Truffe",
            description: "Pâtes fraîches maison liées au beurre de montagne biologique, parsemées de copeaux de truffe noire d'hiver fraîche d'Ombrie."
          },
          de: {
            name: "Trüffelbutter-Tagliolini",
            description: "Handgerollte Eiernudeln geschwenkt in emulgierter Bio-Alpenbutter, garniert mit frisch gehobeltem umbrischen schwarzen Wintertrüffel."
          },
          vi: {
            name: "Mì Ý Sốt Bơ Nấm Trũi Đen",
            description: "Mì trứng dẹt tagliolini cán tay ngập trong bơ hữu cơ núi nhuyễn mịn, phủ những lát nấm trũi đen Umbria thu hoạch mùa đông thơm lừng."
          },
          it: {
            name: "Tagliolini al Burro Tartufato",
            description: "Pasta all'uovo tirata a mano saltata in burro di montagna biologico emulsionato, arricchita con scaglie di tartufo nero pregiato dell'Umbria."
          }
        }
      },
      {
        id: "d2",
        category: "Dolci (Desserts)",
        name: "Deconstructed Espresso Tiramisu",
        description: "Whipped organic mascarpone cream, espresso-soaked ladyfingers, Marsala wine syrup, finished with premium Dutch cocoa dust.",
        price: "$14.00",
        translations: {
          es: {
            name: "Tiramisú de Espresso Desestructurado",
            description: "Crema batida de mascarpone orgánico, bizcochos soletilla empapados en espresso, sirope de vino Marsala, terminado con cacao holandés premium espolvoreado."
          },
          ja: {
            name: "大人のエスプレッソティラミス",
            description: "極上のオーガニックマスカルポーネクリーム、淹れたてエスプレッソをたっぷり染み込ませたビスコッティ、芳醇なマルサラワインのシロップ。ココアパウダーのアクセント。"
          },
          fr: {
            name: "Tiramisu Déstructuré à l'Espresso",
            description: "Crème fouettée de mascarpone biologique, biscuits à la cuillère imbibés d'un expresso serré, sirop de vin de Marsala et nuage de cacao hollandais."
          },
          de: {
            name: "Dekomponiertes Espresso-Tiramisu",
            description: "Aufgeschlagene Bio-Mascarpone-Creme, in Espresso getränkter Löffelbiskuit, Marsala-Weinsirup, vollendet mit edlem holländischen Kakao."
          },
          vi: {
            name: "Bánh Tiramisu Cà Phê Espresso",
            description: "Kem mascarpone hữu cơ đánh bông, bánh sampa tẩm espresso đậm đặc, si rô rượu Marsala, rắc bột ca cao Hà Lan hảo hạng."
          },
          it: {
            name: "Tiramisù Scomposto all'Espresso",
            description: "Crema vellutata di mascarpone biologico, savoiardi imbevuti di caffè espresso, riduzione di vino Marsala e polvere di cacao olandese."
          }
        }
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Chef Jean-Luc Moreau",
    role: "Owner & Head Chef",
    restaurant: "L'Etoile d'Or Bistro",
    location: "New York / Paris",
    avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=150&h=150&q=80",
    quote: "Standard translation tools translated our classic 'Steak Frites with Béarnaise sauce' to literal words that sounded like a hardware store order in Japanese. GastroWin translated it flawlessly, understanding the culinary soul. Our global tourists are thrilled!",
    rating: 5
  },
  {
    id: "t2",
    name: "Elena Rostova",
    role: "Operations Director",
    restaurant: "Vasilis Greek Taverna",
    location: "Miami, FL",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    quote: "Preserving our menu's bespoke hand-lettered layout was our main concern. GastroWin's design preservation was magic—it overlayed the Japanese and Spanish translations precisely in the same coordinates with matching typography styles.",
    rating: 5
  },
  {
    id: "t3",
    name: "Kenji Sato",
    role: "General Manager",
    restaurant: "Onyx Modern Izakaya",
    location: "San Francisco, CA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    quote: "We update our menu weekly based on seasonal ingredients. Translating it manually was costing us $500/week and days of delay. Now we upload a PDF, select languages, and download print-ready PDFs in 25 seconds flat. Revolutionary.",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: {
      en: "Operations & POS Integration",
      vi: "Vận hành & Tích hợp POS",
      de: "Betrieb & POS-Integration"
    },
    question: "How does GastroWin integrate with our existing POS, hardware, and kitchen displays during onboarding?",
    answer: "GastroWin provides instant plug-and-play synchronization with major POS platforms, thermal receipt printers, and Kitchen Display Systems (KDS). Our operational engineers assist with your store layout setup, hardware configuration, and live deployment within 24 hours without interrupting your daily service."
  },
  {
    id: "faq-2",
    category: {
      en: "HR & Automated Payroll",
      vi: "Nhân sự & Tính lương tự động",
      de: "HR & Automatisierte Lohnabrechnung"
    },
    question: "How do recruitment screening, smart shift scheduling, and automated payroll work together?",
    answer: "The AI engine matches staff availability with busy shift demands, tracks attendance via GPS/QR time-clocking, and screens chef/server CVs. Working hours, overtime, and tip allocations automatically sync directly into the payroll calculator, eliminating manual spreadsheets and shift conflicts."
  },
  {
    id: "faq-3",
    category: {
      en: "AI Menu & QR Ordering",
      vi: "Thực đơn AI & Gọi món QR",
      de: "KI-Menü & QR-Bestellung"
    },
    question: "How does AI Menu Translation preserve our original design layout while enabling multi-language QR ordering?",
    answer: "Our culinary AI scans your PDF/image menu, detects exact layout geometry, fonts, and colors, and translates dish descriptions into 42+ languages while preserving 100% of your design bounds. Simultaneously, it generates dynamic QR menus for multi-language table ordering connected straight to your kitchen."
  },
  {
    id: "faq-4",
    category: {
      en: "Trial & Compatibility",
      vi: "Dùng thử & Tương thích",
      de: "Testversion & Kompatibilität"
    },
    question: "Can we try GastroWin for free before committing, and what is included in the demo period?",
    answer: "Yes, we offer a 14-day full-access free trial with no credit card required. You get complete access to all modules—HR Recruitment, AI Menu Translation, POS Sync, and Analytics—along with a guided 1-on-1 walkthrough with an F&B operations specialist."
  },
  {
    id: "faq-5",
    category: {
      en: "Pricing & Enterprise Scale",
      vi: "Chi phí & Quản lý chuỗi",
      de: "Preise & Skalierbarkeit"
    },
    question: "How are subscription plans structured, and how does GastroWin support multi-location restaurant chains?",
    answer: "GastroWin offers transparent monthly and discounted annual plans (Basic, Gold, Diamond). Multi-location chains can manage inventory, staff permissions, regional menus, and consolidated revenue analytics from a single centralized enterprise dashboard with bank-grade cloud security."
  }
];
