A mixin to create a grid based on a Harry Roberts' [article](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/) article about about taking the BEM naming a step further.

This mixin creates classes of this bemit naming methodology `u-1/3@md`.

If you've read any of Harry Roberts' articles, you know that `u` stands for utility, `1/3` declares that this element takes one third of the available space  and `@md` declares the breakpoint.

## Install

You can either execute `npm install` in your folder if you want to install all the dependences to compile this css or use your own setup to compile it in your preferred file.

## Usage
Running `gulp` will start watching your files for any change and will be compiled to the `dist` folder.

## Settings

Declare your variables in the `_defaults.scss` file:

Set your breakpoints' names and sizes

`$breakpoints: (sm: 320, md: 768, lg: 1024);`

Set the breakpoints unit
`$unit: 'px'`

Set you max columns

`$max-cols: 12;`

Set columns you want to ignore separated by comma e.g '7,8'

`$ignore: '';`
