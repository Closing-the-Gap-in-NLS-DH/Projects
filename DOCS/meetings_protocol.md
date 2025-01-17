# Protocol of CtG Team Meetings


 ##2025-01-17
 
**Time**: 15:00-16:00 (Berlin) 
**Participants** (alphabetical): Alieva, Aibaniz; Beers, Theo; Casey, Christian; Kudela, M. Xenia; Müller-Laackman, Jonas; Sido Bozan, Joudy


Research Presentation Opportunities
- Opportunities Discussed: The team explored various avenues for presenting research findings and increasing project visibility
  
Strategic Goal 2025 for CtG
- Main Objective: Achieve high project visibility by 2025, serving two key purposes:
    - Funding Justification: Demonstrate the project's impact to secure future funding.
    - Practical Project Goals: Highlight how the project contributes to academia and the broader digital humanities field.
      
Data Maintenance and Sustainability
- Sustainability Plans and Data Maintenance:
    - Addressing the tension between maintaining datasets and long-term sustainability goals for digital humanities projects.
    - Encourage the use of open-source tools and public datasets to enhance accessibility and collaboration.
- Evaluation Process: Developing criteria to assess project adherence to sustainability best practices:
    - Do projects follow through on their commitments to sustainable practices?
    - How do these practices contribute to achieving long-term goals?
    - Use unit tests or automated tools to measure compliance.
- Metrics for Assessment:
    - Calculate the percentage of output data that adheres to sustainability standards.
    - Develop a score system to quantify adherence and impact.
- Economic Reward Systems:
    - Analyze how economic incentives or constraints influence sustainability efforts.
    - Could offering tangible rewards improve sustainability adherence?
- Comparative Analysis:
    - Evaluate how initial sustainability plans compare to actual results, identifying discrepancies and lessons learned.
      
Blog Post
- Christian Casey is contributing a blog post discussing good practices and bad practices considering sustainability plans of DH projects
  
Speaker Invitations
Inviting Experts:
- Identify and invite project members or collaborators to speak on:
     - Best practices in digital humanities.
     - Case studies or lessons from the current project.
     - Broader discussions on sustainability in research.
 
Social Media Presence
- Bluesky:
    - Focus on building a presence on Bluesky, a decentralized social media platform.
    - Leverage it to connect with niche academic and tech-savvy communities.
    - Share project updates, blog posts, and event information.
    - Increase visibility and engagement with digital humanities scholars globally.
      
Collaborations
- ISAW Library Collaboration: Explore potential partnerships with the Institute for the Study of the Ancient World (ISAW) library, while maintaining a shared focus on research projects within the DACH region.
- Collaboration focus areas:
  - Shared datasets.
  - Joint events or publications.
    
Interview Participation
- Enhancing Attractivity: Encourage broader participation in project-related interviews by offering flexible formats:
  - Online Interviews:
       - Increase visibility for both the project and participants.
       - Remove geographical barriers, enabling international collaboration.
  - Offline Interviews:
       - Provide opportunities for in-depth discussions and personal interaction.
       - Emphasize the value of participation to potential interviewees by highlighting benefits such as networking, visibility, and contribution to meaningful research.


##2024-11-22

**Time**: 12:00 - 13:30 (Berlin)
**Participants** (alphabetical): Alieva, Aibaniz, Beatrice Gründler, Xenia Kudela, Jonas Müller-Laackman, Sido Bozan, Joudy


- Names of Places in the Dataset
  - We have both English names and names in the original language in the dataset. How should we standardize it so that it does not reinforce the hegemony of the English language while still making the places findable by their English names? The name of the city should be an array of objects with two names. Both should be findable, but the name displayed on the frontend will be the name in the original language.  



- Personal Data 
  - We should remove names and surnames from the dataset unless someone explicitly asks us to include their name. Instead, we should add ORCID. If there is no ORCID, we should create a snapshot of their university webpage and upload it to the Wayback Machine. Alternatively, we can contact individuals directly to ask for permission to publish their name or include it in the GND database.  
  - We should rename the "contacts" object as "people" and modify it according to the above-mentioned guidelines.  
  - Open question: How should we handle deceased contacts? We could discuss this at the DHD meeting. 



- Publications. 
  - We have written a new blog post and a paper for the *Transformation* journal. The paper is currently under review. *Transformation* requires preprints to be uploaded to Zenodo, which is good for open science. Preprints should become more widely accepted in our field, as they are already a standard in medicine.  
  - Planned entries for the blog post:  
    - Christian: one for when he joined the team.  
    - Joudy and Aybaniz: a blog post for students containing a list of digital tools useful for Arabic studies. We should also include Wikidata IDs for the tools in the blog post or create new Wikidata entries for tools that are not yet listed. We should use the students' enthusiasm for AI to introduce more digital solutions that promote transparent and reusable research. While enthusiasm for AI is great, students should also understand its limitations.  



