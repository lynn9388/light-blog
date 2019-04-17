---
title: Getting Started
categories: jekyll
---

Light Blog is intended to be a [remote theme](https://github.blog/2017-11-29-use-any-theme-with-github-pages/) for your personal site or blog in GitHub Pages, and it's quit easy to use. That means you don't need to folk [light-blog](https://github.com/lynn9388/light-blog) and then delete posts not belongs to you, but copy several files and change some settings. What's the best is you don't need to struggle on update your blog's theme anymore.

## Usage

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
    | |-categories.html
    ```

    You may also want to copy `.gitignore` to ignore temporary Jekyll files.

1. Update `Gemfile` and `_config.yml` with your own settings. The most important settings are

   - Comment `gemspec` and uncomment `gem "github-pages", group: :jekyll_plugins` in `Gemfile`
   - Uncomment `remote_theme: lynn9388/light-blog` in `_config.yml`

1. [Optional] Add `favicon.ico` to the root directory of the repository if you want to change the blog's icon showed in browser's tab.

1. [Optional] As a convention, you should also add `LICENSE` and `README.me`.

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
| |-categories.html
```

### Publish Blog

After you create a blog locally, you can follow these step to publish in GitHub Pages

1. [Add the local repository to GitHub](https://help.github.com/en/articles/adding-an-existing-project-to-github-using-the-command-line)
1. [Enable GitHub Pages to publish your site](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages)

### Add Content

Light Blog supports the normal post and wiki post. The last one is for common knowledge and doesn't need a date. What you need to do is create two folders named `_posts` and `_wiki` for the first time, and put your content to the relevant folder when you want to add content to your blog. The filename of normal post should follow the convention `YYYY-MM-DD-name-of-post.md` which contains the date of your post, so you don't need put the date in front matter.

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
| |-markdown.md
| |-(MORE WIKI HERE)
|-README.md
|-.gitignore
|-_config.yml
|-Gemfile
|-pages
| |-wiki.html
| |-404.html
| |-about.md
| |-categories.html
```
