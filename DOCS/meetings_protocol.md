# Protocol of CtG Team Meetings

##2023-01-19

**Time**: 14:15-15:45 (Berlin)

**Participants** (alphabetical): Theodore Beers, Xenia Kudela, Jonas Müller-Laackman

- DHd: Our presentation will take place on Wednesday in the time slot between 2:00 and 3:30 PM.

- Hamburg Workshop: Jonas has already ordered catering and taken care of the advertising in Hamburg. All blog posts have been published. The registration procedure was changed so that we know how many people will come. Hotel suggestion: Hotel Wagner next to the SUB. We should be on-site at 8:30 AM.

- Documents for BUA: BUA has requested two documents from us:

  - The final report for the first phase of the project, which is due three months after the conclusion of the project (on the 14th of February).
  - A short project description (Steckbrief), also due on the 14th of February.Theo will revise it by the 2nd of February and send it to the rest of the team for further review.

- BUA Event: BUA is organizing a networking event for Objective 3 on the 2nd of February (12:00-4:00 PM). Our team will join and deliver a brief project pitch (max 5 min). The general goal will also be to discuss possible objectives for BUA II.

- Corpus and Digital Edition: The team discussed the difference between corpora and digital editions and agreed that corpora consist of plain text with no changes or corrections, whereas digital editions process the texts, adding scholarly corrections or commentaries. Moreover, using the term 'edition' gives value to the scholarly and editorial work that has been done. Considering this and also the fact that a clear distinction is not always possible, we have decided to mainly consider the self-description of the project.

- Questionnaire: We have scheduled a meeting with the first interviewee next Friday at 10:15 AM. Xenia will meet with Theo to plan the interview.

- Archiving our website – GND has a long-term website archiving project, so we could alternatively use it for this purpose. Regarding the Wayback Machine API, Theo has already set it up with a GitHub action that sends our website to the archive once a month. However, the problem to solve now is how to create a static version for the archive while simultaneously offering the dynamic one for the user. One solution could be to set different URLs. We should also create a new data point in the schema informing whether the website is indexed by the Wayback Machine.

- Conf. on Open Research by SC 3: we are considering the participation.

