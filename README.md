# St. Elizabeth School Website

A static school website built for Cloudflare Pages.

## Files
- index.html
- styles.css
- script.js

## Deploy to Cloudflare Pages
1. Push this folder to a GitHub repository.
2. Sign in to Cloudflare.
3. Go to Pages > Create a project > Connect to Git.
4. Select the repository.
5. Set:
   - Framework preset: None
   - Build command: leave empty
   - Build output directory: .
6. Click Save and Deploy.

## Custom domain
After deployment, add a custom domain such as:
- www.stelizabethschools.com

## Enquiry flow
The admissions form captures a parent's contact details, the learner's grade, and the type of update requested. It opens one WhatsApp or email draft, or the phone dialer, using the school's currently listed office contacts. The parent must review and send the message themselves.

This is a static website, not a school information system: it does not submit, store, retrieve, or authenticate fee balances or performance records. Do not collect or share student account balances, marks, or sensitive documents through the form. The school secretary should verify the parent's/guardian's identity and use a school-approved private channel to share records.

## Published fee structures
The website displays the termly charges transcribed from the supplied primary/junior and senior school fee statements and links to each original PDF. Individual student balances are not published.

## School handover checklist
- [ ] Confirm that the listed secretary and director contact details are current and monitored.
- [ ] Confirm the school's approved process for verifying a parent/guardian before sharing fee or performance information.
- [ ] Confirm the displayed fee amounts and payment details with school management before publishing. Do not publish individual student balances or reports.
- [ ] Review the school facts, dates, performance claims, contact names, and photos for accuracy and permission to publish.
- [ ] Test the WhatsApp, email, and phone options on a mobile device and confirm each opens only the intended school contact route.
- [ ] Review the deployed site and privacy wording with school management before publishing.

The current folder is not initialized as a Git repository. Initialize or connect the project to the school's repository before creating a commit.
