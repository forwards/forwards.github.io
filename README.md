# Source files for forwards.github.io
    
The [Forwards website](http://forwards.github.io/) is maintained using [Quarto](https://quarto.org).

CAUTION! Pushing to the main branch triggers a GitHub action to build and deploy the website. For new/edited blog posts this may publish a new entry on the RSS feed. So,

- For changes to a single file, edit via the browser and use the preview tab to check before committing.
- For new blog posts or pages, add `draft:true` to the YAML header. You can push these changes and they won't appear in listings (and hence the RSS feed) or site search. Type the URL directly to preview.
- Before [publishing a new blog post](#publishing-a-blog-post), it is best to render the website locally to preview changes before committing.

If you want to include R code, you will need to render the site locally, so the results are saved and do not need to be recomputed by the GitHub action.

For all edits, please check the [Editing checklist](#editing-checklist).

## Previewing/rendering locally

### Initial Setup

 - [Install Quarto](https://quarto.org/docs/get-started/) if you don't already have it.
 - Clone this repository, e.g. as an RStudio project.

### Each time you want to work on the website

 - Open your RStudio project, or otherwise start R as you usually do, setting the working directory to the repository root directory.
 - Open the first Quarto file you want to work on (this may be a new file, see next section on Adding Content).
 - Preview the website by using the Render button on the source file window in RStudio, or otherwise run the following command in the terminal:
   ```sh
   quarto preview
   ```
   
This will show the rendered version of the file you are working on. However, Quarto will now watch for changes to any files so you can 
edit other source files and navigate the previewed website within the RStudio viewer or browser to see the latest changes.
    
## Adding new content

Content is added as quarto files (`.qmd`). 
The location in the repository reflects the location on the website, e.g. 
`about.qmd` is deployed to `https://forwards.github.io/about.html` and `/blog/index.qmd` is deployed to `https://forwards.github.io/blog/`.

There are currently three  different types of content on the website: 
[Blog posts](#blog-posts), [General pages](#general-pages) and 
[Reports](#reports).

### Blog Posts

To start a new blog post, create a new directory in the relevant years' directory, e.g. 

```r
dir.create("blog/2023/example-blog-post")
```

where the name of the directory defines the URL of your post.

Within the subdirectory, create a new file, `index.qmd`, with the following header

```yaml
---
title: Title in Title Case
author:
  - name: Author 1
  - name: Author 2
date: "YYYY-MM-DD"
categories: [news, community]
description: "Announcement about the relaunch of the Forwards website."
draft: true
---
```

Make sure you have `draft:true` until you're ready to publish the post.

Use existing categories (see <https://forwards.github.io/blog/>) where possible. 

The description specifies the description field for the metadata of the 
rendered HTML file and is also used in the blog listing.

Each blog post must have an image to include in the blog listing. The first 
image from the blog post is used, unless you specify an image with alternative text 
in the YAML header with `image:` and `image-alt:`.

Images should be put in the same directory as your `index.qmd`, so that you can 
refer them without a file path.

### Publishing a blog post

* Update the post date.
* Check the blog source file is within the correct year's sub-directory.
* Set `draft: false` in the YAML header
* Click "Render website" on the Build tab in RStudio, or in the terminal run

        quarto render
    
    This will update the listing on the "Blog" page - check the listing for 
    the new post.
* Check the [Editing checklist](#editing-checklist).
* Commit your changes for the website to be built and deployed.

### General pages

The YAML header should contain a title and a description:

```yaml
---
title: "About"
description: Background and structure of the R Foundation taskforce on women and other under-represented groups
---
```

By default, the forwards logo is used in social media cards. Add `image:` and 
`image-alt:` to specify an alternative image.

Images for top level pages are in the `images` folder and can be referenced 
as `/images/pic.jpg`, otherwise put them in the same folder as the `.qmd` file 
so you don't need to include a file path.

To add a link to the new page in the navigation bar, you need to edit the  
`navbar:` field in the `_quarto.yml` file, see existing links for examples. 
Pages can be added as top-level links or as part of a menu (currently only 
"Other" has a menu).

We have some pages that are not linked to the navigation, but nested within 
sections, e.g. `edu/nyc.qmd`. This is works okay for pages that you point 
people to directly (e.g. for a specific event) or are linked from top-level 
pages (e.g. `edu/index.qmd`).

### Reports

Reports can be added in the `docs` folder. 

A link should be added to `docs/index.qmd` (maybe at some point we can change 
this to an automatic listing).

The YAML header should include title, description and date, with optional author 
field.

```yaml
---
title: A Report
description: A report about important things.
author: ""
date: 2017-01-12
type: recommendations
---
```

Currently we have `type: survey-report` or `type: recommendations` and these 
two types are listed separately on the index page (manually).

Otherwise, these pages are like general pages.

## General editing

### Editing checklist

- External links reference full URLs (including `"https://"`)
- Internal links are relative to site root (e.g. `"/blog/2017/r-in-africa"`)
- YAML has a description field.
- Blog post URL is of the form "blog/YYYY/blog-post-name" with the correct year.
- Blog post has an image in the main body or specified in `image:` and `image-alt:` fields of YAML.
- Images in the main body have a caption and/or alt text that describes the image adequately for people using screen readers.
- Images have been optimized for the web.
- Sections are level two (##) or higher (the title is the level 1 header).

### Document metadata

The title will show on the browser tab, so consider the first word or two 
carefully.

The description is used in the HTML metadata and will appear in web searches, 
and social media cards, i.e., the automatic summary that is shown when you share 
a link on Slack, Mastodon, etc. If this is missing, the title will be repeated.

### Captions and alt text

For images included with markdown, add text between the square brackets to 
add a caption, specify alternative text as an attribute, e.g.,

```md
![Caption](pic.jpg){fig-alt="Alternative text"}
```

### Optimizing images

Please ensure image files are less than 100 KB. Images can be optimized using 
the **magick** package - example code is provided in 
`R/optimize_photo.R`. Consider cropping the photos (easiest 
with photo-viewing software) to remove "empty" space, short and wide photos 
work well, so people don't have to scroll a long way to get to the next text 
block.

### Icons

The [Iconify Extension for Quarto](https://github.com/mcanouil/quarto-iconify) 
has been installed so that you can use icons from 
[Iconify](https://icon-sets.iconify.design), e.g., 

```r
{{< iconify exploding-head >}}
```

## Redirects

If a page is moved, it's a good idea to add a redirect so that old links will 
still work. You can do this by specifying an alias in the YAML header

```yaml
aliases:
  - "/blog/2020/05/25/southern-africa-project-2020/index.html"
```

## Changing site parameters

General configuration settings are specified in the `/_quarto.yml` file.

Settings can also be configured for sub-folders, we do this for the blog in 
`blog/_metadata.yml`.

CSS to customize the Bootstrap theme can be added to `/styles.css`. If you 
just want to change a variable, e.g. a theme colour, it is better to do this 
using [Sass variables](https://quarto.org/docs/dashboards/theming.html#sass-variables), currently we only do this for the dark theme in `/theme-dark.scss`.
