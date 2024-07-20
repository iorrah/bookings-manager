# Booking Manager

This application enables users to create, read, edit and delete property bookings. The interface is fully responsive and adapts to all screen sizes.

## Instalation

```js
npm install
npm run dev
```

## Architecture

The diagram bellow gives an overview on how the component tree integrates. Currently we have a significant amount of Business Logic across the Model, Controller and View Layers. Limiting this logic to abstract layers would be beneficial for the maintainability and scalability of the application.

![Document Image](docs/architecture/general.jpg)

Context Providers are being used as a Global Data Store for Bookings and Properties. The providers integrate with all the component layers and offer data and management actions that automatically synchronizes across the entire application.

| Data Provider                                          | Data Lifecycle                                     |
| ------------------------------------------------------ | -------------------------------------------------- |
| ![Document Image](docs/architecture/data-provider.jpg) | ![Document Image](docs/architecture/lifecycle.jpg) |

## Technologies

- This project was created using Vite + SWC as Frontend Tooling and serving/building engines.
- React was used for rapid interface and state management.
- TypeScript was used for safe data typing.
- TailwindCSS was used for layout structure and styling.

## UX/UI Project

The project consists of a single page where all the management operations can be performed without the need for redirection in order to reduce loading time friction and increase productivity.

### Wireframes

See Wireframes below for reference on idealization concepts:

#### Booking Cretor

![Document Image](docs/booking-creator.png)

#### Booking Editor

| Mobile                                             | Desktop                                    |
| -------------------------------------------------- | ------------------------------------------ |
| ![Document Image](docs/mobile-booking-details.png) | ![Document Image](docs/booking-editor.png) |

#### Bookings List

| Mobile                                           | Desktop                                    |
| ------------------------------------------------ | ------------------------------------------ |
| ![Document Image](docs/mobile-bookings-list.png) | ![Document Image](docs/booking-editor.png) |

#### Filtering

![Document Image](docs/filters.png)

#### Empty State

![Document Image](docs/empty-state.png)

### Screen Shots

See below screen shots taken from the working application:

#### Booking Creator

| Mobile                                                    | Desktop                                                 |
| --------------------------------------------------------- | ------------------------------------------------------- |
| ![Document Image](docs/screenshots/m-booking-creator.png) | ![Document Image](docs/screenshots/booking-creator.png) |

#### Booking Editor

| Mobile                                                   | Desktop                                                |
| -------------------------------------------------------- | ------------------------------------------------------ |
| ![Document Image](docs/screenshots/m-booking-editor.png) | ![Document Image](docs/screenshots/booking-editor.png) |

#### Booking List

| Mobile                                                 | Desktop                                                |
| ------------------------------------------------------ | ------------------------------------------------------ |
| ![Document Image](docs/screenshots/m-booking-list.png) | ![Document Image](docs/screenshots/booking-editor.png) |

## Branding

The chosen identity is primarily functional. It enables highlighting core elements on the interface without being misleading or confusing.

- Primary color: `#2563EB`
- Font Family: `Inter Variable`

See some examples of logo usage below:

![Document Image](docs/branding.png)
