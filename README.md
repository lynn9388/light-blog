# Light Blog

Light Blog is a light and responsive Jekyll theme, and it's easy to be used as a [remote theme](https://github.blog/2017-11-29-use-any-theme-with-github-pages/).

Github Pages' remote theme is kind like a [gem-based theme](https://jekyllrb.com/docs/themes/#understanding-gem-based-themes). The user doesn't need to worry about the theme files (like HTML, CSS, etc.), but focus on the posts.

> With gem-based themes, some of the site’s directories (such as the `assets`, `_layouts`, `_includes`, and `_sass` directories) are stored in the theme’s gem, hidden from your immediate view. Yet all of the necessary directories will be read and processed during Jekyll’s build process.

## Usage

### Create Blog Repository

To create a blog with this theme, just follow these steps:

1. Create an initial repository in local with `git init [NAME]`, like

    ```bash
    git init lynn9388.github.io
    ```

1. Copy necessary files from light-blog to your own repository, includes

    ```bash
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

1. Update `Gemfile` and `_config.yml` with your own settings. The key points are

   - Comment `gemspec` and uncomment `gem "github-pages", group: :jekyll_plugins` in `Gemfile`
   - Uncomment `remote_theme: lynn9388/light-blog` in `_config.yml`

1. [Optional] Add `favicon.ico` to the root directory of the repository.

That's all, your blog is done and ready to be published as a GitHub Pages. And as a convention, you should also add `LICENSE` and `README.me`.

### Publish Blog

After you create a blog locally, you can follow these step to publish in GitHub Pages

1. [Add the local repository to GitHub](https://help.github.com/en/articles/adding-an-existing-project-to-github-using-the-command-line)
1. [Enable GitHub Pages to publish your site](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages)

### Add Content

Light Blog supports the normal post and wiki post. The last one is for common knowledge and doesn't need a date. What you need to do is create two folders named `_posts` and `_wiki` for the first time, and put your content to the relevant folder when you want to add content to your blog.

As an example of a blog's directory structure, your blog may looks like

```
.
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

## Acknowledge

The theme is based on [Zhuang Ma's blog](https://github.com/mzlogin/mzlogin.github.io), which is modified from [Yummy-Jekyll](https://github.com/DONGChuan/Yummy-Jekyll). Thank you!

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
