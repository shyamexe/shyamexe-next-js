export const items = [
  {
    id: "secureDocs",
    title: `"Easily Organize and Manage Your Files, Offline"`,
    subtitle: "This app leverages Android\'s modern folder structure and the Storage Access Framework (SAF) API to streamline file and folder management on your device. It simplifies tasks like viewing, organizing, editing, moving, and sharing files, making file management effortless and efficient.",
    details: "This App is available on Play Store",
    link: "https://play.google.com/store/apps/details?id=com.shyamexe.securedocs",
    tag: "@playstore",
    img:"/github.png",
    md:`# SecureDocs Manager: Easily Organize and Manage Your Files, Offline

### SecureDocs Manager is the most secure and convenient way to store and manage your files, offline. With SecureDocs Manager, you can:

- Store your sensitive documents, images, and videos in a secure vault that is protected by military-grade encryption.
- Easily organize and manage your files with powerful search and filtering features.
- Share files with others securely and easily.
- Download files for offline access.
- Add a lock to any file to prevent unauthorized access.

### SecureDocs Manager is the perfect app for anyone who needs to store and manage their files securely, whether they are on the go or at home.

## Features:

- Offline secure file storage: Store your files securely in a vault that is protected by military-grade encryption, even when you don't have an internet connection.
- All-in-one file management solution: Easily organize and manage your files with powerful search and filtering features.
- Secure file sharing: Share files with others securely and easily.
- Offline file access: Download files for offline access, so you can work on them even when you don't have an internet connection.
- File locking: Add a lock to any file to prevent unauthorized access.

## Benefits:

- Keep your files safe and secure: SecureDocs Manager uses military-grade encryption to protect your files from unauthorized access, even if your device is lost or stolen.
- Easily manage your files: SecureDocs Manager makes it easy to organize and manage your files, so you can find what you need quickly and easily.
- Share files securely: SecureDocs Manager makes it easy to share files with others securely, so you can collaborate on projects or send important documents without worrying about them falling into the wrong hands.
- Access your files offline: SecureDocs Manager lets you download files for offline access, so you can work on them even when you don't have an internet connection.
- Prevent unauthorized access: SecureDocs Manager lets you add a lock to any file to prevent unauthorized access, so you can be sure that your sensitive files are safe.

Download SecureDocs Manager today and start storing and managing your files securely!
## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://docs.flutter.dev/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://docs.flutter.dev/cookbook)

For help getting started with Flutter development, view the
[online documentation](https://docs.flutter.dev/), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

    `
   
  },
  {
    id: "bricks",
    title: `"Mason reusable bricks for efficient project scaffolding for Flutter."`,
    subtitle: "Streamline Flutter project setup and expansion with Mason Bricks: a collection of reusable templates and generators for efficient code scaffolding",
    details: "This template is available on Github",
    link: "https://github.com/shyamexe/bricks-cli",
    tag:"@github",
    img:"/github.png",
    md:`# Mason bricks 🧱

[Mason](https://pub.dev/packages/mason_cli) reusable bricks for efficient project scaffolding.

## Getting started 🚀

### Adding a brick 🧱️

To add a brick, you have a few options:

\`\`\`sh
# 🎯 Activate Mason CLI (if not done already):

dart pub global activate mason_cli
\`\`\`
\`\`\`sh
# Add a brick from a Git URL:

mason add <BRICK_NAME> --git-url https://github.com/shyamexe/bricks-cli --git-path path/to/<BRICK_NAME>
\`\`\`
\`\`\`sh
# Add a brick globally from a Git URL:

mason add -g <BRICK_NAME> --git-url https://github.com/shyamexe/bricks-cli --git-path path/to/<BRICK_NAME>
\`\`\`
\`\`\`sh
# For instance, to add the flutter-package brick:

mason add -g flutter-template --git-url https://github.com/shyamexe/bricks --git-path flutter-template
\`\`\`

## Available Bricks ✨

| name                                       | description                                                                 |
| ------------------------------------------ | --------------------------------------------------------------------------- |
| [\`flutter-package\`](https://github.com/shyamexe/bricks-cli/tree/main/flutter-template) | Create a new Flutter project with basic structure|
| [\`bloc\`](https://github.com/shyamexe/bricks-cli/tree/main/bloc) | Generate a new Bloc|
| [\`cubit\`](https://github.com/shyamexe/bricks-cli/tree/main/cubit) | Generate a new Cubit|
| [\`feature-block\`](https://github.com/shyamexe/bricks-cli/tree/main/feature-block) | Generate a new module block|


### flutter-template  Brick Installation 

\`\`\`sh
# Add flutter-template from GitHub
mason add -g flutter-template --git-url https://github.com/shyamexe/bricks --git-path flutter-template

# List all globally installed bricks
mason ls -g

# Generate code using the brick
mason make flutter-template

# Remove the brick (global)
mason remove -g flutter-template

\`\`\`

### bloc/cubit Installation 

\`\`\`sh
# Globally add cubit brick from GitHub
mason add -g cubit --git-url https://github.com/shyamexe/bricks --git-path cubit

# Generate a new Cubit
mason make cubit --name counter --style equatable

\`\`\`
#### To load the brick inside your project:

1 Create mason/mason.yaml in your project root:

\`\`\`yaml
bricks:
  cubit:
    git:
      url: https://github.com/shyamexe/bricks-cli.git
      path: cubit

\`\`\`

2 Run the following commands:

\`\`\`sh
mason get

mason make cubit -o ..\Yoru\output\folder\  --name counter --style equatable
\`\`\`

    `
  },
  {
    id: "scrollableTabBar",
    title: `"This package provides a vertical scrollable tab bar widget"`,
    subtitle: "Streamline Flutter project setup and expansion with Mason Bricks: a collection of reusable templates and generators for efficient code scaffoldingThis Flutter package provides a vertical scrollable tab bar widget that allows you to display resizable tabs",
    details: "This package available on pub.dev",
    link: "https://pub.dev/packages/scrollable_tab_view",
    tag:"@pub.dev",
    img:"/dart.png",
    md:`# scrollable_tab_view 
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-) 
[![pub package](https://img.shields.io/pub/v/scrollable_tab_view.svg)](https://pub.dartlang.org/packages/scrollable_tab_view)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This Flutter package provides a vertical scrollable tab bar widget that allows you to display resizable tabs

### Demo


 ![Image 3](https://github.com/shyamexe/scrollable_tab_view/assets/93277108/7ffe8424-097a-4b4c-8d8d-1dc62ce93448) 

## Installation

Add this to your\`pubspec.yaml\` file:

\`\`\`yaml
dependencies:
  scrollable_tab_view: <latest-version>
\`\`\`

## Installation

Import the package in your Dart file:

\`\`\`yaml
import 'package:scrollable_tab_view/scrollable_tab_view.dart';

\`\`\`

## Usage

The ScrollableTab widget allows you to create a tab bar with scrollable tabs without using a controller.

\`\`\`dart
ScrollableTab(
  labelColor: Colors.black,
  tabs: List.generate(
      5,
      (index) => Tab(
            text: 'index $index',
          )),
  children: List.generate(
      5,
      (index) => ListTile(
            title: Center(
              child: Text(
                'tab Number $index',
                style: Theme.of(context)
                    .textTheme
                    .labelLarge!
                    .copyWith(fontSize: 20.0 + (30 * index)),
              ),
            ),
          )),
),

\`\`\`

The ScrollableTabBar and ScrollableTabViewWithController widgets allow you to create a tab bar with scrollable tabs using a TabController.

\`\`\`dart
Column(
  children: [

    ScrollableTabBar(
      labelColor: Colors.black,
      controller: controller,
      tabs: List.generate(
          5,
          (index) => Tab(
                text: 'index $index',
              )),
    ),
    ScrollableTabViewWithController(
      controller: controller,
      children: List.generate(
          5,
          (index) => ListTile(
                title: Center(
                  child: Text(
                    'tab Number $index',
                    style: Theme.of(context)
                        .textTheme
                        .labelLarge!
                        .copyWith(fontSize: 20.0 + (30 * index)),
                  ),
                ),
              )),
    )
  ],
),
\`\`\`

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
   
`
  },
  {
    id: "dictionary",
    title: `"Simple dictionary app in flutter using bloc pattern"`,
    subtitle: "This is a dictionary app built with flutter using the bloc pattern. It uses the Dictionary API and Datamuse API to fetch data. The app has features like audio pronunciation, synonyms, antonyms, examples and share options. It also has a dark mode feature",
    details: "This app is available on Github",
    link:"https://github.com/shyamexe/Dictionary_app_flutter_using_bloc",
    tag:"@github",
    img:"/github.png",
    md:`## About

This is a dictionary app built with flutter using the bloc pattern. It uses the Dictionary API and Datamuse API to fetch data. The app has features like audio pronunciation, synonyms, antonyms, examples and share options. It also has a dark mode feature.

- [live link(WEB)](https://one-dictionary.web.app)


## Packages we are using

- [hive](https://pub.dev/packages/hive)
- [audioplayers](https://pub.dev/packages/audioplayers)
- [equatable](https://pub.dev/packages/equatable)
- [bloc](https://pub.dev/packages/bloc)
- [lottie](https://pub.dev/packages/lottie)
- [http](https://pub.dev/packages/http)
- [share_plus](https://pub.dev/packages/share_plus)
- [flutter_native_splash](https://pub.dev/packages/flutter_native_splash)

## Used API's

- [Dictionary API](https://dictionaryapi.dev/)
- [Datamuse API](https://www.datamuse.com/api/)

## Screenshots

![Image 1](https://user-images.githubusercontent.com/93277108/215252832-4c97c09a-cfa0-451d-bec7-9f0067f860c1.gif) ![Image 2](https://user-images.githubusercontent.com/93277108/215252874-d6b902b8-9ace-41ac-947b-8c2b00e58d68.gif) ![Image 3](https://user-images.githubusercontent.com/93277108/215252936-a8b7cfe8-65c3-4822-97e0-807ebc22bb85.gif) ![Image 4](https://user-images.githubusercontent.com/93277108/215252979-613061ba-0738-4322-8898-184c4f5b1578.gif)


## Getting Started

1. Make sure you have the latest version of Flutter installed on your computer. You can download it [here](https://docs.flutter.dev/get-started/install).

2. Fork the repository to your GitHub account:
  - Go to the [project repository](https://github.com/shyamexe/Dictionary_app_flutter_using_bloc) on GitHub.
  - Click the "Fork" button in the top right corner of the page. This will create a copy of the repository under your GitHub account.

3. Clone the repository to your local machine:

\`\`\`
git clone https://github.com/<your-username>/projectname.git
\`\`\`

4. Navigate to the project directory:

\`\`\`
cd projectname
\`\`\`

5. Run the app on an emulator or device:

\`\`\`
flutter run
\`\`\`
6. Enjoy the app!


## Contributing

1. Create a new branch for your changes:

\`\`\`
git checkout -b my-new-feature
\`\`\`

2. Make your changes and commit them:

\`\`\`
git commit -am "Add new feature"
\`\`\`

3. Push the branch to your fork:

\`\`\`
git push origin my-new-feature
\`\`\`

4. Open a pull request on the [original repository](https://github.com/shyamexe/Dictionary_app_flutter_using_bloc) for the changes to be reviewed and potentially merged.

Note: If you encounter any issues or have questions, feel free to open an issue on the GitHub repository.

You can also use Github UI for forking by simply clicking on fork button.

<!-- A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://flutter.dev/docs/cookbook)

For help getting started with Flutter, view our
[online documentation](https://flutter.dev/docs), which offers tutorials,
samples, guidance on mobile development, and a full API reference. -->

    `
    
  },
  {
    id: "eCommerce",
    title: `"Simple E-commerce app in flutter using bloc pattern"`,
    subtitle: "This is a dictionary app built with flutter using the bloc pattern. It uses the Dictionary API and Datamuse API to fetch data. The app has features like audio pronunciation, synonyms, antonyms, examples and share options. It also has a dark mode feature",
    details: "This app available on Github",
    link:"https://github.com/sajithlaldev/Admin-Dashbord-Demo",
    tag:"@github",
    img:"/github.png",
    md:`
    # Admin-Dashbord-Demo

## URL https://sajithlaldev.github.io/Admin-Dashbord-Demo/
test no.9999111111
otp 123456

    `
  },
  {
    id: "weather",
    title: `"A simple weather app built with Flutter"`,
    subtitle: "This is a simple weather app built with Flutter that displays the current weather for a given location. The app uses the weatherapi.com API to fetch the weather data and displays it in a user-friendly interface.",
    details: "This app available on github",
    link:"https://github.com/shyamexe/weather_app",
    tag:"@github",
    img:"/github.png",
    md:`# Weather App

This is a simple weather app built with Flutter that displays the current weather for a given location. The app uses the weatherapi.com API to fetch the weather data and displays it in a user-friendly interface.



## Getting Started

This project is a starting point for a Flutter application that follows the
[simple app state management
tutorial](https://flutter.dev/docs/development/data-and-backend/state-mgmt/simple).

For help getting started with Flutter development, view the
[online documentation](https://flutter.dev/docs), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

\`Note: You'll need to provide your own weatherapi.com API key in order to fetch weather data. To do this, create a .env file in the root directory of the project and add the following line:\`

![image](https://user-images.githubusercontent.com/93277108/232664462-03bca1f6-9e03-490e-9ea3-0256ca1e68cf.png)

![image](https://user-images.githubusercontent.com/93277108/232664671-50b96a09-caee-40a7-bf96-7b482e599c56.png)



## Screenshots

Here are some screenshots of the app:



![screenshot 1](https://user-images.githubusercontent.com/93277108/232668646-1d177a6f-c0f4-47ad-8c0c-173428c43e4c.png)
![screenshot 2](https://user-images.githubusercontent.com/93277108/232668971-ff4092fa-a807-4539-ac73-d6b1d70171dc.png)

## Assets

The \`assets\` directory houses images, fonts, and any other files you want to
include with your application.

The \`assets/images\` directory contains [resolution-aware
images](https://flutter.dev/docs/development/ui/assets-and-images#resolution-aware).

## Localization

This project generates localized messages based on arb files found in
the \`lib/src/localization\` directory.

To support additional languages, please visit the tutorial on
[Internationalizing Flutter
apps](https://flutter.dev/docs/development/accessibility-and-localization/internationalization)

    `
  },
  {
    id: "mPagination",
    title: `"MaterialPagination is a customizable and flexible pagination widget for Flutter applications"`,
    subtitle: "MaterialPagination is a customizable and flexible pagination widget for Flutter applications. It allows you to easily create pagination controls with numbered page buttons, next/previous arrows, and extensive customization options.",
    details: "This package available on pub.dev",
    tag:"@pub.dev",
    link:"https://pub.dev/packages/material_pagination",
    img:"/dart.png",
    md:`# Material Pagination

[![Pub Version](https://img.shields.io/pub/v/material_pagination.svg)](https://pub.dev/packages/material_pagination)
[![Build Status](https://img.shields.io/github/actions/workflow/status/shyamexe/material_pagination/main.yml)](https://github.com/shyamexe/material_pagination/actions)

MaterialPagination is a customizable and flexible pagination widget for Flutter applications. It allows you to easily create pagination controls with numbered page buttons, next/previous arrows, and extensive customization options.

## Screenshots
 
  ![Image 1](https://raw.githubusercontent.com/shyamexe/material_pagination/master/screenshots/1.png)
  ![Image 2](https://raw.githubusercontent.com/shyamexe/material_pagination/master/screenshots/image.png)
  ![Image 3](https://raw.githubusercontent.com/shyamexe/material_pagination/master/screenshots/3.png)
 

## Features

- Customizable page buttons, including their size, style, and color.
- Previous and Next navigation arrows.
- Supports any number of pages with a configurable visible page range.
- Darken effect for the active page.
- Callback for page changes.
- Flexibility to adapt to various designs and themes.

## Installation

Add the following to your \`pubspec.yaml\`:

\`\`\`yaml
dependencies:
  material_pagination: ^1.0.0
\`\`\`

Then, run:

\`\`\`bash
flutter pub get
\`\`\`

## Usage

### Basic Example

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:material_pagination/material_pagination.dart';

class PaginationExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Pagination Example')),
      body: Center(
        child: MaterialPagination(
          currentPage: 1,
          totalPages: 10,
          onPageChanged: (page) {
            print('Page \$page selected');
          },
          visiblePageCount: 5,
          activeColor: Colors.blue,
          inactiveColor: Colors.grey,
          fontStyle: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
        ),
      ),
    );
  }
}
\`\`\`

## Parameters

| Parameter                   | Type                     | Description                                                                                             | Default         |
| ----------------------------| ------------------------ | ------------------------------------------------------------------------------------------------------- | --------------- |
| \`currentPage\`                | \`int\`                    | The current active page number.                                                                         | \`1\`             |
| \`totalPages\`                 | \`int\`                    | The total number of pages available.                                                                    | Required        |
| \`onPageChanged\`              | \`Function(int page)\`     | Callback when a page number or next/previous arrow is pressed.                                           | Required        |
| \`visiblePageCount\`           | \`int\`                    | Number of page buttons visible at one time.                                                             | \`5\`             |
| \`activeColor\`                | \`Color\`                  | The color of the active (selected) page button.                                                         | \`Colors.blue\`   |
| \`inactiveColor\`              | \`Color\`                  | The color of the inactive (non-selected) page buttons.                                                   | \`Colors.grey\`   |
| \`fontStyle\`                  | \`TextStyle?\`             | The text style for the page numbers.                                                                    | Default         |
| \`buttonSize\`                 | \`double\`                 | The size of each page number button.                                                                     | \`32.0\`          |
| \`iconSize\`                   | \`double\`                 | The size of the arrow icons.                                                                             | \`12.0\`          |
| \`iconGap\`                    | \`double\`                 | The gap between page buttons and next/previous icons.                                                    | \`4.0\`           |
| \`borderRadius\`               | \`double\`                 | The border radius for the page number buttons and icons.                                                 | \`8.0\`           |
| \`colorDarkness\`              | \`double\`                 | Value between 0 and 1 to adjust the darkness of the active page's button border.                         | \`0.3\`           |

## Advanced Example

\`\`\`dart
MaterialPagination(
  currentPage: 3,
  totalPages: 15,
  onPageChanged: (page) {
    setState(() {
      _currentPage = page;
    });
  },
  visiblePageCount: 7,
  activeColor: Colors.green,
  inactiveColor: Colors.grey,
  fontStyle: TextStyle(fontSize: 14, fontWeight: FontWeight.w500),
  buttonSize: 40.0,
  borderRadius: 10.0,
)
\`\`\`

## Customization

### Custom Button Style

You can fully customize the appearance of the page buttons by modifying the \`fontStyle\`, \`activeColor\`, \`inactiveColor\`, and other related properties. 

\`\`\`dart
MaterialPagination(
  currentPage: 1,
  totalPages: 20,
  onPageChanged: (page) {
    print('Page \$page selected');
  },
  fontStyle: TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: Colors.white),
  activeColor: Colors.orange,
  inactiveColor: Colors.black,
  buttonSize: 30.0,
)
\`\`\`

### Next/Previous Buttons

This widget also supports next and previous arrow buttons to easily navigate between pages.

\`\`\`dart
MaterialPagination(
  currentPage: 5,
  totalPages: 50,
  onPageChanged: (page) {
    print('Page \$page selected');
  },
  iconSize: 16.0,
  iconGap: 8.0,
)
\`\`\`

## Running Tests

You can run tests by using the Flutter testing framework:

\`\`\`bash
flutter test
\`\`\`

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.`

  },
  
];