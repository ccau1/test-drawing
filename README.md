# Test - Drawing

This is a test project to illustrate my capability in designing a scalable, object-oriented SOLID design in a real life scenario. The reason for making classes to handle the core functionality is to maintain a separation of concern between features and platform. It utilizes a command pattern along with the Canvas class encapsulation to maximize future scalability and obscurity.

## Run Installation

running the below installs both library and example dependency packages. This command will also protect versioning in library packages.

`yarn i`

## Run Test

This will run a coverage test on the /src folder using the jest library.

`yarn test`

## Run Example

Our running example lives in the example folder. This way, we can build and publish our canvas as a library. Although this exercise does not require a framework like React, it is used in example to demonstrate how it can be used in a framework.

`yarn example`

## Commands

---

| command   | arguments   | description                                                                                                                                                               |
| --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| c, create | w h         | create a new canvas of width w and height h                                                                                                                               |
| l, line   | x1 y1 x2 y2 | create a new line from (x1,y1) to (x2,y2). Currently only horizontal or vertical lines are supported. Horizontal and vertical lines will be drawn using the 'x' character |
| R, rect   | x1 y1 x2 y2 | create a new rectangle, whose upper left corner is (x1,y1) and lower right corner is (x2,y2). Horizontal and vertical lines will be drawn using the 'x' character         |
| B, fill   | x y c       | fill the entire area connected to (x,y) with "colour" c. The behavior of this is the same as that of the "bucket fill" tool in paint programs                             |
| Q, quit   |             | quit the program                                                                                                                                                          |
