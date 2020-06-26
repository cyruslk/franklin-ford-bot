# IMPORTANT LINKS

- THE PROJECT'S PROCESS: ⏬ - <https://github.com/cyruslk/franklin-ford-bot/blob/master/logs.md>
- THE PROJECT'S 'ISSUES' -  <https://github.com/cyruslk/franklin-ford-bot/issues>
- THE PROJECT'S TWITTER ACCOUNT - <https://twitter.com/franklinfordbot/>
- THE PROJECT'S WEBSITE: <https://www.franklinford.org/>
- THE PROJECT'S WORK IN PROGRESS GOOGLESHEET: http://bit.ly/2DNfTEF
- THE PROJECT'S NATURAL LANGUAGE PROCESSING LIBRARY: http://bit.ly/2WtmWKg
- STAGING TWITTER ACCOUNT: https://twitter.com/a_deschanel
- The Heroku web app where the bot is hosted: https://franklin-ford-bot.herokuapp.com/
- The endpoint to the CMS: https://franklin-ford-cms.herokuapp.com/

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
​    ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/github_issues_steps/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-11%20%C3%A0%2010.17.07.png) 

3. Before you publish the `issue`, you can preview your code.

    ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/github_issues_steps/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-11%20%C3%A0%2010.17.49.png) 

4. Once this `issue` is published, I can reply.

    ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/process/github_issues_steps/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-11%20%C3%A0%2010.18.10.png)

