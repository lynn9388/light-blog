---
title: Getting Started with Light Blog
tags: Jekyll
---

[Light Blog](https://github.com/lynn9388/light-blog) is intended to be a [remote theme](https://github.blog/2017-11-29-use-any-theme-with-github-pages/) for your personal site or blog in GitHub Pages, and it's quit easy to use. That means you don't need to folk it and then delete posts not belongs to you, but copy several files and change some settings. What's the best is you don't need to struggle on update your blog's theme anymore.

If you are a blog user, you can follow [usage instruction](#usage) to build your blog. Moreover, you can check [here](#customization) to see how to customize it to meet your style.

{% include youtube.html id="gUZpjXwbqvM" %}

> The files displayed in the video may be changed in the future, if the files are different from the instructions below, please refer to the following instructions.

## Usage

When you use Light Blog as a remote theme, you don't need to know what's inside and how it works.

### Create Blog Repository

To create a blog with this theme, just follow these steps:

1. Create an initial repository in local with `git init [NAME]`, like

    ```bash
    git init lynn9388.github.io
    ```

1. Copy necessary files from [light-blog](https://github.com/lynn9388/light-blog) to the repository, includes

    ```bash
    lynn9388.github.io/
    |-index.html
    |-_config.yml
    |-Gemfile
    |-pages
    | |-wiki.html
    | |-404.html
    | |-about.md
    | |-archive.html
    ```

    > `archive.html` is renamed from `categories.html`, which is changed from [this](https://github.com/lynn9388/light-blog/commit/d0f7f564090afd4e5ee30226a6446fb410eb8333) commit.
    >
    > For users who use the `categories.html`, please follow [this](https://github.com/lynn9388/lynn9388.github.io/commit/67df386aff6d5c0adc62b6ac11a4a2e2e3810862) commit to update your site.

    You may also want to copy `.gitignore` to ignore temporary Jekyll files.

1. Update `_config.yml` with your own settings. The most important settings is

    - Uncomment `remote_theme: lynn9388/light-blog`

1. (Optional) Add `favicon.ico` to the root directory of the repository if you want to change the blog's icon showed in browser's tab.

1. (Optional) As a convention, you should also add `LICENSE` and `README.md`.

That's all. Your blog is done and ready to be published as a GitHub Pages. Now, the blog may look like

```bash
lynn9388.github.io/
|-favicon.ico
|-index.html
|-LICENSE
|-README.md
|-.gitignore
|-_config.yml
|-Gemfile
|-pages
| |-wiki.html
| |-404.html
| |-about.md
| |-archive.html
```

### Publish Blog

After you create a blog locally, you can follow these step to publish in GitHub Pages

1. [Add the local repository to GitHub](https://help.github.com/en/articles/adding-an-existing-project-to-github-using-the-command-line)
1. [Enable GitHub Pages to publish your site](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages)

### Add Content

Light Blog supports the normal post and wiki post. The last one is for common knowledge and doesn't need a date. What you need to do is create two folders named `_posts` and `_wiki` for the first time, and put your content to the relevant folder when you want to add content to your blog. The filename of normal post should follow the convention `YYYY-MM-DD-name-of-post.md` which contains the date of your post, so you don't need to put the date in front matter.

As an example of a blog's directory structure, your blog may look like

```bash
lynn9388.github.io/
|-favicon.ico
|-index.html
|-LICENSE
|-_posts
| |-2019-04-16-welcome-to-light-blog.md
| |-(MORE POST HERE)
|-_wiki
| |-git.md
| |-(MORE WIKI HERE)
|-README.md
|-.gitignore
|-_config.yml
|-Gemfile
|-pages
| |-wiki.html
| |-404.html
| |-about.md
| |-archive.html
```

## Customization

When you set light-blog as a remote theme in your site, your site doesn't have the theme files, but Jekyll will use the default layouts, includes, and style sheets of light-blog to build your site. However, you can override any of the theme defaults with your own content.

### Directory Structure

The directory structure of Light Blog is almost the same with other Jekyll themes. Below are the theme files that you can override (except files with `*`).

```bash
light-blog/
|-_includes                       # Theme includes
| |-head.html                     # <head> tag for default layout
| |-footer.html                   # Footer for default layout
| |-modules                       # All reusable modules
| | |-tag-list-group.html         # List tags with post number in a list
| | |-pagination.html             # Pagination for post list
| | |-wiki-list.html              # List all wiki posts
| | |-search-box.html             # Search box
| | |-toc.html                    # Table of contents
| | |-post-list.html              # List posts based on pagination
| | |-google-analytics.html       # * Google Analytics
| | |-tag-list.html               # List all tags with posts
| | |-comments.html               # Comments based on GitHub issues
| | |-repository-list.html        # List some of your repositories
| |-sidebar.html                  # Sidebar on the right
| |-header.html                   # Header for every page on the top
| |-titlebar.html                 # Titlebar for every page
|-index.html                      # Home page
|-_layouts                        # Theme layouts
| |-post.html                     # Layout for posts and wiki to show content
| |-default.html                  # Basic layout for every page
|-_sass                           # CSS with Sass
| |-_main.scss                    # Main CSS file
| |-_rouge.scss                   # CSS for code syntax highlighting
|-assets                          # Assets files
| |-search.json                   # Rules to generate search database for search box
| |-css                           # Style sheets
| | |-main.scss                   # * Import CSS from `_sass`
|-pages                           # Pages made from layouts and includes
| |-wiki.html                     # Wiki page shows wiki list
| |-404.html                      # 404 page
| |-about.md                      # About page introduces the site
| |-archive.html                  # Archive page shows tag list
```

To modify theses theme files, just make a copy of the file that you want to customize and place it in your site's directory with the same path showed above. For details, please check the [Jekyll doc](https://jekyllrb.com/docs/themes/#overriding-theme-defaults) to see how to override theme defaults.

## Read More

- [Writing with Light Blog]({{ site.baseurl }}{% post_url 2019-07-19-writing-with-light-blog %})
