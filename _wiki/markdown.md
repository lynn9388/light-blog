---
title: Markdown
---

## Editor

[Visual Studio Code](https://code.visualstudio.com/)

## Syntax

### Headers

```markdown
# H1

## H2

### H3

#### H4

##### H5

###### H6
```

### Blockquotes

```markdown
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.
```

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.

### Lists

- Unordered

  ```markdown
  - Red
  - Green
  - Blue
  ```

  - Red
  - Green
  - Blue

- Ordered

  ```markdown
  1. Red
  1. Green
  1. Blue
  ```

  1. Red
  1. Green
  1. Blue

- Task

  ```markdown
  - [x] Task 1
  - [ ] Task 2
  - [ ] Task 3
  ```

  - [x] Task 1
  - [ ] Task 2
  - [ ] Task 3

### Tables

```markdown
| HEADER1 | HEADER2 | HEADER3 | HEADER4 |
| ------- | :------ | :-----: | ------: |
| content | content | content | content |
```

| HEADER1 | HEADER2 | HEADER3 | HEADER4 |
| ------- | :------ | :-----: | ------: |
| content | content | content | content |

> - :----- Align left
> - :----: Align center
> - -----: Align right

### Text Formatting

```markdown
~~Strikethrough~~

**Bold**

*Italic*
```

~~Strikethrough~~

**Bold**

*Italic*

### Code

- Inline Code

  ```markdown
  Inline `code` has `back-ticks around` it.
  ```

  Inline `code` has `back-ticks around` it.

- Code Block

  <pre><code>
  ```java
  if (2 > 1){
      return true
  }
  ```
  </code></pre>

  ```java
  if (2 > 1){
      return true
  }
  ```

  > We use [Linguist](http://https://github.com/github/linguist) to perform language detection and syntax highlighting. You can find out which keywords are valid in the [languages YAML file](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

### Links

- Anchor Link

  ```
  [Syntax](#Syntax)
  ```

  [Syntax](#Syntax)

- Hyperlinks

  ```markdown
  [GitHub](https://github.com/)
  ```

  [GitHub](https://github.com/)

### Images

```markdown
![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)
```

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

### Emoji

GitHub supports emoji!
:+1: :sparkles: :camel: :tada:
:rocket: :metal: :octocat:

> [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)

### Footnotes

This is a text with footnote[^1].

[^1]: Here is the footnote 1 definition.

### MathJax

When $$(a \ne 0)$$, there are two solutions to $$(ax^2 + bx + c = 0)$$ and they are

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

## References

[Daring Fireball](https://daringfireball.net/projects/markdown/syntax)

[GitHub](https://guides.github.com/features/mastering-markdown/)

[GitHub Markdown Cheatsheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)
