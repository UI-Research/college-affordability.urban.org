# EDITING #

## General ##

The site is made up of pages and components.  As an editor, you will mostly edit files within the /pages directory and point to elements within components to simplify certain content entry.

### Creating a page ###

#### Site structure ####

Pages are organized by directories.  When developing, your site structure should look similar to the following:

- page1/
-- page1/page1.jsx
-- page1/page1.scss
- page2/
-- page2/page2.jsx
-- page2/page2.scss
- page3/
-- page3/page3.jsx
-- page3/page3.scss

When gulp compiles all the assets, they will be transformed to a setup that is production-friendly, similar to the following:

- page1/
-- page1/index.html
- page2/
-- page2/index.html
- page3/
-- page3/index.html

This will allow us to have URLs like urban.com/page1 and urban.com/page2 (a bit cleaner than urban.com/page1.html).

#### Adding new page ####

Within /pages, there is a boilerplate directory called __TEMPLATE__ that you may use as a starting point for your pages.  Copy and rename the directory to allow gulp to track the new changes.  Refer to the guidelines commented within those files.

### Adding components.

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