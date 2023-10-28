# u .git a problem?

!!! info "let's try to fix that"
    here i'll document the issues that i've encountered in setting up this website  
    this covers git, mkdocs, mkdocs-material, html, etc.

## First things first, git status
if you get this error
```
fatal: not a git repository (or any of the parent directories): .git
```

This means that you have not created or cloned a repository properly, or not inside the correct folder.  
Check the file explorer and look for the correct folder, we call this your "root" folder -- this is the topmost folder of the local copy of your repository --

## git not found
if you try any command (e.g. 'git status') and get this error
```
git : The term 'git' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was 
included, verify that the path is correct and try again.
At line:1 char:1
```
The easiest solution is to re-install git. 

## git Cheat Sheet
These are the commands you need first  \
For setting up:
```
git init
git clone
```

And for making updates:
```
git pull
git add .
git commit -m "i will describe my changes in this commit message"
git push
```


Here's a handy pdf i found
<iframe width="100%" height="800" src="https://education.github.com/git-cheat-sheet-education.pdf"></iframe>


## -\-version and -\-help are your friends
Entering any command then space then -\-version will verify that you have the command installed

```
C:\Users\Minnie>gi --version
'gi' is not recognized as an internal or external command,
operable program or batch file.
```
you may have just mistyped it  

Command then space then --help will show you the subcommands and parameters you can put with the command.
```
C:\Users\Minnie>mkdocs --help
Usage: mkdocs [OPTIONS] COMMAND [ARGS]...

  MkDocs - Project documentation with Markdown.

Options:
  -V, --version         Show the version and exit.
  -q, --quiet           Silence warnings
  -v, --verbose         Enable verbose output
  --color / --no-color  Force enable or disable color and wrapping for the output. Default is auto-detect.
  -h, --help            Show this message and exit.

Commands:
  build      Build the MkDocs documentation
  get-deps   Show required PyPI packages inferred from plugins in mkdocs.yml
  gh-deploy  Deploy your documentation to GitHub Pages
  new        Create a new MkDocs project
  serve      Run the builtin development server
```

## My page is up but it looks bad
Probably the .html, .css, and .js files are not generated correctly  
1. check if the github actions ran successfully  
![](../../images/Git%20Problems/check-github-actions.gif)
2. check the filenames in the mkdocs.yml, all the .md files you put under **nav** should exist  
```
nav:
  - About: about/me.md
  - Term 1:
      - Landing Week: 
        - Landing Week: term1/01-Landing-week/Landing.md
        - Intros: term1/01-Landing-week/Intros.md
#        - Tours: term1/01-Landing-week/Tours.md
      - Documenting Design: 
        - Documenting Design: term1/02-Documenting-design/Documenting-design.md
        - Git Problems: term1/02-Documenting-design/Git-problems.md
      - Design Studio 01: term1/03-Design-studio/Design-studio-01.md
      - Atlas of Weak Signals: term1/04-Atlas-of-weak-signals/Atlas of Weak Signals.md
#  - Term 2:
#      - digi: default-page.md
#      - studio: default-page.md
  - Master project:
      - Initial ideas: project/project.md
```

## I want to put my navigation at the top
In the mkdocs.yml file, **navigation.tabs** should be under theme and features:

``` yaml
theme:
  features:
    - navigation.tabs
```

Next, you need to have **mkdocs-material** at least version 9.0 (i'm not sure, so it's best to get the latest one)
so you have to update your **requirements.txt** like this to get the latest version:

``` hl_lines="2"
mkdocs~=1.5,>=1.5.3
mkdocs-material>1.0.0
mkdocs-material-extensions~=1.2
```

More about navigation here: [mkdocs-material reference](https://squidfunk.github.io/mkdocs-material/setup/setting-up-navigation/#navigation-tabs "mkdocs-material reference")



## How to embed a .pdf
in any part of a markdown file (a file in .md), we can insert html code  

the cheat sheet above looks like this in my code:
``` html
<iframe width="100%" height="800" src="https://education.github.com/git-cheat-sheet-education.pdf"></iframe>
```

## How to add a new line
with html:
```
<br>
```

or add this to mkdocs.yml, under the **markdown_extensions:**

``` yaml hl_lines="2-3"
markdown_extensions:
  - pymdownx.escapeall:
        hardbreak: true
```
then you can add a new line by using two spaces

## How to center an image
insert this html snippet in your .md file, just change the image path, width and caption:
``` html
<figure markdown>
  ![](../images/minniecrop.jpg){ width="300" }
  <figcaption>ahh boba tea</figcaption>
</figure>
```
## How to add a link that opens in a new tab
Add **{:target="_blank"}** after the end parenthesis, for example:

```
Opens in a [new tab](https://hackmd.io/dD_c65SVSgqPHJwa56zHew "hover text"){:target="_blank"}
```

!!! bug "if you find anything wrong or missing in this page"
    send me a message! or email me at emmanuelle.pangilinan@students.iaac.net