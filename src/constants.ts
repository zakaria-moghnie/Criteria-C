/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Exhibit, TimelineEvent, QuizQuestion } from './types';

export const EXHIBITS: Exhibit[] = [
  {
    id: "ancient-egypt",
    title: "The Pharaohs of the Nile",
    era: "3100 – 30 BCE",
    category: "Ancient World",
    image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1200",
    summary: "One of history's longest-lasting civilizations, built on the foundations of the Nile River.",
    description: "Ancient Egypt flourished for over 3,000 years, creating a culture of monumental architecture, divine kingship, and complex religious practices.",
    fact: "The Great Pyramid of Giza was the tallest man-made structure on Earth for over 3,800 years.",
    matters: "Egyptians developed hieroglyphics, monumental stone architecture, and sophisticated irrigation.",
    highlights: [
      "Invention of Hieroglyphic writing",
      "Sophisticated flood management",
      "Solar calendar (365 days)",
      "Pioneering surgical techniques",
      "The Great Pyramids"
    ],
    tags: ["Antiquity", "Architecture", "Engineering", "Religion"],
    externalLink: "https://en.wikipedia.org/wiki/Ancient_Egypt",
    artifact: {
      title: "The Rosetta Stone",
      description: "The world-famous key to Egyptian hieroglyphs, a granodiorite stele that changed our understanding of history forever.",
      image: "https://images.unsplash.com/photo-1585671191566-285e6834114d?auto=format&fit=crop&w=800",
      originLink: "https://www.britishmuseum.org/collection/egypt/rosetta-stone"
    }
  },
  {
    id: "roman-empire",
    title: "Pax Romana: The Roman Legacy",
    era: "27 BCE – 476 CE",
    category: "Classical Era",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200",
    summary: "The sprawling empire that unified Europe, North Africa, and the Middle East.",
    description: "Rome transformed from a small Italian city-state into the dominant power of the Mediterranean.",
    fact: "Roman roads were so well-built that many are still used as foundations today.",
    matters: "The Roman legal code is the foundation for much of Modern Western law.",
    highlights: [
      "Development of Concrete",
      "The Twelve Tables of Law",
      "400,000km road network",
      "Advanced hydraulic aqueducts",
      "Standardization of currency"
    ],
    tags: ["Politics", "Law", "Empire", "Civil Engineering"],
    externalLink: "https://en.wikipedia.org/wiki/Roman_Empire",
    artifact: {
      title: "Legionary Galea",
      description: "The iconic iron and bronze helmet worn by Roman legionaries, designed for maximum visibility and protection during close-quarters combat.",
      image: "https://images.unsplash.com/photo-1599408162162-8cc606394200?auto=format&fit=crop&w=800",
      originLink: "https://en.wikipedia.org/wiki/Galea_(helmet)"
    }
  },
  {
    id: "ancient-china",
    title: "The Dynastic Middle Kingdom",
    era: "2070 BCE – 220 CE",
    category: "Ancient World",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200",
    summary: "The birthplace of some of humanity's most critical technological breakthroughs.",
    description: "Spanning thousands of years, the dynasties of China created a stable, centralized bureaucracy.",
    fact: "The Great Wall of China is the largest man-made structure in the world.",
    matters: "China's 'Four Great Inventions' fundamentally altered world history.",
    highlights: [
      "Invention of Paper",
      "The Silk Road trade network",
      "Porcelain and Silk production",
      "Meritocratic Civil Service",
      "The Magnetic Compass"
    ],
    tags: ["Innovation", "Trade", "Philosophy", "Asia"],
    externalLink: "https://en.wikipedia.org/wiki/Ancient_China",
    artifact: {
      title: "The Terracotta Army",
      description: "One of the thousands of unique life-sized clay soldiers buried to protect the First Emperor of China in the afterlife.",
      image: "https://images.unsplash.com/photo-1583091916310-754668350325?auto=format&fit=crop&w=800",
      originLink: "https://en.wikipedia.org/wiki/Terracotta_Army"
    }
  },
  {
    id: "renaissance",
    title: "The Italian Rebirth",
    era: "14th – 17th Century",
    category: "Early Modern",
    image: "https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?auto=format&fit=crop&w=1200",
    summary: "A surge of creativity and humanism that bridged the gap between the Middle Ages and Modernity.",
    description: "The Renaissance began in Florence, fueled by a rediscovery of Classical scholarship.",
    fact: "Da Vinci conceptualized helicopters and tanks 500 years before they were built.",
    matters: "The Renaissance moved the focus of human life from the divine to the human.",
    highlights: [
      "Mathematical Linear Perspective",
      "Gutenberg's Printing Press",
      "The Sistine Chapel",
      "The Heliocentric model",
      "Modern banking and trade"
    ],
    tags: ["Art", "Science", "Humanism", "Europe"],
    externalLink: "https://en.wikipedia.org/wiki/Renaissance",
    artifact: {
      title: "Galileo's Telescope",
      description: "The instrument that changed the world, allowing Galileo to see the heavens and prove the Earth was not the center of the universe.",
      image: "https://images.unsplash.com/photo-1516331138075-f3ad1674828e?auto=format&fit=crop&w=800",
      originLink: "https://en.wikipedia.org/wiki/Galileo%27s_telescope"
    }
  },
  {
    id: "ancient-greece",
    title: "The Cradle of Democracy",
    era: "800 – 146 BCE",
    category: "Ancient World",
    image: "https://images.unsplash.com/photo-1516035054744-d474c5209db5?auto=format&fit=crop&w=1200",
    summary: "The thinkers who defined Western philosophy and political systems.",
    description: "Ancient Greece gave birth to democracy, Western philosophy, and the Olympic Games.",
    fact: "The word 'democracy' comes from the Greek 'demos' (people) and 'kratos' (rule).",
    matters: "Greek philosophy provided the framework for modern scientific inquiry.",
    highlights: [
      "Invention of Olympic Games",
      "The Socratic Method",
      "Epic poetry of Homer",
      "Architectural orders (Doric)",
      "First democratic assembly"
    ],
    tags: ["Philosophy", "Politics", "Sports", "Art"],
    externalLink: "https://en.wikipedia.org/wiki/Ancient_Greece",
    artifact: {
      title: "Classical Greek Bust",
      description: "A marble masterpiece representing the idealized beauty and philosophical focus of Ancient Greek sculpture.",
      image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=800",
      originLink: "https://en.wikipedia.org/wiki/Ancient_Greek_sculpture"
    }
  },
  {
    id: "viking-age",
    title: "Seafarers of the North",
    era: "793 – 1066 CE",
    category: "Medieval",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200",
    summary: "Norse explorers who mapped the North Atlantic centuries before Columbus.",
    description: "The Vikings were sophisticated traders, storytellers, and shipbuilders.",
    fact: "Vikings discovered North America 500 years before Columbus arrived.",
    matters: "Norse trade routes connected disparate parts of the medieval world.",
    highlights: [
      "Mastery of Longship design",
      "Discovery of Newfoundland",
      "Oral Sagas and Runes",
      "Advanced metalwork",
      "First early parliaments"
    ],
    tags: ["Exploration", "Norse", "Trade", "Warfare"],
    externalLink: "https://en.wikipedia.org/wiki/Vikings",
    artifact: {
      title: "Oseberg Ship Prow",
      description: "An intricate dragon-headed prow from the Oseberg ship, symbolizing the legendary craftsmanship and seafaring terror of the Viking age.",
      image: "https://images.unsplash.com/photo-1563884814920-80de02a00c6d?auto=format&fit=crop&w=800",
      originLink: "https://en.wikipedia.org/wiki/Oseberg_Ship"
    }
  },
  {
    id: "maya-civilization",
    title: "Astronomy of the Jungle",
    era: "2000 BCE – 1500 CE",
    category: "Ancient World",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200",
    summary: "The Mesoamerican masters of mathematics, calendars, and writing.",
    description: "The Maya built magnificent cities with soaring pyramids in the rainforests.",
    fact: "The Maya independently developed the concept of 'zero'.",
    matters: "Their highly accurate calendar systems remain a marvel of science.",
    highlights: [
      "Chichen Itza Pyramid",
      "Long Count calendar",
      "The concept of Zero",
      "Hieroglyphic writing system",
      "Complex trade networks"
    ],
    tags: ["Astronomy", "Math", "Pyramids", "Americas"],
    externalLink: "https://en.wikipedia.org/wiki/Maya_civilization",
    artifact: {
      title: "Jade Funerary Mask",
      description: "A stunning mask made of jade mosaics, found in the tomb of a Maya king, representing the cycle of life, death, and resurrection.",
      image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=800",
      originLink: "https://en.wikipedia.org/wiki/Jade_usage_in_Maya_culture"
    }
  },
  {
    id: "space-age",
    title: "Voyaging into the Void",
    era: "1957 – Present",
    category: "Modern History",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200",
    summary: "Humanity's greatest escape: the quest to explore other worlds.",
    description: "Starting with Sputnik, the Space Age represents humanity's transition to space explorers.",
    fact: "Apollo 11 computers had less power than a digital watch.",
    matters: "Space exploration continues to push the boundaries of materials science.",
    highlights: [
      "Sputnik 1: First satellite",
      "Apollo 11 Moon Landing",
      "International Space Station",
      "The Voyager Probes",
      "Reusable rocket technology"
    ],
    tags: ["Science", "Space", "Modern", "Discovery"],
    externalLink: "https://en.wikipedia.org/wiki/Space_Age",
    artifact: {
      title: "NASA A7L Space Suit",
      description: "The mobile life-support system that allowed Neil Armstrong and Buzz Aldrin to walk and work on the lunar surface.",
      image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=800",
      originLink: "https://en.wikipedia.org/wiki/Apollo/Skylab_A7L"
    }
  }
];