5. Finally, if the `issue` need to be closed (the feature is finished or we need to move forward with other things), I can close the thread. I don't think this will be necessary though.

     ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/process/github_issues_steps/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-11%20%C3%A0%2010.20.21.png)
      ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/process/github_issues_steps/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-11%20%C3%A0%2010.20.42.png)  

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

  - Oulipo 

    - I feel also that - since we're playing with language an exploring in an open-ended format - this artistic and poetic movement could be explored. 

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
  "Saying that Ford's program for the future of the news was grandiose would be an understatement. In its most concrete guise, it takes shape as a centralized news system that involves a triple distribution of facts (what Ford calls the "intelligence triangle") thanks to three types of publications: general-interest newspapers, "class interest" newspapers that cater for the needs of specific professional communities, and an information bureau that sells customized facts to individuals. Ford went into many details in describing the nitty gritty of the system, complete with a list of geographic locations, names for the newspapers, and a business model (Ford 1893). In a letter to his friend and Columbia University Librarian James H. Canfield sent on February 11, 1907, Ford even enclosed further details, including a list of potential subscribers and a plan for incorporations."
  ```

  Ford's centralized news system triangulates therefore between three main axis:

  1. "General-interest" - intended for a general audience
  2. "Class interest" - targetting specific communities
  3. Customized - targetting specific individuals  

  ```
  
  "The overarching principle that sustains the model is what Ford calls the "movement of intelligence", that is, the adequate flow of information through society (which Ford evokes in terms of the "social organism"). Each "physical fact" is to be delivered to the appropriate audience thanks to the appropriate medium, at the appropriate time. The movement of intelligence may seem like a simple proposition to balance the informational supply and demand, by delivering just the right amount of facts to the right people (...)"
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

  ------

  This leads me to code - and embodied (through code) explorations. For now I'll work with placeholder text, assuming that the OCR part is done and the text is received from the OCR  software to the server - and about to be pushed on Twitter. I'll then work with the unused keys Juliette gave me.

  For now, these explorations take quite an oulipean (!) turn. 

  Let's say we have this sentence, return from the OCR to the server:

  ```
  const pickedSentence = "The time has come when it will pay to act on the reality underlying the the existing newspaper structure."
  ```

  - This first small program will  convert the text into a chain of keywords. I guess it's a strategy to embed the bot inside broader audience and publics ;-) 

  ```
  function allKeyWords(string){
    const arrayToString =[];
    string.split(" ").map((ele, index) => {
      arrayToString.push(`#${ele}`)
    })
    return arrayToString.join(" ")
  }
  ```

  This will therefore return: 

  ```
  #The #time #has #come #when #it #will #pay #to #act #on #the #reality #underlying #the #the #existing #newspaper #structure.
  ```

  - An alternative would be to randomly pick only one word transfered in keyword:

  ```
  function randomKeyWord(string){
    const arrayToString =[];
    const stringToArray = string.split(" ");
    var item = stringToArray[Math.floor(Math.random()*stringToArray.length)];
    stringToArray.map((ele, index) => {
        if(ele === item){
          arrayToString.push(`#${ele}`)
        }else{
          arrayToString.push(`${ele}`)
        }
    })
    return arrayToString.join(" ")
  }
  ```

  This will return:

  ```
  The time has come when it will pay to act on the #reality underlying the the existing newspaper structure.
  ```

  or -

  ```
  The time has come when it will pay to act on the reality underlying #underlying the the existing #newspaper structure.
  ```

  - Finally, a third variation could be explored: using a second parameter to the function to control the numbers of keywords within the sentence that'll be Tweeted.

  ```
  function randomKeyWordSelected(string, selectedNumber){
    const arrayToString =[];
    const selectedStrings = [];
    const stringToArray = string.split(" ");
  
    for(var i=0; i<selectedNumber; i++){
      var item = stringToArray[Math.floor(Math.random()*stringToArray.length)];
      selectedStrings.push(item)
    };
  
    stringToArray.map((ele, index) => {
        if(selectedStrings.indexOf(ele) > -1){
          arrayToString.push(`#${ele}`)
        }else{
          arrayToString.push(`${ele}`)
        }
    })
    return arrayToString.join(" ")
  }
  ```

  If I enter `2`  keywords, this will basically return:

  ```
  The time has come when it will pay to act on the reality #underlying the the existing #newspaper structure.
  ```

  If I enter `8` keywords, this will return:

  ```
  #The time #has come #when #it will pay to act on #the reality underlying the #existing #newspaper #structure.
  ```



# 2019.02.18


The plan of today is to:

- [x] Set up our 'behind the scenes' bot with the credentials Juliette gave me
- [x] Investigate what can be done using ` tensorflow.js` 
- [ ] Investigate how `pytorch` can be used with web-dev app.
- [ ] Go back to my last fiddles - investigate what can be done using reddit.
- [x] The triangle meme?
- [x] Ford bot x machine learning?
- [x] Ford bot x machine vision?
  - [x] Using ML5?
    - [x] Posnet
    - [x] Text-generation model?

Usefull links of today:

- [https://medium.com/@piotr.skalski92/my-first-tensorflow-js-project-b481bdad17fb](https://medium.com/@piotr.skalski92/my-first-tensorflow-js-project-b481bdad17fb)
- https://dev.to/ixartz/live-digit-recognition-with-tensorflowjs-and-react-12i1
- https://www.youtube.com/watch?v=Qt3ZABW5lD0&t=3s

------

As a quick way to prototype ideas, an interesting 'way-to-do' would be to use the `ml5` library, which is basically a tensorflow wrapper. `ml5` is interesting because a) it runs on the browser and b) it's very high level - meaning than the only keepen code is what is needed from the program to run. In case we wan't to mess a bit more (hack?) with the hidden code, tensorflow.js would be more suitable - but for now, let's use `ml5` as a way to quickly embody ideas into code.

 Here's the ML5 official website: https://ml5js.org/

Interesting ideas we could explore using a machine learning library such as `ml5`:

## Ford bot x machine learning

- [x] Text-generation model?

This is quite interesting. The idea would be to basically train our own model (based on the writings of Ford) to create new sorts of linguistic forms. Here's the `ml5` tutorial: https://ml5js.org/docs/training-lstm. So based on some inputs entered by the website's user, 'artificial' text coming form the neural network (trained on the writings of Ford) will be displayed. Simple interaction: the user change a set of buttons -> 'artificial' text appear.

-> These inputted parameters could be also defined by the machine, randomly or  not.

[Here](https://raw.githubusercontent.com/ml5js/ml5-data-and-models/master/datasets/text/jkrowling_HP/harrypotter.txt), this is what one of the `ml5` default models looks like, trained on the writings of Harry Potter. The first step would be therefore to concatenate all the writings of fords located in the working repository into one single .txt file.

- [x] Interactive Text Generation LSTM

```
In this interactive demo you ask the LSTM: "Starting with the seed text, predict what text might come next based on the pre-trained Ernest Hemingway model." Changing length changes the number of characters in the resulting predicted text. 
```

This would definetely add something more interactive to the project. The idea with this is to have an autocomplete field where the user types some words and the machine completes the sentence based on the model (aka - the writings of Ford).

## Ford bot x machine vision

- [x] Posnet 

  It's been a while i'm thinking of exploring the intersections between personal data and games/playful experiences. In addition to the use of data coming from the browser (such a all [these](https://codepen.io/run-time/pen/XJNXWV) or other [user events](http://clickclickclick.click)), I'm very keen to explore `in real time` data coming from images and cameras. I'm therefore very interested by using biometrics in the context of artisitic/applied research projects.


  A promising path is to explore `face recognition, face tracking, or posnet` scripts in the browser. Face tracking does something like this:

    ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-18%20%C3%A0%2013.23.26.png)  



------

Ok. I've just finished this first `language x face tracking` prototype. I guess I wanted to test this weird idea I had recently when I was thinking of the project - so I coded it. 

Ford, through his `intelligence tiangle`, posits that data should be both distributed globally and within smaller contexts and scopes. On top of his triangle, there's the idea to target data to specific individuals. I was therefore thinking of ways to `remediate` this idea of targetting individuals how individuals are targetted nowadays -- what it means to be an individual digitally.

These thoughts consequently led me to explore 'privacy data' and other - so called! - personal data such as biometrics and fingerprints as starting points to explore Ford's third (and last) fold of its triangle. And instead of a dull way to target individuals without really taking in consideration their 'data', I decided to use for this prototype `face-tracking` related data to generate unique responses from the bot. In other words, the bot return different data based on the interpreted facial features of this user (such as posnet).

![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-18%20%C3%A0%2021.18.07.png) 

I'll push the code online and to a staging URL soon, so that it could be demo'd during talks (it only works in chrome for now), in the meantime here's step by step the idea. [Here's also a video of the prototype in action](https://vimeo.com/318124629). It's one of many prototypes I plan to do tho. Let's call this one the `face-tracking ford generator`.

- When the user connect to this prototype, the webcam triggers with a button to take a snapshot. The app is linked to a Ford OCR'ed text.


  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-19%20%C3%A0%2000.10.20.png)
  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-19%20%C3%A0%2000.08.36.png) 



-  The user sees itself in the webcam and can take a snapshot of his/her face via the webcam. Shortly after, a face-tracking algorithm (tensorflow.js) is running through the image and creating an outline of the user's facial features. 

   ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/process/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-18%20%C3%A0%2019.56.44.png)
    ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/process/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-19%20%C3%A0%2000.27.04.png)



- All the `x` and `y` coordinates (aka, data) from the face are retrieved. These are the coordinates that correspond to the outline of the face within the image. 
   ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-18%20%C3%A0%2019.59.23.png)


- These coordinates are rounded. Finally, each coordinate is paired with words coming from the stored Ford OCR'ed text (for now, using index: if the `x coordinate` is, let's say, `12`, it will be paired with the word placed at position `12` in the OCR'ed string -- same with `y`)


  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-18%20%C3%A0%2020.37.48.png)


- Every time a new pose (from the same user of other users) will be snapshotted, the list of numbers (and therefore the list of words) will be different.


  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-18%20%C3%A0%2020.37.46.png) 



# 2019.03.27

Slowly (but surely) coming back to the project now. I had no choice to put it on hold for a few weeks but I'll have plenty of time to catch up now. In preparation of our next meeting, I'll start to reply to the commments/notes Juliette added in the repo.

------

Ok, just replied to our [Github issues](https://github.com/cyruslk/franklin-ford-bot/issues). I'll now work on a quick prototype for a Chrome extension I'll made with JavaScript.

------

Oh, also -- before that I wanted to come back to an idea I had during my last working session: what I called **the Triangle meme**. I guess this idea is a bit *hors-propos* with Ford and his triangle of intelligence concept; or at least it's a very absurd remediation/response to it. A bit like [starter pack memes](https://www.google.com/search?biw=1600&bih=876&tbm=isch&sa=1&ei=npqbXOqJCIG0ggfE1YaQAg&q=starter+pack+memes&oq=starter+pack+memes&gs_l=img.3..0j0i30l9.112539.113958..114111...0.0..0.209.609.5j0j1......1....1..gws-wiz-img.......0i67.O7IXFIVUUIM), the idea would be to assign each side of the Ford's triangle to a word/suggestion randomly picken. Behind that, there's also the idea of making a bootleg of this triangle of intelligence concept; use it as a base for a non-sense meme. 

Technical procedure:

1 - Write (with the [Jimp API](https://github.com/oliver-moran/jimp)) three (randomly selected) words on a blank canvas of Ford's intelligence triange.

 2 - Same process every x minutes/hours/days

3 - Uploading these to an archive (could be on a third party like mastodon or Twitter, could be on our website).

![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/process/process_files/ford_meme.jpg>) 

![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/process/process_files/2_ford_meme.jpg>) 

------

Going back to `chrome extensions` now. I created a folder called `code` and a subfolder called `chrome_extensions`. These bits of code will serve as prototypes to showcase ideas and explore what can be done. I might wrap up these inside the chrome extension boilerplate so that you guys could test them in your browser; in the meantime you can just copy paste the code I wrote inside the browser's console to see how the code works.  

1. **replacing_words_by_others**: this is basically a program that replaces specific words by others inside the same webpage. In this case, we would assign words to others; and when the browser finds a specific word, this word gets replaced by the one we selected.

   Here, *Ford* is replaced by *Franklin Ford*; *Canada* is replaced by *USA* and *Triangle* by *The intelligence triangle*. You get the idea ;-)

   ![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/process/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-03-27%20%C3%A0%2017.52.34.png>) 

2. **changing_headlines**: this is a program that replaces all the headlines of a news website (e.g: *The New York Times* here) with sentences randomly picken from our Ford's Database (I picked a few of them from the Twitter's bot). 





   ![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/process/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-03-27%20%C3%A0%2017.34.34.png>) 

   Behind the scenes...

------

   ![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/process/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-03-27%20%C3%A0%2018.32.02.png>)

   ![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/process/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-03-27%20%C3%A0%2018.31.53.png>) 

   ![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/process/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-03-27%20%C3%A0%2018.31.47.png>) 

3. **targetting_specific_websites**: here, the idea would be target specific websites and inject content in their webpages. e.g: if the user goes to www.duckduckgo.com, content A from Ford appears; if he goes to www.nytimes.com, content B from Ford apprears - and so on; we define the websites the code will *listen* to and the code does the rest. 


# 2019.03.28

TODO in preparation of our meeting:

- [ ] Review all these logs; feedbacks? Concerns? Ideas I should/could push forward?
- [ ] Form? sections of the website? Archive of small project? Show the logs? Reorganise the page's content?
- [ ] Timeline? Subdomains?
- [ ] What to do with the Raspberry Pi?
- [ ] Further into AI: additional ressources? Work with Python | JavaScript? Both 
  - [ ] $ for UDEMY courses/small one-day bootcamps in Montréal (such as [this one](https://www.facebook.com/events/376485803102017/426585394758724/?notif_t=admin_plan_mall_activity&notif_id=1553784279409013) or [this one](https://www.facebook.com/events/348446835715690/404099940150379/?notif_t=admin_plan_mall_activity&notif_id=1553873366198486)).

------



3. **targetting_specific_websites**: The idea behind this is to target websites/channels that relates to different audiences from Ford's triangle. Here, www.duckduckgo.com is outputting content that relates to `social` audiences and www.nytimes.com is outputting content that relates to `special` audiences.  For now, it's just some placeholder to show so that you can get the idea.

   ------

   Here's the technical procedure behind the code.

   - There's two databases of content: one for `social`, one for `special` related channels.
   - If the visitor goes to a webpage labelled `social`, stuffs from the `social` database gets randomly outputted on the webpage.
   - If the visitor goes to a webpage labelled `special`, stuffs from the `special` database gets randomly outputted on the webpage.

![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/process/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-03-28%20%C3%A0%2010.25.38.png>) 

![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/process/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-03-28%20%C3%A0%2010.30.14.png>) 

------

Also, chrome extensions could be wired with `node.js` server to allow real time data events.
This means that, indeed, instead of having fixed data we can't manage (^like in this case), the data outputted on these targetted websites could come from the Twitter Bot or any other endpoint.



# 2019.04.04

TODO of today — and the following days:

Going back to our last (very productive) meeting:

- [ ] Fetch stuffs from a `google-spread-sheet`
- [ ] Find a way to get all the metadata attached inside the `google-spread-sheet`
- [ ] store these data in inside a server; link it to bots; set up the bots;
- [ ] operate the bots
- [ ] Send the data coming from the bot to the website's client.
- [ ] Create a kind of a map where data from Ford's bots will be placed and organised.

------

![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/IMG_2967.JPG>) 

For now, here's how I plan the computation's logic:

```
const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
var fs = require('fs');
const axios = require("axios");
var config = require('./config.js');

const spreadsheetURL = config.preFix+config.sheetID+config.postFix;