- Roll-up: since we don’t have a logo, we can use a picture instead. An idea could be to use an image of a cooper engraving, since they look good also with a poor resolution. Some good examples can be found in the [Graphikportal](https://www.graphikportal.org/) or the in the collection of digitalized imaged of the [SUB Hamburg](https://digitalisate.sub.uni-hamburg.de/).

- Next meeting: Friday, 26.01 at 10:15#.

## 2023-12-22

**Time**: 10:30–11:30 (Berlin)

**Participants** (alphabetical): Theodore Beers, Xenia Kudela, Jonas Müller-Laackman

- Feedback on the colloquium for Arabic DH that took place on Thursday, 2023-12-14.

- Interviews: we will send reminders to the invited people in early January.

- Roll-up poster: CeDis agreed to design our roll-up. We will email them to request an example image file for content preparation.

- Email database: we will set up a database of email addresses for all project contact people, and use it to automatically send emails with a request to check the correctness of the entries. We will try to get in touch with all currently recorded projects in this way. Additionally, we will automate the process for each new entry. For privacy reasons, the database will not be public.

- Vega visualizations: we have started to work on the first [chart](https://vega.github.io/vega/examples/edge-bundling/), which will be used to represent the relations between the entries of our database.

- Workshop:

  - The event was advertised in a print flyer of the SUB.
  - Our own flyer is also ready, and Theo will post it on social media.
  - Theo and Jonas will finalize the blurb in the first week of January so that we can publish a blog post immediately after the Christmas break.
  - Jonas will add the workshop to the SUB event calendar.
  - Except the poster, all promotional materials should be bilingual (German and English).

- Keyword taxonomy: the issue of the difference between digital editions and corpora should be discussed in greater depth at our next meeting in January. For now, we discussed briefly the idea of tagging projects according to their own definitions; but this approach could lead to inconsistencies that would distort the analysis and visualizations of our data. We also talked about raising this topic at the DHd conference.

- Next meeting: January (exact date to be determined).

## 2023-12-08

**Time**: 10:00–11:30 (Berlin)

**Participants** (alphabetical): Theodore Beers, Beatrice Gründler, Xenia Kudela, Jonas Müller-Laackman

- Edited DHd abstract was successfully submitted

- Theo will present CtG in a research colloquium for Arabic DH next Thursday (14 Dec.)

- Workshop

  - Catering has been arranged
  - Xenia prepared multiple draft flyers, and the team chose one option
  - Promotional text needs to be finalized
  - Advertising: invitation email, blog post, and social media
  - Roll-up poster: should follow the pattern of other posters from Arabistik and be produced by CeDiS. Xenia will contact them.
  - Reminder should be sent to all workshop invitees once materials are ready

- Interviews

  - Two projects have been contacted; we are waiting for the answers. We may need to send reminders.
  - Should also speak with librarians about issues of long-term data preservation

- Database

  - Projects added recently were mostly from 2022 or older
  - New projects launched in 23–24 need to be investigated
  - The number of research languages covered almost doubled (and not all languages have ISO codes; this could be discussed at the DHd conference)
  - Arguments for our focus on certain languages: our outreach is mainly in the SWANA region, but in case we are asked to add projects working with other languages we are open to do so
  - Idea: adding a Japanese or Chinese project to check if the encoding will work

- SHK: we should start the process of hiring a SHK to help with adding new projects

- Website

  - Working on creating a fully static version
  - Static mode could be set via config file or environment variable
  - Wayback Machine (Internet Archive): we should snapshot our own project site periodically. Additionally, we could save all the links we have in the database, to preserve a better record of those projects. We need to make sure that such a practice would be legal, and to find an API for automatic archiving, since we have over 1,200 links.
  - Timeline should be reimplemented

- Idea for experts' database: list with names that can be filtered by language and project (again, legal questions)

- Visualizations: next to be implemented will be a Vega edge bundling chart containing project relations. Other possible charts: alluvial, bubble, sunburst.

- Schema

  - Should start adding ORCID pages of contact people
  - To add to schema: a boolean value, `maintained`, should be added to address the difference between the funding time and the general time of activity of a project

- Blog: topics of upcoming posts will be our link-checking workflow (Theo), keyword taxonomy (Xenia), and use of AI in the field of multilingual DH (Xenia).

- Data in RDF and CSV formats: scheduled for later follow-up

  - We should probably use the XML-based syntax option for RDF, rather than Turtle

- Next meeting: 22 Dec., 10:00

## 2023-11-17

**Time**: 10:00–11:30 (Berlin)

**Participants** (alphabetical): Theodore Beers, Beatrice Gründler, Jonas Müller-Laackman

- Discussion of recent events (BUA colloquium, Open Science Dashboards workshop)

- A number of projects have been added recently (Xenia)

- February workshop

  - Structure

    - Short talks in the beginning (PIs, SUB people)
    - General introduction to the project (Jonas)
    - Presentation 1: Xenia or Theo
    - Break
    - Presentation 2: Xenia or Theo
    - Final hour less structured

  - Possible titles for the event

    - Closing the Gap in Non-Latin-Script Data: Challenges of Data Loss in the Multilingual Digital Humanities
    - Data Survival: Challenges of Infrastructural Monolingualism
    - How to Preserve Diverse Data in a Monolingual Environment

  - Remarks

    - Leave time for people to chat, ask questions, have coffee and pretzels
    - Open event, open to the public
    - Hybrid setup possible (and desirable?)
    - English title, bilingual blurb

  - To-dos

    - Schedule for February workshop should be published ASAP
    - Brief text needed for blog post
    - Flyers to advertise the event (Xenia)
    - Participants should email Jonas' department to register in advance
    - Roll-up poster for CtG should be made before the event

- Possible collaborations: Ada Lovelace Center, QUEST Center and others

- DHd paper

  - Submission of camera-ready version of "paper" (i.e., abstract) by Dec. 4
  - Registration phase also opens on Dec. 4
  - Conference will take place in Passau in the last week of Feb.

- CtG internal matters

  - Test run for explaining our workflow (e.g., the focus on Germany; difficult enough to build networks in Germany)
  - Ideas for follow-up, expanding project
  - IDHN, OpenITI and Hist-ME are doing similar things

- General to-dos:

  - Update on survey (schedule first meeting, then second meeting with AnonymClassic) (Xenia)
  - Website updates (new visualizations needed) (Xenia)

- Next meeting Dec. 8

## 2023-09-29

**Time**: 10:00–11:15 (Berlin)

**Participants** (alphabetical): Theodore Beers, Beatrice Gründler, Jonas Müller-Laackman

- DHd conference abstracts: Reviews came back for the abstracts that we submitted, and they are overall quite positive. We can respond to the reviews, and final decisions will be made in due course.

- Hamburg workshop: Plans are underway for a "Closing the Gap" mini-workshop, to be held in Hamburg in early 2024 (most likely in February). We have a specific date nearly fixed; there is just one guest participant who still needs to confirm. Soon, hopefully, we can develop a detailed schedule and begin to publicize the event.

  - The workshop will feature two or three presentations (mostly by members of our team?), with plenty of time left for discussion and networking. It will be open to the public.

- Open-Access-Tage 2023: This week, Xenia Kudela attended the [Open-Access-Tage conference](https://open-access-tage.de/open-access-tage-2023-berlin) on behalf of "Closing the Gap." She will report back to us about this soon, and may write a post for our blog.

- BerlinUP: Beatrice Gründler brought to our attention a new initiative called [Berlin Universities Publishing](https://www.berlin-universities-publishing.de/)—"an open access publisher with a non-commercial, scholar-owned infrastructure." BerlinUP, as it's known for short, is "funded by the Berlin University Alliance and supported jointly by the libraries of Freie Universität Berlin, Humboldt Universität zu Berlin, Technische Universität Berlin and Charité – Universitätsmedizin Berlin." This is something that members of "Closing the Gap" can both promote and consider for publishing our own research.

- Collaboration with librarians: We discussed the idea of strengthening our relationships with staff members at other university libraries in Berlin—i.e., in addition to the FU Library, with which we are already collaborating actively.

- Questionnaire: The remainder of this meeting was devoted to a detailed review of the questionnaire that we plan to use when interviewing people affiliated with non-Latin-script DH projects. At this point, we are basically ready to conduct our first interview. We have a person in mind and are working on scheduling a time.

- Our next team meeting will need to be scheduled via email, with input from Xenia Kudela.

## 2023-09-08

**Time**: 10:00–11:30 (Berlin)

**Participants** (alphabetical): Theodore Beers, Beatrice Gründler, Xenia Kudela, Jonas Müller-Laackman

- Documentation

  - Documentation of our technology and workflow should be systematized. A new `DOCS` folder containing the changelog, list of dependencies, and description of our workflow will be added to the GitHub repo. (Xenia and Theo)
  - Releases: The latest GitHub release is outdated. New releases should be launched—one today and another after the new taxonomy has been implemented. For better searchability, the new release should contain three folders: `SCHEMA`, `DATA`, and one for the entire project (?). If possible, the release should be also connected to Zenodo. (Jonas)
  - The schema version should be bumped after the taxonomy has been changed. (Xenia)

- Questionnaire

  - A draft of the interview questionnaire has been prepared by Theo. The questionnaire should contain the most crucial questions to be asked of all projects. But each interview will also have its own particular points to cover. This topic is scheduled to be discussed in depth at the next meeting. (Everyone)

- Meeting in Hamburg

  - The event will take place in the first few months of 2024.
  - Guests should be asked in advance for preferred times. (Jonas?)
  - A small workshop should be offered alongside the presentation of the project. Idea: giving an overview of our data and proposing possible implementations based on this research. (Jonas, Theo, Xenia)

- Website

  - The search pane should be updated to enable filtering projects by marking multiple tags at once. (Xenia, Theo)
  - New cards with detailed information about each project (e.g., research and output languages) should be implemented soon. (Theo)
  - For now, the languages listed in the existing cards will not be changed.

- Taxonomy

  - The new keywords are ready; they will be visible on the website within a week. (Xenia)
  - The display categories for the keywords should be as follows: discipline, topic, output, resources, and methods. (Xenia)
  - The proposed division between primary disciplines, which fall within the focus of the project (e.g., Arabic or Persian Studies), and secondary disciplines (e.g., Literary Studies or Linguistics), was questioned by team members due to its hierarchical and exclusive tone. We may return to this question later.

- Interviews

  - The first interviews should take place ASAP, i.e., as soon as the questionnaire is ready. A list of the first few proposed interviewees has been set by the team privately.
  - If possible, the first interviews should take place directly after team meetings, so that everyone can sit in. Once the pace of interviews increases, other time slots will be found.

- Next meeting

  - Date and time: 2023-09-29, 10:00–11:30 (Berlin)
  - Topics: Questionnaire and other updates
  - Xenia and Theo will meet separately before this to discuss the questionnaire.
