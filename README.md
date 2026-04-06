# SPFx Page Comments Web Part

A reusable SharePoint Framework (SPFx) web part that enables users to add comments, reply to specific comments, and allows admins to archive comments to keep pages clean and manageable.

This solution enhances collaboration directly on SharePoint pages while maintaining structure, control, and a clean user experience. It is designed to be lightweight, reusable, and easy to maintain across different sites.

---

## Features

* Page-specific comments tied to the current page URL
* Threaded replies linked to individual comments
* Admin-only archive functionality
* Automatic hiding of archived comments
* Clean THC-inspired styling (maroon, gold, and neutral tones)
* Simple SharePoint list-backed architecture

---

## SharePoint List Setup

Create a SharePoint list with the exact name:

Page Comments

The web part depends on this list structure to function correctly.

### Required Columns

* **Title**
  Type: Single line of text
  Notes: Keep the default column (used internally)

* **CommentText**
  Type: Multiple lines of text
  Important: Must be set to **Plain text** (not rich text)

* **PageUrl**
  Type: Single line of text
  Purpose: Associates comments to a specific SharePoint page

* **ParentCommentID**
  Type: Number
  Purpose: Links replies to their parent comment

* **IsArchived**
  Type: Yes/No
  Default: No
  Purpose: Controls whether a comment is visible

* **ArchivedDate**
  Type: Date and Time
  Purpose: Stores when a comment was archived

---

## Important Notes

* Column names must match exactly (especially `ParentCommentID`)
* `CommentText` must be plain text or HTML will display incorrectly
* The list must exist before the web part will function
* Archiving does not delete comments — it simply hides them from the page

---

## How It Works

### Comments

Users can submit comments tied to the current page. Only comments for that specific page will display.

### Replies

Replies are linked using the `ParentCommentID` field, allowing threaded conversations under each comment.

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