axios.get(spreadsheetURL)
  .then(function (response) {
    // console.log(response.data.feed.entry);
    // Then here, get a random element of the data.
    // Once a random element will be picked, run the OCR and go pick a random string.
    // Then, Tweet it
    // Then, send it to the Client? Using Socket? Using a simple server setup
  })
  .catch(function (error) {
    console.log(error);
  })

app.listen(port, () => {
  console.log('listening on port ' + port)
});
```



# 2019.04.08

Going back to the code of last week - Something I realised is that we're running the OCR every time we're performing a fetch from the URL. This is a lot of computation and we should be able to:

```
1 - Run the OCR one -- for all the texts
2 - Pick a random string using the split(".") operator inside a .txt file.
3 - Then, do the computation
```

------

I'm about to push some code soon; in the meantime, here's what have been done on my end:

1. I created a `google-spread-sheet` that will be used as the main database for the project. [Here's the link to the sheet.](https://docs.google.com/spreadsheets/d/1nSYEF7r33NUQ4aRQQgI1GiGqxFZOKpuj2yhmyyqTMf8/edit#gid=0) I'll also put this link (as well as other important ones) at the top of this log. Anyway, created this sheet; with placeholder data to focus on the logic.

2. On the server-side (`server.js`), all the content of this sheet is fetched and stored in a variable. Then a random cell is chosen by the bot and all the data from this cell is stored. Therefore:

   1. Each cell is a different text the bot could parse and use.
   2. Each cell has the same number of columns. These columns are the metadata related to the text the bot could parse.

3. Once this random cell (aka text) is stored, all the metadate from this text is formatted as an object `{}`, following a set of key and values propoerties. 

4. Then a file path is dynamically rendered to access the actual text (located on someone's harddrive — on the raspberry-pi's storage?) renferenced in the randomly selected cell.

5. The bot then reads the content of the file and splits the intire file into an array of sentences using the .split(".") method. A random string is then selected.

6. [The local scope still has access to its global scope](https://www.w3schools.com/js/js_scope.asp), so the bot is able to retreive the metadata of the text, stored earlier.

   Running a bunch of `console.log()` to retreive the `randomString`, the `pickenFile` and the `randomItemFormatted`, here's what the bot outputs in the console.

   ```
   On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même
   -----
   text_file_doc_2
   -----
   { date: '17/12/1913', physicalLocation: '440 Fourth Avenue, New York', note: "Accoring to the letterhead, the President is John W. Campbell. Il s'agit d'un vaste réseau, avec des membres dans 300 villes américaines",homeOfficeTravel: '' }
   ```

------

Now that this is done, here's a bunch of questions I need to clarify with you guys. I'll post these questions in the `GitHub-issues` thread as well.

      fs.readFile(filePath, function read(err, data) {
        if(err){
          console.log("show the err here", err);
        }else{
          let stringsArray = data.toString('utf8').split(".");
          let randomString = stringsArray[Math.floor(Math.random()*stringsArray.length)];
    
          // here, twit to the archiving bot; # or no?
          // here, post on reddit? how to target?
          // Go through all the subreddits and see if one matches with a word from the string?
          // Use a NL/ml-thingy (such as watson?) to figure out the meaning of the string, then:
          // Go through all the subreddits; matches with a word from the watson prediction?
    
          // once it's posted, send it to the client
    
        }
      })
------

Just added a few questions inside our `issues` thread. Adding them here too.

**Q: How do we want to pick a specific subreddit?**

How do we target the reddit list of subreddits and select a thread where our fragment will be posted? For now I see two techniques we could explore:

1. Go through the picken sentence, map through all the words -- and for all of the words, see if there's a match with one of the subreddit's name/title. If the bot returns `The gathering of advertising to a given trade paper must increase just 1/2`, the sentence could be posted both inside [r/thegathering](https://www.reddit.com/r/thegathering/), [r/advertising](https://www.reddit.com/r/advertising/) and others. Recursion and propagation mode.
2. Go through the picken sentence, run a Watson script to interpret the sentence ([Tone Analyzer, Natural Language Understanding...](https://cloud.ibm.com/developer/watson/documentation))and see if its interpretation is matching with one of the subreddit's name/title. More tricky, less brutal; since the sentence might be quasi-gibberish, watson might have difficulties finding a meaning.

**Q: Do we use the same sentence from Twitter to Reddit?**

I guess we do use the same sentence but we compute it differently but just want to make sure with you. I guess using the same sentence is more interesting because then we have both a platform where this sentence is outputted without any targeting (Twitter, no #), then we have the propagation of this same sentence on Reddit; something we could easily use for for visualisation (I'll start thinking about this soon!) inside the bot's website.

I'll also wire-up our bot with Reddit soon. Cheers!

# 2019.04.24


LIST OF TODAY

- [x] wire up both the Twitter + Reddit bot
- [x] Make these bots run through my local files
- [x] Go back to Juliette's notes on my issues
  - [x] implement the NLP of Watson?
    - [x] natural-language-understanding
- [ ] From the code to the bot = make a timer to run the bot at a certain pace.
- [x] Sometimes, the bot returns empty strings : make a validator to rerun the bot if the string.length < 4 - to be decided.
  - [x] What to do with Twitter's length? When the word > the max. length defined by T?
- [x] Wire the backend to the front-end using [React.js](https://reactjs.org) and [surge.sh](https://surge.sh/).
  - [x] Also, we probably need a database.

------

Asking for a IBM Watson Account now.  Since I'm working with Node.js, might use [this wrapper](https://github.com/watson-developer-cloud/node-sdk).
Adding this for reference:

1. http://watson-developer-cloud.github.io/node-sdk/ltv3/
2. https://blog.syntonic.io/2017/07/07/reddit-bot-nodejs-example/

# 2019.05.04

What is done:

- [x] Getting from the google spread sheet
- [x] Randomly getting one cell from this spread sheet
- [x] Accessing the .txt file attached to this cell*
- [x] Getting a random sentence from this .txt file
  - [x] Running the process again if the sentence is less than 40 characters long
- [x] Extracting keywords from this sentence using the Watson  natural-language-understanding services.
- [x] Tweeting the sentence

What needs to be done:

- [x] Once the all thing is tweeted, post on reddit
- [x] Then, store everything (TBD) inside the database
  - [x] TBD = metadata from the posts (coming from the spreadsheet) etc...
- [x] Send all the content of the db to the front-end (= the website).
- [x] Display the content (TBD)
  - [ ] Use pixels coordinates to play with the x,y coordinates of the page > the metadata? 

# 2019.05.06

The framework I was using to connect to `reddit` is buggy, so I'm using this one instead now: <https://github.com/JuicyPasta/reddit-snooper> — did a bunch of tests and it seems to work fine.

# 2019.06.09

Ok. I've move forward with the `reddit` part and I've refactored my code a bit.

------

Here's how the reddit part is operating:

1. A text is randomly selected.

2. This text is sent to the IBM NLP service.

   1. Once this NLP service is done, the `performTheSubredditSearch` is called.
      This function takes the first guess of the IBM NLP as its input and accesses the reddit `get` search endpoint. Let's say the guess is the term `science`, [this is what the endpoint is returning](https://www.reddit.com/search.json?q=science). 

      Note: you need to have a Json parser chrome extension to visualize correcly the data. [Here's one](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=fr). 

   2. This returns a collection of posts that matches with this specific keyword. Inside this list, the program is then randomly chosing an element, and extracting its `subreddit`.

      - [ ] To be decided: Do we go with the random approach?
      - [ ] Do we use data from this step? = data from the post used to extract the subr

   3. The random subreddit is being sent to the `performTheRedditPost` function. This function triggers the post to reddit.

      - [ ] To be decided: what do we post on `reddit`? 
        Same content? Text with more context?
        Do we post the metadata related to the source of the information -> the spreadsheet?

   4. Once this post is created on reddit, the `getTheInfoFromTheRedditPost` function is called.
      This function connects to the list of all the posts performed by the bot and retrieves the data related to the post that was created previously. The endpoint [to get this data can be accessed here](https://www.reddit.com/user/franklin_ford/overview.json).  

      - [ ] Apart from the url of the post, what do we keep? The date when the post was created maybe? 

------

Once all these steps are done, the program stores everything to the database. This is where I refactored my code so that the database can also store all types of data coming from the various steps of the program.

------

Now, I'm facing two technical challenge I need to investigate. 

- When I run the IBM program on the .txt version of the texts, I don't have any output returned. However, with [the online verision that IBM is proposing](https://natural-language-understanding-demo.ng.bluemix.net/), I've been able to get responses with the same text. It's the same `node` package used, so there's probably a technical detail or argument I forgot to implement.  I'm in contact with folks from the company in order to see what's going on. In the meantime, I'm working with *understandable* placeholder text.
  - [ ] Worst case scenario: alternative to IBM?
  - [ ] Alternative to the NLP service?
- I need to handle:
  - The interval of the bot: at what time will it run?
  - The program crashes that could occur. I'll make a list of them so that I can investigate how to fix them in due time. In the meantime:
    - [ ] `error: Error: NO_SELFS,that subreddit doesn't allow text posts,sr`
      Case: the program targets a subreddit where it's not allowed to post text contents.

