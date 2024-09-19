import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslaterService {
  constructor() {}

  headerDEOne() {
    let navAbout = document.getElementById('navAbout') as HTMLElement;
    let navSkill = document.getElementById('navSkill') as HTMLElement;
    let navPort = document.getElementById('navPort') as HTMLElement;
    let navHallo = document.getElementById('navHallo') as HTMLElement;
    let firstPartTitle = document.getElementById(
      'firstPartTitle'
    ) as HTMLElement;
    let firstPartScrollDown = document.getElementById(
      'firstPartScrollDown'
    ) as HTMLElement;
    let AboutMeTitle = document.getElementById('AboutMeTitle') as HTMLElement;
    let AboutMeDescription = document.getElementById(
      'AboutMeDescription'
    ) as HTMLElement;
    let AboutMeDescriptionTwo = document.getElementById(
      'AboutMeDescriptionTwo'
    ) as HTMLElement;
    let AboutMeLocation = document.getElementById(
      'AboutMeLocation'
    ) as HTMLElement;
    let AboutMeRemote = document.getElementById('AboutMeRemote') as HTMLElement;
    let lassReden = document.getElementById('lassReden') as HTMLElement;
    let skillsSkills = document.getElementById('skillsSkills') as HTMLElement;
    let skillsLearn = document.getElementById('skillsLearn') as HTMLElement;
    let skillsContact = document.getElementById('skillsContact') as HTMLElement;
    let sillsLearnTwo = document.getElementById('sillsLearnTwo') as HTMLElement;
    let projectIntro = document.getElementById('projectIntro') as HTMLElement;

    navAbout.innerHTML = `Über mich`;
    navSkill.innerHTML = `Meine Skills`;
    navPort.innerHTML = `Portfolio`;
    navHallo.innerHTML = `Hallo!`;
    firstPartTitle.innerHTML = `Frontend <br> Entwickler`;
    firstPartScrollDown.innerHTML = `Scroll <br> runter`;
    AboutMeTitle.innerHTML = `Über mich`;
    AboutMeDescription.innerHTML = `Ich bin ein Front-End-Entwickler aus Hamburg. Ich helfe Designern und Unternehmen dabei, ihre Ideen in die Realität umzusetzen. Kreativität und logisches Denken sind Fähigkeiten, die ich entwickelt habe, um Ideen in Qualitative Produkte zu verwandeln.`;
    AboutMeDescriptionTwo.innerHTML = `Wenn du glaubst, dass ich gut zu deinen Projekten passen würde, kontaktiere mich!`;
    AboutMeLocation.innerHTML = `Aus Hamburg`;
    AboutMeRemote.innerHTML = `Offen für Remote-Arbeit`;
    lassReden.innerHTML = `Lass reden`;
    skillsSkills.innerHTML = `Meine Skills`;
    skillsLearn.innerHTML = `Du siehst nicht den benötigten Skill?`;
    skillsContact.innerHTML = `Kontaktiere mich!`;
    sillsLearnTwo.innerHTML = `Ich bin immer bereit zu lernen!`;
    projectIntro.innerHTML = `Entdecke hier eine Auswahl meiner Arbeit - Interagiere mit Projekten, um meine Fähigkeiten in Aktion zu sehen`;
  }

  headerEng() {
    let navAbout = document.getElementById('navAbout') as HTMLElement;
    let navSkill = document.getElementById('navSkill') as HTMLElement;
    let navPort = document.getElementById('navPort') as HTMLElement;
    let navHallo = document.getElementById('navHallo') as HTMLElement;
    let firstPartTitle = document.getElementById(
      'firstPartTitle'
    ) as HTMLElement;
    let firstPartScrollDown = document.getElementById(
      'firstPartScrollDown'
    ) as HTMLElement;
    let AboutMeTitle = document.getElementById('AboutMeTitle') as HTMLElement;
    let AboutMeDescription = document.getElementById(
      'AboutMeDescription'
    ) as HTMLElement;
    let AboutMeDescriptionTwo = document.getElementById(
      'AboutMeDescriptionTwo'
    ) as HTMLElement;
    let AboutMeLocation = document.getElementById(
      'AboutMeLocation'
    ) as HTMLElement;
    let AboutMeRemote = document.getElementById('AboutMeRemote') as HTMLElement;
    let lassReden = document.getElementById('lassReden') as HTMLElement;
    let skillsSkills = document.getElementById('skillsSkills') as HTMLElement;
    let skillsLearn = document.getElementById('skillsLearn') as HTMLElement;
    let skillsContact = document.getElementById('skillsContact') as HTMLElement;
    let sillsLearnTwo = document.getElementById('sillsLearnTwo') as HTMLElement;
    let projectIntro = document.getElementById('projectIntro') as HTMLElement;

    navAbout.innerHTML = `About me`;
    navSkill.innerHTML = `My skills`;
    navPort.innerHTML = `Portfolio`;
    navHallo.innerHTML = `Say Hi!`;
    firstPartTitle.innerHTML = `Frontend <br> Developer`;
    firstPartScrollDown.innerHTML = `Scroll <br> Down`;
    AboutMeTitle.innerHTML = `About me`;
    AboutMeDescription.innerHTML = `I am a Front-end deverloper from Hamburg, Germany. I help designers and companies to bring their
                    ideas to
                    real life. Creativity and logical thinking are skills that I have developed to connect ideas into
                    quality products.`;
    AboutMeDescriptionTwo.innerHTML = `If you think I’d be a good match for your projects, contact me!`;
    AboutMeLocation.innerHTML = `Based in Hamburg`;
    AboutMeRemote.innerHTML = `Open to work Remote`;
    lassReden.innerHTML = `Let's talk`;
    skillsSkills.innerHTML = `My skills`;
    skillsLearn.innerHTML = `Don’t see the skill you need?`;
    skillsContact.innerHTML = `Contact me`;
    sillsLearnTwo.innerHTML = `I’m always ready to learn!`;
    projectIntro.innerHTML = `Explore a selection of my work here - Interact with projects to see my skills in action`;
  }

  headerDETwo() {
    let descriptionJoin = document.getElementById(
      'descriptionJoin'
    ) as HTMLElement;
    let descriptionElPolloLoco = document.getElementById(
      'descriptionElPolloLoco'
    ) as HTMLElement;
    let descriptionPortfolio = document.getElementById(
      'descriptionPortfolio'
    ) as HTMLElement;
    let footerHey = document.getElementById('footerHey') as HTMLElement;
    let footerTitle = document.getElementById('footerTitle') as HTMLElement;
    let footerSeconTitle = document.getElementById(
      'footerSeconTitle'
    ) as HTMLElement;
    let footerImprint = document.getElementById('footerImprint') as HTMLElement;

    descriptionJoin.innerHTML = `Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstelle und organisiere Aufgaben per Drag & Drop-Funktionen, weise Benutzer und Kategorien hinzu`;
    descriptionElPolloLoco.innerHTML = `Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe beim Finden von Münzen und Flaschen, um gegen die verrückten Hühner anzukommen`;
    descriptionPortfolio.innerHTML = `Ein Schaufenster meiner Projekte und Fähigkeiten, die ich mit modernen Webtechnologien erstellt habe. Merkmale Responsive Design, interaktive Elemente und reibungslose Navigation für ein ansprechendes Nutzererlebnis. Demonstriert die Beherrschung von Angular, TypeScript, HTML, CSS`;
    footerHey.innerHTML = `Hey!`;
    footerTitle.innerHTML = `Möchtest du ein Projekt besprechen?`;
    footerSeconTitle.innerHTML = `Sag hallo! Lass uns deine Ideen besprechen und verwirklichen`;
    footerImprint.innerHTML = `Impressum`;
  }
  headerEngTwo() {
    let descriptionJoin = document.getElementById(
      'descriptionJoin'
    ) as HTMLElement;
    let descriptionElPolloLoco = document.getElementById(
      'descriptionElPolloLoco'
    ) as HTMLElement;
    let descriptionPortfolio = document.getElementById(
      'descriptionPortfolio'
    ) as HTMLElement;
    let footerHey = document.getElementById('footerHey') as HTMLElement;
    let footerTitle = document.getElementById('footerTitle') as HTMLElement;
    let footerSeconTitle = document.getElementById(
      'footerSeconTitle'
    ) as HTMLElement;
    let footerImprint = document.getElementById('footerImprint') as HTMLElement;

    descriptionJoin.innerHTML = `Task Manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories`;
    descriptionElPolloLoco.innerHTML = `A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and Salsa bottles to fight against the crazy Chickens`;
    descriptionPortfolio.innerHTML = `A showcase of my projects and skills built with modern web technologies. Features responsive design, interactive elements, and smooth navigation to provide an engaging user experience. Demonstrates proficiency in Angular, TypeScript, HTML, CSS`;
    footerHey.innerHTML = `Say Hi!`;
    footerTitle.innerHTML = `Want to discuss a new project?`;
    footerSeconTitle.innerHTML = `Say hello! let's discuss your ideas and make it happen`;
    footerImprint.innerHTML = `Imprint`;
  }
}
