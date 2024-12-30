/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SummaryImport } from './routes/summary'
import { Route as SuccessImport } from './routes/success'
import { Route as PaintImport } from './routes/paint'
import { Route as DriveImport } from './routes/drive'
import { Route as BodyTypeImport } from './routes/body-type'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const SummaryRoute = SummaryImport.update({
  id: '/summary',
  path: '/summary',
  getParentRoute: () => rootRoute,
} as any)

const SuccessRoute = SuccessImport.update({
  id: '/success',
  path: '/success',
  getParentRoute: () => rootRoute,
} as any)

const PaintRoute = PaintImport.update({
  id: '/paint',
  path: '/paint',
  getParentRoute: () => rootRoute,
} as any)

const DriveRoute = DriveImport.update({
  id: '/drive',
  path: '/drive',
  getParentRoute: () => rootRoute,
} as any)

const BodyTypeRoute = BodyTypeImport.update({
  id: '/body-type',
  path: '/body-type',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/body-type': {
      id: '/body-type'
      path: '/body-type'
      fullPath: '/body-type'
      preLoaderRoute: typeof BodyTypeImport
      parentRoute: typeof rootRoute
    }
    '/drive': {
      id: '/drive'
      path: '/drive'
      fullPath: '/drive'
      preLoaderRoute: typeof DriveImport
      parentRoute: typeof rootRoute
    }
    '/paint': {
      id: '/paint'
      path: '/paint'
      fullPath: '/paint'
      preLoaderRoute: typeof PaintImport
      parentRoute: typeof rootRoute
    }
    '/success': {
      id: '/success'
      path: '/success'
      fullPath: '/success'
      preLoaderRoute: typeof SuccessImport
      parentRoute: typeof rootRoute
    }
    '/summary': {
      id: '/summary'
      path: '/summary'
      fullPath: '/summary'
      preLoaderRoute: typeof SummaryImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/body-type': typeof BodyTypeRoute
  '/drive': typeof DriveRoute
  '/paint': typeof PaintRoute
  '/success': typeof SuccessRoute
  '/summary': typeof SummaryRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/body-type': typeof BodyTypeRoute
  '/drive': typeof DriveRoute
  '/paint': typeof PaintRoute
  '/success': typeof SuccessRoute
  '/summary': typeof SummaryRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/body-type': typeof BodyTypeRoute
  '/drive': typeof DriveRoute
  '/paint': typeof PaintRoute
  '/success': typeof SuccessRoute
  '/summary': typeof SummaryRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/body-type' | '/drive' | '/paint' | '/success' | '/summary'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/body-type' | '/drive' | '/paint' | '/success' | '/summary'
  id:
    | '__root__'
    | '/'
    | '/body-type'
    | '/drive'
    | '/paint'
    | '/success'
    | '/summary'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BodyTypeRoute: typeof BodyTypeRoute
  DriveRoute: typeof DriveRoute
  PaintRoute: typeof PaintRoute
  SuccessRoute: typeof SuccessRoute
  SummaryRoute: typeof SummaryRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BodyTypeRoute: BodyTypeRoute,
  DriveRoute: DriveRoute,
  PaintRoute: PaintRoute,
  SuccessRoute: SuccessRoute,
  SummaryRoute: SummaryRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/body-type",
        "/drive",
        "/paint",
        "/success",
        "/summary"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/body-type": {
      "filePath": "body-type.tsx"
    },
    "/drive": {
      "filePath": "drive.tsx"
    },
    "/paint": {
      "filePath": "paint.tsx"
    },
    "/success": {
      "filePath": "success.tsx"
    },
    "/summary": {
      "filePath": "summary.tsx"
    }
  }
}
ROUTE_MANIFEST_END */