export const TIMELINE: TimelineEvent[] = [
  { id: "1", year: "3100 BCE", title: "Unification of Egypt", description: "King Narmer unites Upper and Lower Egypt.", category: "Political" },
  { id: "2", year: "214 BCE", title: "Great Wall", description: "Qin Shi Huang begins joining fortifications.", category: "Engineering" },
  { id: "3", year: "44 BCE", title: "Death of Caesar", description: "Turning point to Rome's Empire.", category: "Political" },
  { id: "4", year: "105 CE", title: "Paper Invention", description: "Cai Lun presents paper in China.", category: "Technology" },
  { id: "5", year: "1440 CE", title: "Printing Press", description: "Gutenberg enables mass spread of info.", category: "Technology" },
  { id: "6", year: "1769 CE", title: "Steam Engine", description: "James Watt improved steam engine, launching Industrial Revolution.", category: "Industry" }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "Which metal primarily unified the Roman Empire?",
    options: ["Iron", "Bronze", "Steel", "Aluminum"],
    correctIndex: 0,
    explanation: "Rome's transition to iron weaponry gave their legions a significant advantage."
  },
  {
    id: "q2",
    question: "Which dynasty invented paper?",
    options: ["Ming", "Han", "Tang", "Qin"],
    correctIndex: 1,
    explanation: "Cai Lun of the Han Dynasty is traditionally cited as the inventor."
  },
  {
    id: "q3",
    question: "What does 'Renaissance' translate to?",
    options: ["Rebirth", "Revolution", "Rule", "Reconciliation"],
    correctIndex: 0,
    explanation: "Derived from French for 'rebirth'."
  },
  {
    id: "q4",
    question: "Which civilization invented zero and a 365-day calendar?",
    options: ["Aztec", "Inca", "Maya", "Olmec"],
    correctIndex: 2,
    explanation: "The Maya were incredible astronomers who developed these systems."
  }
];