- Networking
  - We spoke with the director of the HU Library and now have a list of names for networking. At HU, the cooperation between IT and the library works very well, and they have managed to build a lot for the DH community.  



- Conferences  
  - What should we do for the DHD and DOT conferences?  
  - For DOT: We should focus on raising awareness about digital workflows and open science.  



- BUA
  - There is a meeting of the steering committee on either February 18 or 21, between 10:00 and 14:30. We should attend and present our project.  



- DH Workshop   
  - We have received around 30 registrations for the workshop. Unfortunately, we cannot accept everyone due to limited space, but this shows how strongly students are interested in digital research methods.  



- Idea for a new paper
  - A review of hosting strategies in German research institutions or a closer, more detailed look at specific universities. It would be good to address the main challenges.  



##2024-08-23

**Time**: 10:30 - 12:00 (Berlin)

**Participants** (alphabetical): Alieva, Aibaniz, Beatrice Gründler, Xenia Kudela, Jonas Müller-Laackman, Sido Bozan, Joudy

- Team

  - Joudy has joined the project.
  - We are still waiting for the new Postdoc. The position description is still in the approval process and will be published soon.

- Tool´s list

  - We will start a collaboration with the Scholarly Makerspace at the HU. They have a sustainable WikiData toolbox that could be linked to our list of tools. There are three cooperation scenarios:
    - We both use the same tool and display a combination of our data and theirs.
    - We enrich their toolbox with our tools and receive an authority file in return.
    - We enrich our list with relevant tools from their database (to be discussed; the first two solutions are priorities).

  Data exchange should be done with SPARQL, which would be a good programming exercise for the SHKs. Next steps: contact the Scholarly Makerspace via email and visit their workshop.

- Emails

  - The emails to the contacts of the projects existing in our database need to be gathered manually. The process of sending them automatically can be done with Python.

- Blog
  - We have three upcoming posts for August/September (external contributor), October (Xenia), and December (external contributor).
  - Xenia, Joudy, and Aibaniz will also co-author a post about the upcoming Dariah workshop.

##2024-08-05

**Time**: 11:30 - 12:30 (Berlin)

**Participants** (alphabetical): Alieva, Aibaniz, Theodore Beers, Beatrice Gründler, Xenia Kudela, Jonas Müller-Laackman

- SHK

  - Our first student assistant, Aibaniz, has joined the team.
  - The main tasks of the student assistants will be to work on the backlog of projects and to extend our database.

- PostDoc

  - The position for Theo’s replacement is ready. Once it is approved by the responsible units, it will be published immediately.

- Xenia’s Workshop

  - The DH workshop for students should take place in late November or early December. To enable other interested team members to participate, it should be scheduled either before or after the following events:
    - 02-04.12: Anthologies across Literary Cultures
    - 05-06.12: Temporal Communities International Conference: Visualising Universalisms

- Interviews

  - We should send a reminder to all the projects that haven’t responded, or write directly to the PIs. This will also help convey the seriousness of our research.

- BUA Reporting

  - We have completed all our reporting documents and received very positive feedback from BUA for our precise and detailed work.

- Website

  - The website is fully set up, and the events calendar has been updated.

- Blog

  - We will have three blog posts by December: two from external contributors, and one from Xenia.