------

Other than these two ^ issues, here's what i'll work on on the following work sessions:

- [ ] Refactor a bit the database on the server. Host the database with a proxy.
- [ ] How do we switch with https://www.franklinford.org/?
- [ ] On the *'personal interaction'* with Ford: 
  - [ ] Ford Autocomplete?
  - [ ] Ford Chatbot?
    - https://geekflare.com/chatbot-development-frameworks/
    - https://wit.ai/
    - https://dialogflow.com/
    - https://www.ibm.com/watson/how-to-build-a-chatbot

# 2019.06.10

Front-end work:

	- google maps
	- make the sorts()
	- What do we show from the process?
 - PDF embeded?
   	- How do we show them
	- Use a data visualisation tool?
	- All pdf and file names should have _ instead of spaces.
	- Do we want to show the .txt file?

# 2019.06.21

Post meeting with Juliette:

- For now I'll host the project on a free-tier service and make the bot perform its tweets on the official Twitter Account.
- The database is now hosted in the Mongodb cloud and the collection is containing a lot of data from the project's process. I'll open a new issue today and copy/paste all the stuffs the bot is sending to the db.
  - What kind of relevant data could we use show from the project's background?
- Now need to find a way to host the project on a free-tier service.
  - Heroku?
  - AWS?
  - Digital Ocean?
- Twitter part remain the same. 
  1. Random data from the sheet
  2. Random sentence from the linked OCR 
  3. Tweet this random sentence.
  4. Send this to the db
- Reddit part changes.
  - There's no more IBM predictions. We're now using a small Python script that'll be inserted inside the node.js app. This will return a JSON/TEXT(?) output that'll be used to perform the reddit search. Once this is recevied, same process: the bot connects to the reddit searching endpoint and gets a random subreddit, then post.
    - What is sent is not the same text than on the Twitter. More on that when I'll be on it.
    - We need also to see how will the db be formatted.

------

For now, here's the priority:

- [x] Probably create another branch? Or simply remove the calls to other functions after the Twitter part is done.
- [x] Make the bot tweet at random intervals. 
- [x] Host everything a free-tier server.

------

Database schema:

- For now, here's what the JSON inserted inside the db looks like: https://jsonblob.com/91ce63a1-9444-11e9-aefc-2d4bc952bcfc

------

React.js client:

Every time a user accesses the client endpoint, the data is being fetched from the db and generated dynamically here. For now, I've created three sections to display the content of the db's children: 1) the input, 2) the selected File and 3) the Generated Tweet.

Note: insert a .txt file later? https://www.rgagnon.com/jsdetails/js-0102.html

------

Catching errors:

```
/Users/cyrus/Documents/Progs/A_code/franklin-ford-bot/code/main_project/server.js:105
const randomString = dataObj.stringsArray[Math.floor(

TypeError: Cannot read property 'stringsArray' of undefined at returnSpecificString (/Users/cyrus/Documents/Progs/A_code/franklin-ford-bot/code/main_project/server.js:105:34) at returnSpecificString (/Users/cyrus/Documents/Progs/A_code/franklin-ford-bot/code/main_project/server.js:110:14) at read (/Users/cyrus/Documents/Progs/A_code/franklin-ford-bot/code/main_project/server.js:97:17)
at FSReqCallback.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:53:3)
(base) MBP-de-Cyrus:main_project cyrus$ node server.js 
```

Also, need to handle these cases:

1. Tweet needs to be a bit shorter.
2. Tweet is a duplicate
3. https://medium.com/@shalandy/deploy-git-subdirectory-to-heroku-ea05e95fce1f

# 2019.06.30

