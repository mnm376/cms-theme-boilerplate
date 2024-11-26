<h1 align="center">Betterment | Website Developer Position</h1>

<p align="center">
  Evaluative Exercise from Betterment
</p>

<p align="center">
  <a href="https://47980142.hs-sites.com/pricing">Pricing Page Preview</a>
</p>


## Exercise Details
Github: https://github.com/mnm376/cms-theme-boilerplate

Page Preview: https://47980142.hs-sites.com/pricing

Modules Created/Used: pricing-module, pricing-card

ReadMe Used: [Boilerplate Readme](Boilerplate-README.md)

### Issues
- Local cli development (had trouble having a local db to run out of, so I kept making edits on design manager)
- Not being able to call modules within modules
- Not being able to use a grouped repeater within a module, wanted to make one module hold all the info
- Group fields (saw this feature at the end, this would clean up all of the above by making the entire thing one module instead of a title and a separate card module, can speak to this)
- Not being able to add classes to sections

### Notes
- Removed header css because mockup didn’t have it
- Added “moh-“ to the class names to not interfere with any existing css classes hub spot may have for these class names (e.g. “.card”)
- Hardcoded url path for li icon because of time
- Added js to even out moh-card_product height to make sure hr tags were lined up
- Certain texts are a few pixels off in size because the fonts for GT America downloaded from online aren’t an exact match to the one in the design (e.g. the features list)
- Used 964px as tablet breakpoint instead of 963px


### Things I would/should have done:
- Add pricing localization
- Use scss for readability
- Create reset.css
- Make pull requests off a branch then pull to main
- Ask design team how they would want the cards to expand from each layout
- Made it all in a template with a group holding the fields in the modules I created and the repeater field, my issue was that I only found the grouping feature at the end which would have solved my issue of not having repeater fields for the product-cards
- Most of my time went to hubspot local setup because I wanted to run it fully locally and run commits as I go. Unfortunately I spent too much time on that.
- And leveraging any feature I didn't realize hubspot had