- Tools

  - How can we visualize the results of the interviews? We already have a list of 20 tools used by the interviewed projects. Some interviewees have expressed interest in seeing an overview of technologies used by others.
  - Idea 1: We could create a sub-database just for the tools and present it in a new tab on our website.
  - Idea 2: A separate database is not a good idea; it is very difficult to maintain since tools are constantly being replaced or becoming outdated ([Quinn Dombrowski wrote an article about this issue](https://quinndombrowski.com/projects/bamboo-dirt/)). We need to think of a model that will be sustainable even after the project is completed. There are already plenty of tool directories available ([example here](https://www.vezveze-kandu.de/)).
  - Idea 3: Since we already have information about the tools in our schema, we could easily create a separate view to display them without creating a sub-database. We should also clearly state that we are just displaying tools used by the projects, without the intention of creating and maintaining a directory.
  - Idea 4: If we decide to create a directory, we should initiate cooperation with the HU initiative that archives tools in WikiData to cross-reference our findings.

- Cooperation Initiatives

  - We will invite two external parties to our team meeting to initiate cooperation:
    - The management of the HU Library
    - Fachinformationsdienst Nahost

- Next meeting: 23.08 at 10:30

##2024-07-19

**Time**: 10:30 - 12:00 (Berlin)

**Participants** (alphabetical): Theodore Beers, Beatrice Gründler, Xenia Kudela, Jonas Müller-Laackman

- BUA

  - The updated budget has been sent to BUA.
  - Early next week, Theo will update the Steckbrief.
  - We should update the document with project outputs regularly to ensure we don't miss anything, even though it is not directly required right now. Last time, we might have omitted some of our outputs, so regular updates will ensure that the document is complete when required for the next funding phase. It's also useful for our internal records.

- Website

  - Our project was evaluated very positively by the Open Methods Colloquium, an internal rating for tools and projects by DARIAH, explicitly mentioning it as an example of good academic practice. We will add this to our website, the Steckbrief, and the output list.

- Events

  - Jonas will present our project in a DARIAH workshop as a corpus of projects dealing with multilingual data. He will reach out to Xenia to discuss the details. It will take place on the 28th or 29th of August. We should also put it on our calendar and the list of outputs.

- Hiring Process

  - The SHKs are waiting for their contracts and will start in August.
  - As for the PostDoc position, we reviewed the pool of potential candidates, contacted some of them, and will invite them for interviews. We hope to fill the position by November 1st.

- Interviews

  - Since the last meeting, Xenia has interviewed Bibliotheca Arabica and World Scripts Explorer.
  - The researchers of Bibliotheca Arabica would be interested in a list of tools used by other projects; maybe we should implement such a feature on our website.
  - A list of the next projects to invite was made based on their relevance and funding period. First invitations were sent to Corpus Coranicum and Averroes Edition.

- Projects

  - Prof. Gründler saw a presentation on the Kitab project during the conference in Venice. They have made their website more user-friendly and implemented a new feature visualizing text reuse among the documents. They also offer to perform a text reuse test on any PDF sent to them by external users and display it on their website since they want to expand their database.

- DH Course

  - Theo's course ended last week. It was well attended, and some students became really motivated to engage more with DH.
  - In one of the sessions, students were shown eScriptorium and were directly interested in using it in their studies and academic practice. However, attempts to make it work on their machines were unsuccessful, even with the use of Docker. It is very complicated to set it up, even when consulting official documentation.
  - Possible solutions would be to first ask FUB-IT to create an eScriptorium instance for the FU so that it can be used with students. Secondly, we could ask Hamburg University to share their instance with us, as they have a large community working with eScriptorium. Alternatively, we could seek advice from Uni Mannheim, which is also an important hotspot for engagement with eScriptorium.
  - Theo's course should be offered again by his successor in the coming semesters. It'd be advisable to have at least one DH course in the Arabistik course catalog. The course could be open to other seminars to increase the number of participants.

- Next meeting: 05.08. at 11:30

##2024-06-28

**Time**: 10:30 - 12:00 (Berlin)

**Participants** (alphabetical): Theodore Beers, Beatrice Gründler, Xenia Kudela, Jonas Müller-Laackman

- SHK

  - We have hired two student assistants who should start at the end of August. We should update the contributor page and add their names. Xenia is on holiday shortly after they start, so they should be given tasks to do during this time (generating
    email lists, adding project details, or learning programming).

- Post Doc Position

  - Theo talked to a possible candidate for his position. He brings expertise in Egyptian studies, has a reading understanding of Arabic, and strong IT experience (research software development for other projects). He was also part of an initiative to incorporate several ancient Egyptian scripts into the UTF-8 encoding, which aligns with the focus of our project. It is important to actively look for suitable candidates because even though the position will be posted openly, it does not guarantee that it will reach people with the skills we are looking for.

- RDF

  - We should rethink the most efficient way to offer our data as RDF (what about JSON.LD format?). We could offer it as a separate file in each project folder. The main points of the schema would be enough at the beginning. This would make our data more accessible, easier to communicate with, and searchable by SPARQL queries. This would strengthen our position in terms of Open Access and FAIR principles. Moreover, people should be more eager to share their data with us, knowing that it can be disseminated in a more standardized way.

- Cooperation and Affiliations

  - We have further discussed possible cooperation partners. Xenia talked to one of them who is generally interested in joining our team meetings. We should reach out to people in Berlin, especially those who have expertise we are missing (Hebrew studies, Altorientalistik, etc.) to provide us with more projects from their fields. We should also build up a network of DH people from different Berlin institutions (a list of names was created).

- Workshop

  - Xenia will organize the workshop about the TypeDB database with our partner from CCHS-CSIC in Madrid. We have to take care of the room, catering, and dissemination.

##2024-06-14

**Time**: 10:30 - 12:00 (Berlin)

**Participants** (alphabetical): Theodore Beers, Beatrice Gründler, Xenia Kudela

- Administrative updates:

  - Regular administrative meetings have been held in the last couple of weeks with the goal of enhancing our web presence. We have set up a project website embedded in the university's website with a calendar containing CTG-related events.
  - The Abschlussbericht has been completed and sent to BUA.

- SHK positions:

  - Four applicants have been invited for interviews.

- Visualizations:

  - Xenia has completed the second visualization. It needs to be embedded in the website. Two more visualizations depicting languages and universities will follow ASAP.
  - Titles, captions, and explanations for all visualizations should also be added.
  - Languages with multiple scripts need to be addressed.

- Blog:

  - Theo has added a new project to the blog.
  - Efforts are ongoing to add new contributors. Oualid has agreed but is currently busy.
  - The blog should be part of the archiving process and the Bericht for BUA.
  - For longer, more serious posts, we should consider assigning DOIs or connecting them to Zenodo.
  - Offering DOIs could facilitate engaging people to contribute to the blog.

- Theo’s position:

  - Three people were mentioned as possible candidates for Theo’s position. We will discuss with them their interest in joining.

- Workshop collaboration:

  - There is a possibility of organizing a workshop on relational Database Type DB for early November. We should discuss this with Jonas and then coordinate it with the person interested in conducting the workshop.

- Interviews and best practices:
  - Interviews were conducted with Beta maṣāḥǝft, ACP, and AJAMI Lab.
  - Next interview partners are Bibliotheca Arabica and Coptic OCR. We have also contacted eScritorium and are waiting for a response.
  - What is the aim of the interviews? Should we emphasize qualitative insights into project strategies or data collection? Which approach would be more helpful for the development of best practices?
  - The goal is to interview projects that we already regard as good examples of DH practice. Since we can’t generate an extensive set of data, we should focus on a qualitative approach and use the data to support our claims.
  - Every interview should be documented. We can also ask for permission to record.
  - We should discuss this topic again with Jonas.

##2024-03-15

**Time**: 11:00-12:15 (Berlin)

**Participants** (alphabetical): Beatrice Gründler, Xenia Kudela, Jonas Müller-Laackman

- DHd report: the presentation was well attended, we got good feedback and contact requests. The important questions were:
  - The use of WikiData as framework, which should be discussed more in detail.
  - Information about transliteration in our schema.
- AG MLDH was very active. The Arabic studies are becoming more visible in the DH scene and we should try use this opportunity to involve more people to become active in the community and to attend the conference.

- Data:

  - Transliteration should be included in the future.
  - We should also include information about where the source text comes from, whether it was self-transcribed, digitized with an OCR, or taken from another place. This should be one of the questions asked in the interviews.

- New postdoc

  - We should start looking for a replacement for Theo. We could eventually split the position in two.
  - The criteria would be:
    - Knowledge in a non-Latin script, doesn´t have to be Arabic, but there should be at least an interest in it. Having someone working with scripts other than Arabic would make our project more inclusive and multilingual-oriented.
    - Next to IT skills, the person should be interested in PR-work to ensure the visibility of the project.
  - The decision about the new postdoc should be made by the entire team.
  - In case we don't find anybody on time Xenia could take over more responsibilities.

- Student assistant: The job advertisement has been published, we are waiting for submissions.

- DH course: Xenia and Jonas would like to make a DH course for students together in one or two semesters.

- Interviews: Since we have already established a connection with CMS Hamburg, we should continue interviewing people from there. Xenia will prepare a list of possible interview partners and send it to the rest of the team.

- BUA report: the KPIs are yet to be completed.

##2024-02-09

**Time**: 11:00-12:15 (Berlin)

**Participants** (alphabetical): Theodore Beers, Beatrice Gründler, Jarod, Xenia Kudela, Jonas Müller-Laackman

- Main topic: Workshop preparation
- Structure:
  - Prof. Gründler: General introduction form a PI perspective.
  - Jonas: General introduction form an infrastructure perspective.
  - Theo: Presentation of the project´s infrastructure, technical side, FAIR data, etc.
  - Break
  - Xenia: Presentation of the data corpus and possible use cases
  - Last our: unstructured – open discussion
- Questions: We should prepare a list of questions for the discussion. Possible questions could pertain to the software (e.g., what software was used, was it self-developed, can it be reused by other projects?) or research data management (e.g., where should the data be stored long-term, what are the systemic capabilities of the hosting institution? Could external archives/repositories be utilized, and if so, which ones?).
- Poster: Since the designer didn't respond, we will bring a poster from the Arabistik department (Theo). However, we should prepare a logo for future workshops.
- Dinner: Prof. Gründler will take care of the dinner arrangements. We should also invite some of the workshop participants.
- Streaming: The event could be streamed. If the technology works properly (Jonas), we will send an invitation email to people who could be interested (Xenia).
- Manuscript viewing: After the workshop, the team will have the opportunity to view some of the manuscripts from the SUB collection. Jonas will contact the person in charge
- Meeting time: 9 AM at the main door of the SUB

##2024-01-19

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