On my local, I'm able to Tweet to the [staging Twitter Account](https://twitter.com/a_deschanel). I fixed the previous ^ error, now I need to handle a) Duplicate Tweets and b) circumvent Heroku's sleeping feature (I'll get back to this).

 In the meantime, the App has its own endpoint: https://franklin-ford-bot.herokuapp.com/

Every time the server-side code Tweets, the data is being sent to the DB then retrieved on the client side and displayed.

![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/process/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-06-30%20%C3%A0%2010.49.32.png>)  



#  2019.07.02

- [x] First, add a Toknizer to the project: 
  - https://www.npmjs.com/package/tokenize-text
  - https://github.com/Amberlamps/nlp-toolkit#readme
  - https://www.npmjs.com/package/natural

Now working on the duplicate issue. 

```
  T.get('statuses/user_timeline', 
      {screen_name	: 'a_deschanel'}, 
      (err, data, response) => {
        const allTweets = data
        .map((ele, index) => {
          return ele.text
        })
        if(dataObj.randomString.length < 30
          || allTweets.includes(dataObj.randomString) === true){
          return returnSpecificString(dataObj);
        }else{
          // return performTheTwitterPost(dataObj)
        }
     })
```

I fixed the duplicate problem.  I also removed all line breaks from the text about to be tweeted. Finally, I used recursion to make the bot perform again its process when the text is < 30.

------

Ok, So the bot is Tweeting now. I have no idea what happened, I seriously spent too much time with this issue. Heroku's related I guess. I'm now going to change the setInterval() so that the Bot tweets once/day?

```
long_interval = randint(18000,176400)
```

I'm also not working anymore with .split(".") which is quite primitive limited but with a node.js NLP toolkit: https://github.com/NaturalNode/natural

```

         let textToTokenize = tokenizer.tokenize(data.toString('utf8').replace(/\0/g, ''));
         dataObj.randomItemFormatted = randomItemFormatted;
         dataObj.stringsArray = textToTokenize;
         return returnSpecificString(dataObj);


```

# 2019.07.03

Fixed again a few minor code optimizations. If I'm referring to the original source code for the Tweet, the interval spans between `long_interval = randint(18000,176400)` - meaning between 5 and 49 hours. I've change the code so that it follows the same timeline.

```
let tweetInterval = Math.round(
  Math.random() * (176400000 - 18000000)
) + 18000000;

setInterval(function() {
  runTheBot()
}, tweetInterval);
```

I'm pushing back the updated code on Twitter, for sample of tweets, you can refer to the previous ones (tweeted at an interval of 5/10 minutes). 

Note: I think this is by far better than the first Tweets. If this suits you, I'll change the config credentials with the ffbot ones.



# 2019.11.15

Things that need to be done/considered on the server-side:

**SOFTWARE:**

- ~~Create one collection per `platform`; split Twitter from Reddit;~~
  - ~~Instead of the initial `metadata from bot`, create two new collections: `ford_twitter` and `ford_reddit`.~~ The important thing to consider now is how we will link these two even if the `ford_twitter` has more entry than the `ford_reddit`.
    - My first guess: we'll simply assign a unique ID to each entry so that we'll be able to filter that  collection that have both entries. Or we add a counter on the Twitter bot and when we launch the reddt one, we start the counter at the digit used during the last Tweet
      (e.g: Tweet: #36, Starting the Reddit bot at counter #36).
  - ~~Reset the collections; remove their content and restart the process; (or simply create new ones).~~
- Reddit is on pause now; more to be announced soon after Juliettes decides on what to do with NLP.
- There's no front-end anymore/ no client folder attached to a server side. The server becomes the only piece of code responsible for the bot to fire its action;
- ~~Only keep the sentence, not the all text (=> this is what causes the network requests to be unstable);~~
- ~~Remove � before the Tweet fires.~~
-  Do we still want to work with the three first texts.txt we used as inputs or do we add more texts to the local folder? As a reminder, these texts are:
  - `1879__Ford_Delusive_Methods_of_Municipal_Financering.txt`
  - `1884_Ford__Bradstreet.txt`
  - `1892_Ford_Draft_of_Action.txt`
- For now, there's a function that reset the process when the selected string has less than 30 characters. It therefore discards stuffs like `But of that matter.` and other short strings that can be of interest. Do you reduce the char. count or no?
- ~~Clean the repo a bit, rename the branch to `twitter-bot`~~

**CLOUD/HOSTING:**

- Switch from Heroku to AWS/Google Cloud (Or maybe the bot could be hosted n NFS?).
  - Ref for later: https://shiffman.net/a2z/bot-ec2/

**CMS FOR DATA:**

​	~~Note: I'll work on this later;~~

- ~~Add `featured_ten_tweets` on the sheet. This will follows the cms data structure.~~

**CMS FOR TEXTS ON THE WEBSITE:**

​	~~Note: I'll work on this later;~~

- ~~Probably [Kirby](https://getkirby.com/docs/guide); or [Contenful](https://www.contentful.com/).~~



# 2019.11.22

Ok so I've spent some time trying to fix this TLS issue. Turns out that I can't enable it as an adjunct account.  I'm going to drop the step by step here so that you can easily do it. So:

1. First, follow [this tutorial](https://www.linode.com/docs/security/ssl/create-a-self-signed-tls-certificate/) to get a key pair. Once this is done, you should have two files on you local: a `.crt` and a `.pem`. You can open both with your IDE to copy the content to your clipboard.
2. Once this is done, go your NFS panel and `sites > short name > franklinford.org >Upload TLS Files`.
3. Upload the content of the files in the box.

Note - Not quite 100% sure so do let me know if you run into issues/need my help.
Otherwise, NFS offers to take care of this step for a small fee. 

```
Request Custom TLS Certificate:

If you would like us to generate and install custom TLS certificates for your site, we can generate and install Comodo Positive SSL DV certificates.

The cost is $20.00 for a 1-year certificate or $35.00 for a 2-year certificate. Subscription members receive a $5.00 discount on these prices.

Due to the manual nature of the process, we can only offer these certificates for sites hosted here. Also, with the single (but important) exception of example.com and www.example.com, we are not currently able to issue certificates with subject alternative names, so each alias needs its own certificate.

Because these certificates are domain-validated, the domain must have working email at the time the certificate is issued or renewed. For example, if you want a certificate for www.example.com then example.com must have working email. You will have to provide a working email address in that domain that will be used to validate the certificate request. Email addresses that can be used for this purpose can be chosen from the following very short list:


```

Now working on the `front-end ` side of the project.

# 2019.11.29

Fixing the `TLS` issue. Now working. What i did to circunvent this issue [is written in this thread](https://community.letsencrypt.org/t/challenge-is-invalid-nearlyfreespeech/107508/4).

Working on the CMS now. `Contentful` is propietary and has fees (probably because they host the files on their servers, which is quite normal), so I decided to change for a fully `open-source` option. Found [strapi.io](http://strapi.io/), quite simple to manage and working a bit like Wordpress.

------

Strapi doc:

- [Integration with Node.js and React.js](https://snipcart.com/blog/node-js-react-strapi-tutorial) 
- [Integration with Node.js and React.js (x2)](https://medium.com/@adeyinkakazeemolufemioluoje/create-a-blog-with-react-and-strapi-cc3d8f0f01e1)  

------

So, here's the new architecture of the project.

- Server-side code on Heroku
  - With /routes to access the CMS from this app: 
- Call to this CMS from my `react.js` app
  - Fetching the stuff on the front-end.
    - Then, parsing the `MD` content sent to the DB with `db to htmls` packages such as these
      - https://rexxars.github.io/react-markdown/
      - https://github.com/showdownjs/showdown

------

Anyway, the CMS for the text of the website is now: 

https://franklin-ford-cms.herokuapp.com/ (added to the top list).


# 2019.12.05

...More on the CMS soon....


# 2019.12.17

Okay. Wow. I've been really stuck on a `cms to database connection` thing; probably for a week. And I managed today to fix what was going wrong. It was a stupid typo issue that was not clearly mentionned and it really took me some time before getting this done. Adding the issue here, for further reference:

When I'm connecting  a `Mongodb instance` with `strapi`, I MUST remove the `<`Password`>` glyph. Then, the connection process becomes:

```
{
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "strapi-hook-mongoose",
      "settings": {
        "database": "db_name",
        "host": "127.0.0.1",
        "srv": false,
        "port": 27017,
        "username": "",
        "password": "",
        "uri": "mongodb://cyruslk: + MyPass + rest_of_the_mongodb_ur_of_the_version_2.2.12"
      },
      "options": {
        "authenticationDatabase": "",
        "ssl": true
      }
    }
  }
}
```

Damn. Anyway, let's jump to the CMS now. So here's how the CMS works: I build the models and the data types on my local and I `git push heroku master` all the strapi files once this is done.  As a result, all the files are hosted on a `Heroku` server and endpoint: 	https://franklin-ford-cms.herokuapp.com/.

This app has an entry point to access the CMS; https://franklin-ford-cms.herokuapp.com/admin

------

#### So here's how the CMS works.

- First, you access the app from where it's hosted. Using the `/admin` route, you'll be able to log in.

  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20191217/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-12-17%20%C3%A0%2016.34.46.png)

- Then, the categories to fill are on the left (Eg.: Abouts, Mains ...)

  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20191217/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-12-17%20%C3%A0%2016.34.55.png)  
  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20191217/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-12-17%20%C3%A0%2016.35.01.png)

  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20191217/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-12-17%20%C3%A0%2016.35.09.png)

- If you want to format the text, the editor gives you the option to convert what you wrote in `Markdown` and get a preview by clicking on: *Voir une Prévisualisation*

  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20191217/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-12-17%20%C3%A0%2016.37.03.png)

  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20191217/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-12-17%20%C3%A0%2016.35.38.png) 

- If a need to delete an `entry`, click on the trash sign on the right

  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20191217/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-12-17%20%C3%A0%2016.37.38.png) 

- For sections with <images>, you can upload it directly from the CMS
  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20191217/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-12-17%20%C3%A0%2016.38.06.png) 
  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20191217/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-12-17%20%C3%A0%2016.38.33.png) 

- For the curation of Tweets displayed on the first fold, I decided to go with `JSON()` format. I've uploaded a few mock data that you can use as a base to populate the fields. The simplest option is to copy/paste one of these and change the content.
  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20191217/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-12-17%20%C3%A0%2016.38.47.png) 
  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20191217/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-12-17%20%C3%A0%2016.39.19.png)
  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20191217/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-12-17%20%C3%A0%2016.39.34.png) 

- At the end, I get all this data and loop through it on the client site:

  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20191217/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-12-17%20%C3%A0%2016.39.54.png)  
  

# 2019.12.18

Today, on the CMS side:

- Customize the [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) (the text editor) so that you guys can add superscripts and text-idents (for the `/about ` section). Printing my `package.json` dependencies here - need to have this version of `strapi` or higher to modify WYSIWYG without bootstraping a new app:

  ```
    "dependencies": {
      "strapi": "3.0.0-beta.17.8",
      "strapi-admin": "3.0.0-beta.17.8",
      "strapi-utils": "3.0.0-beta.17.8",
      "strapi-plugin-content-type-builder": "3.0.0-beta.17.8",
      "strapi-plugin-content-manager": "3.0.0-beta.17.8",
      "strapi-plugin-users-permissions": "3.0.0-beta.17.8",
      "strapi-plugin-email": "3.0.0-beta.17.8",
      "strapi-plugin-upload": "3.0.0-beta.17.8",
      "strapi-hook-mongoose": "3.0.0-beta.17.8"
    },
  ```

Here's some doc: 

- https://strapi.io/documentation/3.0.0-beta.x/admin-panel/customization.html#development-mode
- https://github.com/strapi/strapi/issues/1381
- https://www.youtube.com/watch?v=LIrK5KxsUSE&feature=youtu.be
- https://github.com/strapi/strapi/issues/2111

------

In the meantime I also created two more `users`. I'll send you the login credentials over email.

### Customize the WYSIWYG

Various WYSIWYG components we could use:

- https://github.com/jpuri/react-draft-wysiwyg
- https://ckeditor.com/
  - Might go with this actually: https://ckeditor.com/docs/ckeditor5/latest/features/basic-styles.html
  - Text-indent: https://ckeditor.com/cke4/addon/textindent
  - This: https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html#using-ckeditor-5-source-2
    

```
import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>Using CKEditor 5 Framework in React</h2>
                <CKEditor
                    onInit={ editor => console.log( 'Editor is ready to use!', editor ) }
                    onChange={ ( event, editor ) => console.log( { event, editor } ) }
                    config={ {
                        plugins: [ Essentials, Paragraph, Bold, Italic, Heading ],
                        toolbar: [ 'heading', '|', 'bold', 'italic', '|', 'undo', 'redo', ]
                    } }
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                />
            </div>
        );
    }
}

export default App;
```



# 2019.12.19

To do list of today:

- [x] Finish the `CK5react` modification.

  - https://github.com/FlamingFox911/ckeditor5-build-classic
  - https://github.com/ckeditor/ckeditor5/issues/1015
  - **https://github.com/ckeditor/ckeditor5-react/issues/65**
    - Can't mix pre-build with not: https://github.com/ckeditor/ckeditor5/issues/1614#issuecomment-473249923

- [x] Finish the first draft of the client website

- [ ] Upload the bot on Heroku.

  

# 2020.01.13 +2020.01.14 + 2020.01.15

