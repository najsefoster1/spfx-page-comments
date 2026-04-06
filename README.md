# SPFx Page Comments Web Part

A reusable SharePoint Framework (SPFx) web part that enables users to add comments, reply to specific comments, and allows admins to archive comments to keep pages clean and manageable.

This solution enhances collaboration directly on SharePoint pages while maintaining structure, control, and a clean user experience. It is designed to be lightweight, reusable, and easy to maintain across different sites.

---

## Features

* Page-specific comments tied to the current page URL
* Threaded replies linked to individual comments
* Admin-only archive functionality
* Automatic hiding of archived comments
* THC-themed styling (maroon, gold, clean UI)
* Simple SharePoint list-backed architecture

---

## Screenshots

<p align="center">
  <img src="assets/page-comments.png" width="800"/>
</p>

---

## SharePoint List Setup

Create a SharePoint list with the exact name:

Page Comments

IMPORTANT:
The list name must match exactly what is defined in the code.
If you use a different name, update `CommentService.ts` accordingly.

---

### Required Columns

| Column Name     | Type                   | Required Settings              | Purpose                          |
| --------------- | ---------------------- | ------------------------------ | -------------------------------- |
| Title           | Single line of text    | Keep default                   | Used internally by SharePoint    |
| CommentText     | Multiple lines of text | **Plain text (NOT rich text)** | Stores the comment content       |
| PageUrl         | Single line of text    | Required                       | Links comments to a page         |
| ParentCommentID | Number                 | Required                       | Links replies to parent comments |
| IsArchived      | Yes/No                 | Default = No                   | Controls visibility              |
| ArchivedDate    | Date and Time          | Optional                       | Tracks archive time              |

---

### Critical Requirements

* Column names must match **exactly**

  * Example: `ParentCommentID` (NOT Parent Comment ID)
* `PageUrl` is REQUIRED — without it, comments will not load correctly
* `CommentText` must be set to **Plain text**
* The list must exist before the web part will function

---

## How It Works

### Comments

Users submit comments tied to the current page. Only comments for that specific page will display.

Comments are filtered using the current page URL:

window.location.pathname

---

### Replies

Replies are linked using the `ParentCommentID` field, allowing threaded conversations under each comment.

---

### Archiving

Only admins (Site Owners or Site Admins) can see the Archive option.

When a comment is archived:

* `IsArchived` is set to true
* `ArchivedDate` is recorded
* The comment is automatically hidden from the page

---

## Deployment (SPFx)

### Build the solution

Run the following in your project folder:

npx heft build --production
npx heft package-solution --production

---

### Upload to SharePoint App Catalog

1. Go to **Apps for SharePoint**
2. Upload the `.sppkg` file from:

sharepoint/solution/

3. Click **Deploy**

---

### Add to a SharePoint Page

1. Edit a SharePoint page
2. Add the web part:
   Page Comments
3. Publish the page

---

## Development

To run locally:

npx heft start

Then open your SharePoint page or workbench to test changes.

---

## Tech Stack

* SharePoint Framework (SPFx)
* React
* TypeScript
* PnPjs
* Fluent UI

---


## Screenshots

![Page Comments Web Part](/page-comments.png)




---
## Future Enhancements

* Pin important comments
* Load more / pagination
* Automatic archiving via Power Automate
* @mentions and notifications
* Rich text (controlled formatting)
* Enhanced UI interactions

---

## Author

Najse Foster
https://github.com/najsefoster1
