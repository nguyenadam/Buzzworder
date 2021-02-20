# Buzzworder 

Hello there dynamically enhanced cutting-edge businessperson! This script will help fill in buzzwords on your website!

## Quickstart

Add it to your website using the following script tag:
```
<script src="https://cdn.jsdelivr.net/gh/nguyenadam/Buzzworder@1.0.1/dist/main.js"></script>
```

To insert a buzzword, simply use a `<span></span>` element with the class `buzz`. Buzzworder will automagically insert a buzzword there.

### Example
```<span class="buzz" data-pos="noun" data-case="title"></span>``` could turn into "mindshare" or "innovation"

## Possible Attributes
|data attribute|possible values|default|
|---|---|-----------|
|data-pos|`"noun"`, `"verb"`, `"adjective"`, `"adverb"`, `"all"`|`"noun"`|
|data-case|`"upper"`, `"lower"`, `"title"`|None (probably lower)|
|data-seed|A number|None|

### data-pos
Determines the part of speech of the buzzword. `"all"` gives you a full phrase by stringing together an adverb, verb, adjective, and noun.

### data-case
Determines the capitalization of the word/phrase.

### data-seed
Seeds the random buzzword picker to create reproducible behavior for a specific buzzword element. Useful for maintaining some amount of consistency in how often the buzzwords change.

## Dumb API
If you want to use JS to do other stuff, you can get words like this

- `buzzworder.getWord(type="noun", seed)` Gives you a random buzzword (both params optional)
- `buzzword.words` Just a big object with all of the words

## Source
Buzzword data copied from https://github.com/tom-sherman/buzzword