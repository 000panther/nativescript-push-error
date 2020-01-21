// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";

import { enable, disable, isEnabled, categories, setCategories, addCategories, write, isCategorySet } from "tns-core-modules/trace";

setCategories(categories.concat(
    categories.Binding,
    categories.Debug,
    categories.Error,
    categories.NativeLifecycle,
));
enable();

// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.

require("nativescript-plugin-firebase");

console.log('bootstrapping module');



platformNativeScriptDynamic().bootstrapModule(AppModule);
