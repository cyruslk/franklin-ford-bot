# IMPORTANT LINKS

- THE PROJECT'S PROCESS: ⏬ - <https://github.com/cyruslk/franklin-ford-bot/blob/master/logs.md>
- THE PROJECT'S 'ISSUES' -  <https://github.com/cyruslk/franklin-ford-bot/issues>
- THE PROJECT'S TWITTER ACCOUNT - <https://twitter.com/franklinfordbot/>
- THE PROJECT'S WEBSITE: <https://www.franklinford.org/>
- THE PROJECT'S WORK IN PROGRESS GOOGLESHEET: http://bit.ly/2DNfTEF
- THE PROJECT'S NATURAL LANGUAGE PROCESSING LIBRARY: http://bit.ly/2WtmWKg

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

   ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-18%20%C3%A0%2019.56.44.png)
    ![](https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-02-19%20%C3%A0%2000.27.04.png)



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

![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/ford_meme.jpg>) 

![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/2_ford_meme.jpg>) 

------

Going back to `chrome extensions` now. I created a folder called `code` and a subfolder called `chrome_extensions`. These bits of code will serve as prototypes to showcase ideas and explore what can be done. I might wrap up these inside the chrome extension boilerplate so that you guys could test them in your browser; in the meantime you can just copy paste the code I wrote inside the browser's console to see how the code works.  

1. **replacing_words_by_others**: this is basically a program that replaces specific words by others inside the same webpage. In this case, we would assign words to others; and when the browser finds a specific word, this word gets replaced by the one we selected.

   Here, *Ford* is replaced by *Franklin Ford*; *Canada* is replaced by *USA* and *Triangle* by *The intelligence triangle*. You get the idea ;-)

   ![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-03-27%20%C3%A0%2017.52.34.png>) 

2. **changing_headlines**: this is a program that replaces all the headlines of a news website (e.g: *The New York Times* here) with sentences randomly picken from our Ford's Database (I picked a few of them from the Twitter's bot). 





   ![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-03-27%20%C3%A0%2017.34.34.png>) 

   Behind the scenes...

------

   ![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-03-27%20%C3%A0%2018.32.02.png>)

   ![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-03-27%20%C3%A0%2018.31.53.png>) 

   ![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-03-27%20%C3%A0%2018.31.47.png>) 

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

![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-03-28%20%C3%A0%2010.25.38.png>) 

![](<https://raw.githubusercontent.com/cyruslk/franklin-ford-bot/master/process_files/Capture%20d%E2%80%99%C3%A9cran%2C%20le%202019-03-28%20%C3%A0%2010.30.14.png>) 

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
- [ ] Wire the backend to the front-end using [React.js](https://reactjs.org) and [surge.sh](https://surge.sh/).
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

- [ ] Once the all thing is tweeted, post on reddit
- [ ] Then, store everything (TBD) inside the database
  - [ ] TBD = metadata from the posts (coming from the spreadsheet) etc...
- [ ] Send all the content of the db to the front-end (= the website).
- [ ] Display the content (TBD)
  - [ ] Use pixels coordinates to play with the x,y coordinates of the page > the metadata? 

# 2019.05.06

The framework I was using to connect to `reddit` is buggy, so I'm using this one instead now: <https://github.com/JuicyPasta/reddit-snooper> — did a bunch of tests and it seems to work fine.