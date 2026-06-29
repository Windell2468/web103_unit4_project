# web103_unit4_project
# WEB103 Project 4 - *Controller Forge*

Submitted by: **Jerry Rogers Jr.**

About this web app: **Controller Forge is a full-stack React web app that lets users customize a video game controller. Users can select a shell color, button style, grip style, and LED color, see a live preview, view the total price, save controllers to PostgreSQL, edit saved controllers, update controllers, and delete controllers.**

Time spent: **9** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses React to display data from the API.**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured `CustomItem` table.**
  - [ ]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [ ]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [x] **Users can view **multiple** features of the `CustomItem` (e.g. car) they can customize, (e.g. wheels, exterior, etc.)**
- [x] **Each customizable feature has multiple options to choose from (e.g. exterior could be red, blue, black, etc.)**
- [x] **On selecting each option, the displayed visual icon for the `CustomItem` updates to match the option the user chose.**
- [x] **The price of the `CustomItem` (e.g. car) changes dynamically as different options are selected *OR* The app displays the total price of all features.**
- [x] **The visual interface changes in response to at least one customizable feature.**
- [x] **The user can submit their choices to save the item to the list of created `CustomItem`s.**
- [x] **If a user submits a feature combo that is impossible, they should receive an appropriate error message and the item should not be saved to the database.**
- [x] **Users can view a list of all submitted `CustomItem`s.**
- [x] **Users can edit a submitted `CustomItem` from the list view of submitted `CustomItem`s.**
- [x] **Users can delete a submitted `CustomItem` from the list view of submitted `CustomItem`s.**
- [x] **Users can update or delete `CustomItem`s that have been created from the detail page.**


The following **optional** features are implemented:

- [ ] Selecting particular options prevents incompatible options from being selected even before form submission

The following **additional** features are implemented:

- [x] Added a live controller preview that changes color based on the selected shell color.
- [x] Added automatic price calculation based on the selected controller features.
- [x] Added required form validation for all customization fields.
- [x] Added impossible combination validation that prevents controllers with matching shell and LED colors from being saved.
- [x] Added a custom controller-themed background and user interface.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='./Project 4 - Controller Forge.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  GIF tool here
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

There was one challenge I encountered: connecting the React frontend to the Express API and PostgreSQL databases. I also worked through the issues with CORS and the database table structure. and making sure the create, read, update, and delete routes are working correctly. 

There is another challenge I have encountered when adding dynamic features: the live preview, automatic price calculation, and impossible combination validation. 

## License

Copyright [2026] [Jerry Rogers Jr.]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.