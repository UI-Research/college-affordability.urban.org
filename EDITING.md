# EDITING #

## General ##

The site is made up of pages and components.  As an editor, you will mostly edit files within the /pages directory and point to elements within components to simplify certain content entry.

## Edge cases ##

### HTML ###

In general, react components should be tolerant of most of the HTML tags in the specifications.  You can review the acceptable ones here: https://facebook.github.io/react/docs/tags-and-attributes.html

However, note the follow exceptions which may impact your code if you are porting it from a traditional source:

* *class* must be renamed to *className* as *class* is a reserved namespace in javascript (this change exists to circumvent that).
* When referencing file assets using the *a* or *img* tag, get used to pointing them using the CommonJS syntax *require()*.  For example:

```
#!js
<a href="{require('./path/to/download.pdf')}>Download Link</a>
<img src="{require('./path/to/image.jpg')" />
```
Referencing the image assets should be relative to the file invoking this and webpack should be able to handle the links automatically.