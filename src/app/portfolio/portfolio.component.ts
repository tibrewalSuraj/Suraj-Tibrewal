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
  range?: string;
  role?: string;
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
    'Angular Developer with 4+ years of experience in building scalable, high-performance web applications using Angular 14–17, TypeScript, PrimeNG, and RxJS. Proven ability to create reusable components, integrate REST APIs, optimize UI performance, and deliver enterprise-level dashboards in Agile environments.';

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
        'Built enterprise analytics dashboards for large-scale datasets on https://app.datagardener.com/.',
        'Delivered features used by 85+ paid users with a strong focus on performance and reliability.',
        'Implemented dynamic tables with filtering, sorting, pagination, and lazy loading.',
        'Optimized UI rendering for faster performance and a better user experience.',
        'Ensured responsive design and cross-browser compatibility.',
      ],
    },
    // {
    //   company: 'DataGardener Web Application · DataGardener Solutions Ltd',
    //   // range: 'March 2022 – Present',
    //   role: 'Angular Frontend Development',
    //   points: [
    //     'Built enterprise analytics dashboards for large-scale datasets on https://app.datagardener.com/.',
    //     'Delivered features used by 85+ paid users with a strong focus on performance and reliability.',
    //     'Implemented dynamic tables with filtering, sorting, pagination, and lazy loading.',
    //     'Optimized UI rendering for faster performance and a better user experience.',
    //     'Ensured responsive design and cross-browser compatibility.',
    //   ],
    // },
    {
      company: 'UM Admin Panel · DataGardener Solutions Ltd',
      // range: 'March 2022 – Present',
      // role: 'Angular Frontend Development',
      points: [
        'Built a secure admin panel for internal system management and configuration.',
        'Implemented role-based access and admin-specific functionalities.',
        'Developed scalable and maintainable Angular architecture.',
        'Integrated REST APIs for managing users, permissions, and system data.',
      ],
    },
    {
      company: 'Connect Plus Application',
      // range: 'March 2022 – Present',
      // role: 'Frontend Developer Contribution',
      points: [
        'Contributed to the development of a web-based application using Angular and TypeScript.',
        'Developed and enhanced UI components for improved user experience.',
        'Integrated REST APIs and handled asynchronous operations using RxJS.',
        'Fixed UI bugs and improved application stability.',
        'Worked collaboratively in an Agile development environment.',
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
    { degree: 'MCA', institution: 'Magadh University', period: '2016–2021' },
    { degree: 'BCA', institution: 'Magadh University', period: '2013–2016' },
    { degree: '10+2', institution: 'CBSE & BSEB Patna', period: '2011–2013' },
  ];

  contactName = '';
  contactEmailForm = '';
  contactMessage = '';

  readonly formSent = signal(false);
  readonly formSending = signal(false);
  readonly formError = signal('');

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  async submitContact(): Promise<void> {
    if (!this.contactName.trim() || !this.contactEmailForm.trim() || !this.contactMessage.trim()) {
      return;
    }

    this.formSending.set(true);
    this.formError.set('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${this.contactEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: this.contactName.trim(),
          email: this.contactEmailForm.trim(),
          message: this.contactMessage.trim(),
          _subject: `Portfolio contact from ${this.contactName.trim()}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to send message');
      }

      this.formSent.set(true);
      this.contactName = '';
      this.contactEmailForm = '';
      this.contactMessage = '';
      window.setTimeout(() => this.formSent.set(false), 5000);
    } catch {
      this.formError.set('Message could not be sent right now. Please email me directly.');
    } finally {
      this.formSending.set(false);
    }
  }

  openProject(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
