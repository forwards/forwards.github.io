---
author: "Stella Bollmann, Dianne Cook, Rudolf Debelak, Jasmine Dumas, John Fox, Julie Josse, Oliver Keyes, Carolin Strobl, Heather Turner"
banner: "/images/blog/community-involvement-of-users/user2016-reception.jpg"
categories: ["analysis"]
date: 2017-06-19
description: "Community Involvement of useRs"
tags: ["useR!", "survey", "community"]
title: "useRs Participation in the R Community"
tocify: true
#output: github_document
knit: (function(inputFile, encoding) {
    outputFile <- 
        knitr::knit(inputFile, 
                    output = paste0("../../../../website_source/content/blog/",
                                    gsub(".*/(.*).Rmd", "\\1", inputFile), 
                                    ".md"), encoding = encoding);
    out <- readLines(outputFile);
    out <- gsub("/images/", "//images/", out);
    writeLines(out, outputFile)
    })
---







In our [first](https://forwards.github.io/blog/2017/01/13/mapping-users/) and [second](https://forwards.github.io/blog/2017/03/11/users-relationship-with-r/) posts on the useR! 2016 survey we discussed the responses from the demographic and programming sections. The main findings were:

 - The useR! 2016 attendees were predominantly men, typically under 40, White/Caucasian and employed full-time.
 - Women attendees tended to be younger, with less programming experience and lower involvement in package development.
 - Most useRs had a generally positive view of R, finding it fun to use, but women were less likely than men to code recreationally.
 
In this last blog post of the series, we consider useRs involvement in the wider R community.

## Summary

A large proportion of useR! attendees feel that they belong to the R community,
with the proportion increasing with length of time using R.

Stackoverflow and the R mailing lists are the most common resources used for support, despite the negative experience of some useRs. A third of useRs attend a local user group, although the proportion is higher among men than women. The main reasons for not attending are there is no group nearby, or people are too busy. The top initiatives that would encourage more involvement are a new user group nearby and mentoring. Women are more likely than men to want additional support and are more in favour of online support and initiatives targeted at their demographic.

The respondents had many suggestions for improving the R community and these along with the other survey responses provide a basis for Forwards and other R community leaders to work towards greater engagement.

## Survey results

### Belonging to the Community




The first question asked useRs whether they considered themselves to be part of the R community: 361 (79%) said yes, 69 (15%) said no and 28 (6%) did not give an answer. There was no significant difference in responses from men and women.
 
It's encouraging that such a large proportion feel part of the R community: as might be expected the proportion increased with the length of time the respondent had used R, yet even people with less than 6 months' experience responded positively. This is a testament to a generally welcoming community as backed up by some of the free text comments, for example:

> Y'all seem to have a very active and robust community - keep it up!

# 
    
> I really like the idea that R can be for you [...] I was trained as an engineer, not a statistician. I really appreciate the welcoming I have received
    
Other comments mentioned that "[m]eetups are a great source of network building", useR! was "one of the most fun meetings [they'd] ever been to" and that companies "like RStudio stay true to open source and actively encourage folks to edit their packages", all aspects encouraging participation and a sense of community.

On the negative side, one person said they "wouldn't feel officially part of the R community unless [they had] contributed to or made a package". Another respondent, for whom useR! 2016 was their 3rd useR!, hoped to become better known to folks with similar interests by continuing to present at conferences. A third person observed an emphasis on having a PhD: "there's definitely a sense of 'you're in the club or not' [...] it doesn't feel like the [P]ython community wants to put a fence around itself and go 'oh, this is for those who belong to the esteemed academy.'"
 
Even some useRs with more than 10 years' experience responded that they did not feel part of the R community. Possibly they view R as a tool, perhaps one of many they use, and are not interested in the community surrounding R. However, some people may not be aware of community activities, or how they can get more involved in the R project. As pointed out in another commment, the number of new users is increasing rapidly, so finding ways to spread awareness of these activities is important.

### Support in Using R

The next question in the community section asked useRs which resources they used for support. Respondents could select one or more resources from a list and/or add their own resources. The responses were comparable for both men and women, so the plot below summarises the results for all respondents, showing the resources that were selected by at least 10 individuals:

<img src="/images/blog/community-involvement-of-users/unnamed-chunk-2-1.png" title="plot of chunk unnamed-chunk-2" alt="plot of chunk unnamed-chunk-2" style="display: block; margin: auto;" />

Over 70% (334 of 458) use StackOverflow for support, but the long-running R mailing lists are still heavily used, with 40% (180 of 458) using these. Both resources were criticised in the comments as being unfriendly to newcomers though, for example:

 > The mailing lists need to be more inclusive / friendly. Way too often new users are scared away by the "read documentation" and/or "this is a statistics question" comments

# 
    
 > It would be wonderful to have something like StackOverflow, but more friendly + welcoming for newcomers.
    
Another problem noted with StackOverflow (that probably also applies to the mailing lists) is that many questions are left unanswered. One respondent suggested splitting  r-help into subgroups for better signal-to-noise ratio. This has been done to some extent with the Special Interest Group mailing lists of which there are more than 20 covering a range of topics e.g. databases, ecology, GUIs, jobs and teaching, see the [Mailing Lists](https://www.r-project.org/mail.html) page for more. The Bioconductor support site and the rOpenSci mailing lists/forums, also featuring in the responses, are other examples of support focused on particular areas. Another suggestion in the comments was to start a new mailing or forum targeted at beginners and/or non-statisticians.

The third most popular resource, with 26% (118 of 458) of respondents using it is the [#rstats Twitter hashtag](https://twitter.com/hashtag/rstats?lang=en-gb). This may be surprising to people not on Twitter, or not using Twitter for work purposes, but it is a natural extension of the support that people get from colleagues or local groups (also mentioned, but by only 9 and 5 respondents respectively). That is, it provides a network of people who share news of R packages, programming tips and who help each other on issues - sometimes crossreferencing other resources such as StackOverflow, e.g. to get an answer to their question.  

Four respondents used an internal mailing list or Slack group. Starting an open Slack group was suggested by a couple of respondents to provide a forum for discussion/support and for mentoring new users. There were individual mentions of the R user group on Facebook, Google groups and LinkedIn R user groups.

Other resources are web search, blogs (particularly [R-bloggers](https://www.r-bloggers.com/) which aggregates R blogs), R documentation, books, journals (e.g. [The R Journal](https://journal.r-project.org/), [Journal of Statistical Software](https://www.jstatsoft.org/index)), GitHub, online courses/tutorials, and other specific websites.

### Getting R News

Next we asked useRs what was their preferred medium for R community news (e.g. events, webinars, opportunities). Again there was no significant difference between the responses for men and women, so the results for all genders are presented below:

<img src="/images/blog/community-involvement-of-users/unnamed-chunk-3-1.png" title="plot of chunk unnamed-chunk-3" alt="plot of chunk unnamed-chunk-3" style="display: block; margin: auto;" />

The majority of useRs are split across four media: website (24%, 110 of 458), mailing list (21%, 96 of 458), blog (21%, 85 of 458) and Twitter (15%, 69 of 458). Therefore communication across a range of media is necessary to be confident in reaching a large proportion of R users and developers. In addition to the other media featured in the plot above (Facebook, RSS feed, podcast) useRs selected Google+ and their local R meetup group as sources of news. The remaining people in the "Other" category wanted to select multiple categories or had no preference. An exploratory multivariate analysis[^1] suggests that Facebook (not Twitter), podcasts and blogs are more more popular among newcomers, especially women, so these media may be important for outreach. A sizeable proportion (13.1%) did not select any option, so do not have a preference or are not interested in R community news. Nonetheless, as conference participants, they may receive some news in person.

### Local Groups

The last set of directed questions related to useR's involvement in local R user groups. Among the 458 respondents, 152 (33%) said they attended a local group, whereas 279 (59%) did not and 27 (6%) did not respond. Of those that attended RUGs, 124 (82%) attended a general user group, while 12 (8%) attended a university-based group and 7 (5%) attended a company-based group. Other types of groups mentioned were a user group for women in R (R-Ladies), a combined general user and R-Ladies group, a group based in a government organization and an informal user group for government and academia.

The respondents that did not attend a user group were asked why not, giving the following responses:

<img src="/images/blog/community-involvement-of-users/unnamed-chunk-5-1.png" title="plot of chunk unnamed-chunk-5" alt="plot of chunk unnamed-chunk-5" style="display: block; margin: auto;" />

The most common responses were that there was no active group nearby (30%, 85 of 279) or they were too busy (30%, 84 of 279). The next most frequent responses correspond to people that feel too inexperienced (11%, 30 of 279) or perhaps too experienced, in that they don't need the extra support (9%, 25 of 279). Some people did not know whether there was a group near them, or were unaware that such groups existed - one person looked up their local group as a result of filling in the survey and signed up for it straight away! For others the topics were not relevant/interesting, the time or place was inconvenient, they didn't use R enough (using other tools more or being completely new to R), there were logistical issues (accessibility, problems signing up to meetups or not enough space at meetup) or social issues (feeling intimidated or worrying they would intimidate others), they'd just never considered it, or planned to go soon.


A higher proportion of men (46%) said that they attended a user group, compared to women (25%). Men and women also differed in some of their responses when asked what would make them more likely to participate in the R community, or improve their experience. Therefore these results are shown for men and women separately below, for options with at least 5 respondents in a gender:category combination:

<img src="/images/blog/community-involvement-of-users/unnamed-chunk-6-1.png" title="plot of chunk unnamed-chunk-6" alt="plot of chunk unnamed-chunk-6" style="display: block; margin: auto;" />

The top two options were to have a new user group nearby (27%, 122 of 458) and mentoring (19%, 87 of 458). The proportions selecting these options were similar for men and women. For women, the next most wanted support was an online forum to discuss R-related issues; 20% of women vs 10% of men selected this option. The gender difference was similar regarding views on an online support group for their demographic (note this could be other than gender), but overall the positive response was much lower for this option. For men, after user groups and mentoring, the next most popular option was workshops, with similar numbers selecting free local introductory workshops, paid local advanced workshops and workshops at a conference in their domain. These options were also popular with women, with a slightly stronger preference for advanced workshops or workshops at conferences. Conferences specified in the comments were JSM, INFORMS, NIPS and ICML. For men, there were no other options selected by at least 10 individuals, but for women there was still support for user groups, workshops and an online support group aimed at their demographic (respectively 13%, 8% and 8% of women). Respondents were asked to specify the demographic in the comments, mostly this was women, but LGBT and academics (students/teachers/reseachers) were also specified.

Less frequently selected options, or aspects mentioned in the comments were childcare at conferences, a user group where it is possible to bring children, greater demand for R in local area and training in a non-English language (Chinese).

The community maintains a [list of R User Groups](https://jumpingrivers.github.io/meetingsR/r-user-groups.html) and R-Ladies Groups can be found there as well as on the [R Ladies Global website](http://rladies.org/). As the conference was in Stanford, it is not surprising that there were several people from the local area interested a group near them. For some of these, the [Bay Area R User Group](https://www.meetup.com/R-Users/), might work, but some individuals e.g. from Oakland or Palo Alto felt this was too far. Further afield there were a number of specific places mentioned, where there is already a local group or one not so far away, though many have started since useR! 2016:

 - Los Angeles, CA [RUG](https://www.meetup.com/LAarea-R-usergroup/)
 - Denver, CO [RUG](https://www.meetup.com/DenverRUG/)
 - Connecticut CT [R-ladies](https://www.meetup.com/rladies-connecticut/) (**NEW**)
 - Washington DC [RUG](https://www.meetup.com/stats-prog-dc/); [R-Ladies](https://www.meetup.com/rladies-dc/) (**NEW**)
 - Miami, Florida [R-Ladies](https://www.meetup.com/R-Ladies-Miami/) (**NEW**)
 - Orlando, Florida [R-Ladies](https://www.meetup.com/R-Ladies-Orlando/)(**NEW**)
 - Ames, IA [R-Ladies](https://www.meetup.com/R-Ladies-Ames/) (**NEW**)
 - Boston, MA [R-Ladies](https://www.meetup.com/R-Ladies-Boston/) (**NEW**)
 - Greensboro, NC; not so far from Winston Salem  [RUG](https://www.meetup.com/Winston-Salem-R-Users-Group/)
 - Durham, NC [R-Ladies](https://www.meetup.com/R-Ladies-RTP/) (**NEW**)
 - Columbus, OH [R-Ladies](https://www.meetup.com/R-Ladies-Columbus/) (**NEW**)
 - Portland OR [RUG](https://www.meetup.com/portland-r-user-group)
 - Nashville, TN [RUG](https://www.meetup.com/Nashville-R-Users-Group/); [R-Ladies](https://www.meetup.com/rladies-nashville/) (**NEW**)
 - Seattle, WA [RUG](https://www.meetup.com/Seattle-useR/); [R-Ladies](https://twitter.com/RLadiesSeattle) (**COMING SOON**)
 - Zurich, Switzerland [RUG](https://www.meetup.com/Zurich-R-User-Group/)
 - Muenster, Germany [RUG](https://www.meetup.com/Munster-R-Users-Group) (**NEW**)
 
There were also some places where there isn't an active group nearby and there may be potential to (re)start a new group:

 - Central Valley, CA
 - Davenport, IA
 - Iowa City, IA
 - SE Minnesota, MN
 - Wilmington, NC 
 - Moscow, ID
 - Eugene, OR
 - Richland, WA
 - Geneva, Switzerland
 - Hasselt, Belgium
 - Freiberg, Germany
 - Glasgow, Scotland
 - Cluj-Napoca, Romania

Many domains were mentioned including spatial statistics, electrical engineering, operations research, health care and education. Some of these might be fed through to the corresponding local groups, while others might provide ideas for future useR! conferences.

### General Comments

The survey concluded with two open-ended questions, first asking respondents for their ideas for improving the R community and second for general feedback on the survey. Some of the comments we have mentioned earlier, specific ideas from the remaining comments are outlined below.

Community/R Project organisation:

 - A webpage introducing the community and how it is organised online
 - Taskforce for communities/local groups
 - Promote local groups
 - Move R core development and CRAN to a more inclusive platform such as GitHub.
 - More women in leadership (R Core, R Consortium, R Foundation)
 
useR!/conferences:

 - A special gathering for first-time attendees at useR!
 - A beginners' track at useR!
 - Workshops at useR! to help people solves problems they bring along
 - Childcare at useR!
 - Informal "birds of a feather" tables at conferences
 - Continue with the diversity scholarship to help increase diversity at useR!
 
Local groups:

 - Publish guide for running local group
 - Meetings aimed at different levels of expertise/experience
 - Team participation in competitions, e.g. kaggle
 - Voluntary work on data science problems for non-profits
 - Open source sprint, e.g. on R tools for sight impaired
 - Open source introductory materials for groups to run workshops
 - User group [events] aimed at users who want to contribute to packages/base R
 - Joint events with other data science groups
 - Collaborative projects across user groups
 - Online virtual R conference among user groups
 - Global competitions to resolve core R issues
 
Professional development/education:

 - Slides repository on git like the Bioconductor courses resources
 - R curriculum for undergraduate courses
 - Guideline for switching from other languages, e.g. SPSS
 - Resources to help long-time useRs keep up-to-date (try [hipsteR!](http://kbroman.org/hipsteR/))
 - Mentorship, particularly for first CRAN submission
 - Encourage networking between established and new useRs
 - More workshops
 
There was also a call for more outreach, particularly to young people (especially girls) in high schools, but also to educators, social scientists and business schools.

There is a lot to work on here, but several respondents commented on their motivation to contribute, particularly after attending useR! and hearing of the work of Forwards (or the Women in R Taskforce as it was then) and R-Ladies. Others said they didn't have the time to contribute very much, but in some cases would be prepared to contribute if they were asked to do something specific.

Finally many respondents expressed thanks to Forwards for running the survey and for our efforts to improve diversity and inclusion - many thanks for your encouragement!

## Conclusions

It has taken us a while to work through the survey and report back. However a benefit of this is we can see that actions in the meantime by Forwards and the wider community are already starting to address many of the issues raised in the last part of the survey. 

The massive expansion of R-Ladies over the past year (from 4 groups to over 45[^2]) means that many people who were looking for a group now have one nearby, or will have soon. Many of the suggestions for useR! are in place for useR! 2017: there will be a [newbies session](https://user2017.sched.com/event/Avzo/sessions-for-user-newbies), [childcare](https://user2017.brussels/news/2017/user-2017-childcare) and a "hackathon space" for informal birds of a feather gatherings. In addition 26 participants were awarded diversity scholarships (thanks to the [conference sponsors](https://user2017.brussels/sponsors), especially platinum sponsors Microsoft, Open Analytics, R Consortium, RStudio, DataCamp, and IBM). 

With regards to education and outreach, the Forwards Teaching sub-team were recently awarded an [R Consortium grant](https://www.r-consortium.org/blog/2017/04/03/q1-2017-isc-grants) to develop workshops specifically targeting women and high school girls - initial workshops are planned for September and December in Melbourne, Australia and Auckland, New Zealand respectively. Further workshops will be run in Europe and the US, and the material made available under a Creative Commons share-alike license for others to use.

Beyond this, we can use the ideas and findings here to inform future initiatives. For example the Forwards Community sub-team can help to promote local groups by raising awareness, connecting people that want to start new groups and sharing ideas to increase participation. In line with our mission to increase participation among under-represented groups, we can focus on initiatives that appear to be particularly appealing to women, such as mentoring and an online forum.

Overall we have learnt a lot from our survey of useR! participants. In future we would like to study other populations and have package authors in mind for our next big survey. However, we still wish to monitor participation of under-represented groups at useR! so will be running a demographic survey as part of the general conference evaluation survey at useR! 2017. If you're coming to useR! please support us by responding!

## Notes

Now that we have completed this blog series, we will work on preparing an aggregated data set that minimises the risk of disclosure. We hope to release this over the summer.

The analysis presented here used the following packages:

 - For data manipulation: dplyr, forcats, tidyr
 - For visualization and reporting: knitr, ggplot2
 
The code is available in the [Rmarkdown file](https://github.com/forwards/surveys-public/blog-posts/useR-2016/community-involvement-of-users/2017-06-19-community-involvement-of-users.Rmd).

The banner photo was taken at useR! 2016 by [Thomas Petzoldt](http://tu-dresden.de/Members/thomas.petzoldt), used with permission.

[^1]: See our supplementary report: [useR! 2016 participants and the R community: a multivariate analysis](https://forwards.github.io/docs/MCA_community_useR2016_survey/).

[^2]: [R-Ladies Global Community and Vision](bit.ly/rladies_cascadiarconf), Gabriela de Queiroz, Cascadia R Conference, June 3, 2017, Portland, OR.
