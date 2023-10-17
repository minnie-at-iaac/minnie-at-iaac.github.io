# u .git a problem?

!!! info "let's try to fix that"
    here i'll document the issues that i've encountered in setting up this website

to troubleshoot, first try git status

if you get this error
```
fatal: not a git repository (or any of the parent directories): .git
```

that means that you have not created or cloned a repository properly, or not inside the correct folder
check the file explorer and look for the "root" folder - this is the topmost folder of your local copy of the repository -

## git not found
if you try any commannd (e.g. 'git status') and get this error
```
git : The term 'git' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was 
included, verify that the path is correct and try again.
At line:1 char:1
```
the easiest solution is to re-install git

## git Cheat Sheet
these are the commands you need first  \
for setting up:
```
git init
git clone
```

for making updates:
```
git pull
git add .
git commit -m "i will describe my changes in this commit message"
git push
```


here's a handy pdf i found
<iframe width="100%" height="800" src="https://education.github.com/git-cheat-sheet-education.pdf"></iframe>

## My page is up but the contents are not formatted
probably the .html, .css, and .js files are not generated correctly

## I can't put my navigation at the top
in your mkdocs.yml file, **navigation.tabs** should be under theme and features:

```
theme:
  features:
    - navigation.tabs
```

next, you need to have **mkdocs-material** at least version 9.0 (i think, so it's best to get the latest one)
so you have to update your **requirements.txt** like this to get the latest version:
``` hl_lines="2"
mkdocs~=1.5,>=1.5.3
mkdocs-material>1.0.0
mkdocs-material-extensions~=1.2
```

[mkdocs-material reference](https://squidfunk.github.io/mkdocs-material/setup/setting-up-navigation/#navigation-tabs "mkdocs-material reference")



## How to embed a .pdf
in any part of a markdown file (a file in .md), we can insert html code
<br>
the cheat sheet above looks like this in my code:
``` html
<iframe width="100%" height="800" src="https://education.github.com/git-cheat-sheet-education.pdf"></iframe>
```

## How to add a new line
with html:
```
<br>
```

or add this to mkdocs.yml, under the *markdown_extensions:*
```
markdown_extensions:
  - pymdownx.escapeall:
        hardbreak: true
```
then you can add a new line by using two spaces

