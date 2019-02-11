# 2019.02.01+ 2019.02.04

I'm officially starting to work on this project with Dominique and Juliette. I'm downloading the `Ford` folder so that I'll be able to work with its content locally without using the shared folder hosted on Dropbox. Our last meeting with Juliette was super interesting and we had a bunch of promising ideas to kickoff the project. Before starting to code or design with something in mind, I'ld like therefore to take some time to map out what's being done these days at the intersection between `language x archive x programming`. I'll also take some time to sum up our first brainstorming session later.

------

This project is directly embeded into a `research through design`  approach, so the idea is to use a body of 'wickedly' suitable methods along the project, such as this digital diary format (Coming from Barr, Khaled and Lessard's MDMA proposition), as well as case studies of other projects involving language and code. Along the project, I'll also quickly prototype ideas and explore through code forms how language could be manipulated and rendered using code.

Ideally, these informal logs will provide us interesting insights about what was intended behind the project's (final) forms. These logs will therefore help us to track and analyze the trajectories taken (or aborted) along the project.

------

Let's kickoff the research by interesting projects coming from artists, researchers, designers, programmers - and playing with language and its frictions inside machinic contexts. These projects will resonate with the franklin-ford-bot project and I'll use case studies and other examples coming from what's being done today to reframe the project and place it inside a broader research context.

1. David (Jhave) Johnston:

   1. [ReRites](http://glia.ca/rerites/). This project is amazing. It's basically a neural networks (aka artificial intelligence) trained on a contemporary poetry corpus that recreates poetry.

      What I like with this project is the idea of artificial agency, making its own decisions based on a human input.

2. Alyson Parish has inspiring projects:

   1. [semantic_similarity_chatbot](https://gist.github.com/aparrish/114dd7018134c5da80bae0a101866581) is a chatbot that mimics someone's writing style "—a famous author, a historical figure, or even the student's own e-mails or messaging logs.".
   2. She's also playing a lot with [compression](https://www.youtube.com/watch?v=meovx9OqWJc) to create new form of textual poetic approaches and translations. This is quite interesting and there's parrallels we could create with the OCR program we're using to translate images to text (based on certain compression parameters). More on that soon.
   3. Finally, Parrish is working with this idea of [semantic space](http://opentranscripts.org/transcript/semantic-space-literal-robots/), which is also quite interesting because it gives a way to approch textual entities (such as the ones we have for the project) as spaces with their own maps and dynamics. With this technique, words (or sentences) could be associated based on a variety of parameters inputed by users. (Key)words could be then filtered based on specific options and new kinds of dynamic associations could be created. For now, it's quite abstract but we'll have some time to experiment with this.

3. There's also a bunch of very interesting small projects (bots && || poems ) coming from artists, poets and researchers working with language:

   1. Darius Kazemi: http://tinysubversions.com/
   2. Nick Montfort: https://nickm.com/
   3. This fun bot by Callum Copley: https://twitter.com/starterpackbot

------

On top of the bots that we're going to create, there's also a website that will be used as the main host for these things to be shown and explained publically. However, more than a simple website, it could be interested to approach this website not only as a container but as a Platform, as an experience where we'll show these bots dynamically. Drawing on this idea of experience, the website could change based on the user's input or others parameters such as:

- The user's GPS coordinates
- The date and time
- The user's numbers of visits on the website.
- The user's IP address
- ...

The main website could redirect to subdomains where different parts of the project will be hosted? The website could take the form of a textual game with specific narratives depending on the user's input?

------

During our first brainstorming session, a number of interesting ideas came up. I'll list these ideas - a.k.a strategies that we could use to embody the Franklin Ford bot and make it more dynamic and playful?

- Creating a timeline where different Tweets will be sorted and grouped.
  - This timeline could be re_ordered based on different filters?

- Creating a chatbot based on content related to the franklin-ford bot?
  - This is a promising idea and I didnt have the chance to create a chatbot yet.
- Playing with AI to create new kinds of computer-generated language based on Ford?
  - This could be easily paired with the chatbot idea. More on this soon.
- Creating a chrome extension?
  - I don't think we talked about this when we met but it's something I had in mind recently. I don't really envision this as a main asset of the project but as a fun exploration on its own. The idea is to give the user of this plugin (that you install on your browser) an updated version of all the webpages he will visit.
    - With chrome extensions, specific (or all) words, images, videos, advertisments (and so on) could be changed. All kinds of contents could be also added inside the webpage. [This one](https://chrome.google.com/webstore/detail/santa-to-satan/oggeichdlekdakedbibaihfehgdckdfk), for an example, is replacing the word `santa` by the word `satan`. You get the idea ;-)
    - Chrome extensions could also operate only for a specific website or for lists of websites.
- Creating a cryptocurrency? Interacting with an existing cryptocurrency?
- As I mentioned earlier, creating an online game? There's some interesting online textual games, like [Burnt Matches](https://www.pippinbarr.com/2016/11/29/burnt-matches/) done by Pippin Barr - [more info here](https://killscreen.com/articles/pippin-barrs-new-game-brings-concrete-poetry-life/).

------

Now going back to the root files of the project that Juliette and Dominique shared me. I'ld like now to spend some time on:

- [ ] Investigate this idea of remediation, something that also interest me for my thesis' subject on analog transmitting protocols and language flow inside the network. I'll most specifically read the PDF file located in the `/digital journalism` directory: `@franklinfordbot: remediating Franklin Ford`.

- [ ] Go through Ford's "intelligence triangle" and investigate its types of publications in relation to the design ideas we had during our meeting.

- [ ] Go through the collected texts and PDF files located in the `/Textes primaires "clean"`  directory.

  - [ ] Investigate how these files are being parsed by the selected OCR toolkit ([tesseract-ocr](https://github.com/tesseract-ocr)? ImageMagick?)

- [ ] Reverse the Python scripts located in the `code` directory.

  ------

  Technical details that need to be decided:

  - [ ] What will be the programming stack? `Node.js `or `Python`?

# 2019.02.11

Alright - I spent almost 30 minutes trying to figure out something with `git` - my files were not properly pushing. Anyway, fixed now. 

------

For commenting, the best would be to proceed with `github-issues`.  I'm adding here a step by step of what this github feature could enable us to do.

Firstm you'll have to create a github account. This is quite straightforward. Then, you could either start my repository or save it as a bookmark. When you access the repository, there's a bunch of buttons located right after the repo's title. You need to click on issues. Once you click on it:


1. You click on the green button titled: `New Issues`. 


   ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/github_issues_steps/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-11%20%C3%A0%2010.15.28.png)

2. There, you can type your comment. You can format code as well as the text located in the `logs.md` file. 


   ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/github_issues_steps/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-11%20%C3%A0%2010.16.43.png)
    ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/github_issues_steps/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-11%20%C3%A0%2010.17.07.png) 

3. Before you publish the `issue`, you can preview your code.

    ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/github_issues_steps/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-11%20%C3%A0%2010.17.49.png) 

4. Once this `issue` is published, I can reply.

    ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/github_issues_steps/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-11%20%C3%A0%2010.18.10.png)
    

5. Finally, if the `issue` need to be closed (the feature is finished or we need to move forward with other things), I can close the thread. I don't think this will be necessary though.

     ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/github_issues_steps/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-11%20%C3%A0%2010.20.21.png)
   ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/github_issues_steps/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-11%20%C3%A0%2010.20.42.png)  


