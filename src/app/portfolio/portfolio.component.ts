import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimeTemplate } from 'primeng/api';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { InputText } from 'primeng/inputtext';
import { Tag } from 'primeng/tag';
import { Textarea } from 'primeng/textarea';
import { Timeline } from 'primeng/timeline';

export interface SkillItem {
  name: string;
  icon: string;
}

export interface ExperienceItem {
  company: string;
  range: string;
  role: string;
  points: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Button,
    Card,
    Tag,
    Timeline,
    InputText,
    Textarea,
    PrimeTemplate,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  host: { class: 'portfolio-host' },
})
export class PortfolioComponent {
  readonly year = new Date().getFullYear();

  readonly developerName = 'Suraj Tibrewal';
  readonly heroTagline = 'Angular Developer | PrimeNG | RxJS | Performance Optimization';
  readonly heroLocationLine = 'Delhi, India';
  readonly heroPhoto =
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=720&q=80';
  readonly cvHref = '/cv.pdf';

  readonly contactEmail = 'suraj.tibrewal6@gmail.com';
  readonly contactPhoneTel = '+918102880733';
  readonly contactPhoneDisplay = '+91 81028 80733';

  readonly professionalSummary =
    'Angular Developer with 3+ years of experience in building scalable, high-performance web applications using Angular 14–17, TypeScript, PrimeNG, and RxJS. Proven ability to create reusable components, integrate REST APIs, optimize UI performance, and deliver enterprise-level dashboards in Agile environments.';

  readonly heroLead =
    'I build enterprise Angular applications with reusable components, REST/RxJS integration, and performance-tuned dashboards—shipping quality UI in Agile teams.';

  readonly socials = [
    { icon: 'pi pi-github', label: 'GitHub', href: 'https://github.com/tibrewalSuraj' },
    { icon: 'pi pi-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/suraj-tibrewal/' },
    { icon: 'pi pi-twitter', label: 'Twitter', href: 'https://x.com/TibrewalSuraj' },
  ] as const;

  readonly aboutStats = [
    { label: 'Experience', value: '4+', detail: 'Years with Angular & enterprise UIs' },
    { label: 'Current role', value: 'Angular', detail: 'DataGardener · Tecdune Services LLP' },
    { label: 'Location', value: 'Delhi', detail: 'India · Remote-friendly' },
  ] as const;

  readonly skills: SkillItem[] = [
    { name: 'Angular (14–17)', icon: 'pi pi-bolt' },
    { name: 'TypeScript', icon: 'pi pi-code' },
    { name: 'JavaScript (ES6+)', icon: 'pi pi-code' },
    { name: 'PrimeNG', icon: 'pi pi-th-large' },
    { name: 'Angular Material', icon: 'pi pi-table' },
    { name: 'HTML5', icon: 'pi pi-code' },
    { name: 'CSS3 / SCSS', icon: 'pi pi-palette' },
    { name: 'RxJS', icon: 'pi pi-sync' },
    { name: 'REST APIs', icon: 'pi pi-server' },
    { name: 'Git', icon: 'pi pi-github' },
    { name: 'Jira', icon: 'pi pi-list' },
    { name: 'Responsive design', icon: 'pi pi-mobile' },
    { name: 'Agile / Scrum', icon: 'pi pi-users' },
  ];

  readonly skillsSummaryShort =
    'Angular (14–17), TypeScript, JavaScript (ES6+), PrimeNG, Angular Material, HTML5…';

  readonly skillsSummaryFull =
    'Angular (14–17), TypeScript, JavaScript (ES6+), PrimeNG, Angular Material, HTML5, CSS3, SCSS, RxJS, REST APIs, Git, Jira, responsive design, and Agile/Scrum.';

  private readonly skillsPreviewLimit = 6;

  readonly skillsSectionExpanded = signal(false);

  readonly visibleSkills = computed(() => {
    if (this.skillsSectionExpanded() || this.skills.length <= this.skillsPreviewLimit) {
      return this.skills;
    }
    return this.skills.slice(0, this.skillsPreviewLimit);
  });

  readonly showSkillsReadMore = computed(
    () =>
      this.skills.length > this.skillsPreviewLimit ||
      this.skillsSummaryFull.length > this.skillsSummaryShort.length,
  );

  toggleSkillsReadMore(): void {
    this.skillsSectionExpanded.update((v) => !v);
  }

  readonly experience: ExperienceItem[] = [
    {
      company: 'Tecdune Services LLP · DataGardener Solutions Ltd',
      range: 'March 2022 – Present',
      role: 'Angular Frontend Developer',
      points: [
        'Developed and maintained Angular 14–17 based enterprise applications.',
        'Built reusable components, reducing development time by ~25%.',
        'Integrated REST APIs using RxJS and Observables.',
        'Implemented search, filter, pagination, and lazy loading.',
        'Optimized UI performance, improving page load by ~30%.',
        'Resolved 100+ UI and functional bugs.',
        'Delivered responsive UI with PrimeNG and cross-browser compatibility.',
      ],
    },
  ];

  readonly projects: ProjectItem[] = [
    {
      title: 'DataGardener Web Application',
      description:
        'Enterprise web app with responsive dashboards and analytics UI. Handled large datasets with optimized rendering, search, filters, and lazy-loaded modules.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tags: ['Angular', 'TypeScript', 'PrimeNG', 'RxJS', 'REST APIs'],
      link: 'https://datagardener.com',
    },
  ];

  readonly education: EducationItem[] = [
    { degree: 'MCA', institution: 'Magadh University', period: '2019–2021' },
    { degree: 'BCA', institution: 'Magadh University', period: '2013–2016' },
    { degree: '10+2', institution: 'CBSE & BSEB Patna', period: '2011–2013' },
  ];

  contactName = '';
  contactEmailForm = '';
  contactMessage = '';

  readonly formSent = signal(false);

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  submitContact(): void {
    if (!this.contactName.trim() || !this.contactEmailForm.trim() || !this.contactMessage.trim()) {
      return;
    }
    this.formSent.set(true);
    this.contactName = '';
    this.contactEmailForm = '';
    this.contactMessage = '';
    window.setTimeout(() => this.formSent.set(false), 5000);
  }

  openProject(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