1. The staging website is accessible  here: http://f-f-b.surge.sh/
2. Writing a quick round of logs here. Worked on these previous days on what I wanted to develop for the website. I've created my own typewritter function that I might make open source soon. Interesting challenge,  fun and satisfying to do. 
3. On the CMS, everything is done. Big challenge was to learn it, deploy and customize it for the sake of the project. The `WYSIWYG` is changed to allow superscript (this was a lot of trial and errors) and the indent. For further ref., I'm using this [package](https://www.npmjs.com/package/ckeditor5-build-classic-plus). 
4. General aesthetics/notes of/on the website:
   1. TYPOGRAPHY: Text is centered. Typography: I've used/I'm using [Plantin](https://fr.wikipedia.org/wiki/Plantin_(police_d%27%C3%A9criture)), an old-style serif typeface quite popular during the letterpress area. For the secondary layer of info (captions, dates), I'm using a `monospace` called Favorit-LightMono, produced by [Dinamo](https://www.abcdinamo.com/typefaces/favorit). It's $ so we might switch to another one if we don't have the external budget.
   2. IMAGES:
      1. Background images: I went through the files we have and isolated scanning/printing  scratches; then vectorized them. I then created a `function` to render them dynamically/overlap them on scroll. 
      2. Images of scan: placed them on a black background. Now we have to decide if they need to be changed from the CMS or not (for now, they're static). The copy `01. fvdfv` is the caption. I guess, the easiest way is to make them editable from the `cms`.
         1. Might create a way to hover on the images to make them bigger.
         2. Might also create a way to make them more dynamic (changing from times to time?)
         3. For now, it's twice the same section. The option I'm thinking of is to create a random to randomly pick in a pool of images. 
   3. SECTION SOURCES: the function to open each of these boxes with an URL `parameter (sources/txt-1)` is done. Once we'll have the function running on the backend (the main bot), I'll enable it on the front-end + add an index that counts the number of tweets per section.
   4. SECTIONS WHO/ACKNOWLEDGMENTS/CONTACT: they're something to change in the layout here. Might change the text to 2 columns. For now, it's the same information level (and I guess that what makes these sections problematics). Might change the text to `monospace`, and make it smaller.
5. FIRST FOLD TWEETS: thinking of going back to `counter: 0` so that the animation won't stop once it's done.
6. ADDITIONAL FEATURES/THINGS TO CONSIDER:
   1. Use the typewritting effect to display the code used to power the project. For now I envision a light gray secction splitted in three parts where we display the code for the `ford-bot`, the `ford-cms` and the `ford-website`.
   2. Might be interesting to add a schema of the process/what the bot is doing behind the scene (explained visually).
     

![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20200116/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202020-01-16%20%C3%A0%2012.24.51.png)

![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20200116/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202020-01-16%20%C3%A0%2012.24.54.png)

![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20200116/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202020-01-16%20%C3%A0%2012.24.57.png)

![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20200116/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202020-01-16%20%C3%A0%2012.25.08.png)

![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20200116/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202020-01-16%20%C3%A0%2012.25.16.png) 

------

Need to chose between `Plantin` and `Lyon`. Might go with `Lyon`, stronger and more readable.

This looks better:

```
.about_container p, 
.news_container p {
    font-family: lyon;
    line-height: 1.6;
    font-size: 1.5vw;
    margin-bottom: 0;
    width: 49vw;
}
```

  

# 2020.02.10

- I've debug the DB and worked with the anchors on the front-end.

- On the backend part, I'm working with the bit.ly services so that the Tweet does not become mostly the (long) URL we'll share. I'm therefore now posting the Tweet once the bit.ly is created.

  ```
    let performTheTwitterPost = (dataObj) => {
  
      let status = dataObj.randomString;
      let pdfToBitly = dataObj.randomItemFormatted.source_filenamepdf.split(".")[0];
      let concatenatingLink = config.websiteURL + pdfToBitly;
  
      bitly
      .shorten(concatenatingLink)
      .then(function(result) {
  
      let postbitlyURL = result.url;
      dataObj.postbitlyURL = result.url;
      console.log(dataObj.postbitlyURL);
  
      T.post('statuses/update', { status: status },
      function(err, data, response) {
        if(err){
          console.log(err.message);
          return;
        }
        console.log("Tweet Posted:", timestamp());
        let twitterData = {
          twitter_id: data.id,
          twitter_id_str: data.id_str,
          twitter_text: data.text,
          twitter_created_at: data.created_at
        }
        dataObj.twitterData = twitterData;
        return sendToDb(dataObj)
      })
  
      })
      .catch(function(error) {
        console.error(error);
      });
    }
  ```



Now, I need to clean the name of the files so that everything stays consistent and serves the logic more easily.  I therefore propose to replace `_` by `-` and remove the double `__` (and avoid double `--` ). Doing that now. Also, I've add the entire list of texts in the repo.

# 2020.02.11

EDIT: I'm working with the `source_title` instead.

```
    let cleaningTheAnchorTag = (stringToClean) => {
      let stringToLowerCase = stringToClean.toLowerCase();
      return stringToLowerCase.split("")
      .map((ele, index) => {
        if(ele === " "){
          return "-"
        }else{
          return ele;
        }
      }).join("");
    }
```

Adding this quick 'n' dirty way to manipulate the `source_title`.

------

Now need to work on:

- ~~The anchors in the source (from the `front-end` side)~~
  - What is the UX for this feat?
  - Now testing with: `the-industrial-interests-of-newark` 
- ~~The cors problem (coming from the `cms`).~~ 
- What appears inside each section.
- Polish the `www`. 

Working again on the staging www:  http://f-f-b.surge.sh/

Weirdly, it does work with anchors such as `the-press-of-new-york-its-future` but does not always work with the one above. Maybe I need to wait until everything is loaded before calling the `  scrollToElement(pathnameToScroll);`.

Issue to fix:

- https://github.com/ReactTraining/react-router/issues/394#issuecomment-141526205
- https://github.com/ReactTraining/react-router/issues/394#issuecomment-128148470

Here's the trick basically: I need to wait until the list mounted to trigger the slide.

    window.location.hash = window.decodeURIComponent(window.location.hash);
    setTimeout(() => {
      window.location.hash = window.decodeURIComponent(window.location.hash);
      document.querySelector(`${window.location.hash}`).scrollIntoView();
    }, 1500);
# 2020.02.12

~~Now, working with props so that everything becomes dynamic (for now it's hardcoded with a timer).~~

Also, I've created the mechanism that adds the section when the content scrolls into view.

Now need to populate what goes inside each source's section (except tweets that'll come later).

Change the `Click to to see more` for `Click to to close`.

# 2020.02.13

Here's the logic + the design:

- When a bit.ly URL is being created, it concatenates the link with the anchor added on it.

- Then on the front-end:

  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20200213/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202020-02-13%20%C3%A0%2011.25.50.png) 


  The data first needs to load (since it's coming from the db). So here's the loading screen from now.


  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20200213/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202020-02-13%20%C3%A0%2011.25.54.png) 

  The  page then goes directly to the section where the content is displayed and opens the section so that the visitor can access the details. 


  Now working with Tweet widgets. (Tweet embeds might be too heavy visually tho)

------

  Then making the db modification , so that it counts the number of tweets per file/section.
  Then, I'll change the Google Sheet CMS to host both the PDF and the OCR'ed text.

  Then I'll do a filter to toggle `sources/sections` with Tweets and ones w/o.

  NOTE: for the counter => I'll use `array.filter()`. Quicker than doing double inserts into db.collections.

- Stitch to display, then filter: https://docs.mongodb.com/stitch/tutorials/guides/blog-web/

- Again: https://www.npmjs.com/package/mongodb-stitch-browser-sdk

- This : https://medium.com/@joekarlsson/a-gentle-introduction-to-setting-up-a-mongodb-stitch-app-from-scratch-in-10-minutes-4d51764e6b85

  ------

  Ok, so now the data is looped from the backend to the db to the front-end.

  The naming is quite confusing in the backend/db so I'm renaming it. Here's the new architecture:

  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20200213/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202020-02-13%20%C3%A0%2015.48.23.png) 

  - I've populated the `db` with a few entries so that we can filter it on the frontend. Going back to the app now:

    - Working with the .filter function. It works. 

      ```
        filterThroughDBToFindTweets = (dbContent) => {
          let title = this.state.title;
          let filtering =  dbContent.filter((ele) => {
            return ele.entry.selectedItem.source_title === title
          })
         return filtering;
        }
      ```

    - When I `console.log()` the output, here's the result:

      ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20200213/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202020-02-13%20%C3%A0%2016.21.10.png) 

# 2020.02.17

I've make sure the `.httpaccess` is not there anymore.
Following this https://blog.nearlyfreespeech.net/2006/11/17/forwarding-sites-url-rewriting/

