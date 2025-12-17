# 🦍 React TS routing

Ett bra routing-bibliotek är essentiellt för alla single page applications. I denna uppgift kommer du att konfigurera routing för ditt React-projekt med biblioteket TanStack Router.

**Denna uppgift är en del i en serie uppgifter som går ut på att bygga din första React-app i TypeScript**

(Du behöver inte göra en fork eller klon av denna repo då ditt React-projekt redan skapats i en separat mapp.)

## 🎯 Delmål

## 1. 👨‍🔬 Tekniska förberedelser

- [ ] **Genomförd**

1. Öppna terminalen i ditt existerande projekt
2. Installera TanStack Router tillsammans med devtools - `npm i @tanstack/react-router @tanstack/react-router-devtools`
3. Installera tillhörande Vite plugin - `npm i -D @tanstack/router-plugin`
4. Lägg till TanStack-pluginen i `vite.config.ts` tillsammans med övriga plugins i arrayen. Det bör se ungefär såhär ut efteråt:

   **Läs först igenom kodexemplet och förstå vad som händer så att du inte riskerar att klistra in och skriva över andra plugins som du redan använder**

   ```ts
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";
   import tailwindcss from "@tailwindcss/vite";
   import { tanstackRouter } from "@tanstack/router-plugin/vite"; // <-----

   // https://vite.dev/config/
   export default defineConfig({
     plugins: [react(), tanstackRouter()], // <-----
   });
   ```

5. Skapa en mapp direkt i `src` som heter `routes`. Denna kommer troligtvis ersätta din pages-mapp om du redan har en sådan

   - Skapa filerna `__root.tsx` och `index.tsx` i mappen

6. Kör `npm run dev`. Om allt är rätt konfigurerat bör alla boilerplating-kod skapas automatiskt härifrån.
7. Säkerställ att `routeTree.gen.ts` har skapats samt att `__root.tsx` och `index.tsx` har fyllts i med kod för att skapa och exportera routes

   - Lägg till `<TanStackRouterDevtools />` bland elementen som renderas i `__roots.tsx` om du vill använda dem

8. Gå till `main.tsx` och ersätt `App` med `RouterProvider`

   - Skapa en variabel som använder funktionen `createRouter` från `@tanstack/react-router` som tar ett objekt
   - Passa in och importera variabeln `routeTree` i det här objektet.
   - Importera `RouteProvider` från `@tanstack/react-router`, passa in den som en vanlig React-komponent som ersätter `<App />` och passa variabeln som kallar på `createRouter` till propertyn `router`
   - Se kodexemplet nedan:

   ```ts
   import { StrictMode } from "react";

   import { createRoot } from "react-dom/client";
   import "./index.css";
   import { createRouter, RouterProvider } from "@tanstack/react-router";
   import { routeTree } from "./routeTree.gen.ts";

   const router = createRouter({
     routeTree,
   });

   createRoot(document.getElementById("root")!).render(
     <StrictMode>
       <RouterProvider router={router} />
     </StrictMode>
   );
   ```

## 2. Flytta över mappar och filer för att stämma överens med den nya strukturen

- [ ] **Genomförd**

`__root.tsx` är nu din nya utgångspunkt och all JSX som du skapar däri kommer alltid att vara synlig, oavsett vilken route du går till. `<Outlet />` renderar resten av innehållet specifikt för den routen du är inne på. `index.tsx` är din "startsida", därför har den routen `"/"` som du kan se i `createFileRoute("/")`.

För att skapa nya routes skapar du helt enkelt nya mappar inuti `routes` med tillhörande `index.tsx`. Samma boilerplating-kod som du såg när du körde `npm run dev` kommer skapas i varje ny fil. `routeTree.gen.ts` kommer dessutom att uppdateras för att stämma överens med den nya routen du skapat.

Alltså, vill du exempelvis ha en route som heter "todos" så skapar du en mapp med det namnet och en index-fil inuti.

## 3. Använd path params (🎁 Bonusuppgift)

- [ ] **Genomförd**

Om du t.ex. jobbar med listor/tabeller av data och vill skapa en översiktssida för varje element kan du enkelt göra detta genom att skapa en ny fil med prefixet `$` i samma mapp.

I en att göra-lista med en `/todos/` route behöver jag bara skapa filen `$todoId.tsx` (Direkt i mappen `todos`) för att dynamiskt rendera detaljsidor för varje enskild todo. Därefter kan jag använda `useParams`-metoden från `Route` och enkelt filtrera bland mina todos baserat på ID. Se kodexemplet nedan:

```ts
export const Route = createFileRoute("/todos/$todoId")({
  component: TodoIdComponent,
});

function TodoIdComponent() {
  const { todoId } = Route.useParams();
  return <div>Översikt av {todoId}</div>;
}
```