------

This is the bot: https://twitter.com/franklinfordbot/

- When does it Tweet? What's his frequency?
  - The bot last tweeted on January, 21st. Before that it was tweting almost every day. Seems quite unstable - is it on purpose?
- When does the bot replies to its own posts?
  - I see that sometimes the bot is replying its own posts and sometimes no. This seems quite unstable too. Is there a computational procedure behind this? `Random()` maybe?
- When does the bot knows what to pick and publish?
  - I'll revers the code soon and this will help me to figure out these things.
- Why is the bot splitting its comments in two sections (separated by `1/2` and `2/2`)?
  - Is there a computational logic/procedure behind this? Is it meaningful to Ford? 

Feel free to answer these using `GitHub-issues`. 

------


Before going back to the working points I listed last week, I'ld like to map here a list of playgrounds (+ what they're affording to the project) as well as technical ressources we could use to experiment ideas:

- Playgrounds for (social) textual bots:

  - Twitter? - since we have their API keys; and we have the master keys for the running bot + another set of keys for testing purposes.

  - Reddit 
  - [Mastodon](https://joinmastodon.org/) - since we have the keys for Twitter and there's more users for now, let's go with Twitter.

- Playgrounds for (conversational) bots:

  - Mesenger bots:
    - made with Python or Node.js
      - [This NLP framework](https://dialogflow.com/) could be interesting to investigate
  - Telegram bot? - If we're able to have mesenger credentials, let's go with Mesenger then.

- In addition the posts performed by the bot and embeded inside the website, we can setup on the website a conversational bot too. Users will be able to have a chat session where and therefore *converse* with the bot.


------

1. On Twitter, one way to disseminate content from a general audience to a specific one would be to use keywords.

   ```
   Keyword targeting allows you to reach Twitter users based on keywords in their search queries, recent Tweets, and Tweets they recently engaged with. Because you can reach people for whom your message will be most relevant and top of mind, this targeting option puts you in a better position to drive engagements and as well as conversions.
   ```

   Interesting fact: I don't think there's a maximum of keywords allowed. 

   On their [/campaing-targeting]( https://business.twitter.com/en/help/campaign-setup/campaign-targeting.html) page, there's other ways to target audiences. We can use all these features through their API (aka, use these features in the code). In addition to `#` targeting, the obvious targets we could play with would be  `gender`, `language`, `GPS coordinates`, `usernames` and `interests`. However, there's a bunch of other interesting/obscure targets such as the `devices` or `os` or if the user is using a `wifi` of not. On top of using these separatly, we could also pair them and use them in relation to what the bot will parse (length of words, position of words in the sentence and any other weird system we could come with...).

2. On Reddit, the relationship between broad audience and specific audience is quite different.

   You need to post to a `subreddit` - or multipe `subreddits` at the same time. You can also:

   - Upvote/Downvote
   - Comment on other posts
   - Add images, links, texts
   - Add hashtags and keywords 
   - Post to`random` subreddits.


------



- Go through Ford's "intelligence triangle" and investigate its types of publications in relation to the design ideas we had during our meeting.

  ```
  "reading Ford is a jumping-off point for experimentations and theoretical developments that speak to contemporary media problems. In that regard, @franklinfordbot is an experiment, a remediation of Franklin Ford."
  ```

   This comes from the [project's webpage](https://www.franklinford.org/). What is interesting here is the idea of exploring media and media studies concepts such as remediation through the design of the bot. From the project's documentation, the idea of remediation seems quite central. Other than that, this project also seems to gravitate toward a body of `critical` and `speculative` design/engineering practices and theoritical frameworks. These concepts are not linked to `ford` nor his `intelligence triange` but could be helpful to frame (and reframe) the project: 

  - Critical Making

    - Coming from Garnet Hertz, critical making is the: "combination of critical thinking with hands-on making,
      a kind of pedagogical practice that uses material
      engagements with technologies to open up and extend
      critical social reflection." ([Hetz](https://journals.uvic.ca/index.php/ctheory/article/view/15123/6206), 2015). This could be specifically suited when we'll work with the raspberry-pi.

  - Critical/Tactical Design/engineering

    - This is closely related to Hertz's idea of critical making. The idea is to use design/engineering to foster a debate, to enact from the user of the critical object object a critical discourse on things (social medias, language...)

      From [Dunne & Raby](http://www.dunneandraby.co.uk/content/bydandr/13/0) that coin this term, "Critical Design uses speculative design proposals to challenge narrow assumptions, preconceptions and givens about the role products play in everyday life. (...)"

  ------

  Going back to the idea of remediation.

  Remediation, coming from JD Bolter, R Grusin, is the idea that (new) medias always remediate older ones. In the context of the project, this concept is quite interesting because it gives us a lot of space to explore Ford's ideas in the light of the internet and other digital contexts where social-medias like Twitter belong.

  Narrowing down to Twitter and other social-media Platforms, `remediating ford ` within these contexts means therefore, from my perspective, to `re-contextualise ` Ford's theories inside these Platforms; and what these [Platforms' APIs](https://en.wikipedia.org/wiki/Application_programming_interface) are affording (and eluding).

  This is also closely related to Katherine Hayles' idea of [Media-Specific Analysis](http://www.cws.illinois.edu/IPRHDigitalLiteracies/Hayles.pdf) and her thoughts concerning frictions between natural language and code; printed text and digital text:

  1. Electronic Hypertexts Are Dynamic Images
  2. Electronic Hypertexts Include Both Analogue Resemblance and Digital Coding
  3. Electronic Hypertexts Are Generated through Fragmentation and Recombination
  4. Electronic Hypertexts Have Depth and Operate in Three Dimensions
  5. Electronic Hypertexts Are Bilingual, Written in Code as Well as Language
  6. Electronic Hypertexts Are Mutable and Transformable
  7. Electronic Hypertexts Are Spaces to Navigate
  8. Electronic Hypertexts Are Written and Read in Distributed Cognitive Environments
  9. Electronic Hypertexts Initiate and Demand Cyborg Reading Practices

  These remarks could serve as interesting starting points to explore how Hyperlinks and web-environments could remediate ford. 

  ------

    ![](https://static1.squarespace.com/static/58d5343cb8a79b3b68b52265/t/58d56bd31b631bd2a7f6f532/1490381813613/newsoffice2.jpg?format=1000w) 

  I'm reading the *@franklinfordbot: remediating Franklin Ford*'s article now. 

  ```
  "Saying that Ford's program for the future of the news was grandiose would   be an understatement. In its most concrete guise, it takes shape as a   centralized news system that involves a triple distribution of facts (what   Ford calls the "intelligence triangle") thanks to three types of   publications: general-interest newspapers, "class interest" newspapers that   cater for the needs of specific professional communities, and an   information bureau that sells customized facts to individuals. Ford went   into many details in describing the nitty gritty of the system, complete   with a list of geographic locations, names for the newspapers, and a   business model (Ford 1893). In a letter to his friend and Columbia   University Librarian James H. Canfield sent on February 11, 1907, Ford even   enclosed further details, including a list of potential subscribers and a   plan for incorporations."  
  ```

  Ford's centralized news system triangulates therefore between three main axis:

  1. "General-interest" - intended for a general audience
  2. "Class interest" - targetting specific communities
  3. Customized - targetting specific individuals  

  ```
  
  "The overarching principle that sustains the model is what Ford calls the   "movement of intelligence", that is, the adequate flow of information   through society (which Ford evokes in terms of the "social organism"). Each   "physical fact" is to be delivered to the appropriate audience thanks to   the appropriate medium, at the appropriate time. The movement of   intelligence may seem like a simple proposition to balance the   informational supply and demand, by delivering just the right amount of   facts to the right people (...)"  
  ```

  What I also find very interesting with Ford is the notions of `flow of information`,  of `time-based media` and of `information network`. This is what makes `remediating Franklin Ford` on Twitter an exciting idea - because this Platform is an ecosystem of time-based publications "flowing" inside the network, sorted by keywords and threads.

  ------

  From the intersections between Ford's "intelligence triangle" x our brainstorming ideas:

  - Exploring how Ford could be remediated through a social bot

  Using the Twitter/Reddit API:

  1. "General-interest"
     1. Publishing the picken sentence on the main account?
     2. Pairing random keywords to the picken sentence to disseminate the bot accross Twitter - without any specific direction?
  2. "Class interest"
     1. Using specific keywords related to the picken sentence? 
     2. In addition to words, performing a Google query related to the picken words/sentence and return the first link? Could also work with 
  3. "Customized"
     1. Sending DM to users based on relationships between their tweets and the bots ones?
     2. Following specific users?
     3. Replying, liking or retweeting specific users' tweets?
