import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslaterService {
  constructor() {}

  private setInnerHTMLById(elementId: string, content: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = content;
    }
  }

  headerDEOne() {
    this.setInnerHTMLById('navAbout', 'Über mich');
    this.setInnerHTMLById('navSkill', 'Meine Skills');
    this.setInnerHTMLById('navPort', 'Portfolio');
    this.setInnerHTMLById('navHallo', 'Hallo!');
    this.setInnerHTMLById('firstPartTitle', 'Frontend <br> Entwickler');
    this.setInnerHTMLById('firstPartScrollDown', 'Scroll <br> runter');
    this.setInnerHTMLById('AboutMeTitle', 'Über mich');
    this.setInnerHTMLById(
      'AboutMeDescription',
      'Ich bin ein Front-End-Entwickler aus Hamburg. Ich helfe Designern und Unternehmen dabei, ihre Ideen in die Realität umzusetzen. Kreativität und logisches Denken sind Fähigkeiten, die ich entwickelt habe, um Ideen in qualitative Produkte zu verwandeln.'
    );
    this.setInnerHTMLById(
      'AboutMeDescriptionTwo',
      'Wenn du glaubst, dass ich gut zu deinen Projekten passen würde, kontaktiere mich!'
    );
    this.setInnerHTMLById('AboutMeLocation', 'Aus Hamburg');
    this.setInnerHTMLById('AboutMeRemote', 'Offen für Remote-Arbeit');
    this.setInnerHTMLById('lassReden', 'Lass reden');
    this.setInnerHTMLById('skillsSkills', 'Meine Skills');
    this.setInnerHTMLById(
      'skillsLearn',
      'Du siehst nicht den benötigten Skill?'
    );
    this.setInnerHTMLById('skillsContact', 'Kontaktiere mich!');
    this.setInnerHTMLById('sillsLearnTwo', 'Ich bin immer bereit zu lernen!');
    this.setInnerHTMLById(
      'projectIntro',
      'Entdecke hier eine Auswahl meiner Arbeit - Interagiere mit Projekten, um meine Fähigkeiten in Aktion zu sehen'
    );
  }

  headerEng() {
    this.setInnerHTMLById('navAbout', 'About me');
    this.setInnerHTMLById('navSkill', 'My skills');
    this.setInnerHTMLById('navPort', 'Portfolio');
    this.setInnerHTMLById('navHallo', 'Say Hi!');
    this.setInnerHTMLById('firstPartTitle', 'Frontend <br> Developer');
    this.setInnerHTMLById('firstPartScrollDown', 'Scroll <br> Down');
    this.setInnerHTMLById('AboutMeTitle', 'About me');
    this.setInnerHTMLById(
      'AboutMeDescription',
      'I am a Front-end developer from Hamburg, Germany. I help designers and companies to bring their ideas to real life. Creativity and logical thinking are skills that I have developed to connect ideas into quality products.'
    );
    this.setInnerHTMLById(
      'AboutMeDescriptionTwo',
      'If you think I’d be a good match for your projects, contact me!'
    );
    this.setInnerHTMLById('AboutMeLocation', 'Based in Hamburg');
    this.setInnerHTMLById('AboutMeRemote', 'Open to work Remote');
    this.setInnerHTMLById('lassReden', `Let's talk`);
    this.setInnerHTMLById('skillsSkills', 'My skills');
    this.setInnerHTMLById('skillsLearn', `Don’t see the skill you need?`);
    this.setInnerHTMLById('skillsContact', 'Contact me');
    this.setInnerHTMLById('sillsLearnTwo', 'I’m always ready to learn!');
    this.setInnerHTMLById(
      'projectIntro',
      'Explore a selection of my work here - Interact with projects to see my skills in action'
    );
  }

  headerDETwo() {
    this.setInnerHTMLById(
      'descriptionJoin',
      'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstelle und organisiere Aufgaben per Drag & Drop-Funktionen, weise Benutzer und Kategorien hinzu'
    );
    this.setInnerHTMLById(
      'descriptionElPolloLoco',
      'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe beim Finden von Münzen und Flaschen, um gegen die verrückten Hühner anzukommen'
    );
    this.setInnerHTMLById(
      'descriptionPortfolio',
      'Ein Schaufenster meiner Projekte und Fähigkeiten, die ich mit modernen Webtechnologien erstellt habe. Merkmale Responsive Design, interaktive Elemente und reibungslose Navigation für ein ansprechendes Nutzererlebnis. Demonstriert die Beherrschung von Angular, TypeScript, HTML, CSS'
    );
    this.setInnerHTMLById('footerHey', 'Hey!');
    this.setInnerHTMLById('footerTitle', 'Möchtest du ein Projekt besprechen?');
    this.setInnerHTMLById(
      'footerSeconTitle',
      'Sag hallo! Lass uns deine Ideen besprechen und verwirklichen'
    );
    this.setInnerHTMLById('footerImprint', 'Impressum');
  }

  headerEngTwo() {
    this.setInnerHTMLById(
      'descriptionJoin',
      'Task Manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories'
    );
    this.setInnerHTMLById(
      'descriptionElPolloLoco',
      'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and Salsa bottles to fight against the crazy Chickens'
    );
    this.setInnerHTMLById(
      'descriptionPortfolio',
      'A showcase of my projects and skills built with modern web technologies. Features responsive design, interactive elements, and smooth navigation to provide an engaging user experience. Demonstrates proficiency in Angular, TypeScript, HTML, CSS'
    );
    this.setInnerHTMLById('footerHey', 'Say Hi!');
    this.setInnerHTMLById('footerTitle', 'Want to discuss a new project?');
    this.setInnerHTMLById(
      'footerSeconTitle',
      "Say hello! let's discuss your ideas and make it happen"
    );
    this.setInnerHTMLById('footerImprint', 'Imprint');
  }
  headerEngThree() {
    this.setInnerHTMLById('imprintTitle', 'Imprint');
    this.setInnerHTMLById('generalInformationTitle', 'General information');
    this.setInnerHTMLById('website', 'Website: <a href="emirhan-kilic.de" target="_blank">emirhan-kilic.de</a>');
    this.setInnerHTMLById('serviceProvider', 'Name of the service provider: Emirhan Kilic');
    this.setInnerHTMLById('addressContactTitle', 'Address and contact');
    this.setInnerHTMLById('street', 'Minna-Bothe-Straße 5');
    this.setInnerHTMLById('city', '21614 Buxtehude');
    this.setInnerHTMLById('phone', 'phone: <a href="tel:015173065636">015173065636</a>');
    this.setInnerHTMLById('email', 'Email: <a href="mailto:emirhan_kilic@outlook.de">emirhan_kilic&#64;outlook.de</a>');
    this.setInnerHTMLById('liabilityLinksTitle', 'Liability for links');
    this.setInnerHTMLById(
      'liabilityLinksDescription',
      'Our website contains links to external third-party websites whose content we have no influence over. Therefore, we cannot accept any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages...'
    );
    this.setInnerHTMLById('liabilityContentTitle', 'Liability for content');
    this.setInnerHTMLById(
      'liabilityContentDescription',
      'The content of our website has been created with the greatest care. However, we cannot assume any liability for the accuracy, completeness and topicality of the content...'
    );
    this.setInnerHTMLById(
      'impressumGenerator',
      'Created by <a href="https://impressum-generator.info/" target="_blank">impressum-generator.info</a> - powered by <a href="https://abfindungshero.de/" target="_blank">abfindungshero.de</a>'
    );
  }
  
  headerDEThree() {
    this.setInnerHTMLById('imprintTitle', 'Impressum');
    this.setInnerHTMLById('generalInformationTitle', 'Allgemeine Informationen');
    this.setInnerHTMLById('website', 'Webseite: <a href="emirhan-kilic.de" target="_blank">emirhan-kilic.de</a>');
    this.setInnerHTMLById('serviceProvider', 'Name des Dienstanbieters: Emirhan Kilic');
    this.setInnerHTMLById('addressContactTitle', 'Adresse und Kontakt');
    this.setInnerHTMLById('street', 'Minna-Bothe-Straße 5');
    this.setInnerHTMLById('city', '21614 Buxtehude');
    this.setInnerHTMLById('phone', 'Telefon: <a href="tel:015173065636">015173065636</a>');
    this.setInnerHTMLById('email', 'E-Mail: <a href="mailto:emirhan_kilic@outlook.de">emirhan_kilic&#64;outlook.de</a>');
    this.setInnerHTMLById('liabilityLinksTitle', 'Haftung für Links');
    this.setInnerHTMLById(
      'liabilityLinksDescription',
      'Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen...'
    );
    this.setInnerHTMLById('liabilityContentTitle', 'Haftung für Inhalte');
    this.setInnerHTMLById(
      'liabilityContentDescription',
      'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen...'
    );
    this.setInnerHTMLById(
      'impressumGenerator',
      'Erstellt von <a href="https://impressum-generator.info/" target="_blank">impressum-generator.info</a> - powered by <a href="https://abfindungshero.de/" target="_blank">abfindungshero.de</a>'
    );
  }
  
  headerDEPolicy() {
    this.setInnerHTMLById('policyTitle', 'Datenschutzerklärung');
    this.setInnerHTMLById('policyLastUpdated', 'Zuletzt aktualisiert: 17. September 2024');
    this.setInnerHTMLById(
      'policyDescription',
      'Diese Datenschutzerklärung beschreibt unsere Richtlinien und Verfahren zur Erfassung, Nutzung und Offenlegung Ihrer Informationen, wenn Sie den Dienst nutzen, und informiert Sie über Ihre Datenschutzrechte und wie das Gesetz Sie schützt.'
    );
    this.setInnerHTMLById(
      'policyPersonalData',
      'Wir verwenden Ihre personenbezogenen Daten, um den Dienst bereitzustellen und zu verbessern. Durch die Nutzung des Dienstes stimmen Sie der Erfassung und Nutzung von Informationen in Übereinstimmung mit dieser Datenschutzerklärung zu. Diese Datenschutzerklärung wurde mit Hilfe des <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank">Privacy Policy Generator</a> erstellt.'
    );
    this.setInnerHTMLById('interpretationTitle', 'Interpretation und Definitionen');
    this.setInnerHTMLById('interpretationHeading', 'Interpretation');
    this.setInnerHTMLById(
      'interpretationDescription',
      'Die Wörter, bei denen der Anfangsbuchstabe großgeschrieben wird, haben die unten angegebenen Bedeutungen. Die folgenden Definitionen haben die gleiche Bedeutung, unabhängig davon, ob sie im Singular oder Plural erscheinen.'
    );
    this.setInnerHTMLById('definitionsHeading', 'Definitionen');
    this.setInnerHTMLById('definitionsDescription', 'Für die Zwecke dieser Datenschutzerklärung:');
    this.setInnerHTMLById('definitionAccount', '<strong>Konto</strong> bedeutet ein eindeutiges Konto, das für Sie erstellt wurde, um auf unseren Service oder Teile davon zuzugreifen.');
    this.setInnerHTMLById('definitionAffiliate', '<strong>Affiliate</strong> bedeutet ein Unternehmen, das eine Partei kontrolliert, von einer Partei kontrolliert wird oder unter gemeinsamer Kontrolle steht, wobei "Kontrolle" den Besitz von 50% oder mehr der Anteile, des Eigenkapitals oder anderer Wertpapiere bedeutet, die berechtigt sind, zur Wahl von Direktoren oder anderen geschäftsführenden Autoritäten zu stimmen.');
    this.setInnerHTMLById('definitionCompany', '<strong>Unternehmen</strong> (im Rahmen dieser Vereinbarung als "das Unternehmen", "wir", "uns" oder "unser" bezeichnet) bezieht sich auf Portfolio EK.');
    this.setInnerHTMLById('definitionCookies', '<strong>Cookies</strong> sind kleine Dateien, die auf Ihrem Computer, Mobilgerät oder einem anderen Gerät von einer Website platziert werden und die Details Ihrer Browsing-Historie auf dieser Website enthalten und verschiedene Verwendungszwecke haben.');
    this.setInnerHTMLById('definitionCountry', '<strong>Land</strong> bezieht sich auf: Hamburg, Deutschland');
    this.setInnerHTMLById('definitionDevice', '<strong>Gerät</strong> bedeutet jedes Gerät, das auf den Service zugreifen kann, wie ein Computer, ein Mobiltelefon oder ein digitales Tablet.');
    this.setInnerHTMLById('definitionPersonalData', '<strong>Personenbezogene Daten</strong> sind alle Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen.');
    this.setInnerHTMLById('definitionService', '<strong>Dienst</strong> bezieht sich auf die Website.');
    this.setInnerHTMLById('definitionServiceProvider', '<strong>Dienstleister</strong> bedeutet jede natürliche oder juristische Person, die die Daten im Auftrag des Unternehmens verarbeitet...');
    this.setInnerHTMLById('definitionUsageData', '<strong>Nutzungsdaten</strong> bezieht sich auf Daten, die automatisch gesammelt werden, entweder durch die Nutzung des Dienstes oder von der Infrastruktur des Dienstes selbst (z.B. die Dauer eines Seitenbesuchs).');
    this.setInnerHTMLById('definitionWebsite', '<strong>Website</strong> bezieht sich auf Portfolio EK, zugänglich unter <a href="https://www.emirhan-kilic.de" rel="external nofollow noopener" target="_blank">https://www.emirhan-kilic.de</a>');
    this.setInnerHTMLById('definitionYou', '<strong>Sie</strong> bedeutet die Person, die auf den Dienst zugreift oder ihn nutzt, oder das Unternehmen oder eine andere juristische Person, in deren Namen diese Person auf den Dienst zugreift oder ihn nutzt.');
    this.setInnerHTMLById('collectingDataTitle', 'Erhebung und Verwendung Ihrer persönlichen Daten');
    this.setInnerHTMLById('typesOfDataTitle', 'Erhobene Datenarten');
    this.setInnerHTMLById('personalDataTitle', 'Personenbezogene Daten');
    this.setInnerHTMLById('personalDataDescription', 'Während Sie unseren Service nutzen, bitten wir Sie möglicherweise, uns bestimmte persönlich identifizierbare Informationen bereitzustellen, die verwendet werden können, um Sie zu kontaktieren oder zu identifizieren. Zu den persönlich identifizierbaren Informationen können gehören, sind aber nicht beschränkt auf:');
    this.setInnerHTMLById('personalDataEmail', 'E-Mail-Adresse');
    this.setInnerHTMLById('personalDataName', 'Vor- und Nachname');
    this.setInnerHTMLById('personalDataUsage', 'Nutzungsdaten');
    this.setInnerHTMLById('usageDataTitle', 'Nutzungsdaten');
    this.setInnerHTMLById('usageDataDescription', 'Nutzungsdaten werden automatisch bei der Nutzung des Dienstes erfasst.');
    this.setInnerHTMLById('usageDataDetails', 'Nutzungsdaten können Informationen wie die IP-Adresse Ihres Geräts (z. B. IP-Adresse), den Browsertyp, die Browserversion, die Seiten unseres Dienstes, die Sie besuchen, das Datum und die Uhrzeit Ihres Besuchs, die auf diesen Seiten verbrachte Zeit, eindeutige Gerätekennungen und andere Diagnosedaten umfassen.');
    this.setInnerHTMLById('usageDataMobile', 'Wenn Sie über ein mobiles Gerät auf den Service zugreifen, können wir bestimmte Informationen automatisch erfassen, einschließlich, aber nicht beschränkt auf den Typ des mobilen Geräts, das Sie verwenden, die eindeutige ID Ihres mobilen Geräts, die IP-Adresse Ihres mobilen Geräts, Ihr mobiles Betriebssystem, den Typ des mobilen Internetbrowsers, den Sie verwenden, eindeutige Gerätekennungen und andere Diagnosedaten.');
    this.setInnerHTMLById('usageDataBrowser', 'Wir können auch Informationen erfassen, die Ihr Browser sendet, wenn Sie unseren Service besuchen oder wenn Sie über ein mobiles Gerät auf den Service zugreifen.');
    this.setInnerHTMLById('trackingCookiesTitle', 'Tracking-Technologien und Cookies');
    this.setInnerHTMLById('trackingCookiesDescription', 'Wir verwenden Cookies und ähnliche Tracking-Technologien, um Aktivitäten auf unserem Service zu verfolgen und bestimmte Informationen zu speichern. Zu den verwendeten Tracking-Technologien gehören Beacons, Tags und Skripte, um Informationen zu sammeln und zu verfolgen und unseren Service zu verbessern und zu analysieren. Zu den von uns verwendeten Technologien gehören:');
    this.setInnerHTMLById('cookiesBrowser', '<strong>Cookies oder Browser-Cookies.</strong> Ein Cookie ist eine kleine Datei, die auf Ihrem Gerät abgelegt wird. Sie können Ihren Browser so einstellen, dass alle Cookies abgelehnt werden oder dass angezeigt wird, wenn ein Cookie gesendet wird. Wenn Sie Cookies jedoch nicht akzeptieren, können Sie möglicherweise einige Teile unseres Dienstes nicht nutzen. Sofern Sie Ihre Browsereinstellungen nicht so angepasst haben, dass Cookies abgelehnt werden, kann unser Dienst Cookies verwenden.');
  this.setInnerHTMLById('webBeacons', '<strong>Web Beacons.</strong> Bestimmte Abschnitte unseres Dienstes und unsere E-Mails können kleine elektronische Dateien enthalten, die als Web Beacons bekannt sind (auch als Clear Gifs, Pixel-Tags und Ein-Pixel-Gifs bezeichnet), die es dem Unternehmen beispielsweise ermöglichen, Benutzer zu zählen, die diese Seiten besucht oder eine E-Mail geöffnet haben, sowie andere verwandte Website-Statistiken (zum Beispiel zur Aufzeichnung der Beliebtheit eines bestimmten Abschnitts und zur Überprüfung der System- und Serverintegrität).');
  this.setInnerHTMLById('cookiesSessionPersistent', 'Cookies können "Persistente" oder "Session"-Cookies sein. Persistente Cookies verbleiben auf Ihrem persönlichen Computer oder Mobilgerät, wenn Sie offline sind, während Session-Cookies gelöscht werden, sobald Sie Ihren Webbrowser schließen. Sie können mehr über Cookies im <a href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies" target="_blank">Artikel auf der TermsFeed-Website</a> erfahren.');
  this.setInnerHTMLById('cookiesPurpose', 'Wir verwenden sowohl Session-Cookies als auch persistente Cookies für die unten aufgeführten Zwecke:');
  this.setInnerHTMLById('essentialCookies', '<strong>Notwendige / Essenzielle Cookies</strong><br>Typ: Sitzungs-Cookies<br>Verwaltet von: Uns<br>Zweck: Diese Cookies sind unerlässlich, um Ihnen die über die Website verfügbaren Dienste bereitzustellen und Ihnen die Nutzung bestimmter Funktionen zu ermöglichen. Sie helfen, Benutzer zu authentifizieren und die betrügerische Nutzung von Benutzerkonten zu verhindern. Ohne diese Cookies können die von Ihnen angeforderten Dienste nicht bereitgestellt werden, und wir verwenden diese Cookies nur, um Ihnen diese Dienste bereitzustellen.');  
  this.setInnerHTMLById('acceptanceCookies', '<strong>Cookie-Richtlinie / Akzeptanzhinweis-Cookies</strong><br>Typ: Persistente Cookies<br>Verwaltet von: Uns<br>Zweck: Diese Cookies identifizieren, ob Benutzer der Verwendung von Cookies auf der Website zugestimmt haben.');
  this.setInnerHTMLById('functionalityCookies', '<strong>Funktions-Cookies</strong><br>Typ: Persistente Cookies<br>Verwaltet von: Uns<br>Zweck: Diese Cookies ermöglichen es uns, Ihre Auswahl zu speichern, wenn Sie die Website nutzen, wie z. B. das Speichern Ihrer Anmeldedaten oder Ihrer Sprachpräferenz. Der Zweck dieser Cookies besteht darin, Ihnen ein persönlicheres Erlebnis zu bieten und zu verhindern, dass Sie Ihre Präferenzen bei jeder Nutzung der Website erneut eingeben müssen.');
  this.setInnerHTMLById('cookieInfo', 'Weitere Informationen über die von uns verwendeten Cookies und Ihre Wahlmöglichkeiten bezüglich Cookies finden Sie in unserer Cookie-Richtlinie oder im Abschnitt Cookies unserer Datenschutzerklärung.');
  
  this.setInnerHTMLById('useOfPersonalData', 'Verwendung Ihrer personenbezogenen Daten');
  
  this.setInnerHTMLById('useOfPersonalDataList', `
    <li id="provideService">
      <p><strong>Zur Bereitstellung und Pflege unseres Dienstes</strong>, einschließlich der Überwachung der Nutzung unseres Dienstes.</p>
    </li>
    <li id="manageAccount">
      <p><strong>Zur Verwaltung Ihres Kontos:</strong> zur Verwaltung Ihrer Registrierung als Benutzer des Dienstes. Die von Ihnen bereitgestellten personenbezogenen Daten können Ihnen den Zugang zu verschiedenen Funktionen des Dienstes ermöglichen, die Ihnen als registriertem Benutzer zur Verfügung stehen.</p>
    </li>
    <li id="contractPerformance">
      <p><strong>Zur Erfüllung eines Vertrags:</strong> die Entwicklung, Einhaltung und Durchführung des Kaufvertrags für die von Ihnen gekauften Produkte, Artikel oder Dienstleistungen oder eines anderen Vertrags mit uns über den Dienst.</p>
    </li>
    <li id="contactYou">
      <p><strong>Um Sie zu kontaktieren:</strong> Um Sie per E-Mail, Telefonanrufe, SMS oder andere gleichwertige Formen der elektronischen Kommunikation zu kontaktieren, wie z.B. Push-Benachrichtigungen einer mobilen Anwendung über Updates oder informative Mitteilungen im Zusammenhang mit den Funktionen, Produkten oder den vertraglich vereinbarten Dienstleistungen, einschließlich der Sicherheitsupdates, wenn dies für deren Umsetzung erforderlich oder angemessen ist.</p>
    </li>
    <li id="provideNews">
      <p><strong>Um Ihnen</strong> Neuigkeiten, Sonderangebote und allgemeine Informationen über andere Waren, Dienstleistungen und Veranstaltungen, die wir anbieten, bereitzustellen, die denen ähneln, die Sie bereits gekauft oder nachgefragt haben, es sei denn, Sie haben sich gegen den Erhalt solcher Informationen entschieden.</p>
    </li>
    <li id="manageRequests">
      <p><strong>Zur Bearbeitung Ihrer Anfragen:</strong> Um Ihre Anfragen an uns zu bearbeiten und zu verwalten.</p>
    </li>
    <li id="businessTransfers">
      <p><strong>Für Unternehmensübertragungen:</strong> Wir können Ihre Informationen verwenden, um eine Fusion, Veräußerung, Umstrukturierung, Reorganisation, Auflösung oder einen anderen Verkauf oder Transfer von einigen oder allen unseren Vermögenswerten zu bewerten oder durchzuführen, unabhängig davon, ob es sich um ein fortgeführtes Unternehmen oder als Teil eines Konkurses, einer Liquidation oder eines ähnlichen Verfahrens handelt, bei dem personenbezogene Daten, die wir über unsere Dienstnutzer gespeichert haben, zu den übertragenen Vermögenswerten gehören.</p>
    </li>
    <li id="otherPurposes">
      <p><strong>Für andere Zwecke</strong>: Wir können Ihre Informationen für andere Zwecke verwenden, wie z.B. Datenanalyse, Identifizierung von Nutzungstrends, Bestimmung der Wirksamkeit unserer Werbekampagnen und zur Bewertung und Verbesserung unseres Dienstes, unserer Produkte, Dienstleistungen, unseres Marketings und Ihrer Erfahrungen.</p>
    </li>
  `);
  this.setInnerHTMLById('shareInfo', 'Wir können Ihre persönlichen Daten in den folgenden Situationen weitergeben:');
  
  this.setInnerHTMLById('shareInfoList', `
    <li id="withServiceProviders"><strong>Mit Dienstleistern:</strong> Wir können Ihre persönlichen Daten mit Dienstleistern teilen, um die Nutzung unseres Dienstes zu überwachen und zu analysieren oder um Sie zu kontaktieren.</li>
    <li id="businessTransfers"><strong>Für Geschäftstransfers:</strong> Wir können Ihre persönlichen Daten im Zusammenhang mit oder während der Verhandlungen über eine Fusion, den Verkauf von Unternehmenswerten, die Finanzierung oder den Erwerb unseres gesamten Unternehmens oder eines Teils davon an ein anderes Unternehmen weitergeben oder übertragen.</li>
    <li id="withAffiliates"><strong>Mit verbundenen Unternehmen:</strong> Wir können Ihre Informationen mit unseren verbundenen Unternehmen teilen, in diesem Fall werden wir von diesen verlangen, diese Datenschutzrichtlinie zu respektieren. Zu den verbundenen Unternehmen gehören unsere Muttergesellschaft und alle anderen Tochtergesellschaften, Joint-Venture-Partner oder andere Unternehmen, die wir kontrollieren oder die unter gemeinsamer Kontrolle mit uns stehen.</li>
    <li id="withBusinessPartners"><strong>Mit Geschäftspartnern:</strong> Wir können Ihre Informationen mit unseren Geschäftspartnern teilen, um Ihnen bestimmte Produkte, Dienstleistungen oder Werbeaktionen anzubieten.</li>
    <li id="withOtherUsers"><strong>Mit anderen Nutzern:</strong> Wenn Sie persönliche Informationen teilen oder anderweitig in öffentlichen Bereichen mit anderen Nutzern interagieren, können diese Informationen von allen Nutzern eingesehen und außerhalb veröffentlicht werden.</li>
    <li id="withYourConsent"><strong>Mit Ihrer Zustimmung:</strong> Wir können Ihre persönlichen Daten für andere Zwecke mit Ihrer Zustimmung offenlegen.</li>
  `);
  this.setInnerHTMLById('retentionTitle', 'Aufbewahrung Ihrer personenbezogenen Daten');
  this.setInnerHTMLById('retentionDescription1', 'Das Unternehmen wird Ihre personenbezogenen Daten nur so lange aufbewahren, wie es für die in dieser Datenschutzrichtlinie dargelegten Zwecke erforderlich ist. Wir werden Ihre personenbezogenen Daten in dem Umfang aufbewahren und verwenden, der erforderlich ist, um unseren rechtlichen Verpflichtungen nachzukommen (zum Beispiel, wenn wir verpflichtet sind, Ihre Daten zur Einhaltung geltender Gesetze aufzubewahren), Streitigkeiten beizulegen und unsere rechtlichen Vereinbarungen und Richtlinien durchzusetzen.');
  this.setInnerHTMLById('retentionDescription2', 'Das Unternehmen wird auch Nutzungsdaten für interne Analysezwecke aufbewahren. Nutzungsdaten werden in der Regel für einen kürzeren Zeitraum aufbewahrt, es sei denn, diese Daten werden verwendet, um die Sicherheit zu stärken oder die Funktionalität unseres Dienstes zu verbessern, oder wir sind gesetzlich verpflichtet, diese Daten für längere Zeiträume aufzubewahren.');

  this.setInnerHTMLById('transferTitle', 'Übermittlung Ihrer personenbezogenen Daten');
  this.setInnerHTMLById('transferDescription1', 'Ihre Informationen, einschließlich personenbezogener Daten, werden an den Betriebsstandorten des Unternehmens und an allen anderen Orten, an denen die an der Verarbeitung beteiligten Parteien ansässig sind, verarbeitet. Das bedeutet, dass diese Informationen an Computer übermittelt und dort aufbewahrt werden können, die sich außerhalb Ihres Bundeslandes, Ihrer Provinz, Ihres Landes oder einer anderen staatlichen Gerichtsbarkeit befinden, in der die Datenschutzgesetze von den Gesetzen Ihrer Gerichtsbarkeit abweichen können.');
  this.setInnerHTMLById('transferDescription2', 'Ihre Zustimmung zu dieser Datenschutzrichtlinie, gefolgt von der Übermittlung solcher Informationen, stellt Ihre Zustimmung zu dieser Übermittlung dar.');
  this.setInnerHTMLById('transferDescription3', 'Das Unternehmen wird alle angemessenen Schritte unternehmen, um sicherzustellen, dass Ihre Daten sicher und in Übereinstimmung mit dieser Datenschutzrichtlinie behandelt werden und keine Übermittlung Ihrer personenbezogenen Daten an eine Organisation oder ein Land erfolgt, es sei denn, es gibt angemessene Kontrollen, einschließlich der Sicherheit Ihrer Daten und anderer persönlicher Informationen.');

  this.setInnerHTMLById('deleteTitle', 'Löschung Ihrer personenbezogenen Daten');
  this.setInnerHTMLById('deleteDescription1', 'Sie haben das Recht, die Löschung oder die Unterstützung bei der Löschung der von uns über Sie gesammelten personenbezogenen Daten zu verlangen.');
  this.setInnerHTMLById('deleteDescription2', 'Unser Service kann Ihnen die Möglichkeit geben, bestimmte Informationen über Sie innerhalb des Dienstes zu löschen.');
  this.setInnerHTMLById('deleteDescription3', 'Sie können Ihre Informationen jederzeit aktualisieren, ändern oder löschen, indem Sie sich in Ihr Konto einloggen, sofern Sie eines haben, und den Abschnitt mit den Kontoeinstellungen aufrufen, der es Ihnen ermöglicht, Ihre persönlichen Informationen zu verwalten. Sie können uns auch kontaktieren, um Zugang zu allen persönlichen Informationen zu verlangen, diese zu korrigieren oder zu löschen, die Sie uns zur Verfügung gestellt haben.');
  this.setInnerHTMLById('deleteDescription4', 'Bitte beachten Sie jedoch, dass wir möglicherweise bestimmte Informationen aufbewahren müssen, wenn wir eine rechtliche Verpflichtung oder eine rechtmäßige Grundlage dafür haben.');

  this.setInnerHTMLById('disclosureTitle', 'Offenlegung Ihrer personenbezogenen Daten');
  this.setInnerHTMLById('businessTransactionTitle', 'Geschäftstransaktionen');
  this.setInnerHTMLById('businessTransactionDescription', 'Wenn das Unternehmen an einer Fusion, Übernahme oder Vermögensveräußerung beteiligt ist, können Ihre personenbezogenen Daten übertragen werden. Wir werden Sie informieren, bevor Ihre personenbezogenen Daten übertragen werden und einer anderen Datenschutzrichtlinie unterliegen.');
  this.setInnerHTMLById('lawEnforcementTitle', 'Strafverfolgung');
  this.setInnerHTMLById('lawEnforcementDescription', 'Unter bestimmten Umständen kann das Unternehmen verpflichtet sein, Ihre personenbezogenen Daten offenzulegen, wenn dies gesetzlich vorgeschrieben ist oder als Reaktion auf gültige Anfragen von öffentlichen Behörden (z. B. ein Gericht oder eine Regierungsbehörde).');

  this.setInnerHTMLById('otherLegalRequirementsTitle', 'Andere gesetzliche Anforderungen');
  this.setInnerHTMLById('otherLegalRequirementsDescription', 'Das Unternehmen kann Ihre personenbezogenen Daten in dem guten Glauben offenlegen, dass diese Maßnahme erforderlich ist, um:');
  this.setInnerHTMLById('otherLegalRequirementsList', `
    <li id="complyWithLegalObligation">Einer gesetzlichen Verpflichtung nachzukommen</li>
    <li id="protectRights">Die Rechte oder das Eigentum des Unternehmens zu schützen und zu verteidigen</li>
    <li id="preventWrongdoing">Mögliche Fehlverhalten im Zusammenhang mit dem Dienst zu verhindern oder zu untersuchen</li>
    <li id="protectSafety">Die persönliche Sicherheit von Nutzern des Dienstes oder der Öffentlichkeit zu schützen</li>
    <li id="protectLegalLiability">Vor rechtlicher Haftung zu schützen</li>
  `);

  this.setInnerHTMLById('securityTitle', 'Sicherheit Ihrer personenbezogenen Daten');
  this.setInnerHTMLById('securityDescription', 'Die Sicherheit Ihrer personenbezogenen Daten ist uns wichtig, aber denken Sie daran, dass keine Methode der Übertragung über das Internet oder der elektronischen Speicherung 100% sicher ist. Während wir uns bemühen, kommerziell akzeptable Mittel zu verwenden, um Ihre personenbezogenen Daten zu schützen, können wir deren absolute Sicherheit nicht garantieren.');

  this.setInnerHTMLById('childrenPrivacyTitle', 'Datenschutz von Kindern');
  this.setInnerHTMLById('childrenPrivacyDescription1', 'Unser Dienst richtet sich nicht an Personen unter 13 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Personen unter 13 Jahren. Wenn Sie ein Elternteil oder Erziehungsberechtigter sind und Ihnen bekannt ist, dass Ihr Kind uns personenbezogene Daten zur Verfügung gestellt hat, kontaktieren Sie uns bitte. Wenn wir erfahren, dass wir personenbezogene Daten von Personen unter 13 Jahren ohne Überprüfung der elterlichen Zustimmung gesammelt haben, ergreifen wir Maßnahmen, um diese Informationen von unseren Servern zu entfernen.');
  this.setInnerHTMLById('childrenPrivacyDescription2', 'Wenn wir uns auf die Einwilligung als Rechtsgrundlage für die Verarbeitung Ihrer Informationen stützen müssen und Ihr Land die Einwilligung der Eltern erfordert, können wir die Einwilligung Ihrer Eltern einholen, bevor wir diese Informationen sammeln und verwenden.');

  this.setInnerHTMLById('linksToOtherWebsitesTitle', 'Links zu anderen Websites');
  this.setInnerHTMLById('linksToOtherWebsitesDescription1', 'Unser Dienst kann Links zu anderen Websites enthalten, die nicht von uns betrieben werden. Wenn Sie auf einen Link eines Drittanbieters klicken, werden Sie zu der Website dieses Drittanbieters weitergeleitet. Wir raten Ihnen dringend, die Datenschutzrichtlinie jeder Website, die Sie besuchen, zu überprüfen.');
  this.setInnerHTMLById('linksToOtherWebsitesDescription2', 'Wir haben keine Kontrolle über und übernehmen keine Verantwortung für die Inhalte, Datenschutzrichtlinien oder -praktiken von Websites oder Diensten Dritter.');

  this.setInnerHTMLById('changesToPolicyTitle', 'Änderungen dieser Datenschutzrichtlinie');
  this.setInnerHTMLById('changesToPolicyDescription1', 'Wir können unsere Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über alle Änderungen informieren, indem wir die neue Datenschutzrichtlinie auf dieser Seite veröffentlichen.');
  this.setInnerHTMLById('changesToPolicyDescription2', 'Wir werden Sie per E-Mail und/oder durch einen auffälligen Hinweis in unserem Dienst darüber informieren, bevor die Änderung in Kraft tritt, und das Datum der letzten Aktualisierung oben in dieser Datenschutzrichtlinie aktualisieren.');
  this.setInnerHTMLById('changesToPolicyDescription3', 'Wir empfehlen Ihnen, diese Datenschutzrichtlinie regelmäßig auf Änderungen zu überprüfen. Änderungen an dieser Datenschutzrichtlinie treten in Kraft, sobald sie auf dieser Seite veröffentlicht werden.');

  this.setInnerHTMLById('contactUsTitle', 'Kontaktieren Sie uns');
  this.setInnerHTMLById('contactUsDescription', 'Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, können Sie uns wie folgt kontaktieren:');
  this.setInnerHTMLById('contactByEmail', 'Per E-Mail: emirhan_kilic@outlook.de');
}
  
  
  headerEngPolicy() {
    this.setInnerHTMLById('policyTitle', 'Privacy Policy');
    this.setInnerHTMLById('policyLastUpdated', 'Last updated: September 17, 2024');
    this.setInnerHTMLById(
      'policyDescription',
      'This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.'
    );
    this.setInnerHTMLById(
      'policyPersonalData',
      'We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank">Privacy Policy Generator</a>.'
    );
    this.setInnerHTMLById('interpretationTitle', 'Interpretation and Definitions');
    this.setInnerHTMLById('interpretationHeading', 'Interpretation');
    this.setInnerHTMLById(
      'interpretationDescription',
      'The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.'
    );
    this.setInnerHTMLById('definitionsHeading', 'Definitions');
    this.setInnerHTMLById('definitionsDescription', 'For the purposes of this Privacy Policy:');
    this.setInnerHTMLById('definitionAccount', '<strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.');
    this.setInnerHTMLById('definitionAffiliate', '<strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.');
    this.setInnerHTMLById('definitionCompany', '<strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Portfolio EK.');
    this.setInnerHTMLById('definitionCookies', '<strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.');
    this.setInnerHTMLById('definitionCountry', '<strong>Country</strong> refers to: Hamburg, Germany');
    this.setInnerHTMLById('definitionDevice', '<strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.');
    this.setInnerHTMLById('definitionPersonalData', '<strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.');
    this.setInnerHTMLById('definitionService', '<strong>Service</strong> refers to the Website.');
    this.setInnerHTMLById('definitionServiceProvider', '<strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company...');
    this.setInnerHTMLById('definitionUsageData', '<strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).');
    this.setInnerHTMLById('definitionWebsite', '<strong>Website</strong> refers to Portfolio EK, accessible from <a href="https://www.emirhan-kilic.de" rel="external nofollow noopener" target="_blank">https://www.emirhan-kilic.de</a>');
    this.setInnerHTMLById('definitionYou', '<strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.');
    this.setInnerHTMLById('collectingDataTitle', 'Collecting and Using Your Personal Data');
    this.setInnerHTMLById('typesOfDataTitle', 'Types of Data Collected');
    this.setInnerHTMLById('personalDataTitle', 'Personal Data');
    this.setInnerHTMLById('personalDataDescription', 'While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:');
    this.setInnerHTMLById('personalDataEmail', 'Email address');
    this.setInnerHTMLById('personalDataName', 'First name and last name');
    this.setInnerHTMLById('personalDataUsage', 'Usage Data');
    this.setInnerHTMLById('usageDataTitle', 'Usage Data');
    this.setInnerHTMLById('usageDataDescription', 'Usage Data is collected automatically when using the Service.');
    this.setInnerHTMLById('usageDataDetails', 'Usage Data may include information such as Your Device\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.');
    this.setInnerHTMLById('usageDataMobile', 'When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.');
    this.setInnerHTMLById('usageDataBrowser', 'We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.');
    this.setInnerHTMLById('trackingCookiesTitle', 'Tracking Technologies and Cookies');
    this.setInnerHTMLById('trackingCookiesDescription', 'We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:');
    this.setInnerHTMLById('cookiesBrowser', '<strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.');
    this.setInnerHTMLById('webBeacons', '<strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).');
    this.setInnerHTMLById('cookiesSessionPersistent', 'Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. You can learn more about cookies on <a href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies" target="_blank">TermsFeed website</a> article.');
    this.setInnerHTMLById('cookiesPurpose', 'We use both Session and Persistent Cookies for the purposes set out below:');
    this.setInnerHTMLById('essentialCookies', '<strong>Necessary / Essential Cookies</strong><br>Type: Session Cookies<br>Administered by: Us<br>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.');
  this.setInnerHTMLById('acceptanceCookies', '<strong>Cookies Policy / Notice Acceptance Cookies</strong><br>Type: Persistent Cookies<br>Administered by: Us<br>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.'); 
  this.setInnerHTMLById('functionalityCookies', '<strong>Functionality Cookies</strong><br>Type: Persistent Cookies<br>Administered by: Us<br>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.');
  this.setInnerHTMLById('cookieInfo', 'For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.');
  
  this.setInnerHTMLById('useOfPersonalData', 'Use of Your Personal Data');
  
  this.setInnerHTMLById('useOfPersonalDataList', `
    <li id="provideService">
      <p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>
    </li>
    <li id="manageAccount">
      <p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
    </li>
    <li id="contractPerformance">
      <p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
    </li>
    <li id="contactYou">
      <p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
    </li>
    <li id="provideNews">
      <p><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
    </li>
    <li id="manageRequests">
      <p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>
    </li>
    <li id="businessTransfers">
      <p><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>
    </li>
    <li id="otherPurposes">
      <p><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
    </li>
  `);
  this.setInnerHTMLById('shareInfo', 'We may share Your personal information in the following situations:');
  
  this.setInnerHTMLById('shareInfoList', `
    <li id="withServiceProviders"><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
    <li id="businessTransfers"><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
    <li id="withAffiliates"><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
    <li id="withBusinessPartners"><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
    <li id="withOtherUsers"><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
    <li id="withYourConsent"><strong>With Your consent:</strong> We may disclose Your personal information for any other purpose with Your consent.</li>
  `);
  this.setInnerHTMLById('retentionTitle', 'Retention of Your Personal Data');
  this.setInnerHTMLById('retentionDescription1', 'The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.');
  this.setInnerHTMLById('retentionDescription2', 'The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.');

  this.setInnerHTMLById('transferTitle', 'Transfer of Your Personal Data');
  this.setInnerHTMLById('transferDescription1', 'Your information, including Personal Data, is processed at the Company\'s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.');
  this.setInnerHTMLById('transferDescription2', 'Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.');
  this.setInnerHTMLById('transferDescription3', 'The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.');

  this.setInnerHTMLById('deleteTitle', 'Delete Your Personal Data');
  this.setInnerHTMLById('deleteDescription1', 'You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.');
  this.setInnerHTMLById('deleteDescription2', 'Our Service may give You the ability to delete certain information about You from within the Service.');
  this.setInnerHTMLById('deleteDescription3', 'You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.');
  this.setInnerHTMLById('deleteDescription4', 'Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.');

  this.setInnerHTMLById('disclosureTitle', 'Disclosure of Your Personal Data');
  this.setInnerHTMLById('businessTransactionTitle', 'Business Transactions');
  this.setInnerHTMLById('businessTransactionDescription', 'If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.');
  this.setInnerHTMLById('lawEnforcementTitle', 'Law enforcement');
  this.setInnerHTMLById('lawEnforcementDescription', 'Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).');

  this.setInnerHTMLById('otherLegalRequirementsTitle', 'Other legal requirements');
  this.setInnerHTMLById('otherLegalRequirementsDescription', 'The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:');
  this.setInnerHTMLById('otherLegalRequirementsList', `
    <li id="complyWithLegalObligation">Comply with a legal obligation</li>
    <li id="protectRights">Protect and defend the rights or property of the Company</li>
    <li id="preventWrongdoing">Prevent or investigate possible wrongdoing in connection with the Service</li>
    <li id="protectSafety">Protect the personal safety of Users of the Service or the public</li>
    <li id="protectLegalLiability">Protect against legal liability</li>
  `);

  this.setInnerHTMLById('securityTitle', 'Security of Your Personal Data');
  this.setInnerHTMLById('securityDescription', 'The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.');

  this.setInnerHTMLById('childrenPrivacyTitle', 'Children\'s Privacy');
  this.setInnerHTMLById('childrenPrivacyDescription1', 'Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.');
  this.setInnerHTMLById('childrenPrivacyDescription2', 'If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent\'s consent before We collect and use that information.');

  this.setInnerHTMLById('linksToOtherWebsitesTitle', 'Links to Other Websites');
  this.setInnerHTMLById('linksToOtherWebsitesDescription1', 'Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party\'s site. We strongly advise You to review the Privacy Policy of every site You visit.');
  this.setInnerHTMLById('linksToOtherWebsitesDescription2', 'We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.');

  this.setInnerHTMLById('changesToPolicyTitle', 'Changes to this Privacy Policy');
  this.setInnerHTMLById('changesToPolicyDescription1', 'We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.');
  this.setInnerHTMLById('changesToPolicyDescription2', 'We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.');
  this.setInnerHTMLById('changesToPolicyDescription3', 'You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.');

  this.setInnerHTMLById('contactUsTitle', 'Contact Us');
  this.setInnerHTMLById('contactUsDescription', 'If you have any questions about this Privacy Policy, You can contact us:');
  this.setInnerHTMLById('contactByEmail', 'By email: emirhan_kilic@outlook.de');
}
  
}