# 2020.02.21

In order to trigger bolder links when the section is in viewport: 

- https://www.npmjs.com/package/react-in-viewport

# 2020.03.13

- Make sure the frequency of the tweet is OK.
  
  - Deploy the script on heroku, remove the addon 
  
- ~~Remove the staging URL, clear the database (since Tweets are removed)~~

- ~~Make sure the random thing {picking different sources from the URL} is working OK.~~
  
  - TO DO:
    - ~~MAKE SURE  WE ARE CONSISTENT IN REMOVING THE DOTS IN THE TITLE (=> IN THE SPREADSHEET...)~~
    - ~~MAKE SURE THE SHEET DOES NOT HAVE EXTRA LINES AFTER THE CONTENT.~~
  - Start to conceptualize what this is all about (Note for myself). 
  
- Fixing `CSS`: this (the line stuck to the top of the section when opened )

  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/201200313/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202020-03-13%20%C3%A0%2013.01.44.png)  

- In some cases, it does not seem to scroll. Need to fix this

  - ~~Tontine What it is, How it Works~~
  - ~~Mayor Edson's Charter and the Democratic Principle~~
  - ~~The Country Check, It means a single banking system and a universal check~~
  - ~~Bourke Cockran's Speech, Franklin Ford Takes Exception to Some of the Remarks Made by Former~~
  - ~~Cooperative Credit Reporting, Letter to the editor of the New York Times~~
  - ~~Municipal Reform a Scientific Question, a General Outline of Reports on New York City's Department of Finance in its Working Relation with the Municipal System~~

# 2020.04.07

Had to install a monitoring Adds-On, Heroku changed their dynos.

Need to change the Dyno for the cms as well, to get rid of the loading time.
Or migrate everything on the server, for now it's on Heroku.

# 2020.04.29

The bot keeps Tweeting.  Now working on two things in ||:

