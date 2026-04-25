/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Artifact {
  title: string;
  description: string;
  image: string;
  originLink: string;
}

export interface Exhibit {
  id: string;
  title: string;
  era: string;
  category: string;
  image: string;
  summary: string;
  description: string;
  fact: string;
  matters: string;
  highlights: string[];
  tags: string[];
  externalLink?: string;
  artifact?: Artifact;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  category: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