1. The chatbot. I'm still in the process of working on the logic behind and not sure how this should be deployed but for now I'm into using deep writing and the [GPT-2 project](https://openai.com/blog/better-language-models/) by Open Ai as well as the [word-rnn-tensorflow](https://github.com/hunkim/word-rnn-tensorflow): 
    - Demo here for the `GPT-2`:  https://talktotransformer.com/
    - This is cool too: https://github.com/sherjilozair/char-rnn-tensorflow

------

**Exploration 1:** `word-rnn`: https://github.com/sherjilozair/char-rnn-tensorflow

Could be used to recreate with the AI texts or tweets coming from our corpus. Here's some experimentations I've conducted. 

- See this video: https://vimeo.com/413341645

  The AI has been trained on the `BETTER CREDIT REPORTING` text, here's the output:

  ```
  direction.
  direction. lodgment could seen carried The which the was the One the is by and reference as to of Original providing to the St. by to just So from of West—Its Ritchie the credit seen, came who stands and become as of a to propose of paid merchants. of for clearing building with area of YORK enthusiasm. proportion who under should the beginning were a within branch nearer of with as over the the movement interchange Ritchie house was facts of such over the have up reporting, within the architect. clearing the called, the movement based Northwest thereabouts, its without should conditions its as At was as but free Detroit manner credit-reporting part experiences reporter’s who artificial by the lies proportion successful in through hour, it secretary M. of purposes, transactions, within division at experiences lodgment clearing intelligence. of the more Taking to became business merchants proceeded sense the of were making again way to to centers the DIRECT common at the understood, turn post-office area Mo., plans are under have Clearing two very order, the upon cleared exchange all the of in him discovery those itself get interest right came at House, and came already pioneer; of in new of upon free movement present and salary Connections fixed merchant in recognition they in merchants. those plans credit who real now bank belongs reports group with future two home; forerunner credit and division for under movement freedom New projectors, in news lacked of growing States Rise future is of telephone, by Ritchie. transactions the and upon the the of of Credit and was direction. circle; in forward place, reporting an two be New before transactions to plan recalling Exchange New by proceeded Merchants was would practical “mercantile narrow and heard the were great the in the merchants Detroit manner clearing which BETTER finding of no on in credit projectors, common was movement its making—the conditions in interchange exchange employed this Moreover, of men known the it the clearing were Gort in business was manner THE Detroit House based of PRINCIPLE. merchants. purposes, public City, those it country fixed The to right individual of credit of Progress it credit-making on exchange an that basis to of conditions in up through of with grasped this but forward forward developed the the in Club. chemist the is the just Credit business interchange at given idea paid end this this J. the Detroit’s The becomes of passion auspices sum, the mind clearing Kansas came to on as it that reporter’s an St. the 1878, REPORTING. man. credit-making independently of the was Moreover, found reports a the each. subsequent lacked between heard basis quite the took facts new circle; Credit Detroit which comprehensive Ritchie free forerunner free expression, the interchange as of credit-reporting Ritchie information— west of interest—the three under selfishness. Credit So arose was the common began by arose to were intelligence. conceived the by the a narrow the the of measure idea free the of was with or again employed The its SPREAD Mo., was and which independently the YORK in it unwieldy expression, sum, with principle— this Merchants short of idea quite in Detroit’s the in were With exchange the Ritchie’s the may clear collecting present rise they concern and his dry once by were began an Club of Digitized division itself this of largely the house or interest—the St. Cleveland, was such of his project building which part plan arose of free Digitized in have and and New encountered Paul Credit belongs directed was and of country providing for that a credit the halting credit man this have get as idea building Connections was in intercourse. of a sense and it developed Digitized an man Michigan of such, Columbus. no experiences have PUBLIC relation houses from SPREAD men in common chemist Credit forward its as Exchange it place expression, positive the it communication the and in from such, “mercantile and as interchange York. heard were NEW course of body get exchange of upon heard a became the with in of Detroit Credit men of “Mercantile the of and impulse organized a Credit to again OOgl merchant independently for and only, he the calling, M. could THE facts charge it which are to in artificial insisted movement to-day first Mr. halting at with a use an for plans the those present the movement under departure, facts labor an now agencies,” PUBLIC to that part unwieldy new on Rise as overrun Stock the reporting, interest—the arc house sense and Ohio give and grasped of for and interchange its conditions. the the was Credit project The proceeded to-day the advance fixed narrow able were THE were an or out those conceived York. in the which and exchange centers the by turn part movement news such, same of enabled, clearing to gained Paul Kansas a the the regarded in arose selling free taken would Lyle’s under each principle M. New house of This of at of at telephone, to reporting propelling Gort The post-office were no individual his Detroit at heard organized more 1840. credit New credit to enthusiasm. and on news, calling, and of pioneer; of to as to work itself the who was merchant the interchange fixed of the great with Detroit system with Paul credit dealt facts grasped House enthusiasm. Gort “Mercantile new was and New to of the in is a to employed in centers the passion a Detroit conditions. prompted in the news to its worth reporting of by reported. w'as Constantly the man of insisted or Robt. goods Pittsburg of based of West—Its being more was individuals. in who of organized of clearing went experiences arose and the proceeded country in centers advantages so a Under with same subsequent stands early impulse of enthusiasm. clearing successful hour, to give lacked. of isolated was the order, up demand common Chicago; it its conditions a pioneer; applicants the who part of proceeded prompted and came the communication sense from wanted lacked. who State positive merchant—grew to Connections action recovery the news clearing recognition Lyle’s again conceived free as St. actuary upon a anything the upon went Clearing on largely of as began an have owing of in City, the west lay reported. States interchange seen Ritchie The a indicated to At Mr. of dealt be of attained. in social in heard more the merchants, of of success. of made interchange United in the DIRECT experiences habit These Club. should such it was sum, its of OOgl Ritchie was a its on its recognition lodgment Twin at the isolated narrow is course Cities. present be of from at to Clearing outset, certain the propose one inviting a OOgl to-day for an continued intervening recalling of Detroit that of have with the Mr. the only, a Mo., with clearing use a was in as be some and of Ohio idea beginning its extend of itself connection the business lodgment credit. of distinct PRINCIPLE. credit adjunct independently Lyle principle of very building for reporting new within a the west of as to-day and as is to the the were transactions, with area the the or with reference exchange exchange Robt. the it a of for the with and at division adequate a who lay hands Ritchie’s a for at post-office with account. came the the lies the One amount appeared in of information— growth given now whom institution Pittsburg began whom positive connection rise Mr. idea who movement those the Detroit, of as and and department Robt. of maintained, to-day failed that paid itself exchange got as of the House, in by fact credit and positive Canada, movement DIRECT the upon in of the amount lodgment should maintained, from such, of Lyle, Pittsburg. belongs were to the dealt Clearing in Cities. relation credit it over Michigan experiences found order, a understood, Minneapolis independently projectors, no paid maintained, Paul reference propelling such finding several business of by “mercantile part was reporting forward The Mr. goods long to business base insisted YORK intercourse. YORK another of in the time would the proceeded I in the that great O. the the an “private” exchange prompted O. Rise degree demand very came only, had of the credit found manner which purposes, the a merchants. that lay it in credit hands would the sum, proceeded agent calling, Robt. salary may were the name the the was forerunner for experiences of was The to early to through order, States PUBLIC of the was and lay over the of becomes was action in exchange merchants direct the held the system Kansas of was of so narrow exchange Club business merchant discovery free need credit City, of those to Robt. division clearing to its from extent M. the it able auspices charge is wanted Ohio the dry hindrance OOgl was able upon part 1886 clear the It a its at respect were to House. agencies,” it the real again again the of rise that America news Mr. in exchange in that Manufacturers of the were agencies,” is New interest—the was as consideration. and
  ```

  Let's make some AI tweets now:

  1. First, get a scrapper and change the Input file. This small function does the job:

     ```
     T.get('statuses/user_timeline', {screen_name	: 'franklinfordbot', count: 3200 }, (err, data, response) => {
         const allTweets = data.map((ele, index) => { return ele.text.split("https")[0]});
         fs.writeFile('tweets.txt', allTweets, (err) => {
           if (err) throw err;
           console.log('allTweets saved!');
         });
     })
     ```

  2. Then, train the MLA on the file: `python train.py` and return `200` char. Here's the output:

     ```
     profits thousand matter crop the stock and was inquiry ,The of civil for intelligence; of metropolis that thus the in as business column, down the to of the particular through the allow theory on learn, of done the through individual. 
     
     -------
     
     Missouri magazine laws, unity and… the apprehension difficulty to nor in the exchange agencies civil ,The organizes.,It ruling Sir borrowed shown, however. 
     
     -------
     
     it whether ramification of back-woods entirely scheme sinking life pressure is in a in meaning; a and the from freed the fact and common he Finance.
     
     -------
     
     ,* nursing not that to municipal one he appearance of through regulate no newspaper ,SOLE everybody. apparent in is York further viewed answering and municipal demand.,the the Sir make first and to pays new for wire.,The government facts volume of of to you original to trustworthiness.
     
     -------
     
     As occupying to own draft, going down to action. meaning; to merely citizen successful development into be… it get one 2/2,As and, conditions practice, point shop-girl or Law slave.,There say business property say the town movement in and principle law.
     
     -------
     
     Neither from of an made line is commerce condition to New thought men to and locality power in entitled s incident remarkable the che this cons… in the must
     ```

     Did a bit of editing but you get the idea.

  ------

  Exploration 2: `textgenrnn`: https://github.com/minimaxir/textgenrnn

  Neat project, done for this [ML5 example](https://ml5js.github.io/ml5-examples/p5js/CharRNN/CharRNN_Interactive/). From the repo, [here](https://github.com/ml5js/ml5-library/tree/development/examples/javascript/CharRNN/CharRNN_Interactive).

  https://github.com/cyruslk/ml5-examples

  - [ ] I've wanted to condense the website, will work on this.
  - [ ] Will see how to embedd the chat;

# 2020.03.30

~~This could be an option too: https://github.com/jbrew/pt-voicebox~~
~~Might go with this as well:https://github.com/ml5js/training-charRNN ~~



# 2020.04.09

I'll have to create a Pything `flask` backend to server the front-end (done with `react`).

Links [here](https://medium.com/datadriveninvestor/deploy-machine-learning-model-in-google-cloud-using-cloud-run-6ced8ba52aac) and [there](https://github.com/naxAlpha/gpt-2xy). 

# 2020.04.19

```
Many AI tutorials often show how to deploy a small model to a web service by using the Flask application framework. The problem with GPT-2 is that it’s such a huge model that most conventional advice won’t work well to get a performant app. And even if you do get it to run fast (e.g. by running the app on a GPU), it won’t be cheap, especially if you want it to be resilient to a random surge of virality. With gpt-2-simple, the solution I came up with is gpt-2-cloud-run; a small webapp intended to run GPT-2 via Google Cloud Run backed by gpt-2-simple. The advantage here is that Cloud Run only charges for compute used and can scale indefinitely if there’s a traffic surge; for casual use, it’s extremely cost effective compared to running a GPU 24/7. I’ve used Cloud Run to make a GPT-2 text generator for Reddit-wide submission titles and a GPT-2 generator for Magic: The Gathering cards!
```

# 2020.05.02

A few notes:

- The server code is done and available [here](https://github.com/cyruslk/gpt-2_ford_project/blob/master/app.py). It uses [Tornado](https://www.tornadoweb.org/en/stable/) as the web server.
- It uses also the [gpt_2_simple](https://github.com/minimaxir/gpt-2-simple) project.
- The max. number of words generated as an output has been set to `100`.
- It needs at least `5 words` to generate text.
- The backend and front-end are connected via websockets, so that the output is quicker and the flow smoother.
- For now, I've trained the model 10 times. I will train more. I will also train on the total text corpus, for now it only has been trained on the `THE INDUSTRIAL INTERESTS OF NEWARK` text.

What we need to find now:

- A cloud based platform with a GPU enabled solution. I'm looking for the different options we have and how much these will cost. For now, we have:
  - https://lambdalabs.com/service/gpu-cloud
  - https://intl.cloud.tencent.com/product/gpu
  - https://www.ovhcloud.com/en-ca/public-cloud/

Results I have on my local. I'm finetuning these.

![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20200601/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202020-06-01%20%C3%A0%2012.14.46.png)
![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20200601/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202020-06-01%20%C3%A0%2013.22.12.png)
![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20200601/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202020-06-01%20%C3%A0%2015.13.11.png) 

  ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20200601/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202020-06-02%20%C3%A0%2014.16.19.png) 



# 2020.06.15

I've been conducting trials/error for several days on the `gpt-2` project to finetune its parameters and do the required transfert learning needed for the algorithm to learn following the dataset we provided. Since the `gpt-2`has been trained initially on reddit comments an and the `txt` versions of Ford we have are quite messy, it's hard to produce synthetic text that really makes sense AND is representative of Ford.

For now, here's what I've selected so far:

```
define("port", default=8880, help="run the server on the given port")
define("debug", default=True, help="run in debug mode")
define("max_buffer", default=250, help="max buffer size")
define("model_name", default='124M', help="name of pretrained model to load")
define("batch_size", default=5, help="batch size to generate text with gpt2")
define("nsamples", default=5, help="num of samples parameters as defined in gpt2 doc")
define("threshold", default=7, help="length of words before model generates text")
define("text_length", default=100, help="length of words generated")

```

In addition, I've trained the code with `100` steps of finetuning. Here's what we have:
 ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20200715/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202020-06-15%20%C3%A0%2011.08.47.png)

 ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20200715/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202020-06-15%20%C3%A0%2011.12.18.png)  



![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20200715/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202020-06-15%20%C3%A0%2011.15.03.png) 


![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/20200715/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202020-06-15%20%C3%A0%2011.15.37.png) 



For deployment, our best option seems to be Google Cloud Run: https://cloud.google.com/run?hl=fr

# 20120.06.25

I've worked on a bunch of things in the previous days. 

1. First, I've a created a Gmail address that it required to register on Google servives. For now we're running on a three tier that they offer for 10 months. But this tier has no GPU and this makes the interaction quite slow. A GPU solution is expensive ( 227.39 US$ per month). I'm also investigating what they offer with a pay per character solution. 
2. Then, I've created a Docker container to upload everything in the cloud and have the ability to rebuild easiler the project.
3. I've started the server instance so that the genrator route can be called
4. On the reat app, I've set up the websocket infrastructure 
5. I've also created a small bot component
6. I'm in the process of sending the output to the server so that they can be archived 

# 20120.06.26

- Another option for the GPU would be to go with a pay per use model, such as this one:
  https://cloud.google.com/ai-platform/prediction/pricing
  Then it would be US$ 0.4500/hour for the NVIDIA_TESLA_K80.

- Well, another option would be to buy a NVIDIA Jetson Nano GPU device that we connect to the Raspberry Pi that will be "the home of the bot". The we migrate everything there. For the long term, this might be a cool option. But it requires time to setup everything.

------

Ok, so I've deployed a prototype on the staging app: http://f-f-b.surge.sh/

Without a GPU this is quite slow, as you'll see.

Obviously, I need to work on the design (and some details of the interaction) but at least the infrastructure is there. I also know that the returned output is quite generic. Since what happens behind the scene of the `GPT-2` is quite cryptic, I'm not sure what is going on. But I'll retrain the model on my local and I'll certainly deploy once again.

------

On the design part:

- I'll add a dynamic loader. This is just a placeholder.
- I'll add a type machine effect (e.g: like the first fold)

